import { ImageResponse } from "next/og";
import Img from "next/image";
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <Img
        src={"/Elims.jpg"}
        alt="preImg"
        loading={"eager"}
        width={300}
        height={150}
      />
    )
  );
}
