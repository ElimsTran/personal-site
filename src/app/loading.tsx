import Image from "next/image";
import { Box } from "@mui/material";

export default function Loading() {
  return (
    <Box className="bg-red h-[100vh] w-[100vw] z-[99] fixed bg-elims-backgroundColorMedium justify-center flex flex-col items-center select-none pointer-events-none hide-animation">
      <Image
        src={"/monkey-coding.gif"}
        alt="spotify"
        loading={"eager"}
        width={200}
        height={150}
        className="rounded-lg"
      />
    </Box>
  );
}
