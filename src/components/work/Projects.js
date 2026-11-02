"use client";

import { useState } from "react";

const filters = ["All", "Restaurant", "Café & Bakery", "Salon & Spa", "Retail Shop", "Clinic"];

const projects = [
  { industry: "Restaurant", services: "Website · Online menu · Local SEO", tone: "bg-peach text-rust" },
  { industry: "Salon & Spa", services: "Website · Bookings · Instagram marketing", tone: "bg-mint text-teal-deep" },
  { industry: "Retail Shop", services: "Website · Product catalogue · Google Ads", tone: "bg-fog text-[#3e4753]" },
  { industry: "Café & Bakery", services: "Website · Online ordering · Social media", tone: "bg-mint text-teal-deep" },
  { industry: "Restaurant", services: "Website · Table bookings · Meta Ads", tone: "bg-fog text-[#3e4753]" },
  { industry: "Clinic", services: "Website · Appointment booking · Local SEO", tone: "bg-peach text-rust" },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-18 pb-24">
      <div role="group" aria-label="Filter projects by industry" className="mb-10 flex flex-wrap gap-2.5">
        {filters.map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={filter === label}
            onClick={() => setFilter(label)}
            className={`min-h-11 cursor-pointer rounded-full border px-5 py-3 text-[15px] font-semibold ${
              filter === label ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-navy"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(340px,100%),1fr))] gap-7">
        {visible.map((project) => (
          <article
            key={project.services}
            className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white"
          >
            <div className={`flex aspect-[16/11] items-center justify-center text-sm font-medium ${project.tone}`}>
              [Project screenshot]
            </div>
            <div className="flex flex-col gap-2 p-6">
              <span className="text-xs font-semibold tracking-[0.06em] text-teal uppercase">{project.industry}</span>
              <h2 className="m-0 font-display text-2xl font-bold">[Client name]</h2>
              <p className="m-0 text-[15px] text-muted">{project.services}</p>
              <a href="#case-study" className="inline-flex min-h-11 items-center text-[15px] font-semibold underline">
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
