import BlogHero from "@/components/bloghero";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Icar {
  car_image: string;
  title: string;
  feedback_image: string;
  feedback_name: string;
  date: string;
  _id: string;
  description: string;
}

export default async function NewTechnology() {
  const data: Icar[] = await client.fetch(`*[_type == 'car']
    {
     car_image,
     title,
     feedback_image,
     feedback_name,
     date,
     description,
     _id
    }`);

  return (
    <>
   
     <BlogHero/>
      {/* Top Section */}
      <div className="flex justify-between items-start mt-5 sm:mt-10 px-5 max-w-screen-2xl mx-auto ">
        <h1 className="text-2xl sm:text-3xl sm:font-bold">All Posts</h1>
      </div>

      {/* Container */}
      <div className="px-5 space-y-3 mt-6 place-items-center max-w-screen-2xl mx-auto">
        {data.map((item, index) => {
          const imageUrl = item.car_image ? urlFor(item.car_image).url() : null;

          return (
            <div
              key={index}
              className="w-full flex flex-col md:flex-row lg:h-[300px] bg-[#F4F0F8] p-4 border rounded shadow"
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  width={200}
                  height={200}
                  alt="Car Image"
                  className="rounded w-full sm:w-[60%]"
                />
              )}
              <div className="ml-4">
                <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                <div className="flex items-start sm:mt-3">
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
                <p className="mt-3 sm:mt-0">{item.description}</p>
                <Link href={`/blogs/${item._id}`}>
                  <Button variant={"destructive"} className="mt-4">
                    Read full article...
                  </Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
