import SendIcon from "../../assets/SendIcon";

// import { en_strings } from "../locales/en";
import NoChats from "./NoChats";

import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

import MessagesScreen from "./MessagesScreen";

import { Tooltip, Button, Chip, Textarea, Avatar } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import ThemeSwitch from "../../components/ThemeSwitcher";
import { logoutUser } from "../../features/ai/userSlice";
import {
  setMessage,
  addMessage,
  clearMessages,
} from "../../features/ai/messageSlice";
import { fetchAIResponse, clearAIMessages } from "../../features/ai/AiSlice";
import { PiChatTeardropSlashBold } from "react-icons/pi";

export const getCurrentFormattedTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const ChatScreen = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.user.userInfo);
  const inputMessage = useSelector((state) => state.message.inputMessage);
  const messages = useSelector((state) => state.message.messages) || [];

  const handleChange = (e) => {
    dispatch(setMessage(e.target.value));
  };

  const handleLogout = async () => {
    await dispatch(clearMessages());
    await dispatch(clearAIMessages());
    await dispatch(logoutUser());
    // Clear localStorage
    localStorage.clear();
  };

  const handleSend = async () => {
    const formattedTime = getCurrentFormattedTime();

    await dispatch(
      addMessage({
        text: inputMessage,
        sender: userInfo.name,
        time: formattedTime,
      })
    );

    await dispatch(fetchAIResponse(inputMessage));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const trimmedInput = !inputMessage.trim();

      if (!trimmedInput) {
        handleSend();
      }
    }
  };

  return (
    <>
      <div className="relative bg-content2 flex flex-col justify-between h-dvh overflow-hidden mx-auto w-full">
        <div className="sticky top-0 flex gap-5 items-center justify-between px-20 w-full bg-content1 py-4 border-b-1 border-divider z-50">
          <Chip color="primary" variant="dot">
            FitFlow AI
          </Chip>
          <div className="flex gap-3 items-center justify-start">
            <Chip color="primary" variant="flat" size="large">
              {userInfo.name || "Guest"}
            </Chip>
            <ThemeSwitch />

            <Tooltip showArrow={true} content="Clear Conversation">
              <Button
                isIconOnly
                color="primary"
                variant="light"
                aria-label="send"
                onClick={handleLogout}
              >
                <PiChatTeardropSlashBold className="text-xl" />
              </Button>
            </Tooltip>
          </div>
        </div>

        <div className="w-full h-dvh overflow-auto custom-scrollbar">
          {messages.length === 0 ? <NoChats /> : <MessagesScreen />}
        </div>

        <div className="sticky bottom-0 bg-content2 flex w-full z-50 pb-3 flex-col">
          <Textarea
            className=" max-w-[800px] mx-auto "
            onKeyDown={handleKeyPress}
            style={{ whiteSpace: "pre-line" }} // Preserve white spaces and line breaks
            classNames={{
              innerWrapper: "items-center",
              label: "text-primary",
              input: "text-base",
            }}
            placeholder="Type your message here..."
            onChange={handleChange}
            value={inputMessage}
            variant="bordered"
            minRows={1}
            radius="full"
            endContent={
              <div className="flex  h-full items-end ">
                <Button
                  isIconOnly
                  color="primary"
                  variant="shadow"
                  onClick={handleSend}
                  aria-label="send"
                  isDisabled={!inputMessage.trim()} // Disable the button if inputMessage is empty or whitespace
                >
                  <SendIcon />
                </Button>
              </div>
            }
          />
          <span className="mx-auto text-sm mt-2 text-default-400">
            {/* AssistU AI ChatBot Developed by{" "}
            <NavLink className="underline"> Solomon Eshun</NavLink> */}
          </span>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
