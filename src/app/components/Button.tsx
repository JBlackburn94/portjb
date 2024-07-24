import { ButtonProps } from "../types";
import Link from "next/link";

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href} className="bg-accent text-background px-[20px] py-[5px]">
      {text}
    </Link>
  );
}
