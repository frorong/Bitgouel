"use client";

import React, { useEffect, useRef } from "react";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { transform } from "ol/proj";

import { useAddPoint } from "@/hooks";

const ADDRESS = [35.1637435, 126.8046193] as const;
const ZOOM_LEVEL = 16 as const;

const OpenLayersMap: React.FC = () => {
  const mapElement = useRef<HTMLDivElement>(null);

  const addPoint = useAddPoint();

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

    addPoint([...ADDRESS], map);

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return <div ref={mapElement} style={{ width: "100%", height: "100%" }} />;
};

export default OpenLayersMap;
