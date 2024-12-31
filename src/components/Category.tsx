
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Icar {
  car_image: string;
  title: string;
  description: string;
}

export default async function Category() {
  const data: Icar[] = await client.fetch(`*[_type == 'category']
    {
    car_image,
    title,
    description,
    }`);

  return (
    <>
      {/* Top Section */}
      <div className="flex justify-between items-start mt-10 sm:mt-20 px-5 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl sm:font-bold">All Category </h1>
      </div>

      {/* Container */}
      <div className=" px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 place-items-center max-w-screen-2xl mx-auto">
        {data.map((item, index) => {
          const imageUrl = item.car_image ? urlFor(item.car_image).url() : null;

          return (
            <div key={index} className="w-full sm:w-[290px] sm:h-[300px] bg-[#F4F0F8] p-4 border rounded shadow flex flex-col justify-start items-center">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  width={100}
                  height={100}
                  alt="Car Image"
                  className="rounded w-[50px] md:w-[70px]"
                />
              )}
              <h2 className="text-xl font-bold mt-4">{item.title}</h2>
              <p className="text-center mt-4">{item.description}</p>
             
            </div>
          );
        })}
      </div>
    </>
  );
}
