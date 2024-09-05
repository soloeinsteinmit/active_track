import { useMemo, useState } from "react";
import GradientBackground from "../layout/GradientBackground";
import { Button, Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "./Login";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [value, setValue] = useState("");
  const navigate = useNavigate(); // To navigate programmatically

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  /**
   * Handles the submission of the registration form.
   * @param {React.FormEvent<HTMLFormElement>} e - The form event.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !height || !weight || !age) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    if (isInvalid) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    // Hash the password using CryptoJS
    // TODO: Consider Server-Side Hashing
    const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    try {
      const response = await axios.post("http://localhost:1111/api/user", {
        name,
        email,
        password_hash: hashedPassword,
        weight: parseFloat(weight),
        height: parseFloat(height),
        age: parseInt(age),
      });

      if (response.status === 200) {
        setSuccessMessage("Registration successful! You can now log in.");
        navigate("/dashboard");
        setErrorMessage("");
      } else {
        throw new Error("Registration failed");
      }
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
          onSubmit={handleSubmit}
          className="rounded-xl w-full max-w-[500px] px-10 py-10 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 flex flex-col gap-5"
        >
          <div className="w-full flex flex-col">
            <p className="text-3xl text-center font-bold">Welcome 👋</p>
            <span className="text-center w-full">
              Fill in the forms to register
            </span>
          </div>
          <Input
            type="text"
            label="Name"
            placeholder="Enter your name"
            isRequired
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            label="Email"
            isRequired
            placeholder="Enter your email"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "default"}
            errorMessage="Please enter a valid email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex gap-3">
            <Input
              type="number"
              label="Height"
              isRequired
              placeholder="0.00"
              labelPlacement="outside"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">cm</span>
                </div>
              }
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <Input
              type="number"
              label="Weight"
              isRequired
              placeholder="0.00"
              labelPlacement="outside"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">kg</span>
                </div>
              }
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <Input
              type="number"
              label="Age"
              isRequired
              placeholder="18"
              labelPlacement="outside"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <Button type="submit" color="primary" className="w-full">
            Register
          </Button>

          <NavLink to={"/login"}>
            <Button color="primary" variant="flat" className="w-full">
              ⬅️ Login
            </Button>
          </NavLink>
        </form>
      </div>
    </GradientBackground>
  );
};

export default Register;
