"use client";

import { contact } from "@/lib/contact";

const businessTypes = ["Restaurant", "Café / Bakery", "Salon / Spa", "Retail shop", "Clinic", "Gym", "Other"];
const needs = ["Website", "Digital marketing", "Local SEO", "Not sure yet"];

const field =
  "min-h-12 rounded-xl border border-line-2 bg-paper px-3.5 py-3 text-base font-normal focus:border-navy focus:outline-none";

// No backend yet: submitting opens the visitor's email app with the request filled in.
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const body = [
    `Name: ${data.get("name")}`,
    `Business: ${data.get("business")}`,
    `Phone: ${data.get("phone")}`,
    `Email: ${data.get("email")}`,
    `Business type: ${data.get("type")}`,
    `City: ${data.get("city")}`,
    `Needs: ${data.getAll("needs").join(", ") || "—"}`,
    "",
    data.get("message"),
  ].join("\n");
  const subject = `Free audit request — ${data.get("business") || data.get("name")}`;
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid min-w-0 flex-[2_1_560px] grid-cols-1 gap-5 rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_70px_rgba(15,27,45,0.12)] sm:grid-cols-2 sm:p-10"
    >
      <h2 className="col-span-full mt-0 mb-1 font-display text-[28px] font-bold">Request your free audit</h2>

      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Your name
        <input name="name" type="text" required autoComplete="name" placeholder="Full name" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Business name
        <input name="business" type="text" autoComplete="organization" placeholder="e.g. Spice Garden" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Phone
        <input name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@business.com" className={field} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Business type
        <select name="type" className={field}>
          {businessTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        City
        <input name="city" type="text" autoComplete="address-level2" placeholder="Your city" className={field} />
      </label>

      <fieldset className="col-span-full m-0 flex flex-col gap-2.5 border-0 p-0">
        <legend className="mb-2.5 p-0 text-sm font-medium">What do you need?</legend>
        <div className="flex flex-wrap gap-2.5">
          {needs.map((need, i) => (
            <label
              key={need}
              className="inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-line-2 px-4.5 py-2.5 text-[15px] has-checked:border-navy"
            >
              <input name="needs" type="checkbox" value={need} defaultChecked={i === 0} className="size-4.5 accent-navy" />
              {need}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="col-span-full flex flex-col gap-1.5 text-sm font-medium">
        Tell us about your business
        <textarea
          name="message"
          rows={4}
          placeholder="What do you sell, who are your customers, do you have a website already?"
          className={`${field} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="col-span-full min-h-12 cursor-pointer rounded-full border-0 bg-orange p-4.5 text-[17px] font-semibold text-navy"
      >
        Send my request
      </button>
    </form>
  );
}
