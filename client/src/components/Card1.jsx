function Card1({ icon, text = "Text here..." }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {icon}
      <p className="text-sm font-semibold">{text}</p>
    </div>
  );
}

export default Card1;
