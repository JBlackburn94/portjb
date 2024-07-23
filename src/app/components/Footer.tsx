import Link from "next/link";
import { footerLinks } from "../constants";

export default function Footer() {
  return (
    <footer className="md:hidden absolute flex items-center justify-center w-full bg-background bottom-[5%]">
      <div className="bg-accent text-background flex gap-[30px] px-[14px] py-[5px] font-bold">
        {footerLinks.map(({ id, name, href }) => (
          <Link key={id} href={href}>
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
