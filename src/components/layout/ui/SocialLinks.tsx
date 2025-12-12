import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  const socials = [
    {
      icon: <FaGithub />,
      label: "@mateogall0",
      href: "https://github.com/mateogall0",
    },
    {
      icon: <FaLinkedin />,
      label: "Mateo Gallo",
      href: "https://www.linkedin.com/in/mateogallo/",
    },
    {
      icon: <MdEmail />,
      label: "mateogesede@gmail.com",
      href: "mailto:mateogesede@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-4 text-white">
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="flex items-center gap-3 hover:text-gray-300 transition"
        >
          <span className="text-2xl">{social.icon}</span>
          <span className="text-lg">{social.label}</span>
        </a>
      ))}
    </div>
  );
}
