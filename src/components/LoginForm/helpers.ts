import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import type { AuthLoginInput } from "@/shared/types/auth";
import type { FieldErrors } from "react-hook-form";

const schema = yup
  .object({
    username: yup.string().trim().required(),
    password: yup.string().required(),
  })
  .required();

export const loginFormSchema = yupResolver(schema);

export const getLoginErrorMessage = (
  formErrors: FieldErrors<AuthLoginInput>,
) => {
  if (formErrors) {
    if (formErrors.username && formErrors.password) {
      return "Username and password are required.";
    }

    if (formErrors.username) {
      return "Username is required.";
    }
    if (formErrors.password) {
      return "Password is required.";
    }
  }

  return "";
};
