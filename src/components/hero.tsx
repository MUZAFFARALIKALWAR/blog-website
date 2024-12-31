import { TbLocationShare } from "react-icons/tb";
import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ['latin'], // Load specific subsets
  weight: ['400', '500', '600', '700'], // Specify weights
});
interface Ihero {
    heading: string;
    descritpion: string;
    _id: string;
    image: { asset: { _ref: string } };
}

// Function to build image URL
const builder = ImageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

export default async function Hero() {
    const res: Ihero[] = await client.fetch(`*[_type == "hero"]`);
    
    if (res.length === 0) {
        return <div>No data found</div>;
    }

    const hero = res[0]; // Use the first item

    const bgImage = urlFor(hero.image.asset._ref).url(); // Generate image URL
   
   
    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`, // Set background image
                backgroundSize: "cover", // Make the image cover the container
                backgroundPosition: "center", // Center the image
                height: "100vh", // Example height (full viewport height)
            }}
            className="relative text-white flex items-center justify-center h-[600px] mt-20 max-w-screen-2xl mx-auto"
        >
            <div className="sm:w-[520px] 2xl:w-[600px]  absolute top-5 left-5 sm:top-10 sm:left-9 2xl:top-32 2xl:left-32 text-start">
                <h1 className={`text-3xl sm:text-7xl 2xl:text-9xl text-start font-bold ${poppins.className}`}>{hero.heading}</h1>
                <p className={`mt-4 text-lg sm:text-xl w-[230px] sm:w-full ${poppins.className}`}>{hero.descritpion}</p>
                <Button variant={"destructive"} className=" mt-5 font-bold">Subscribe<TbLocationShare/></Button>
            </div>
        </div>
    );
}
