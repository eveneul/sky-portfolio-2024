import { Link } from "react-router-dom";

export function ViewResume() {
  return (
    <a
      href="https://bit.ly/sky-portfolio-2024"
      target="_blank"
      className="link-resume"
    >
      View Resume
    </a>
  );
}

export function OutsideLink({ text, url }: { text: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      className="w-[308px] h-[87px] flex justify-center items-center font-en  leading-[1] uppercase text-white text-40 border-4 border-solid border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
    >
      <span className="translate-y-4">{text}</span>
    </a>
  );
}
