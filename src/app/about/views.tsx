import { BiFastForwardCircle } from "react-icons/bi"
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";

function Views(){
    return (
         <div className="w-full flex justify-center items-center mt-10 mb-1 max-w-screen-2xl mx-auto ">
            {/* container */}
            <div className="w-full md:w-[80%]  border-b-2 border-neutral-100 pb-10">

                {/* container boxes */}
              

                <div className="flex  justify-center gap-8 md:justify-between items-start md:items-center flex-wrap p-5">
                    {/* box1 */}
                    <div className=" shadow-lg border-solid border-2 rounded-md  w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><BiFastForwardCircle/></span>
                  <span className='text-xl font-bold '>10.5k </span>
                  <p  className='text-[8px]  md:text-sm'>Sallers active our site</p>
                 </div>
                    
                    {/* box2 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md  w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FaDollarSign/></span>
                  <span className='text-xl font-bold '>33k</span>
                  <p  className='text-[8px]  md:text-sm'>Monthly Produduct Sale</p>
                 </div>
                    {/* box 3 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md    w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FaShoppingBag/></span>
                  <span className='text-xl font-bold '>45.5k </span>
                  <p className='text-[8px]  md:text-sm'>Customer active in our site</p>
                 </div>
                    {/* box4 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md    w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FaMoneyBill1Wave/></span>
                  <span className='text-xl font-bold '>25k </span>
                  <p  className='text-[8px]  md:text-sm'>Anual gross sale in our site</p>
                 </div>
               
                   {/* box complete */}
                   
                </div>
            </div>
         </div>
    )
}
export default Views