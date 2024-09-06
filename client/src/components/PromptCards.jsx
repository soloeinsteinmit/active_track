import { IoArrowForward } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addMessage } from "../features/ai/messageSlice";
import { getCurrentFormattedTime } from "../pages/ai_conversation/ChatScreen";

function PromptCards({
  promptText = "How do I connect to the campus Wi-Fi network?",
}) {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const formattedTime = getCurrentFormattedTime();
    await dispatch(addMessage({ text: promptText, time: formattedTime }));
  };

  return (
    <p
      className="text-sm bg-content3 cursor-pointer font-medium text-center p-4 rounded-small max-w-sm w-[300px] hover:bg-content4 transition-all duration-300 ease-in-out transform hover:translate-x-1 active:bg-gray-300 active:scale-95"
      onClick={handleClick}
    >
      {promptText} <IoArrowForward className="inline" />
    </p>
  );
}

export default PromptCards;
