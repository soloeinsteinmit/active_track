import React, { useEffect, useRef, useState } from "react";
import AIReply from "../../components/AIReply";
import UserPrompt from "../../components/UserPrompt";
import { useSelector, useDispatch } from "react-redux";
import { markResponsesAsOld } from "../../features/ai/AiSlice";

const formatTextForDisplay = (text) => {
  if (!text) return "";
  return text.replace(/ /g, "\u00a0").replace(/\n/g, "<br>");
};

const MessagesScreen = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  // const userName = useSelector((state) => state.user.value) || "GU";
  const messages = useSelector((state) => state.message.messages);
  const aiResponses = useSelector((state) => state.chat.aiResponses);
  const status = useSelector((state) => state.chat.status);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, aiResponses]);

  return (
    <div className="flex flex-col">
      {messages.map((message, index) => (
        <div
          className="flex flex-col gap-5 py-4 justify-end items-end mx-auto w-[900px]"
          key={index}
        >
          <UserPrompt
            userName={userInfo.name}
            userPrompt={message.text}
            promptTime={message.time}
          />
          <AIReply
            aiResponse={aiResponses[index]?.text}
            index={index}
            time={message.time}
          />
        </div>
      ))}
      <div ref={messagesEndRef} className="mb-10" />
    </div>
  );
};

export default MessagesScreen;
