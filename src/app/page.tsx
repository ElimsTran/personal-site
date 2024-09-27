"use client";
import { Box, Container, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FormContact from "@/components/formContact/FormContact";
import JumpButton from "@/components/buttons/JumpButton";
import { useEffect, useState } from "react";

const contacts = [
  { Icon: FacebookIcon, href: "https://www.facebook.com/PykaSmile" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/_phiilonggg" },
  { Icon: GitHubIcon, href: "https://github.com/ElimsTran" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/philong102" },
];
const aboutMe = [
  "Software Engineer",
  "HCM University of Science",
  "Ho Chi Minh City",
  "Web Developer",
  "Video Editer",
];

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container component={"main"} maxWidth="md" className="flex flex-col ">
      <Box
        id="greeting"
        className="flex flex-col items-center justify-start gap-2 select-none pt-[5vh] md:pt-[15vh] min-h-[80vh]"
      >
        <Box className="p-5 rounded-md text-justify triangle-left bg-elims-backgroundColorLight w-auto max-w-[440px] shadow-lg shadow-elims-backgroundColorDark">
          {
            "Welcome to my space! I'm Long, a software engineer. I've created this site to share my hobbies. I hope you find valuable content here. Enjoy your visit!"
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

          <Box className="flex flex-wrap justify-around ">
            <Typography component={"h1"} className="hidden">
              Resume
            </Typography>
            <Typography component={"p"} fontSize={12}>
              <a
                href="/Resume_Tran-Phi-Long.pdf"
                className="text-elims-hoverColor"
                target="_blank"
              >
                Get my resume
              </a>
            </Typography>
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
        </Box>
        {scrollPosition < 100 && <JumpButton />}
      </Box>

      <Box className="m-auto w-[100%] max-w-[95%] min-h-[65vh]">
        <Typography
          component={"h1"}
          id="contact"
          fontSize={24}
          fontWeight={600}
          className="select-none underline underline-offset-8 decoration-elims-hoverColor"
        >
          Contact me
        </Typography>
        <FormContact />
      </Box>
    </Container>
  );
}
