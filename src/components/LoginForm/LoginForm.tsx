import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { useMutation } from "@/app/graphql";
import { LOGIN_MUTATION } from "@/app/graphql/operations/auth";
import { setAuthToken } from "@/app/auth/session";
import type { AuthLoginInput } from "@/shared/types/auth";

import { getLoginErrorMessage, loginFormSchema } from "./helpers";
import "./styles.css";

export function LoginForm() {
  const navigate = useNavigate();

  const [login, { loading }] = useMutation(LOGIN_MUTATION);

  const [rememberMe, setRememberMe] = useState(false);
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginInput>({
    resolver: loginFormSchema,
  });

  const onSubmit = async (input: AuthLoginInput) => {
    try {
      const { data, error } = await login({
        variables: {
          input,
        },
      });

      if (error) {
        setFormError(error.message);
        return;
      }

      const token = data?.login.token;
      if (!token) {
        setFormError("Login failed. No token returned.");
        return;
      }

      setAuthToken(token, rememberMe);
      navigate(0);
    } catch (err) {
      setFormError(
        err instanceof Error ? err.message : "An unknown error occurred.",
      );
    }
  };

  useEffect(() => {
    setFormError(getLoginErrorMessage(errors));
  }, [errors]);

  return (
    <form className="login-form-component" onSubmit={handleSubmit(onSubmit)}>
      <label className="login-field">
        <span>Username</span>
        <input type="text" {...register("username")} disabled={loading} />
      </label>

      <label className="login-field">
        <span>Password</span>
        <input type="password" {...register("password")} disabled={loading} />
      </label>

      <label className="login-remember">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(event) => setRememberMe(event.target.checked)}
          disabled={loading}
        />
        <span>Remember me on this device</span>
      </label>

      {formError && (
        <p className="login-card__error" role="alert">
          {formError}
        </p>
      )}

      <button type="submit" className="login-card__submit" disabled={loading}>
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
