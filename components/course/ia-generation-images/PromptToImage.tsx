"use client";

import { useLanguage } from "@/lib/language-context";

export default function PromptToImage() {
  const { language } = useLanguage();

  const t = {
    title:
      language === "fr"
        ? "Du prompt \u00e0 l\u2019image"
        : "From Prompt to Image",
    prompt: language === "fr" ? "Prompt texte" : "Text Prompt",
    tokenization: language === "fr" ? "Tokenisation" : "Tokenization",
    diffusion:
      language === "fr" ? "Processus de diffusion" : "Diffusion Process",
    finalImage: language === "fr" ? "Image finale" : "Final Image",
    promptEx:
      language === "fr"
        ? "\u00ab Un chat astronaute... \u00bb"
        : '"An astronaut cat..."',
    step1: language === "fr" ? "Bruit pur" : "Pure noise",
    step2: language === "fr" ? "Formes" : "Shapes",
    step3: language === "fr" ? "D\u00e9tails" : "Details",
    step4: language === "fr" ? "Net" : "Clear",
  };

  const violet = "#7C3AED";
  const violetLight = "#EDE9FE";
  const violetMid = "#DDD6FE";
  const violetSoft = "#C4B5FD";

  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 820 200"
        className="w-full h-auto"
        role="img"
        aria-label={t.title}
      >
        <defs>
          <marker
            id="pti-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={violet} />
          </marker>
          <clipPath id="noise-clip">
            <rect x="0" y="0" width="50" height="50" rx="6" />
          </clipPath>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="820" height="200" rx="16" fill={violetLight} opacity="0.3" />

        {/* === Stage 1: Text Prompt === */}
        <g transform="translate(20, 40)">
          <rect
            x="0"
            y="0"
            width="120"
            height="80"
            rx="12"
            fill="white"
            stroke={violet}
            strokeWidth="2"
          />
          {/* Text icon */}
          <rect x="10" y="12" width="100" height="4" rx="2" fill={violetSoft} />
          <rect x="10" y="22" width="80" height="4" rx="2" fill={violetMid} />
          <rect x="10" y="32" width="90" height="4" rx="2" fill={violetSoft} />
          <rect x="10" y="42" width="60" height="4" rx="2" fill={violetMid} />
          {/* Cursor blink */}
          <rect x="70" y="42" width="2" height="8" rx="1" fill={violet}>
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </rect>
          <text
            x="60"
            y="70"
            textAnchor="middle"
            fontSize="8"
            fill="#6B7280"
            fontFamily="system-ui, sans-serif"
          >
            {t.promptEx}
          </text>
          {/* Label */}
          <text
            x="60"
            y="100"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            {t.prompt}
          </text>
        </g>

        {/* Arrow 1 */}
        <line
          x1="150"
          y1="80"
          x2="185"
          y2="80"
          stroke={violet}
          strokeWidth="2"
          markerEnd="url(#pti-arrow)"
        />

        {/* === Stage 2: Tokenization === */}
        <g transform="translate(195, 40)">
          <rect
            x="0"
            y="0"
            width="100"
            height="80"
            rx="12"
            fill="white"
            stroke={violet}
            strokeWidth="2"
          />
          {/* Token blocks */}
          {[
            { x: 10, y: 15, w: 30 },
            { x: 45, y: 15, w: 20 },
            { x: 70, y: 15, w: 20 },
            { x: 10, y: 32, w: 25 },
            { x: 40, y: 32, w: 35 },
            { x: 10, y: 49, w: 20 },
            { x: 35, y: 49, w: 30 },
            { x: 70, y: 49, w: 20 },
          ].map((block, i) => (
            <rect
              key={i}
              x={block.x}
              y={block.y}
              width={block.w}
              height="12"
              rx="3"
              fill={i % 2 === 0 ? violetSoft : violetMid}
              stroke={violet}
              strokeWidth="0.5"
            />
          ))}
          {/* Label */}
          <text
            x="50"
            y="100"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            {t.tokenization}
          </text>
        </g>

        {/* Arrow 2 */}
        <line
          x1="305"
          y1="80"
          x2="340"
          y2="80"
          stroke={violet}
          strokeWidth="2"
          markerEnd="url(#pti-arrow)"
        />

        {/* === Stage 3: Diffusion Process (4 substeps) === */}
        <g transform="translate(350, 25)">
          {/* Diffusion container */}
          <rect
            x="0"
            y="0"
            width="280"
            height="115"
            rx="14"
            fill="white"
            stroke={violet}
            strokeWidth="2"
            strokeDasharray="6 3"
          />

          {/* 4 progressive squares */}
          {[t.step1, t.step2, t.step3, t.step4].map((label, i) => {
            const sx = 15 + i * 67;
            const sy = 12;
            const noiseOpacity = 1 - i * 0.3;
            const imageOpacity = i * 0.33;

            return (
              <g key={i}>
                {/* Square background */}
                <rect
                  x={sx}
                  y={sy}
                  width="52"
                  height="52"
                  rx="6"
                  fill={violetLight}
                  stroke={violetSoft}
                  strokeWidth="1"
                />

                {/* Noise pattern (decreasing) */}
                {i < 3 && (
                  <g opacity={noiseOpacity}>
                    {Array.from({ length: 12 }).map((_, k) => (
                      <rect
                        key={k}
                        x={sx + 4 + ((k * 17) % 44)}
                        y={sy + 4 + ((k * 13) % 44)}
                        width={3 + (k % 3)}
                        height={3 + (k % 2)}
                        rx="1"
                        fill={violet}
                        opacity={0.15 + (k % 5) * 0.05}
                      />
                    ))}
                  </g>
                )}

                {/* Emerging shape (increasing clarity) */}
                {i >= 1 && (
                  <g opacity={imageOpacity}>
                    {/* Simple cat silhouette emerging */}
                    <circle
                      cx={sx + 26}
                      cy={sy + 22}
                      r={10}
                      fill={violet}
                      opacity="0.4"
                    />
                    {/* Ears */}
                    <polygon
                      points={`${sx + 18},${sy + 14} ${sx + 22},${sy + 8} ${sx + 24},${sy + 16}`}
                      fill={violet}
                      opacity="0.4"
                    />
                    <polygon
                      points={`${sx + 28},${sy + 16} ${sx + 30},${sy + 8} ${sx + 34},${sy + 14}`}
                      fill={violet}
                      opacity="0.4"
                    />
                    {/* Body */}
                    <ellipse
                      cx={sx + 26}
                      cy={sy + 38}
                      rx={12}
                      ry={10}
                      fill={violet}
                      opacity="0.3"
                    />
                  </g>
                )}

                {/* Final image - clear cat with helmet */}
                {i === 3 && (
                  <g opacity="0.85">
                    {/* Helmet visor */}
                    <circle
                      cx={sx + 26}
                      cy={sy + 20}
                      r="12"
                      fill="none"
                      stroke={violet}
                      strokeWidth="1.5"
                    />
                    <path
                      d={`M${sx + 18} ${sy + 20} Q${sx + 26} ${sy + 14} ${sx + 34} ${sy + 20}`}
                      fill={violetSoft}
                      opacity="0.6"
                    />
                    {/* Eyes */}
                    <circle cx={sx + 22} cy={sy + 20} r="1.5" fill={violet} />
                    <circle cx={sx + 30} cy={sy + 20} r="1.5" fill={violet} />
                  </g>
                )}

                {/* Substep label */}
                <text
                  x={sx + 26}
                  y={sy + 72}
                  textAnchor="middle"
                  fontSize="8"
                  fill="#6B7280"
                  fontFamily="system-ui, sans-serif"
                >
                  {label}
                </text>

                {/* Mini arrow between substeps */}
                {i < 3 && (
                  <line
                    x1={sx + 56}
                    y1={sy + 26}
                    x2={sx + 63}
                    y2={sy + 26}
                    stroke={violetSoft}
                    strokeWidth="1.5"
                    markerEnd="url(#pti-arrow)"
                  />
                )}
              </g>
            );
          })}

          {/* Label */}
          <text
            x="140"
            y="115"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            {t.diffusion}
          </text>
        </g>

        {/* Arrow 3 */}
        <line
          x1="640"
          y1="80"
          x2="675"
          y2="80"
          stroke={violet}
          strokeWidth="2"
          markerEnd="url(#pti-arrow)"
        />

        {/* === Stage 4: Final Image === */}
        <g transform="translate(685, 30)">
          <rect
            x="0"
            y="0"
            width="110"
            height="100"
            rx="12"
            fill={violet}
          />

          {/* Image frame */}
          <rect
            x="10"
            y="8"
            width="90"
            height="60"
            rx="8"
            fill="white"
          />

          {/* Cat astronaut icon */}
          <g transform="translate(55, 38)">
            {/* Helmet */}
            <circle
              cx="0"
              cy="-5"
              r="16"
              fill="none"
              stroke={violet}
              strokeWidth="2"
            />
            <circle cx="0" cy="-5" r="13" fill={violetLight} />
            {/* Face */}
            <circle cx="0" cy="-4" r="9" fill={violetMid} />
            {/* Ears */}
            <polygon points="-7,-12 -4,-18 -1,-11" fill={violetSoft} />
            <polygon points="1,-11 4,-18 7,-12" fill={violetSoft} />
            {/* Eyes */}
            <circle cx="-3" cy="-5" r="1.5" fill={violet} />
            <circle cx="3" cy="-5" r="1.5" fill={violet} />
            {/* Nose */}
            <polygon points="-1,-2 1,-2 0,-1" fill={violet} />
            {/* Stars around */}
            {[
              { x: -22, y: -12 },
              { x: 20, y: -15 },
              { x: -18, y: 8 },
              { x: 22, y: 5 },
            ].map((star, i) => (
              <circle
                key={i}
                cx={star.x}
                cy={star.y}
                r="1.5"
                fill="white"
                opacity="0.8"
              >
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur="2s"
                  begin={`${i * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* Label */}
          <text
            x="55"
            y="82"
            textAnchor="middle"
            fontSize="9"
            fontWeight="600"
            fill="white"
            fontFamily="system-ui, sans-serif"
          >
            1024 x 1024
          </text>

          {/* Label below */}
          <text
            x="55"
            y="118"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={violet}
            fontFamily="system-ui, sans-serif"
          >
            {t.finalImage}
          </text>
        </g>
      </svg>
    </div>
  );
}
