import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "./ui/button";
  interface ItrendingBlog{
    name: string,
    date:string,
    title: string,
  }


const poppins = Poppins({
  subsets: ['latin'], // Load specific subsets
  weight: ['400', '500', '600', '700'], // Specify weights
});


export default async function Latestblog() {
  const data = await client.fetch(`*[_type == "latestblog"]{
    car_image,
    title,
    description,
  }[0]`);

  const trendingBlog:ItrendingBlog[] = await client.fetch(`*[_type == "trandingblog"]{
    name,
    date,
    title,
  }`);

  const imageUrl = data?.car_image ? urlFor(data.car_image).url() : null;
  return (
    <>
        {/* top */}
          <div className="flex justify-between items-start mt-5 sm:mt-10 px-5  max-w-screen-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl sm:font-bold">Latest</h1>
             <div className="flex items-center sm:w-[483px] justify-between ">
             <h1 className="text-3xl font-bold hidden sm:block">Trending Blogs </h1>
             <button className="text-gray-400 hidden sm:block">See All</button>
             </div>
          </div>
            {/* container */}
            <div className="flex flex-col sm:flex-row justify-around items-start sm:mt-4  max-w-screen-2xl mx-auto">
                
                  {/* latest blog*/}
                  <div className=" md:w-[683px] sm:h-[800px] border-l p-3 sm:p-0">
                       
                           {imageUrl && (
                              <Image
                                src={imageUrl}
                                alt="Poster"
                                width={200}
                                height={200}
                                className="w-[100%] h-[369]"
                              />
                            )}
                             <p className="px-1 mt-2"><span className="font-[600] text-gray-500 ">By </span><span className="text-red-400 font-bold">{trendingBlog[0].name}</span> | <span className="text-gray-500 font-[600]">{trendingBlog[0].date}</span> </p>
                          
                            <h1 className={`text-[#232536] text-2xl sm:text-3xl m:font-bold text-start px-1 mt-2 ${poppins.className}`}>{data.title}</h1>
                            <p className="text-start  px-1 text-gray-400 mt-4">{data.description}</p>
                            <Button variant={"destructive"} className="font-bold mt-7 sm:w-[280px] sm:h-[50px] ml-1 text-white">Read more</Button>

                    </div>
                  {/* trending blog */}
                  <div  className="md:w-[483px] sm:h-[800px] mt-3 sm:mt-0">
                     <div className="flex items-center md:w-[483px] justify-between px-3 sm:px-0 ">
                         <h1 className="text-2xl sm:text-3xl m:font-bold block sm:hidden">Trending Blogs </h1>
                         <button className="text-gray-400 block sm:hidden">See All</button>
                     </div>
                     {
                        trendingBlog.map((data,index)=>{
                            return (
                                <div key={index} className="md:h-[180px] hover:bg-[#FF5959] group px-5 border-l mt-7 sm:mt-0">
                                <p className="px-1 mt-2 group-hover:text-[#FFFFFF]">
                                  <span className="sm:font-[600] text-gray-500 group-hover:text-[#FFFFFF]">By </span>
                                  <span className="text-red-400 font-bold group-hover:text-[#FFFFFF]">{data.name}</span> |
                                  <span className="text-gray-500 font-[600] group-hover:text-[#FFFFFF]">{data.date}</span>
                                </p>
                                <h1 className={`text-2xl sm:text-3xl sm:font-[600]  mt-1 ${poppins.className} group-hover:text-[#FFFFFF]`}>{data.title}</h1>
                              </div>
                              
                              );
                              
                        })
                     }
                  </div>
            </div>
    </>
  );
}


 