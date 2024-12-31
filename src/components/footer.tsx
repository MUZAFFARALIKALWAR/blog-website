import { TbLocationShare } from "react-icons/tb";
import { Button } from "./ui/button";


export default function Footer(){
    return(
       <div className="bg-[#232536] h-[400px] flex justify-center items-center  max-w-screen-2xl mx-auto mt-20">
           <div className="w-[80%] bg-[#2A2B39] sm:h-[235px] flex flex-col sm:flex-row sm:items-center sm:justify-center p-5 space-x-3">
             <h1 className=" texxt-lg sm:text-4xl font-bold text-white">Subscribe to our news letter to get latest updates and news</h1>
             <input placeholder="example@email.com" className="py-2 rounded sm:w-[300px] mt-5 outline-none" />
             <Button variant={"destructive"} className=" mt-5 font-bold">Subscribe<TbLocationShare/></Button>

           </div>
       </div>
    )
}