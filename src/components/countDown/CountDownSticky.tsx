import { Box, CircularProgress, Typography } from "@mui/material";
import { memo, useLayoutEffect, useMemo, useState } from "react";
import Image from "next/image";

type CountDownStickyProps = {
  targetDate: string;
  title: string;
};

function CountDownSticky(props: Readonly<CountDownStickyProps>) {
  const dueDay: Date = useMemo(() => new Date(props.targetDate), []);

  const [timer, setTimer] = useState<string>("");

  useLayoutEffect(() => {
    console.log(dueDay);
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
    <Box className="sticky flex top-[calc(100vh-180px)] z-10 left-[calc(100vw-210px)] w-fit flex-col justify-center items-center reveal-animation [&>*]:text-[12px]">
      <Image
        src="/studying.gif"
        alt="studying man"
        loading="eager"
        className="mb-[10px] rounded-md"
        width={100}
        height={100}
      />
      <Typography component={"p"} className="uppercase">
        {props.title}
      </Typography>
      <Typography component={"p"} className="flex justify-center uppercase">
        {timer}
      </Typography>
      {!timer && <CircularProgress color="primary" size={12} />}
    </Box>
  );
}
export default memo(CountDownSticky);
