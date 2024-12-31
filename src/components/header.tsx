import { BiMenuAltRight } from "react-icons/bi";
// Import Poppins in a component
import { Poppins } from 'next/font/google';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  
const poppins = Poppins({
  subsets: ['latin'], // Load specific subsets
  weight: ['400', '500', '600', '700'], // Specify weights
});

import Link from "next/link";
import { Button } from "./ui/button";

export default function Header(){
    return( 
          <main className="flex fixed   top-0 left-0 z-50 justify-between items-center w-full h-[80px] bg-[#232536] text-white px-5 ">
               {/* logo */}
               <h1 className="text-3xl font-bold">Muzaffar Cars</h1>
               {/* nav links*/}
              
                <ul className="hidden md:block">
                    <li className="space-x-14">
                        <Link className={`${poppins.className}`} href={"/"}>Home</Link>
                        <Link className={`${poppins.className}`} href={"/blogs"}>Blogs</Link>
                        <Link className={`${poppins.className}`} href={"/about"}>About</Link>
                        <Link className={`${poppins.className}`} href={"/contact"}>Contact Us</Link>
                        <Button variant={"outline"} className="text-black">Subscribe</Button>
                    </li>
                </ul>
                {/* hmburgur */}
                <Sheet >
                   <SheetTrigger className="md:hidden">
                     <BiMenuAltRight className="text-2xl "/>
                    </SheetTrigger>
                    <SheetContent>
                     <SheetHeader>
                       <SheetTitle>Muzaffar Cars</SheetTitle>
                       <SheetDescription>
                       <ul className="">
                    <li className="grid grid-cols-1 place-items-center gap-y-5">
                        <Link className={`${poppins.className}`} href={"/"}>Home</Link>
                        <Link className={`${poppins.className}`} href={"/blogs"}>Blogs</Link>
                        <Link className={`${poppins.className}`} href={"/about"}>About</Link>
                        <Link className={`${poppins.className}`} href={"/contact"}>Contact Us</Link>
                        <Button>Subscribe</Button>
                    </li>
                </ul>
                       </SheetDescription>
                     </SheetHeader>
                    </SheetContent>
                   </Sheet>

             
          </main>
    )
}