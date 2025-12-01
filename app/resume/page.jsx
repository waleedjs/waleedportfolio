import ResumeClient from "./ResumeClient";

export const metadata = {
  title: "Resume - Muhammad Waleed Zafar | Experience & Skills",
  description: "View Muhammad Waleed Zafar's resume including experience in WordPress, Shopify, UI/UX design, and skills in Next.js, React, and more.",
  alternates: {
    canonical: "https://devwaleed.online/resume",
  },
};

const Resume = () => {
  return <ResumeClient />;
};

export default Resume;