import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// component
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between py-10 xl:pt-8 xl:pb-16">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Web Developer</span>
                <h1 className="h1 mb-6">
                    <span className="h2">Hello I am</span> <br /> <span className="hover:text-accent"><span className="text-accent hover:text-white ">Muhammad Waleed </span> <br />Zafar</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">
                    I excel at crafting elegant digital experience and I am proficient in various programming language and technologies.
                </p>
                {/* button and social */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                     <a href="/resume">
                <Button variant="outline" size="md" className="uppercase flex items-center gap-2">
                <span>Visit My CV</span>
                <FiDownload className="text-xl" />
                </Button>
                 </a>
                    <div className="mb-8 xl:mb-0">
                        <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </div>
                </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo /></div>
            </div>
        </div>
        {/* Stats */}
        <Stats />
    </section>
  )
}

export default Home;
