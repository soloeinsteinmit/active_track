import Card1 from "../../components/Card1";
import { PiSunBold, PiShieldWarningBold } from "react-icons/pi";

import { TbBolt } from "react-icons/tb";
import TextCard from "../../components/TextCard";
import PromptCards from "../../components/PromptCards";
import { useSelector } from "react-redux";
import MotionBotIcon from "../../components/MotionBotIcon";

// Define data arrays for different sections
const examplesData = [
  "🏃 How can I track my daily steps?",
  "💪 What's the best workout routine for building muscle?",
  "🧘 How can I incorporate meditation into my fitness routine?",
];

const examplesData1 = [
  "🍎 What should my daily calorie intake be?",
  "💤 How can I improve my sleep quality?",
  "📈 How do I track my progress over time?",
];

const examplesData2 = [
  "🔥 How do I burn more calories during my workouts?",
  "❤️ What should my target heart rate be during exercise?",
  "🤒 How does my temperature affect my workout performance?",
];

function NoChats() {
  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div className="flex flex-col gap-4 items-center justify-center mx-auto py-10">
      <MotionBotIcon />

      <p className="text-xl font-bold">
        Hi {userInfo.name.split(" ")[0]}, how can I AssistU with your{" "}
        <span className="text-primary">fitness </span>
        today?
      </p>

      <div className="flex gap-5">
        {/* Examples section */}
        <div className="flex flex-col gap-5">
          <Card1 icon={<PiSunBold className="text-xl" />} text="Examples" />
          <div className="flex flex-col gap-4">
            {/* Render PromptCards dynamically */}
            {examplesData.map((prompt, index) => (
              <PromptCards key={index} promptText={prompt} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Card1 icon={<PiSunBold className="text-xl" />} text="Examples" />
          <div className="flex flex-col gap-4">
            {/* Render PromptCards dynamically */}
            {examplesData1.map((prompt, index) => (
              <PromptCards key={index} promptText={prompt} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Card1 icon={<PiSunBold className="text-xl" />} text="Examples" />
          <div className="flex flex-col gap-4">
            {/* Render PromptCards dynamically */}
            {examplesData2.map((prompt, index) => (
              <PromptCards key={index} promptText={prompt} />
            ))}
          </div>
        </div>

        {/* Capabilities section */}
        {/* <div className="flex flex-col gap-5">
          <Card1 icon={<TbBolt className="text-xl" />} text="Capabilities" />
          <div className="flex flex-col gap-4">
            
            {capabilitiesData.map((item, index) => (
              <TextCard key={index} text={item.text} />
            ))}
          </div>
        </div>
 */}
        {/* Limitations section */}
        {/* <div className="flex flex-col gap-5">
          <Card1
            icon={<PiShieldWarningBold className="text-xl" />}
            text="Limitations"
          />
          <div className="flex flex-col gap-4">
            
            {limitationsData.map((item, index) => (
              <TextCard key={index} text={item.text} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NoChats;
