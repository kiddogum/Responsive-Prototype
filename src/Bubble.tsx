type BubbleProps = {
  text: string;
  author: string;
};

const Bubble = ({ text, author }: BubbleProps) => {
  return (
    <div className="bubble absolute w-1/3 p-4 border-2 border-secondary rounded-ss-3xl rounded-ee-3xl shadow-[4px_4px_#3F4A79] md:w-auto">
      <p className="text-desc text-left">
        {text}
        <span className="text-subtitle block mt-4">— {author}</span>
      </p>
    </div>
  );
};

export default Bubble;
