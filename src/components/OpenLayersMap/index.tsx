"use client";

import React, { useEffect, useRef } from "react";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";
import { Style, Circle, Stroke } from "ol/style";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

const ADDRESS = [35.1637435, 126.8046193] as const;
const ZOOM_LEVEL = 16 as const;

const useAddPoint = (location: [number, number], map: Map) => {
  const newLocation = transform(location.reverse(), "EPSG:4326", "EPSG:3857");

  const pointStyle = new Style({
    image: new Circle({
      radius: 10,
      stroke: new Stroke({ color: "blue", width: 3 }),
    }),
  });

  const point = new Point(newLocation);
  const pointFeature = new Feature(point);
  pointFeature.setStyle(pointStyle);

  const vectorLayer = new VectorLayer({
    source: new VectorSource({
      features: [pointFeature],
    }),
  });

  map.addLayer(vectorLayer);
};

const OpenLayersMap: React.FC = () => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapElement.current) return;

    const center = transform(
      [ADDRESS[1], ADDRESS[0]],
      "EPSG:4326",
      "EPSG:3857"
    );

    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: center,
        zoom: ZOOM_LEVEL,
      }),
    });

    useAddPoint([...ADDRESS], map);

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return <div ref={mapElement} style={{ width: "100%", height: "100%" }} />;
};

export default OpenLayersMap;
