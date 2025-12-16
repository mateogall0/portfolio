import { socials } from "@/data/socials";

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-4 mt-4 text-white">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.href}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-3"
          >
            <Icon className="text-2xl" />
            <span className="text-lg">{social.label}</span>
          </a>
        );
      })}
    </div>
  );
}
