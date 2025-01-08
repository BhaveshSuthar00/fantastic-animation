import { ThreeDCard } from "@/components/3dCard";
import AboutUs from "@/components/AboutUs";
import { AnimatedTestimonialsParents } from "@/components/AnimatedTestimonialsParents";
import { AuroraBackgroundDemo } from "@/components/AuroraBackground";
import { AppleCardsCarouselDemo } from "@/components/CardsCarousel";
import ContactUs from "@/components/ContactUs";
import HeroHome from "@/components/HeroHome";
import HomeData from "@/components/Home";
import Navbar from "@/components/Navbar";
import ParallexComponent from "@/components/ParallexComponent";
import StickyParallax from "@/components/StickyParallax";
import Footer from "@/components/Footer";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HomeData/> */}
      <HeroHome />
      {/* <AuroraBackgroundDemo /> */}
      <AppleCardsCarouselDemo />
      {/* <ParallexComponent /> */}
      {/* <StickyParallax /> */}
      <AboutUs />
      <InfiniteMovingCards
        items={[
          {
            quote : "Testimonial 1", 
            // name : "Edgar Allan Poe", 
            // title : "A Dream Within a Dream", 
          },
          {
            quote : "Testimonial 2", 
            // name : "Edgar Allan", 
            // title : "A Dream Within a Dream", 
          },
          {
            quote : "Testimonial 3", 
            // name : "Edgar Poe", 
            // title : "A Dream Within a Dream", 
          },
        ]}
        direction={"left"}
        speed = {"fast"}
        pauseOnHover = {false}
      />
      <ContactUs />
    </>
  );
}
