import { Spotify } from "react-spotify-embed";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

type SpotifyPlaylistProps = {
  link: string;
};

export default function SpotifyPlaylist(props: SpotifyPlaylistProps) {
  return (
    <Box className="max-w-[350px] z-[100] text-elims-textColor opacity-50 fixed top-[3%] right-0 translate-x-[calc(100%)] border-[1px] [&:hover]:translate-x-0 [&:hover]:opacity-100 transition ease-in-out duration-500 z-50 delay-200">
      <Box className="translate-x-[-61px] translate-y-[87px] -rotate-90 uppercase text-[12px] font-bold bg-[#203040] border-solid border-[2px] border-b-0 w-[80px] h-[40px] rounded-t-md ">
        <Image
          src={"/logos/spotify.svg"}
          alt="spotify"
          loading={"lazy"}
          layout="fill"
        />
      </Box>
      <Typography
        component={"text"}
        className="w-full flex justify-center select-none"
      >
        I hope you like that
      </Typography>
      <Box className="border-solid border-[2px] rounded-b-md bg-[#203040] p-0 m-0">
        <Spotify link={props.link} />
      </Box>
    </Box>
  );
}
