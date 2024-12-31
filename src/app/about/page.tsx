import Image from "next/image"
import Views from "./views"


function About(){
    return(
        <>
        <div className="w-full flex justify-center items-start mt-10 md:mt-32 max-w-screen-2xl mx-auto ">
            <div className="w-full md:w-[80%]  my-11 flex flex-col md:flex-row justify-center items-start gap-x-5 gap-y-6">
               {/* left */}
                 <div className="w-full md:w-[60%] p-5 md:p-0">
                    <h1 className="text-xl md:text-3xl  font-bold ">Our Story</h1>
                    <p className="pt-6">Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                    <p  className="mt-5">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                 </div>
             {/* right */}
            <div className="w-full md:w-[600px] p-5 md:p-0  cursor-pointer ">
                <Image src={"/detail1.svg"}
                width={100}
                height={100}
                alt="Mobile"
                className="w-full"></Image>

            </div>
            </div>
        </div>
        <Views/>
        </>
    )
}
export default About