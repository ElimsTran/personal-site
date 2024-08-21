import Image from "next/image";
import { Container } from "@mui/material";

export default function Loading() {
  return (
    <Container className="bg-red h-[100vh] w-[100vw] z-[99] fixed bg-elims-backgroundColorMedium justify-center flex flex-col items-center select-none pointer-events-none hide-animation">
      <Image
        src={"/monkey-coding.gif"}
        alt="spotify"
        loading={"eager"}
        width={200}
        height={150}
        className="rounded-lg"
      />
      <p className="animate- overflow-hidden whitespace-nowrap -translate-y-3">
        The monkey is typing something
      </p>
    </Container>
  );
}
