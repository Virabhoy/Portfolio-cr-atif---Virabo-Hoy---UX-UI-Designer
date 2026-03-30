"use client";

import DottedMapLib from "dotted-map";
import { useRef, useMemo } from "react";

export type Marker = {
  lat: number;
  lng: number;
  size?: number;
  pulse?: boolean;
  label?: string;
};

type DottedMapProps = {
  markers?: Marker[];
  dotColor?: string;
  markerColor?: string;
  backgroundColor?: string;
  dotRadius?: number;
  pulse?: boolean;
  className?: string;
  onMarkerClick?: (marker: Marker, index: number) => void;
  onMarkerHover?: (marker: Marker | null, index: number) => void;
  activeMarkerIndex?: number | null;
};

export function DottedMap({
  markers = [],
  dotColor = "#e2e8f0",
  markerColor = "#A790C4",
  backgroundColor = "transparent",
  dotRadius = 0.3,
  pulse = true,
  className = "",
  onMarkerClick,
  onMarkerHover,
  activeMarkerIndex = null,
}: DottedMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const svgData = useMemo(() => {
    const map = new DottedMapLib({ height: 60, grid: "diagonal" });

    markers.forEach((marker) => {
      map.addPin({
        lat: marker.lat,
        lng: marker.lng,
        svgOptions: {
          color: markerColor,
          radius: marker.size ?? 0.6,
        },
      });
    });

    const svgStr = map.getSVG({
      shape: "circle",
      color: dotColor,
      radius: dotRadius,
      backgroundColor,
    });

    const viewBoxMatch = svgStr.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 120 60";

    const circles: string[] = [];
    const circleRegex = /<circle[^/]*\/>/g;
    let match;
    while ((match = circleRegex.exec(svgStr)) !== null) {
      circles.push(match[0]);
    }

    return { viewBox, circles };
  }, [markers, dotColor, markerColor, dotRadius, backgroundColor]);

  const projectPoint = (lat: number, lng: number) => {
    const [, , vbW, vbH] = svgData.viewBox.split(" ").map(Number);
    const x = ((lng + 180) / 360) * vbW;
    const y = ((90 - lat) / 180) * vbH;
    return { x, y };
  };

  return (
    <svg
      ref={svgRef}
      viewBox={svgData.viewBox}
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Render all dots */}
      <g dangerouslySetInnerHTML={{ __html: svgData.circles.join("") }} />

      {/* Render interactive markers with pulse */}
      {markers.map((marker, i) => {
        if (marker.pulse === false && pulse) return null;
        const { x, y } = projectPoint(marker.lat, marker.lng);
        const isActive = activeMarkerIndex === i;
        const baseSize = marker.size ?? 0.6;

        return (
          <g key={`marker-${i}`}>
            {/* Pulse ring */}
            {pulse && (
              <circle cx={x} cy={y} r={baseSize} fill={markerColor}>
                <animate
                  attributeName="r"
                  from={String(baseSize)}
                  to={String(baseSize * 4)}
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            )}

            {/* Marker dot */}
            <circle
              cx={x}
              cy={y}
              r={isActive ? baseSize * 1.8 : baseSize}
              fill={markerColor}
              style={{ transition: "r 0.2s ease" }}
            />

            {/* Invisible larger hit area for click/hover */}
            <circle
              cx={x}
              cy={y}
              r={baseSize * 5}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onClick={() => onMarkerClick?.(marker, i)}
              onMouseEnter={() => onMarkerHover?.(marker, i)}
              onMouseLeave={() => onMarkerHover?.(null, -1)}
            />

            {/* Tooltip label */}
            {isActive && marker.label && (
              <g>
                <rect
                  x={x - marker.label.length * 1.2}
                  y={y - baseSize * 8 - 2}
                  width={marker.label.length * 2.4}
                  height={4}
                  rx={1}
                  fill={markerColor}
                />
                <text
                  x={x}
                  y={y - baseSize * 8 + 0.8}
                  textAnchor="middle"
                  fill="white"
                  fontSize={2.5}
                  fontFamily="Montserrat, sans-serif"
                  fontWeight={500}
                >
                  {marker.label}
                </text>
                {/* Arrow */}
                <polygon
                  points={`${x - 1},${y - baseSize * 8 + 2} ${x + 1},${y - baseSize * 8 + 2} ${x},${y - baseSize * 8 + 3.5}`}
                  fill={markerColor}
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}
