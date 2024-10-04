import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <Box className="flex flex-col justify-center items-center h-[80vh] select-none">
      <Image
        src="/studying.gif"
        alt="studying man"
        loading="eager"
        className="mb-[10px] rounded-md"
        width={200}
        height={200}
      />
      <h1>Page Not Found</h1>
      <Link href="/" className="text-elims-hoverColor">
        Return Home
      </Link>
    </Box>
  );
}
