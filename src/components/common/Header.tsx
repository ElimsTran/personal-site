import { Box, Container, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Link from "next/link";
import SpotifyPlaylist from "../ultilities/SpotifyPlaylist";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "/#about-me",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
];

const contacts = [
  { Icon: MailOutlineIcon, href: "mailto:longbinkg@gmail.com" },
  // { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/philongtran102" },
  // { Icon: GitHubIcon, href: "https://github.com/ElimsTran" },
];

export default function Header() {
  return (
    <Box className="bg-elims-backgroundColorLight text-elims-textColor sticky top-0 z-50 border shadow-xl">
      <Container
        maxWidth="xl"
        className="flex justify-between sticky top-0 py-3 backdrop-blur-3xl "
      >
        <Box className="gap-5 md:px-10 flex">
          {pages.map((page) => {
            return (
              <Link
                key={page.name}
                className="no-underline text-center text-inherit flex items-center whitespace-nowrap text-elims-textColor"
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
              >
                <Icon fontSize="small" />
              </IconButton>
            );
          })}
        </Box>
      </Container>
      <SpotifyPlaylist link="https://open.spotify.com/playlist/5iklb65eaqPsfi5jRJyoZA?si=12b8e4edf7e24f6e" />
    </Box>
  );
}
