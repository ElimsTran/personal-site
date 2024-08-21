"use client";
import { Box, Container, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import SpotifyPlaylist from "../utilities/SpotifyPlaylist";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About me",
    href: "/about-me",
  },
  {
    name: "Tools",
    href: "/tools",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
];

const contacts = [
  { Icon: MailOutlineIcon, href: "mailto:longbinkg@gmail.com" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/philongtran102" },
  // { Icon: GitHubIcon, href: "https://github.com/ElimsTran" },
];

export default function Header() {
  const params = usePathname();

  return (
    <>
      <Box className="bg-elims-backgroundColorLight text-elims-textColor sticky top-0 z-50 border shadow-xl">
        <Container
          maxWidth="xl"
          className="flex justify-between sticky top-0 py-3"
        >
          <Box className="gap-5 md:px-10 flex">
            {pages.map((page) => {
              return (
                <Link
                  key={page.name}
                  className={`${
                    params !== page.href
                      ? "no-underline hover:text-elims-hoverColor hover:-translate-y-[2px] transition text-elims-textColor "
                      : "underline font-bold text-elims-hoverColor underline-offset-8 select-none cursor-default "
                  }text-center text-inherit flex items-center whitespace-nowrap`}
                  href={page.href}
                >
                  {page.name}
                </Link>
              );
            })}
          </Box>
          <Box className="gap-0 flex">
            {contacts.map(({ Icon, href }) => {
              return (
                <IconButton
                  key={href}
                  href={href}
                  size="large"
                  color="inherit"
                  target="_blank"
                  className="hover:text-elims-hoverColor hover:-translate-y-[2px] transition"
                >
                  <Icon fontSize="small" />
                </IconButton>
              );
            })}
          </Box>
        </Container>
      </Box>
      <SpotifyPlaylist link="https://open.spotify.com/playlist/5iklb65eaqPsfi5jRJyoZA?si=12b8e4edf7e24f6e" />
    </>
  );
}
