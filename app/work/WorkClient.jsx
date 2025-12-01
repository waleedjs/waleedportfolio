"use client"

import { motion } from 'framer-motion';

import { BsArrowUpRight, BsWordpress } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "WordPress",
    title: "Pixelizio",
    description: "Pixelizio offers innovative digital marketing solutions with a user-friendly design, enhancing online presence and business growth.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Fluent Form"}],
    image: '/assets/work/work/pixelizio.webp',
    live: 'https://pixelizio.com/',
    wordpress: "",
  },
  {
    num: "02",
    category: "Shopify",
    title: "Dure Shahwar",
    description: "Designed and developed an exceptional Shopify site named Dure Shahwar, showcasing my skills in creating a high-quality website.",
    stack: [{ name: "Pagefly" }, { name: "Theme" }, {name: "E-commerce"}],
    image: '/assets/work/work/DURE SHAWAR.webp',
    live: 'https://dureshahwar.com/',
    wordpress: "",
  },
  {
    num: "03",
    category: "WordPress",
    title: "Samar Official",
    description: "Developed Samar Official's site with a sleek design, optimized performance, user-friendly interface, and seamless navigation for enhanced user experience.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Woocommerce"}],
    image: '/assets/work/work/samar official.webp',
    live: 'https://samarofficial.com/',
    wordpress: "",
  },
  {
    num: "04",
    category: "WordPress",
    title: "Deals Admin",
    description: "An intuitive platform designed to streamline and manage deals efficiently, enhancing user experience and business productivity.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Mail-Smtp"}],
    image: '/assets/work/work/dealsadmin (1).webp',
    live: 'https://dealsadmin.ca/',
    wordpress: "",
  },
  {
    num: "05",
    category: "WordPress",
    title: "Papers Cambridge",
    description: "Efficiently designed platform offering organized, user-friendly access to past O-level, A-level, and IGCSE exam papers for students.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Mail-Smtp"}],
    image: '/assets/work/work/papers cambridge.webp',
    live: 'https://paperscambridge.com/',
    wordpress: "",
  },
  {
    num: "06",
    category: "WordPress",
    title: "Marriage Website",
    description: "Designed a beautiful, user-friendly marriage website to connect couples, featuring event details, photo galleries, and RSVP functionality.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "RSVP"}],
    image: '/assets/work/work/marriage website.webp',
    live: '',
    wordpress: "",
  },
  {
    num: "07",
    category: "WordPress",
    title: "Mai Frozen Food",
    description: "Created a responsive, user-friendly website for Mai Frozen Food, showcasing products, enabling online orders, and optimizing SEO.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Woocommerce"}],
    image: '/assets/work/work/mai frozen food.webp',
    live: 'https://tech.maifrozenfood.com/',
    wordpress: "",
  },
  {
    num: "08",
    category: "WordPress",
    title: "Stationside Condo",
    description: "Developed an elegant, user-friendly landing page for Stationside Condo, showcasing properties and amenities with responsive design and seamless navigation.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Mail-Smtp"}],
    image: '/assets/work/work/stationside.webp',
    live: '',
    wordpress: "",
  },
  {
    num: "09",
    category: "WordPress",
    title: "Innovative Solution",
    description: "Dynamic websites showcasing expertise in WordPress, UI/UX design, and Shopify development, crafted to elevate digital presence and user engagement.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Forms"}],
    image: '/assets/work/work/innovatuive.webp',
    live: 'https://inovatecsolutions.com/',
    wordpress: "",
  },
  {
    num: "10",
    category: "WordPress",
    title: "Digityque",
    description: "Contributed as a WordPress and Shopify developer, enhancing digital presence through custom solutions and user-centric designs.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Sevices"}],
    image: '/assets/work/work/digityque.webp',
    live: 'https://digityque.com/',
    wordpress: "",
  },
  {
    num: "11",
    category: "WordPress",
    title: "Sell Homes Toronto",
    description: "Integrated Sell Homes Toronto with seamless functionality, enhancing user engagement through intuitive design and efficient management solutions.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Sevices"}],
    image: '/assets/work/work/sellhomes.webp',
    live: 'https://sellhomestoronto.ca/',
    wordpress: "",
  },
  {
    num: "12",
    category: "WordPress",
    title: "NADA YOUSSEF",
    description: "Integrated Nada Youssef with seamless functionality, enhancing user engagement through intuitive design and efficient management solutions.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Wp-Sevices"}],
    image: '/assets/work/work/nada yousef.webp',
    live: 'https://nadayoussef.ca/',
    wordpress: "",
  },
  {
    num: "13",
    category: "WordPress",
    title: "Bin Kamal Textile",
    description: "Designed and developed a professional website showcasing premium textile products with a focus on elegance and functionality.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Fluent form"}],
    image: '/assets/work/work/binkamal.webp',
    live: 'https://binkamaltextile.com/',
    wordpress: "",
  },
  {
    num: "14",
    category: "WordPress",
    title: "Dr Nasr Omari",
    description: "Created an exceptional website for Dr. Nasr Omari, featuring a clean design, user-friendly interface, and seamless navigation for optimal user experience.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Fluent form"}],
    image: '/assets/work/work/drnasr.webp',
    live: 'https://drnasromari.com/',
    wordpress: "",
  },
  {
    num: "15",
    category: "WordPress",
    title: "Stage Chic",
    description: "A beautifully designed website showcasing elegant stage fashion with a user-friendly interface and stunning visuals.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Fluent form"}],
    image: '/assets/work/work/stagechic.webp',
    live: 'https://stagechic.com/',
    wordpress: "",
  },
  {
    num: "16",
    category: "WordPress",
    title: "Tech Mill Systems",
    description: "I created an excellent design and developed the TechMill System website on WordPress with great functionality and user experience.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Fluent form"}],
    image: '/assets/work/work/techmill.webp',
    live: 'https://techmillsystems.com/',
    wordpress: "",
  },
  {
    num: "17",
    category: "WordPress",
    title: "Nada Majali Karyouti",
    description: "Developed a professional, user-friendly website for Nada Majali Karyouti, showcasing exceptional design and functionality.",
    stack: [{ name: "Elementor" }, { name: "Elementor Pro" }, {name: "Fluent form"}],
    image: '/assets/work/work/nadamajli.png',
    live: 'https://nadamk.com/',
    wordpress: "",
  },
  {
    num: "18",
    category: "Figma",
    title: "Hajj & Umrah Package",
    description: "I designed a streamlined layout in Figma for an Economy Hajj & Umrah Package website, emphasizing clear navigation, high-quality visuals, and mobile-friendly interface.",
    stack: [{ name: "Grid" }, { name: "Flex Box" }, {name: "Iconify"}],
    image: '/assets/work/work/hajj.webp',
    live: 'https://www.figma.com/proto/vbLEq4eoXbidqfaYdWNKFP/agency?node-id=5-36&t=YmCgerFO93PE77Zt-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    wordpress: "",
  },
  {
    num: "19",
    category: "Figma",
    title: "Preserve Oakville",
    description: "I designed Preserve Oakville's website layout in Figma, focusing on showcasing its serene community and modern amenities with a natural appeal.",
    stack: [{ name: "Grid" }, { name: "Flex Box" }, {name: "Iconify"}],
    image: '/assets/work/work/preserve.webp',
    live: 'https://www.figma.com/proto/vbLEq4eoXbidqfaYdWNKFP/agency?node-id=242-1336&t=YmCgerFO93PE77Zt-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
  },
  {
    num: "20",
    category: "Figma",
    title: "Condo Point",
    description: "Condo Point's website features a sleek design highlighting luxury condos, amenities, and prime locations for discerning homebuyers and investors.",
    stack: [{ name: "Grid" }, { name: "Flex Box" }, {name: "Iconify"}],
    image: '/assets/work/work/condo.webp',
    live: 'https://www.figma.com/proto/DUQ3iIcVRAQ9dg7GweQr8f/Untitled?node-id=1-2&t=u7PQ5KwJDwUDu72E-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
];

