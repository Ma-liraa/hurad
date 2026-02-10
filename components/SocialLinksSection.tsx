import { GithubIcon } from "@/icons/GithubIcon";
import { LinkedinIcon } from "@/icons/LinkdinIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import SocialLinksProps from "@/type/SocialLinksProps";
import SocialLinks from "./SocialLinks";

const socialLinks: SocialLinksProps[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "#",
    color: "#0077B5",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/hurad-dev",
    color: "#ffffff",
    icon: <GithubIcon />,
  },

  {
    id: 3,
    name: "Twitter",
    url: "#",
    color: "#1DA1F2",
    icon: <TwitterIcon />,
  },
];
export default function SocialLinksSection() {
  return (
    <div className="mt-8 grid grid-cols-1 items-center gap-4 sm:grid-cols-3">
      {socialLinks.map((item) => (
        <SocialLinks key={item.id} {...item} />
      ))}
    </div>
  );
}
