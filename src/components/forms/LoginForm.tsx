"use client";
import React, { useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Container, Box, FormGroup, Input } from "@mui/material";
import LoginService, { LoginData } from "@/services/LoginService";
import { LOCAL_STORAGE__ACS_TOKEN, LOCAL_STORAGE__RF_TOKEN } from "@/constants";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const loginService = useMemo(() => new LoginService(), []);

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const res = await loginService.PostLogin(data);
    if (res.success) {
      localStorage.setItem(
        LOCAL_STORAGE__ACS_TOKEN,
        res.data?.accessToken ?? ""
      );
      localStorage.setItem(
        LOCAL_STORAGE__RF_TOKEN,
        res.data?.refeshToken ?? ""
      );
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "50px" }}>
      <Box
        component={"form"}
        autoComplete="off"
        className="w-[100%] my-3 gap-6 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormGroup className="relative">
          <Input
            type="text"
            {...register("userName", {
              required: "Email is required",
            })}
            autoComplete="off"
            className={`text-elims-textColor bg-elims-backgroundColorLight rounded-md shadow-none border-none p-3 ${
              errors.userName ? "border-red-500" : ""
            }`}
            placeholder="User Name"
          />
          {errors.userName && (
            <span className="text-elims-hoverColor absolute -top-4 left-1 text-[10px]">
              {errors.userName.message}
            </span>
          )}
        </FormGroup>

        <FormGroup className="relative">
          <Input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            autoComplete="off"
            className={`text-elims-textColor bg-elims-backgroundColorLight rounded-md shadow-none border-none p-3 ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-elims-hoverColor absolute -top-4 left-1 text-[10px]">
              {errors.password.message}
            </span>
          )}
        </FormGroup>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="relative text-[12px] w-[100%] rounded-md mt-5 px-[100px] py-3 border-[1px] border-solid bg-elims-backgroundColorDark hover:bg-elims-hoverColor text-elims-hoverColor border-elims-hoverColor hover:bg-opacity-5 font-bold flex justify-center items-center"
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
