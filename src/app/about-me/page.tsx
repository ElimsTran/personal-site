import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function page() {
  return (
    <Container
      component={"main"}
      maxWidth="md"
      className="flex flex-col py-10 select-none"
    >
      <Box className="reveal-animation" id="introduce">
        <Typography component={"h1"} fontSize={25} fontWeight={600}>
          Introduce
        </Typography>
        <Typography component={"p"} className="px-2 md:px-8 py-4 text-justify ">
          Hi you guys, I am a software engineer from Việt Nam, currently working
          as a full-stack web developer. I have a strong passion for programming
          and believe that technology makes life more convenient.
          <br />
          <br />
          As a developer, I am always upgrading my skills and ready to learn new
          techniques, both in programming and in life. I strive to find the best
          version of myself and adapt to work requirements.
          <br />
          <br />
          This page is created to share my hobbies, and I hope you find valuable
          information here. Additionally, if you want to hire me or assistance
          from me, please do not hesitate to direct message me.
        </Typography>
      </Box>

      <Box className="reveal-animation" id="experience">
        <Typography component={"h1"} fontSize={25} fontWeight={600}>
          Experiences
        </Typography>

        <Box className="px-2 md:px-8 py-4">
          <Box
            className="flex flex-row justify-between hover:cursor-pointer hover:bg-opacity-5 hover:bg-elims-hoverColor transition-all pr-2 relative"
            component={"label"}
            htmlFor="open-detail--fjn"
          >
            <Box className="border-solid border-0 border-l-2 pl-2">
              <Typography
                component={"h2"}
                className=" md:text-[18px] font-semibold text-elims-hoverColor"
              >
                Fujinet Systems JSC
              </Typography>
              <Typography component={"p"}>Web Developer</Typography>
            </Box>
            <Typography
              // className="rotate-90 translate-x-20 translate-y-12"
              component={"p"}
            >
              06/2021 - 09/2023
            </Typography>

            <Box className="absolute right-3 bottom-0 detail_open-icon flex">
              <ExpandMoreIcon></ExpandMoreIcon>
            </Box>
          </Box>

          <input
            type="checkbox"
            name="open-detail--fjn"
            id="open-detail--fjn"
            className=" [&:not(:checked)~.detail]:max-h-[0px] invisible absolute "
          />
          <Box className="detail transition-all duration-1000 ease-in-out max-h-[2000px] relative overflow-y-hidden">
            <Box className="px-2 md:px-8 py-4 text-justify">
              <Typography
                component={"h2"}
                className="text-elims-hoverColor font-bold"
              >
                Brief:
              </Typography>
              <Typography component={"p"} className="pl-10 [&>*]:mb-6">
                I worked as a web developer at{" "}
                <a
                  target="_blank"
                  href="https://www.fujinet.net/"
                  className=" font-bold text-elims-hoverColor"
                >
                  Fujinet System JSC
                </a>
                , where I contributed to the maintenance and development of web
                applications in both front-end and back-end roles.
              </Typography>
            </Box>
            <Box className="px-2 md:px-8 py-4 text-justify">
              <Typography
                component={"h2"}
                className="text-elims-hoverColor font-bold"
              >
                Roles:
              </Typography>
              <Typography component={"ul"} className="[&>li]:mb-6">
                <Typography component={"li"}>
                  Contributed to the maintenance and development of web
                  applications based on the .NET Framework and Microsoft Graph
                  API, as well as Azure Cloud Services (Azure Web App Service,
                  Azure Bot Service, and Azure Functions).
                </Typography>
                <Typography component={"li"}>
                  Contributed to the maintenance and development of SharePoint
                  web parts using the SharePoint Web Part Framework (SPFx).
                </Typography>
                <Typography component={"li"}>
                  Migrate Azure Bot Chat Knowledge Base from QnA Maker to Azure
                  Language Studio, and integrate bot chat into SharePoint web
                  part and Microsoft Team App.
                </Typography>
                <Typography component={"li"}>
                  Monitor Azure Function operations and fix errors when problems
                  occur.
                </Typography>
                <Typography component={"li"}>
                  Utilized Editor JS to implement a blog creation feature for
                  the web application.
                </Typography>
                <Typography component={"li"}>
                  Contributed to the development of a web application based on
                  Spring Boot for warehouse management, incorporating camera to
                  scan barcodes and QR codes.
                </Typography>
              </Typography>
            </Box>
            <Box className="px-2 md:px-8 py-4 text-justify">
              <Typography
                component={"h2"}
                className="text-elims-hoverColor font-bold"
              >
                Technologies:
              </Typography>
              <Typography component={"ul"} className="[&>li]:mb-6">
                <Typography component={"li"}>
                  Back-end: NET Framework, Spring Boot, MyBatis, LinQ, Restful
                  API.
                </Typography>
                <Typography component={"li"}>
                  Front-end: React JS & TS, SharePoint Web Part Framework(SPFx),
                  Editor JS, JQuery, Bootstrap, HTML, CSS.
                </Typography>
                <Typography component={"li"}>
                  Database: SQL databases (PostgreSQL, SQL Server).
                </Typography>
                <Typography component={"li"}>
                  Cloud Services: Microsoft Graph API, Azure Cloud Services
                  (Azure Web App Service, Azure Bot Service, Azure Function,
                  Azure Blob Storage, Azure Database).
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="px-2 md:px-8 py-4">
          <Box
            className="flex flex-row justify-between hover:cursor-pointer hover:bg-opacity-5 hover:bg-elims-hoverColor transition-all pr-2 relative"
            component={"label"}
            htmlFor="open-detail--hcmus"
          >
            <Box className="border-solid border-0 border-l-2 pl-2">
              <Typography
                component={"h2"}
                className=" md:text-[18px] font-semibold text-elims-hoverColor"
              >
                HCM University of Science
              </Typography>
              <Typography component={"p"}>Software Engineering</Typography>
            </Box>
            <Typography
              // className="rotate-90 translate-x-20 translate-y-12"
              component={"p"}
              className="text-nowrap"
            >
              08/2018 - 08/2022
            </Typography>
            <Box className="absolute right-3 bottom-0 detail_open-icon flex">
              <ExpandMoreIcon></ExpandMoreIcon>
            </Box>
          </Box>

          <input
            type="checkbox"
            name="open-detail--hcmus"
            id="open-detail--hcmus"
            className=" [&:not(:checked)~.detail.detail--hcmus]:max-h-[0px] invisible absolute "
          />
          <Box className=" detail detail--hcmus transition-all duration-1000 ease-in-out max-h-[2000px] relative overflow-y-hidden">
            <Box className="px-2 md:px-8 py-4 text-justify">
              <Typography
                component={"h2"}
                className="text-elims-hoverColor font-bold"
              >
                Brief:
              </Typography>
              <Typography component={"p"} className="pl-10 [&>*]:mb-6">
                I studied Software Engineering at Ho Chi Minh City University of
                Science. During my time there, I gained a solid foundation in
                software development, algorithms, and systems design. I also had
                the opportunity to work on various projects that enhanced my
                technical skills and teamwork abilities. My education has
                equipped me with the knowledge and experience necessary to
                succeed in the tech industry.
              </Typography>
            </Box>
            <Box className="px-2 md:px-8 py-4 text-justify">
              <Typography
                component={"h2"}
                className="text-elims-hoverColor font-bold"
              >
                Result:
              </Typography>
              <Typography component={"p"} className="pl-10 [&>*]:mb-6">
                I graduated with a very good degree in Software Engineering.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="reveal-animation" id="educations">
        <Typography component={"h1"} fontSize={25} fontWeight={600}>
          Educations & Certificates
        </Typography>

        <Box className="my-4 p-0 flex flex-wrap gap-[10%] justify-around">
          <Box className="flex flex-col text-center justify-center items-center gap-2 m-3">
            <Image
              src={"/logo_cert/hcmus.png"}
              alt="Hcmus.logo"
              loading={"eager"}
              width={100}
              height={100}
              className="rounded-xl shadow-lg shadow-elims-backgroundColorMedium inline-block bg-elims-textColor"
            />
            <Typography component={"p"} fontSize={14}>
              Ho Chi Minh <br />
              University of Science
            </Typography>
          </Box>
          <Box className="flex flex-col text-center justify-center items-center gap-2  m-3">
            <Box className="min-h-[100px] min-w-[100px] items-center flex bg-elims-textColor rounded-xl justify-center">
              <Image
                src={"/logo_cert/Toeic.png"}
                alt="Hcmus.logo"
                loading={"eager"}
                width={90}
                height={20}
                className="inline-block bg-elims-textColor"
              />
            </Box>
            <Typography component={"p"} fontSize={14}>
              TOEIC Certificates <br />4 Skills
            </Typography>
          </Box>

          <Box className="flex flex-col text-center justify-center items-center gap-2  m-3">
            <Image
              src={"/logo_cert/humada-logo.png"}
              alt="huynh-man-dat.logo"
              loading={"eager"}
              width={100}
              height={100}
              className="rounded-xl shadow-lg shadow-elims-backgroundColorMedium"
            />
            <Typography component={"p"} fontSize={14}>
              Huynh Man Dat <br />
              High school
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
