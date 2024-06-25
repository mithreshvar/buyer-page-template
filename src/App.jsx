
import { useState } from "react"
import ImageSlider from "./components/ImageSlider"
import TitleCard from "./components/TitleCard"


function App() {

    const [itemCount, setItemCount] = useState(4)
    const [featureCount, setFeatureCount] = useState(4)
    const [prosConsCount, setProsConsCount] = useState(3)


    return (
        <div className="h-screen w-screen px-[40px] py-[30px]">

            <div className=" w-full grid grid-cols-5 gap-x-[25px]" >


                <div className="flex flex-col justify-between py-[30px]">
                    <h1 className="italic text-primary shrink-0  xl:text-[28px] lg:text-[26px] md:text-[23px] sm:text-[21px] text-[18px]  ">Compare<br/><span className="font-bold not-italic">Products</span></h1>

                    <div className="relative flex gap-x-[10px] font-semibold text-[18px]">
                        <button className="bg-primary text-white  xl:px-[25px] xl:py-[7px]  lg:px-[15px] lg:py-[5px]  md:px-[12px] md:py-[3px]  px-[10px] py-[2px]   lg:text-[16px] md:text-[12px] text-[10px]  lg:rounded-[4px] rounded-[3px] ">Full</button>
                        <p className="absolute xl:left-[69px] lg:left-[49px] md:left-[39px] left-[33px]  top-1/2 -translate-y-1/2 bg-white  xl:px-[7px] xl:py-[6px]  lg:px-[5px] lg:py-[4px]  md:px-[4px] md:py-[3px]  px-[3px] py-[2px]   xl:text-[13px] lg:text-[11px] md:text-[9px] text-[8px]  rounded-full font-bold">OR</p>
                        <button className="bg-[#a4bce0] text-[#362d86]  xl:px-[25px] lg:px-[15px]  xl:py-[7px] lg:py-[5px]  md:px-[12px] md:py-[3px]  px-[10px] py-[2px]  lg:text-[16px] md:text-[12px] text-[10px]  lg:rounded-[4px] rounded-[3px] ">Difference</button>
                    </div>
                </div>

                <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] p-[25px] rounded-t-[25px] xl:gap-[20px] md:gap-[15px] gap-[10px]">
                    { 
                        Array.from({length: itemCount}).map((_, index) => <ImageSlider key={'image_'+index}/>)
                    }
                    {
                        Array.from({length: itemCount}).map((_, index) => <TitleCard key={'title_'+index}/>)
                    }
                </div>


                <div className=" col-span-5 grid grid-cols-5 gap-x-[25px] my-[2px] gap-y-[2px]">
                    
                    <div className="text-primary self-center text-center  xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px]  font-bold ">Pricing</div>

                    <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] py-[15px] place-items-center text-[#181e7f]  xl:text-[36px] lg:text-[30px] md:text-[26px] text-[20px] font-bold">
                        { 
                            Array.from({length: itemCount}).map((_, index) => <p key={'price_'+index}>₹50,000/-</p>)
                        }
                    </div>


                    <p className="text-primary self-center text-center  xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px]  font-bold lg:py-[15px] md:py-[10px] sm:py-[8px] py-[6px] ">Features</p>
                    <div className="col-span-4" />

                    {
                        
                        Array.from({length: featureCount}).map((_, index) => 
                            <>
                                <div className="text-[#707684] self-center text-center  xl:text-[14px] lg:text-[12px] md:text-[11px] text-[10px] ">Feature {index +1}</div>

                                <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] py-[15px] place-items-center text-[#434d5c]  xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px] ">
                                    { 
                                        Array.from({length: itemCount}).map((_, featureIndex) => <p key={`feature_${index}_${featureIndex}`}>Feature in one line.</p>)
                                    }
                                </div>
                            </>
                        )
                    }
                    

                    <p className="text-primary self-center text-center  xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px]  font-bold lg:py-[15px] md:py-[10px] sm:py-[8px] py-[6px] ">Description</p>
                    <div className="col-span-4" />


                    <div className="text-[#707684] self-start text-center py-[15px]  xl:text-[14px] lg:text-[12px] md:text-[11px] text-[10px]  ">Relative features</div>

                    <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] py-[15px] place-items-center text-[#434d5c] rounded-b-[25px]   xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px]  ">
                        { 
                            Array.from({length: itemCount}).map((_, index) => <p className=" xl:px-[40px] lg:px-[32px] md:px-[26px] sm:px-[20px] px-[10px] " key={'price_'+index}>Lorenispsum is the text that can be used to type the description to create a feel of the what the product holds.</p>)
                        }
                    </div>

                </div>


                <div className=" col-span-5 text-white bg-gradient-to-b from-[#011aa1] to-[#0e1ac7] py-[10px] px-[40px] rounded-[12px] font-bold  xl:text-[14px] lg:text-[12px] md:text-[11px] text-[10px] "> <p>AI Summary</p> </div>


                <div className="text-[#707684] self-start text-center py-[15px] xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px]">Pros</div>

                <div className=" col-span-4 grid grid-cols-4 py-[15px] place-items-start text-[#434d5c] rounded-b-[25px] xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px] ">
                    {
                        Array.from({length: itemCount}).map((_, index) =>
                            <ul className=" xl:px-[50px] lg:px-[45px] md:px-[37px] sm:px-[30px] px-[25px] list-disc" key={'pros_'+index}>
                            { 
                                Array.from({length: prosConsCount}).map((_, prosIndex) => <li key={'price_'+index}>Pro {prosIndex+1}</li>)
                            }
                            </ul>
                        )
                    }
                </div>


                <div className="text-[#707684] self-start text-center py-[15px]  xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px]">Cons</div>

                <div className=" col-span-4 grid grid-cols-4 py-[15px] place-items-start text-[#434d5c]  xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px]">
                    {
                        Array.from({length: itemCount}).map((_, index) =>
                            <ul className=" xl:px-[50px] lg:px-[45px] md:px-[37px] sm:px-[30px] px-[25px] list-disc" key={'cons_'+index}>
                            { 
                                Array.from({length: prosConsCount}).map((_, consIndex) => <li key={'price_'+index}>Con {consIndex+1}</li>)
                            }
                            </ul>
                        )
                    }
                </div>

                <div />
                <div className="col-span-4 grid grid-cols-4 p-[25px] gap-x-[35px]">
                    {
                        Array.from({length: itemCount}).map((_, index) => 
                            <button key={'button_'+index} className="bg-[#211a66] text-white rounded-[7px] font-semibold  xl:text-[14px] lg:text-[13px] md:text-[11px] text-[9px]  xl:px-[25px] xl:py-[12px]  lg:px-[22px]  lg:py-[10px]  md:px-[20px]  md:py-[9px]  px-[18px]  py-[8px]  ">Add to cart</button>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default App
