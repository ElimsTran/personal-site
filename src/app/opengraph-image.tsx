import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Elims Zone";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "#2f3045",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fdbf08",
        }}
      >
        Elims Zone
      </div>
    ),
    {
      ...size,
    }
  );
}
