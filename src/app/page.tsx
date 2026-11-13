import Hero from "@/components/sections/Hero";
import Differentials from "@/components/sections/Differentials";
import AboutClinic from "@/components/sections/AboutClinic";
import Treatments from "@/components/sections/Treatments";
import DoctorProfile from "@/components/sections/DoctorProfile";
import PersonalizedCare from "@/components/sections/PersonalizedCare";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Differentials />
      <AboutClinic />
      <Treatments />
      <DoctorProfile />
      <PersonalizedCare />
      <Gallery />
      <Testimonials />
      <AppointmentCTA />
      <Contact />
    </>
  );
}
