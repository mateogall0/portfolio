import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div>
      <h3 className="text-xl text-center tracking-wider text-gray-400 font-bold m-4">
        Skillset
      </h3>

      <div className="grid grid-cols-9 sm:grid-cols-9 md:grid-cols-9">
        {skills.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-sm text-gray-300 hover:text-white transition p-2"
            title={label}
          >
            <Icon className="text-4xl" />
          </a>
        ))}
      </div>
    </div>
  );
}
