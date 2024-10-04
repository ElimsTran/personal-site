"use client";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
      <h1>Something went wrong</h1>
      <Link href="/" className="text-elims-hoverColor">
        Return Home
      </Link>
      or
      <Button
        variant="contained"
        className="text-[12px] rounded-md mt-5 w-[100%] md:w-auto px-[50px] py-1 border-[1px] border-solid bg-elims-backgroundColorDark hover:bg-elims-hoverColor text-elims-hoverColor border-elims-hoverColor hover:bg-opacity-5 font-bold flex justify-center gap-2 items-center"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
