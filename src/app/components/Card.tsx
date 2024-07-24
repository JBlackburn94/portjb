import Button from "./Button";
import { CardProps } from "../types";

export default function Card({ title, tech, description }: CardProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-[10px]">
      <div className="bg-accent min-w-[380px] min-h-[200px]"></div>
      <h3 className="font-semibold text-[20px]">{title}</h3>
      <p>{tech}</p>
      <p>{description}</p>
      <span className="flex gap-[20px]">
        <Button text="GitHub" href="/" />
        <Button text="Live Site" href="/" />
      </span>
    </div>
  );
}