const WorkClient = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='min-h-[80vh] flex flex-col justify-center py-5 xl:py-6 xl:px-0'>
      <div className="container mx-auto xl:mt-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Explore my latest projects showcasing expertise in WordPress, Shopify, UI/UX design, and front-end development.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className='bg-[#1e1e25] rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 animated-border'
            >
              <div className='relative h-80'>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={project.image}
                      fill
                      className='object-cover group-hover:scale-105 transition-transform duration-300'
                      alt={`${project.title} - ${project.category} Project by Muhammad Waleed Zafar`}
                      title={`${project.title} - ${project.description}`}
                    />
                  </Link>
                </div>
                <div className='p-6'>
                  <div className='flex justify-between items-start mb-2'>
                    <span className='text-accent text-sm font-semibold'>{project.category}</span>
                    <span className='text-white/60 text-sm'>{project.num}</span>
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors'>{project.title}</h3>
                  <p className='text-white/60 text-sm mb-4 line-clamp-3'>{project.description}</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.stack.map((item, idx) => (
                      <span key={idx} className='text-xs bg-accent/10 text-accent px-2 py-1 rounded'>{item.name}</span>
                    ))}
                  </div>
                  <div className='flex gap-3'>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-accent transition-colors'>
                            <BsArrowUpRight className='text-accent text-lg hover:text-primary' />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-accent transition-colors'>
                            <BsWordpress className='text-accent text-lg hover:text-primary' />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>WordPress</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkClient;