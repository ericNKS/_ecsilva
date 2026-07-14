import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Decorative accent circle */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6)",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 1 }}>
          {/* Name */}
          <div
            style={{
              fontSize: "28px",
              color: "#3b82f6",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ÉRIC SANTOS
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "64px",
              color: "#f8fafc",
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            Engenheiro Backend
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "32px",
              color: "#94a3b8",
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: "800px",
              marginTop: "8px",
            }}
          >
            TypeScript • Node.js • Go • Clean Architecture
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "48px",
              marginTop: "32px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "48px", color: "#3b82f6", fontWeight: 800 }}>77%</div>
              <div style={{ fontSize: "20px", color: "#94a3b8" }}>menos memória</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "48px", color: "#3b82f6", fontWeight: 800 }}>90%</div>
              <div style={{ fontSize: "20px", color: "#94a3b8" }}>DBs mais rápidos</div>
            </div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "20px",
            color: "#64748b",
            fontWeight: 500,
          }}
        >
          ecsilva.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
