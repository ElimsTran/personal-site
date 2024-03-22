"use client";
import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { useLayoutEffect, useMemo, useState } from "react";
import Image from "next/image";
const DUE_DATE = "2024-04-14 10:30:00";

export default function Home() {
  const dueDay: Date = useMemo(() => new Date(DUE_DATE), []);
  const [timer, setTimer] = useState<string>("");
  const [quote, setQuate] = useState<string>("");

  useLayoutEffect(() => {
    const countInterval = setInterval(() => {
      const diffTime = dueDay.getTime() - Date.now();
      const seconds = Math.floor((diffTime / 1000) % 60);
      const minutes = Math.floor((diffTime / 1000 / 60) % 60);
      const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setTimer(`${days}D ${hours}H ${minutes}m ${seconds}s`);
    }, 1000);

    return () => {
      clearInterval(countInterval);
    };
  }, []);

  return (
    <>
      <Box className="sticky hidden md:flex z-10 top-[calc(100vh-180px)] left-[calc(100%-200px)] w-fit flex-col justify-center items-center reveal-animation">
        <Image
          src="/studying.gif"
          alt="studying man"
          loading="eager"
          className="mb-[10px] rounded-md"
          width={100}
          height={100}
        />
        <Typography component={"p"} className="uppercase text-[12px]">
          Time Left Until TOEIC Test
        </Typography>
        <Typography
          component={"p"}
          className="flex justify-center uppercase text-[12px]"
        >
          {timer}
        </Typography>
        {!timer && <CircularProgress color="primary" size={12} />}
      </Box>
      <Container
        component={"main"}
        maxWidth="md"
        className="flex flex-col gap-[50px]"
      >
        <Box className="flex flex-col items-center justify-center align-middle gap-2 select-none reveal-animation pt-[20%] md:pt-0">
          <Box className="w-[150px] h-[150px] rounded-[50%] bg-slate-500 flex items-center justify-center overflow-hidden shadow-sm">
            <Image
              src={"/avt_hi.webp"}
              alt="avt"
              loading={"eager"}
              width={150}
              height={150}
            />
          </Box>
          <Typography component={"h3"} fontSize={30}>
            Trần Phi Long
          </Typography>
          <Typography fontSize={20} className="text-center">
            I&apos;m a software engineer
          </Typography>
          <br />
          <Typography fontSize={15} className="text-center italic">
            &quot;The only true wisdom is in knowing you know nothing.&quot; -
            Socrates
          </Typography>
        </Box>

        <Divider color="gray" />
        <Box className="flex flex-col gap-2 reveal-animation pb-[20px]">
          <Typography
            component={"a"}
            fontSize={25}
            id="about-me"
            className="uppercase font-bold pb-[50px]"
          >
            About Me
          </Typography>
          <Box className="grid md:grid-flow-row md:grid-cols-4 gap-5 md:px-[50px]">
            <Box className=" md:col-span-1 flex justify-center items-center overflow-hidden shadow-sm">
              <Image
                src={"/avt.webp"}
                alt="avt"
                loading={"eager"}
                width={100}
                height={100}
                className="bg-slate-500  rounded-[50%]  "
              />
            </Box>
            <Box className="md:col-span-3 bg-slate-500 p-5 rounded-2xl text-justify">
              Hello, I&apos;m Phi Long, a software engineering. I from in Ho Chi
              Min city. I start working as a web application developer at August
              2021. I believe in the transformative power of technology to shape
              the world.
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
