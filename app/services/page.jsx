"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: 'WordPress Development',
    description: 'Custom WordPress solutions with tailored themes and plugins for enhanced website functionality and performance.',
    href: ""
  },
  {
    num: "02",
    title: 'Shopify Development',
    description: 'Expert Shopify development to create and customize high-converting e-commerce stores tailored to your business needs.',
    href: ""
  },
  {
    num: "03",
    title: 'Front-end Development',
    description: 'Crafting responsive, interactive websites using HTML, CSS, JavaScript, Next.js, React.js and modern frameworks..',
    href: ""
  },
  {
    num: "04",
    title: 'UI/UX Design',
    description: 'Crafting intuitive interfaces for enhanced user engagement and satisfaction through seamless design and user-centric experiences.',
    href: ""
  },
  {
    num: "05",
    title: 'E-commerce Development',
    description: 'Designing and developing bespoke e-commerce stores using WooCommerce and Shopify for optimal user experience and business growth.',
    href: ""
  },
  {
    num: "06",
    title: 'Website Maintenance',
    description: 'Comprehensive maintenance and technical support ensuring your website runs smoothly with timely updates and troubleshooting.',
    href: ""
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center lg:my-14 py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]" initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}>
          {services.map((service, index) => {
            return (
              <div className="flex-1 flex flex-col justify-center gap-6 group bg-[#1e1e25] p-5 rounded-lg" key={index}>
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-2xl font-inter font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/80">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;