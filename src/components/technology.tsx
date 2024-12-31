import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Icar {
  car_image: string;
  title: string;
  feedback_image: string;
  feedback_name: string;
  date: string;
}

export default async function NewTechnology() {
  const data: Icar[] = await client.fetch(`*[_type == 'car']
    {
     car_image,
    title,
    feedback_image,
    feedback_name,
    date,
    }`);

  return (
    <>
      {/* Top Section */}
      <div className="flex justify-between items-start mt-10 sm:mt-20 px-5 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl sm:font-bold">New Technology</h1>
       <Link href={"/blogs"}> <button className="text-gray-400">See All</button></Link>
      </div>

      {/* Container */}
      <div className=" px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 place-items-center max-w-screen-2xl mx-auto">
        {data.map((item, index) => {
          const imageUrl = item.car_image ? urlFor(item.car_image).url() : null;

          return (
            <div key={index} className="w-full sm:w-[280px] sm:h-[380px] bg-[#F4F0F8] p-4 border rounded shadow flex flex-col justify-between">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  width={200}
                  height={200}
                  alt="Car Image"
                  className="rounded w-full"
                />
              )}
              <h2 className="text-xl font-bold mt-2">{item.title}</h2>
              <div className="flex items-start  mt-6 sm:mt-3">
                {item.feedback_image && (
                  <Image
                    src={urlFor(item.feedback_image).url()}
                    width={40}
                    height={40}
                    alt="Feedback"
                    className="rounded-full"
                  />
                )}
                <div className="ml-3">
                <p>{item.feedback_name}</p>
                <p className="text-gray-500">{item.date}</p>
                </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </>
  );
}
