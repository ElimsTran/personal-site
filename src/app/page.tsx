"use client";
import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { INTRODUCE_SENTENCE } from "../constants";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Home() {
  const contacts = [
    { Icon: FacebookIcon, href: "https://www.facebook.com/PykaSmile" },
    { Icon: InstagramIcon, href: "https://www.instagram.com/_phiilonggg" },
    { Icon: GitHubIcon, href: "https://github.com/ElimsTran" },
    { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/philongtran102" },
  ];

  return (
    <Container component={"main"} maxWidth="md" className="flex flex-col">
      <Box className="flex flex-col items-center justify-center align-middle gap-2 select-none min-h-[84vh] ">
        <Box className="p-5 rounded-md text-justify triangle-left bg-elims-backgroundColorLight w-auto max-w-[370px] shadow-lg shadow-elims-backgroundColorDark">
          {INTRODUCE_SENTENCE}
        </Box>
        <Box className="flex flex-col justify-center items-center gap-5">
          <Box className="w-[150px] h-[150px] rounded-[50%] flex items-center justify-center overflow-hidden shadow-lg shadow-elims-backgroundColorDark reveal-animation bg-[url('/pixelRoom.jpg')] bg-fixed bg-contain">
            <Image
              src={"/avt_hi.webp"}
              alt="avt"
              loading={"eager"}
              width={150}
              height={150}
            />
          </Box>
          <Box className="flex flex-col justify-center items-center">
            <Typography component={"h3"} fontSize={30} fontWeight={600}>
              Trần Phi Long
            </Typography>
            <Typography component={"h3"}>Software Engineer</Typography>
          </Box>

          <Box className="gap-2 flex">
            {contacts.map(({ Icon, href }) => {
              return (
                <IconButton
                  key={href}
                  href={href}
                  size="large"
                  target="_blank"
                  className="hover:text-[#ffc107] hover:scale-110 text-elims-textColor transition ease-in-out"
                >
                  <Icon fontSize="small" />
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Box>
      {/* <JumpButton onClick={() => {}} /> */}
    </Container>
  );
}
