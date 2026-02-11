import SocialLinksProps from "@/type/SocialLinksProps";
import SocialLinks from "./SocialLinks";
import { LinkedinIcon } from "@/icons/LinkdinIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";

const socialLinks: SocialLinksProps[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammad-ali-liravi?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    color: "#0077B5",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/Ma-liraa",
    color: "#ffffff",
    icon: <GithubIcon />,
  },

  {
    id: 3,
    name: "Twitter",
    url: "https://x.com/ma__lira",
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
