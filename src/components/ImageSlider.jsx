
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageSlider() {
    return (
        <div className="w-full flex gap-x-[20px] items-center justify-center relative py-[40px] rounded-[8px] bg-white shrink-0">
            <FaRegTrashAlt className="text-[#f4d9dc] absolute top-[15px] right-[15px]" />
            <IoIosArrowBack className=" text-[#e4e3e4] bg-[#fafafb] rounded-full flex items-center pr-[1px]"/>
            <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/m/b/o/-original-imagtq48z3hb9a4s.jpeg?q=70&crop=false" alt="product" className="w-[140px] h-[120px]"/>
            <IoIosArrowForward className=" text-[#e4e3e4] bg-[#fafafb] rounded-full flex items-center pl-[1px]"/>
        </div>
    )
}

export default ImageSlider