"use client";
import {
  Box,
  Button,
  FormGroup,
  Input,
  Snackbar,
  CircularProgress,
  LinearProgress,
  Alert,
} from "@mui/material";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useMemo, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import ContactService, { MailNotifyData } from "@/services/contact";
import { ApiResponse } from "@/models/api/ApiModels";

const SEND_MAIL_SUCCESS =
  "Messages sent successfully. I will respond to you later.";
const SEND_MAIL_FAIL = "Something went wrong. Please send your message later!";

export default function FormContact() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailNotifyData>();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [disableSend, setDisableSend] = useState(false);

  const mailService = useMemo(() => new ContactService(), []);

  const onSubmit: SubmitHandler<MailNotifyData> = (data) => {
    setDisableSend(true);

    const countSend = setTimeout(() => {
      setSnackbarText(SEND_MAIL_SUCCESS);
      setDisableSend(false);
      setOpenSnackbar(true);
      reset();
    }, 15000);

    mailService
      .PostMailNotify(data)
      .then((res: ApiResponse<any>) => {
        clearTimeout(countSend);
        if (res.success) {
          setSnackbarText(SEND_MAIL_SUCCESS);
        } else {
          setSnackbarText(SEND_MAIL_FAIL);
        }
        setDisableSend(false);
        setOpenSnackbar(true);
        reset();
      })
      .catch((any) => {
        clearTimeout(countSend);
        setSnackbarText(SEND_MAIL_FAIL);
        setDisableSend(false);
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      component={"form"}
      autoComplete="off"
      className="w-[100%] my-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup className="grid grid-cols-2 gap-4 gap-y-8 pt-5">
        <FormGroup className="relative">
          <Input
            id="name"
            {...register("name", { required: "Name is required" })}
            autoComplete="off"
            className={`text-elims-textColor bg-elims-backgroundColorLight rounded-md shadow-none border-none p-3 ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Name"
            disabled={disableSend}
          />
          {errors.name && (
            <span className="text-elims-hoverColor absolute -top-4 left-1 text-[10px]">
              {errors.name.message}
            </span>
          )}
        </FormGroup>
        <FormGroup className="relative">
          <Input
            id="mail"
            type="email"
            {...register("mail", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
            })}
            autoComplete="off"
            className={`text-elims-textColor bg-elims-backgroundColorLight rounded-md shadow-none border-none p-3 ${
              errors.mail ? "border-red-500" : ""
            }`}
            placeholder="Mail"
            disabled={disableSend}
          />
          {errors.mail && (
            <span className="text-elims-hoverColor absolute -top-4 left-1 text-[10px]">
              {errors.mail.message}
            </span>
          )}
        </FormGroup>
        <FormGroup className="relative col-span-2 ">
          <Input
            id="subject"
            {...register("subject", { required: "Subject is required" })}
            autoComplete="off"
            className={`text-elims-textColor bg-elims-backgroundColorLight rounded-md shadow-none border-none p-3 ${
              errors.subject ? "border-red-500" : ""
            }`}
            placeholder="Subject"
            disabled={disableSend}
          />
          {errors.subject && (
            <span className="text-elims-hoverColor absolute -top-4 left-1 text-[10px]">
              {errors.subject.message}
            </span>
          )}
        </FormGroup>
        <FormGroup className="relative col-span-2 ">
          <Input
            id="content"
            {...register("body", { required: "Content is required" })}
            rows={5}
            multiline
            autoComplete="off"
            className={`text-elims-textColor bg-elims-backgroundColorLight rounded-md shadow-none border-none p-3  ${
              errors.body ? "border-red-500" : ""
            }`}
            placeholder="Content"
            disabled={disableSend}
          />
          {errors.body && (
            <span className="text-elims-hoverColor absolute -top-4 left-1 text-[10px]">
              {errors.body.message}
            </span>
          )}
        </FormGroup>
      </FormGroup>
      <Button
        className="relative text-[12px] rounded-md mt-5 w-[100%] md:w-auto px-[100px] py-3 border-[1px] border-solid bg-elims-backgroundColorDark hover:bg-elims-hoverColor text-elims-hoverColor border-elims-hoverColor hover:bg-opacity-5 font-bold flex justify-center gap-2 items-center "
        type="submit"
        variant="contained"
        disabled={disableSend}
      >
        {!disableSend && (
          <>
            Send Me
            <SendIcon fontSize="small" className="pb-[1.5px]" />
          </>
        )}
        {disableSend && (
          <span className="text-elims-hoverColor flex flex-col w-[100%]">
            Sending
            <LinearProgress
              sx={{
                backgroundColor: "#ffc107",
                position: "absolute",
                width: "94%",
                left: "3%",
                bottom: 5,
              }}
            />
          </span>
        )}
      </Button>
      <Snackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        className="fixed left-3 bottom-0"
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarText == SEND_MAIL_SUCCESS ? "success" : "error"}
          variant="filled"
        >
          {snackbarText}
        </Alert>
      </Snackbar>
    </Box>
  );
}
