"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiShopify } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// About data
const about = {
  title: "About me",
  description: "I am based in Islamabad, specializing in WordPress development, UI/UX design, and Shopify solutions. Experienced in HTML, CSS, JavaScript, Next.js, and React, dedicated to crafting seamless digital experiences and optimizing online presence.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Waleed Zafar"
    },
    {
      fieldName: "Father Name",
      fieldValue: "Zafar Iqbal"
    },
    {
      fieldName: "Phone",
      fieldValue: "+923436157817"
    },
    {
      fieldName: "Email",
      fieldValue: "waleedzafar187@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "Urdu, English"
    },
  ]
};

// Experience data
const experience = {
  title: 'My experience',
  description: "With over 3 years in WordPress, UI/UX design, and Shopify development, I excel in HTML, CSS, JavaScript, Next.js, and React. Skilled in creating robust, user-centric solutions that elevate digital platforms and drive business growth.",
  items: [
    {
      company: "Fiver",
      position: "WordPress Developer",
      duration: "March, 2020",
    },
    {
      company: "Upwork",
      position: "WordPress Developer",
      duration: "Jan, 2021",
    },
    {
      company: "Digi Adverta",
      position: "WordPress Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Digi Adverta",
      position: "Shopify Developer",
      duration: "2022 - 2023",
    },
    {
      company: "Digi Adverta",
      position: "UI/UX Designer",
      duration: "2022 - 2023",
    },
    {
      company: "Pixelizio",
      position: "WordPress, Shopify",
      duration: "2023 - Present",
    },
  ]
};

// Education data
const education = {
  title: 'My education',
  description: "I have completed my intermediate education and hold a Bachelor's degree in Computer Science from Quaid-i-Azam University, Islamabad. Additionally, I have completed a website development course, enhancing my technical skills.",
  items: [
    {
      institution: "Muhammadn Institute",
      degree: "Web Development",
      duration: "2017 - 2018",
    },
    {
      institution: "Muhammadn Institute",
      degree: "WordPress Development",
      duration: "2019 - 2020",
    },
    {
      institution: "Hadi E-learning",
      degree: "React JS Mastery Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Hadi E-learning",
      degree: "Shopify Mastery Course",
      duration: "2021 - 2022",
    },
    {
      institution: "Hadi E-learning",
      degree: "UI/UX Mastery Course",
      duration: "2021 - 2022",
    },
    {
      institution: "Postgraduate College",
      degree: "Intermediate",
      duration: "2016 - 2018",
    }
  ]
};

// Skills data
const skills = {
  title: "My Skills",
  description: "I am a skilled WordPress developer, UI/UX designer, and proficient in HTML, CSS, JavaScript, Next.js, and React. Additionally, I specialize in creating and optimizing Shopify stores for better performance.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaWordpressSimple />,
      name: "WordPress",
    },
    {
      icon: <SiShopify />,
      name: "Shopify",
    },
  ],
};

const ResumeClient = () => {
  return (
    <motion.div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" initial={{ opacity: 0 }} animate={{opacity: 1, transition: { delay:2.4, duration:0.4, ease: "easeIn"}}}>

      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Resume</h1>
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[30px] mt-10">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[80vh] w-full overflow-hidden">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify lg:text-left px-2">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-5 px-2 ">
                    {experience.items.map((item, index) => (
                      <li key={index} className="mb-4 bg-[#232329] h-[184px] p-6 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group">
                        <span className="font-bold text-accent">{item.duration}</span>
                        <h3 className="text-xl font-semibold group-hover:text-accent max-w-[260px] min-h-[60px]">{item.position}</h3>
                         <div className="flex items-center gap-3">
                         {/* dot */}
                         <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                         <p className="text-sm text-gray-300">{item.company}</p>
                         </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify lg:text-left px-2">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-5 px-2 ">
                    {education.items.map((item, index) => (
                      <li key={index} className="mb-4 bg-[#232329] h-[184px] p-6 px-6 group rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="font-bold text-accent">{item.duration}</span>
                        <h3 className="text-xl font-semibold group-hover:text-accent max-w-[260px] min-h-[60px]">{item.degree}</h3>
                         <div className="flex items-center gap-3">
                         {/* dot */}
                         <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                         <p className="text-sm text-gray-300">{item.institution}</p>
                         </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify lg:text-left px-2">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 lg:mb-10">
              {skills.skillList.map((skill, index) => {
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl flex flex-col gap-5 items-center group-hover:text-accent">
                        <h2>{skill.icon}</h2>
                        <p className="text-sm font-bold">{skill.name}</p>
                        </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                        </Tooltip>

                    </TooltipProvider>
                  </li>
                )
              })}
            </ul>
            </div>
            </TabsContent>

            {/* About me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <Button asChild className="hidden xl:inline-flex">
                    <a href="/waleed-zafar-resume.pdf" download>Download Resume</a>
                  </Button>
                </div>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0 text-justify lg:text-left px-2">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex lg:items-center lg:justify-start gap-12  ">
                        <span className="text-white/60 font-bold text-md border-b-2 border-accent">{item.fieldName}</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeClient;