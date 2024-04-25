import SouthIcon from "@mui/icons-material/South";
type JumpButtonProps = {
  onClick: () => void;
};

import { Button, IconButton } from "@mui/material";
export default function JumpButton(props: JumpButtonProps) {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <IconButton
      className="fixed bottom-[65px] left-[calc(50vw-20px)] bg-elims-backgroundColorLight p-1 jump-animation w-fit"
      onClick={handleClick}
      color="inherit"
    >
      <SouthIcon />
    </IconButton>
  );
}
