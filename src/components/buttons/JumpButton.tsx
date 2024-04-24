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
      className="sticky top-[100vh] left-[calc(50vw-10px)] bg-elims-backgroundColorLight p-1 jump-animation w-fit"
      onClick={handleClick}
      color="inherit"
    >
      <SouthIcon />
    </IconButton>
  );
}
