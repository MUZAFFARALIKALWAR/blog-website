import Category from "@/components/Category";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Latestblog from "@/components/latestblog";
import NewTechnology from "@/components/technology";
import NewTachnology from "@/components/technology";
import Image from "next/image";

export default function Home() {
  return (
     <div>
       
       <Hero/>
         <Latestblog/>
         <NewTechnology/>
         
         
     </div> 
  );
}
