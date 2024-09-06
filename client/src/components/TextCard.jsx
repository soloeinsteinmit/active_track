function TextCard({ text = "text here..." }) {
  return (
    <p className="text-sm bg-content3 cursor-default font-medium text-center p-4 rounded-small max-w-sm w-[300px]">
      {text}
    </p>
  );
}

export default TextCard;
