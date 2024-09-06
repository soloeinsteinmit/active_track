import { Input } from "@nextui-org/input";
import Logotext from "../components/Logotext";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@nextui-org/button";
import { NavLink } from "react-router-dom";
import { ThemeSwitch } from "../components/ThemeSwitcher";
import { FaRobot } from "react-icons/fa";
import { en_strings } from "../locales/en";
import { useDispatch } from "react-redux";
import { loginUserAsync } from "../State/userSlice";
import { useState } from "react";

const words = [
  en_strings.words1,
  en_strings.words2,
  en_strings.words3,
  en_strings.words4,
  en_strings.words5,
  en_strings.words6,
  en_strings.words7,
  en_strings.words8,
];

/**
 * Renders a dynamic word display component with a typewriter effect using the provided words.
 *
 * @return {JSX.Element} The rendered word display component.
 */
function GetStarted() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log(name);
    await dispatch(loginUserAsync(name));
  };
  return (
    <div className="flex h-dvh">
      <div className="flex flex-col gap-[30%] justify-between bg-primary-50 w-[60%] p-10 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-1">
            <Logotext className="text-primary font-extrabold text-2xl" />{" "}
            <FaRobot className="text-primary text-2xl pb-[2px]" />
          </div>
          <ThemeSwitch />
        </div>

        <p className="text-primary font-semibold text-5xl">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={words}
            cursorStyle="•"
          />
        </p>

        <p className="text-base text-primary">
          Welcome to AssistU AI <FaRobot className="inline text-xl pb-[3px]" />,
          a comprehensive chatbot designed to streamline university services for
          students, faculty, and staff. AssistU AI leverages advanced Natural
          Language Processing (NLP) and Machine Learning (ML) techniques to
          provide timely, accurate, and helpful responses with more than 90%
          accuracy to a wide array of university-related inquiries.
          <br />
          <br />
          <strong>Note: </strong>
          This version focuses on IT services for the initial release, with
          plans to include other features in future updates.
        </p>
      </div>
      <div className="relative flex flex-col gap-7 items-center justify-center w-[40%] bg-content1">
        <p className="text-2xl font-semibold">Let get started</p>
        <Input
          type="text"
          label="Fullname"
          placeholder="Enter your name"
          className="max-w-[70%]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <NavLink to="message_assistu" className="w-[70%] ">
          <Button
            color="primary"
            variant="shadow"
            className="w-full h-[45px]"
            onClick={handleLogin}
          >
            Get started
          </Button>
        </NavLink>

        <p className="flex items-center justify-start gap-1 absolute bottom-5 left-[50%] translate-x-[-50%] text-small text-default-400">
          <FaRobot className="pb-[2px]" />
          AssistU AI
        </p>
      </div>
    </div>
  );
}

export default GetStarted;

/**
 * Renders a word display component with a title and description.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the word display.
 * @param {string} props.description - The description of the word display.
 * @return {JSX.Element} The rendered word display component.
 */
const WordDisplay = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1 text-primary">
      <p className="font-semibold text-3xl">{title}</p>
      <span>{description}</span>
    </div>
  );
};
