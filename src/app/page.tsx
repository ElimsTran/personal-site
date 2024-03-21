"use client";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { useLayoutEffect, useMemo, useState } from "react";

const DUE_DATE = "2024-04-14 10:30:00";

export default function Home() {
  const dueDay: Date = useMemo(() => new Date(DUE_DATE), []);
  const [timer, setTimer] = useState<string>("");

  useLayoutEffect(() => {
    const countInterval = setInterval(() => {
      const diffTime = dueDay.getTime() - Date.now();
      const seconds = Math.floor((diffTime / 1000) % 60);
      const minutes = Math.floor((diffTime / 1000 / 60) % 60);
      const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setTimer(
        `${days} Days ${hours} hours ${minutes} minutes ${seconds} seconds`
      );
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center align-middle font-bold gap-1 select-none">
      <img
        src="studying.gif"
        alt="studying.gif"
        loading="eager"
        className="h-[200px] w-[200px] mb-[20px] rounded-md"
      />
      <span className="uppercase">Time Left Until TOEIC Test</span>
      {!timer && <CircularProgress color="primary" />}
      <span className="flex justify-center">{timer}</span>
    </main>
  );
}
