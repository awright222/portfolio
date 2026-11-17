import { ImageResponse } from "next/og";

export const alt = "Alex Wright";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F6F2",
          color: "#252C2A",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#4F646C",
          }}
        >
          alexwrightportfolio.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontFamily: "serif" }}>
            Alex Wright
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 36,
              color: "#5A6361",
            }}
          >
            Program management. Client relationships. Software development.
          </div>
        </div>
        <div style={{ display: "flex", height: 8, width: 160, background: "#91A99B" }} />
      </div>
    ),
    size,
  );
}
