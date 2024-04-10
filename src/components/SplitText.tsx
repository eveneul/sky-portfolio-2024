export default function SplitText({
  text,
  style,
}: {
  text: string;
  style?: string;
}) {
  return (
    <div
      className={`split-text relative flex justify-center items-center uppercase ${style}`}
    >
      {text.split("").map((char, index) => {
        return (
          <span
            key={index}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
            className="inline-block"
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
