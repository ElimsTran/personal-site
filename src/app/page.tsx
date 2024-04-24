"use client";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { INTRODUCE_SENTENCE } from "../constants";
import JumpButton from "@/components/buttons/JumpButton";
import { Spotify } from "react-spotify-embed";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
export default function Home() {
  return (
    <>
      <Container
        component={"main"}
        maxWidth="md"
        className="flex flex-col p-0 "
      >
        <Box className="flex flex-col items-center justify-center align-middle gap-2 select-none min-h-[85vh]">
          <Box className="p-5 rounded-2xl text-justify triangle-left bg-elims-backgroundColorLight w-auto max-w-[370px]">
            {INTRODUCE_SENTENCE}
          </Box>
          <Box className="flex flex-col justify-center items-center gap-5">
            <Box className="w-[150px] h-[150px] rounded-[50%] flex items-center justify-center overflow-hidden shadow-sm reveal-animation bg-elims-backgroundColorDark ">
              <Image
                src={"/avt_hi.webp"}
                alt="avt"
                loading={"eager"}
                width={150}
                height={150}
              />
            </Box>
            <Box className="flex flex-col justify-center items-center">
              <Typography component={"h3"} fontSize={30}>
                Trần Phi Long
              </Typography>
              <Typography component={"h3"}>Software Engineer</Typography>
            </Box>
          </Box>
        </Box>
        <JumpButton onClick={() => {}} />
      </Container>
      <Box className="max-w-[350px] opacity-50 fixed top-[3%] right-0 translate-x-[calc(100%)] border-[1px] [&:hover]:translate-x-0 [&:hover]:opacity-100 transition ease-in-out duration-500  z-50 ">
        <Box className="translate-x-[-61px] translate-y-[87px] -rotate-90 uppercase text-[12px] font-bold bg-[#203040] border-solid border-[2px] border-b-0 w-[80px] h-[40px] rounded-t-md">
          <Image
            src={"/logos/spotify.svg"}
            alt="spotify"
            loading={"lazy"}
            layout="fill"
          />
        </Box>
        <Typography component={"text"} className="w-full flex justify-center">
          The playlist I usually listen while work
        </Typography>
        <Box className="border-solid border-[2px] rounded-b-md bg-[#203040] p-0 m-0">
          <Spotify link="https://open.spotify.com/playlist/5iklb65eaqPsfi5jRJyoZA?si=12b8e4edf7e24f6e" />
        </Box>
      </Box>
    </>
  );
}
