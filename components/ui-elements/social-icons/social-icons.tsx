import Link from "next/link";
import { IconType } from "react-icons";
import { FaGithubAlt } from "react-icons/fa";
import { RxDiscordLogo } from "react-icons/rx";
import { IoLogoLinkedin } from "react-icons/io";

type Social = {
  name: string;
  href: string;
  icon: IconType;
};

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks: Social[] = [
    {
      name: "Ariel LinkedIn Profile",
      href: "https://www.linkedin.com/in/ariel-aharon-580899202/",
      icon: IoLogoLinkedin,
    },
  ];

  return (
    <div
      className={
        `flex flex-col items-center justify-center lg:mb-0 mb-241` + className
          ? className
          : ""
      }
    >
      <div className="flex space-x-5">
        {socialLinks.map((link) => (
          <Link
            target={"_blank"}
            key={link.name}
            href={link.href}
            className="ease-in-out duration-200 hover:scale-[115%]"
          >
            <link.icon className="w-8 h-8" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
