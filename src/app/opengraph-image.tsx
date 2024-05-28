import { ImageResponse } from "next/og";
import Img from "next/image";
// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <Img
        src={"/Elims.jpg"}
        alt="preImg"
        loading={"eager"}
        width={150}
        height={150}
      />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
