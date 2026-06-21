import { ImageResponse } from "next/og";

export const alt = "Miguel Costa Paulo — SAP BTP & AI Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafaf9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#0070F2",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              color: "#0070F2",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            SAP BTP &amp; AI Architect
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#0a0a0a",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "28px",
          }}
        >
          Miguel Costa Paulo
        </div>

        {/* Bio */}
        <div
          style={{
            fontSize: "22px",
            color: "#737373",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          8+ years designing and delivering production AI and cloud solutions for global enterprises across EMEA.
        </div>

        {/* Bottom rule + domain */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            left: "80px",
            right: "80px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ width: "100%", height: "1px", background: "#e5e5e5" }} />
          <span style={{ fontSize: "14px", color: "#a3a3a3" }}>mcpaulo.dev</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
