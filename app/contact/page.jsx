/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info =[
  {
     icon: <FaPhoneAlt />,
     title: "Phone",
     description: "+923436157817",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "waleedzafar187@gmail.com",
 },
 {
  icon: <FaMapMarkerAlt />,
  title: "Address",
  description: "Islamabad Capital Territory",
},
  
];

import { motion } from "framer-motion";

const Contact = () => {
  return <motion.section
  initial={{ opacity:0 }}
  animate={{
    opacity: 1,
    transition: { delay:2.4, duration: 0.4, ease: "easeIn"}
  }} className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px] w-full">
        {/* form */}
        <div className="xl:w-[54%] order-2 xl-order-1">
          <form className="flex flex-col gap-6 xl:p-10 p-6 bg-[#27272c] rounded-xl">
            <h3 className="text-2xl font-bold xl:text-3xl text-accent">Let's work together</h3>
            <p className="text-white/60">Reach out to start a conversation about your next project and see how we can work together to achieve your goals.</p>
           {/* input */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder="First Name" />
            <Input type="lastname" placeholder="Last Name" />
            <Input type="email" placeholder="Email Address" />
            <Input type="phone" placeholder="Phone Number" />
           </div>
           {/* select */}
           <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="text-accent">Select a service</SelectLabel>
                <SelectItem value="est">WorPress Development</SelectItem>
                <SelectItem value="cst">Shopify Development</SelectItem>
                <SelectItem value="mst">Front-end Development</SelectItem>
                <SelectItem value="gst">E-commerce Development</SelectItem>
                <SelectItem value="fst">UI/UX Design</SelectItem>
                <SelectItem value="hst">Website Maintenance</SelectItem>
              </SelectGroup>
            </SelectContent>
           </Select>
           {/* textarea */}
           <Textarea className="h-[200px]" placeholder="Type your massage here." />
           {/* btn */}
           <Button className="max-w-[150px]">Send message</Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index)=> {
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[62px] xl:h-[72px bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[24px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="xl:text-xl text-sm"><Link href="https://wa.me/923436157817">{item.description}</Link></h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>
};

export default Contact;
