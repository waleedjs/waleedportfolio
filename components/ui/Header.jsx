import Link from "next/link";
import { Button } from "./button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return <header className="py-6 xl:py-8 text-white">
    <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">Wal<span className="text-accent">eed::</span></h1>
        </Link>
        {/* Desktop nav and  Hire me Button*/}
        <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/waleed-zafar-resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">View Resume</Button>
        </Link>
        <Link href="https://wa.me/923436157817">
            <Button>Hire me</Button>
        </Link>
        </div>
        
        {/* mobile nav */}
        <div className="xl:hidden"><MobileNav /></div>
    </div>
  </header>
}

export default Header
