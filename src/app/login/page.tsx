import LoginForm from "@/components/forms/LoginForm";
import { Container, Typography } from "@mui/material";
export default function page() {
  return (
    <Container className="min-h-[60vh] flex flex-col items-center justify-center select-none">
      <>
        <Typography
          variant="h4"
          align="center"
          className="text-elims-hoverColor font-bold"
        >
          Login
        </Typography>
        <LoginForm />
      </>
    </Container>
  );
}
