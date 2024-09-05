import { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GradientBackground from "../layout/GradientBackground";
import { Button, Input } from "@nextui-org/react";

import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // To navigate programmatically
  const dispatch = useDispatch();

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (isInvalid) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    try {
      await dispatch(login({ email, password }));

      setSuccessMessage("Login successful!");
      setErrorMessage("");
      navigate("/dashboard"); // Redirect to dashboard on success
    } catch (error) {
      setErrorMessage(
        error.response ? error.response.data.error : error.message
      );
    }
  };

  return (
    <GradientBackground>
      <div className="mx-auto my-auto w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleOnSubmit}
          className="rounded-xl w-full max-w-[500px] px-10 py-10 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 flex flex-col gap-5"
        >
          <div className="w-full flex flex-col">
            <p className="text-3xl text-center font-bold">Welcome Back</p>
            <span className="text-center w-full">
              Please login with your email and password
            </span>
          </div>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Please enter a valid email"
            onValueChange={(val) => setEmail(val)}
            className="w-full"
            isRequired
            value={email}
          />
          <Input
            label="Password"
            isRequired
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            onValueChange={(val) => setPassword(val)}
            className="w-full"
          />
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <Button type="submit" color="primary" className="w-full">
            Login
          </Button>

          <NavLink to={"/register"}>
            <Button color="primary" variant="flat" className="w-full">
              Register ➡️
            </Button>
          </NavLink>
        </form>
      </div>
    </GradientBackground>
  );
};

export default Login;

export const EyeSlashFilledIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
      fill="currentColor"
    />
    <path
      d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
      fill="currentColor"
    />
    <path
      d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C10.420 7.95969 9.140 9.23969 9.140 10.81969C9.140 11.93969 10.200 12.91969 11.070 13.22969L6.490 7.64969C6.050 7.20969 5.490 7.20969 5.050 7.64969L3.530 9.16969C2.800 9.91969 3.070 10.9497 3.760 11.5997L4.980 12.8197C5.450 13.2497 6.010 13.5597 6.620 13.6897C6.930 13.7597 7.320 13.7797 7.700 13.7697C7.750 13.7697 7.800 13.7597 7.860 13.7497C7.950 13.7397 8.020 13.7197 8.090 13.6897C8.550 13.5197 8.970 13.3597 9.360 13.2297L12.540 10.0697C12.950 9.97969 13.380 10.0497 13.790 10.2197L18.25 5.75969C18.670 5.33969 18.610 4.74969 18.25 4.43969C17.890 4.11969 17.300 4.17969 16.880 4.61969L15.280 6.22969L18.25 5.74969Z"
      fill="currentColor"
    />
    <path
      d="M2.99981 3.28976C3.34981 2.93976 3.92981 2.93976 4.36981 3.36976L21.2498 20.2498C21.6898 20.6798 21.6898 21.2598 21.2498 21.6798C20.8098 22.1198 20.2298 22.0698 19.8098 21.6398L16.8698 18.6998C16.6398 18.4698 16.3798 18.2998 16.0898 18.1798L16.5898 17.6798L19.1398 15.1298C19.2698 14.9798 19.4098 14.8598 19.5698 14.7598C19.5898 14.7498 19.6098 14.7398 19.6298 14.7198C19.8798 14.4598 20.1398 14.2298 20.4298 14.0298C20.6798 13.8698 20.8798 13.6898 21.0798 13.5098L20.8598 13.2898C20.3498 12.7798 19.8798 12.3398 19.4298 11.9598L17.7998 10.3298L13.8098 14.3198C12.9398 15.1898 11.7298 15.7598 10.3998 15.7598C9.9498 15.7598 9.4698 15.6798 9.0398 15.5398L11.6998 12.8798C12.4798 12.0998 13.0398 11.3898 13.5698 10.7398C13.6498 10.5798 13.7398 10.4098 13.8498 10.2298L11.8098 8.18976L7.43981 12.5598L8.27981 13.3998C8.64981 13.7698 9.02981 14.1298 9.42981 14.4698C9.58981 14.6098 9.74981 14.7598 9.90981 14.9198C10.1298 15.1698 10.3398 15.4398 10.5898 15.7098C10.7498 15.8698 10.9398 16.0898 11.1298 16.3098C11.3298 16.5298 11.5198 16.7498 11.7298 16.9798C11.9798 17.2798 12.2298 17.5698 12.5098 17.8498L13.0698 18.3798L10.5498 20.8898L7.35981 17.7198L4.61981 15.0398L2.99981 13.4198V13.4198C2.63981 13.0598 2.34981 12.6698 2.09981 12.2398L2.40981 11.9198L5.21981 9.10976C5.50981 8.81976 5.83981 8.53976 6.18981 8.24976L8.74981 5.68976L8.66981 5.61976L5.34981 2.29976C4.98981 1.93976 4.42981 1.93976 4.06981 2.29976L2.99981 3.36976V3.28976Z"
      fill="currentColor"
    />
  </svg>
);

export const EyeFilledIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M12 6.50002C10.42 6.50002 9.14001 7.78002 9.14001 9.36002C9.14001 10.94002 10.42001 12.22002 12 12.22002C13.58001 12.22002 14.86001 10.94002 14.86001 9.36002C14.86001 7.78002 13.58001 6.50002 12 6.50002ZM12 10.83002C11.50001 10.83002 11.14001 10.47002 11.14001 9.96002C11.14001 9.45002 11.50001 9.09002 12 9.09002C12.50001 9.09002 12.86001 9.45002 12.86001 9.96002C12.86001 10.47002 12.50001 10.83002 12 10.83002ZM12 2.50002C6.86001 2.50002 2.29001 6.73002 1.07001 10.57002C0.87001 11.09002 0.87001 11.64002 1.07001 12.15002C2.29001 15.99002 6.86001 20.22002 12 20.22002C17.14001 20.22002 21.71001 15.99002 22.93001 12.15002C23.13001 11.64002 23.13001 11.09002 22.93001 10.57002C21.71001 6.73002 17.14001 2.50002 12 2.50002ZM12 18.50002C8.22001 18.50002 5.04001 15.22002 3.31001 12.15002C2.94001 11.64002 2.94001 11.09002 3.31001 10.58002C5.04001 7.51002 8.22001 4.23002 12 4.23002C15.78001 4.23002 18.96001 7.51002 20.69001 10.58002C21.06001 11.09002 21.06001 11.64002 20.69001 12.15002C18.96001 15.22002 15.78001 18.50002 12 18.50002Z"
      fill="currentColor"
    />
  </svg>
);
