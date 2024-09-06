import { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { markResponsesAsOld } from "../features/ai/aiSlice";
import MotionBotIcon from "./MotionBotIcon";
import "../css/ai-reply.css";

const AIReply = ({ aiResponse = "generating...", index, time }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.chat.status); // Ensure correct slice name
  const aiResponses = useSelector((state) => state.chat.aiResponses); // Ensure correct slice name

  const isLoading = status === "loading" && aiResponses[index]?.isNew;

  useEffect(() => {
    if (status === "succeeded" && aiResponses.length > 0) {
      const latestResponse = aiResponses[aiResponses.length - 1];
      if (latestResponse.isNew) {
        dispatch(markResponsesAsOld());
      }
    }
  }, [status, aiResponses, dispatch]);

  // Ensure aiResponse is a string
  const responseText =
    typeof aiResponse === "string" ? aiResponse : JSON.stringify(aiResponse);

  return (
    <div className="flex items-end justify-start gap-2 mb-2 w-full">
      <div className="flex justify-center items-center p-2 bg-gradient-to-br from-primary-500 via-secondary-500 to-danger-500 rounded-medium rounded-ee-none ">
        <FaRobot className="text-3xl text-white" />
      </div>

      <div className="flex flex-col gap-2 shadow-small rounded-e-medium rounded-ss-medium p-5 bg-content1">
        {isLoading ? (
          <MotionBotIcon
            botClassName="text-base"
            className="p-1 w-10 h-10"
            resolveSeconds={0}
          />
        ) : (
          <div>
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    style={{
                      color: "hsl(var(--nextui-primary))",
                      textDecoration: "underline",
                    }}
                    {...props}
                  />
                ),
              }}
            >
              {responseText}
            </ReactMarkdown>
          </div>
        )}

        <span className="text-sm text-default-300">{time}</span>
      </div>
    </div>
  );
};

export default AIReply;
