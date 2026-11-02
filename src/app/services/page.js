import Hero from "@/components/services/Hero";
import Offerings from "@/components/services/Offerings";
import Process from "@/components/services/Process";
import AddOns from "@/components/services/AddOns";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services — Scalic Digital",
  description:
    "Websites, digital marketing and local SEO for local businesses — everything you need to get more customers through the door.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <Hero />
        <Offerings />
        <Process />
        <AddOns />
        <Cta title="Not sure what you need? Let's figure it out together." label="Get a free audit" />
      </main>
      <Footer />
    </>
  );
}
