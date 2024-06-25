
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageSlider() {
    return (
        <div className="w-full flex items-center justify-center relative py-[40px] rounded-[8px]  xl:gap-x-[20px] lg:gap-x-[10px]  bg-white shrink-0">
            <FaRegTrashAlt className="text-[#f4d9dc] absolute top-[15px] right-[15px] shrink-0  lg:text-[18px] md:text-[14px] " />
            <IoIosArrowBack className=" text-[#e4e3e4] bg-[#fafafb] rounded-full flex items-center pr-[1px] shrink-0  lg:text-[18px] md:text-[14px] "/>
            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/m/b/o/-original-imagtq48z3hb9a4s.jpeg?q=70&crop=false" alt="product" className="xl:w-[140px] xl:h-[120px]  lg:w-[120px] lg:h-[100px]  md:w-[100px] md:h-[80px]"/>
            <IoIosArrowForward className=" text-[#e4e3e4] bg-[#fafafb] rounded-full flex items-center pl-[1px] shrink-0  lg:text-[18px] md:text-[14px] "/>
        </div>
    )
}

export default ImageSlider