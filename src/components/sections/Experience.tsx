"use client";

import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-10">Experience</h2>

      <div className="relative">
        {/* Solid line goes full height */}
        <div className="absolute left-4 top-1 bottom-0 w-px bg-gray-300" />

        {/* Dashed segment starts BELOW the top dot */}
        <div className="absolute left-4 -top-7 h-10 w-px border-l border-dashed border-gray-300" />

        <ul className="space-y-10">
          {experience.map((item) => (
            <li key={item.id} className="relative pl-12">
              <span
                className={`absolute left-[10px] top-1.5 h-3 w-3 rounded-full glass border border-1
                  ${item.type === 0 ? "border-white/20" : "border-blue-600"}
                `}
              />

              <div>
                <h3 className="text-lg font-medium">
                  {item.role} · {item.company}
                </h3>

                <p className="text-sm text-gray-300 mb-1">
                  {item.type == 1 ? "Worker": "Student"}
                </p>

                <p className="text-sm text-gray-200 mb-1">
                  {item.start} — {item.end}
                </p>

                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
