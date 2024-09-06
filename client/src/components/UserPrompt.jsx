const getInitials = (name) => {
  const nameParts = name.split(" ");
  if (nameParts.length > 1) {
    return nameParts[0].charAt(0) + nameParts[1].charAt(0);
  } else {
    return name.charAt(0) + name.charAt(1);
  }
};

function UserPrompt({
  userPrompt = "User prompt here...",
  userName = "John Doe",
  promptTime = "12:53 PM",
}) {
  // State to hold the response time
  // const [promt, setResponseTime] = useState("");
  const initials = getInitials(userName).toUpperCase();

  return (
    <div className="flex items-end justify-start gap-2 max-w-[600px]">
      <p className="flex flex-col gap-2 shadow-small rounded-s-medium rounded-se-medium p-5 bg-content1">
        {userPrompt}

        <span className="text-sm text-right text-default-300">
          {promptTime}
        </span>
      </p>
      <div className="flex justify-center items-center p-2 bg-gradient-to-br from-emerald-400 via-cyan-500 to-sky-600 rounded-medium rounded-es-none min-h-11 min-w-11">
        <p className="text-base font-semibold text-white">{initials}</p>
      </div>
    </div>
  );
}

export default UserPrompt;
