"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Header from "@/components/header";
import Blog from "@/components/comment";
import Category from "@/components/Category";

interface Icar {
  detail_image: string;
  title: string;
  feedback_image: string;
  feedback_name: string;
  date: string;
  description: string;  
  _id: string;
}

export default function BlogDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Icar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data: Icar = await client.fetch(
          `*[_type == 'car' && _id == $id][0]`, // Fetch the product with matching ID
          { id: params.id }
        );

        if (data) {
          setProduct(data);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("An error occurred while fetching the product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-xl text-red-500">{error}</div>;
  }

  return (
    <>
         <Header/>
         {/* start */}
         <div className="flex justify-center items-center">
         <div className="mt-24 w-full sm:w-[80%]">
                {/* img  */}
                {product?.detail_image && (
                     <Image
                      src={urlFor(product.detail_image).url()}
                      alt={product.title}
                      width={500}
                      height={100}
                     className="w-full"
                        />
                     )}
                     {/* heading */}
                     <h1 className="text-3xl font-bold mb-5 mt-2 p-4">{product?.title}</h1>
                    <div className="flex items-center sm:mt-3 space-x-3 p-2">
                                      {product?.feedback_image && (
                                        <Image
                                          src={urlFor(product?.feedback_image).url()}
                                          width={40}
                                          height={40}
                                          alt="Feedback"
                                          className="rounded-full"
                                        />
                                      )}
                                      
                                        <p>{product?.feedback_name}</p>
                                        <p className="text-gray-500 ">{product?.date}</p>
                                        <p className="text-gray-500">. 3 min read</p>
                                      </div>
                                  
                                    {/* description */}
                                    <p className="text-lg text-gray-700 mb-3 mt-2 p-4">{product?.description}</p>
                                    <h1 className="text-3xl font-bold mb-5 p-4">{product?.title}</h1>
                                    <p className="text-lg text-gray-700 mb-3 p-4">{product?.description}</p>

         </div>
         </div>
          <Blog/>
           
   
    </>
  );
}


//       <h1 className="text-3xl font-bold mb-5">{product.title}</h1>
//       <p className="text-lg text-gray-700 mb-3">{product.description}</p>
{/* <div>
<p className="font-semibold">{product.feedback_name}</p>
<p className="text-gray-500">{product.date}</p>
</div> */}



 

