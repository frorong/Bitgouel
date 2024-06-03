import { Style, Circle, Stroke } from "ol/style";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Icon, Text, Fill } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { transform } from "ol/proj";
import Map from "ol/Map";

const useAddPoint = () => {
  const addPoint = (location: [number, number], map: Map) => {
    const newLocation = transform(location.reverse(), "EPSG:4326", "EPSG:3857");

    const textStyle = new Text({
      text: "빛고을국민체육센터",
      font: "bold 1.25rem Arial",
      fill: new Fill({
        color: "black",
      }),
      stroke: new Stroke({
        color: "white",
        width: 2,
      }),
      offsetY: -15,
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: "https://openlayers.org/en/v4.6.5/examples/data/icon.png",
      }),
      text: textStyle,
    });

    const point = new Point(newLocation);
    const pointFeature = new Feature(point);
    pointFeature.setStyle(iconStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [pointFeature],
      }),
    });

    map.addLayer(vectorLayer);
  };

  return addPoint;
};

export default useAddPoint;
