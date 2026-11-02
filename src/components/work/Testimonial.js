import { Icon } from "@/components/icons";

export default function Testimonial() {
  return (
    <section className="mx-auto flex max-w-[960px] flex-col items-center gap-6 px-6 py-26 text-center">
      <Icon size={48} stroke="#0B6E69" strokeWidth={1.8}>
        <path d="M7 7h4v4c0 3-1.5 5-4 6M15 7h4v4c0 3-1.5 5-4 6" />
      </Icon>
      <blockquote className="m-0 font-display text-2xl leading-[1.3] font-medium tracking-[-0.01em] sm:text-[34px]">
        “[Add a real quote from a happy client here.]”
      </blockquote>
      <div className="flex items-center gap-3.5">
        <span className="size-13 rounded-full bg-mint" />
        <div className="text-left">
          <strong className="block">[Client name]</strong>
          <span className="text-[15px] text-muted">[Owner, Business name]</span>
        </div>
      </div>
    </section>
  );
}
