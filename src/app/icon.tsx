import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "#2f3045",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fdbf08",
          fontWeight: "900",
          border: "solid",
          borderRadius: "5px",
          borderColor: "#2f3045",
        }}
      >
        E
      </div>
    ),
    {
      ...size,
    }
  );
}
