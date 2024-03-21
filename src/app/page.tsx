"use client";
import { useEffect, useMemo, useState } from "react";

const DUE_DATE = "2024-04-14 10:30:00";

export default function Home() {
  const dueDay: Date = useMemo(() => new Date(DUE_DATE), []);
  const [timer, setTimer] = useState<string>("");

  useEffect(() => {
    const countInterval = setInterval(() => {
      const diffTime = dueDay.getTime() - Date.now();
      const seconds = Math.floor((diffTime / 1000) % 60);
      const minutes = Math.floor((diffTime / 1000 / 60) % 60);
      const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setTimer(`${days}D:${hours}H:${minutes}M:${seconds}S`);
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center align-middle font-bold">
      REMAINING TIME TO TOEIC TEST <br />
      <span className="flex justify-center">{timer}</span>
    </main>
  );
}
