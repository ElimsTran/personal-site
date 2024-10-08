import SouthIcon from "@mui/icons-material/South";

import { IconButton } from "@mui/material";
export default function JumpButton() {
  return (
    <IconButton
      className="fixed bottom-[40px] left-[calc(50vw-20px)] bg-elims-backgroundColorLight p-1 jump-animation w-fit shadow-xl z-50 shadow-xl"
      color="inherit"
    >
      <SouthIcon />
    </IconButton>
  );
}
