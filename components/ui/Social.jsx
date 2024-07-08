import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/muhammad-waleed-292b88277/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/waleedzafar187/' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/waleed.zafar.3388/' },
    { icon: <FaGithub />, path: 'https://github.com/waleedjs' }
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;
