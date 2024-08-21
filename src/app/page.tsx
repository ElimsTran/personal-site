"use client";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const contacts = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/PykaSmile" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/_phiilonggg" },
  { Icon: GitHubIcon, href: "https://github.com/ElimsTran" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/philongtran102" },
];
const aboutMe = [
  "Software Engineer",
  "HCM University of Science",
  "Ho Chi Minh City",
  "Web Developer",
  "Video Editer",
  "Music",
  "Travel",
];

export default function Home() {
  return (
    <Container component={"main"} maxWidth="md" className="flex flex-col">
      <Box className="flex flex-col items-center justify-start gap-2 select-none pt-[10vh]">
        <Box className="p-5 rounded-md text-justify triangle-left bg-elims-backgroundColorLight w-auto max-w-[440px] shadow-lg shadow-elims-backgroundColorDark">
          {
            "Welcome to my space! I'm Long, a software engineer. I've created this website to share my hobbies. If you’re interested in hiring me or need assistance, feel free to contact me using the information below. I hope you find valuable content here. Enjoy your visit!"
          }
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
            <Typography component={"h1"} className="hidden">
              Name and Major
            </Typography>
            <Typography component={"h2"} fontSize={30} fontWeight={600}>
              Trần Phi Long
            </Typography>
            <Box className="gap-2 text-center">
              <Typography component={"h1"} className="hidden">
                Contacts
              </Typography>
              <Box className="border-0">
                {contacts.map(({ Icon, href }) => {
                  return (
                    <IconButton
                      key={href}
                      href={href}
                      size="large"
                      target="_blank"
                      className="hover:text-elims-hoverColor hover:scale-110 text-elims-textColor transition ease-in-out"
                    >
                      <Icon fontSize="small" />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Box>

          <Box className="gap-1 flex flex-wrap mt-5 max-w-[330px] md:max-w-[410px] justify-around">
            <Typography component={"h1"} className="hidden">
              Skills
            </Typography>
            {aboutMe.map((text) => {
              return (
                <Box
                  key={text}
                  className="border-solid border-[1px] border-elims-backgroundColorLight p-1 rounded-md text-xs bg-elims-backgroundColorLight"
                >
                  {text}
                </Box>
              );
            })}
          </Box>

          <Box className="flex flex-wrap justify-around mt-[50px]">
            <Typography component={"h1"} className="hidden">
              Resume
            </Typography>
            <Typography component={"p"}>
              For more information, you can view my{" "}
              <a
                href="/Resume_Tran-Phi-Long.pdf"
                className="text-elims-hoverColor"
              >
                resume
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
