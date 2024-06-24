
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
                    <h1 className="text-[28px] italic text-primary w-[220px] shrink-0">Compare<br/><span className="font-bold not-italic">Products</span></h1>

                    <div className="relative flex gap-x-[10px] font-semibold text-[18px]">
                        <button className="bg-primary text-white px-[25px] py-[7px] rounded-[4px] ">Full</button>
                        <p className="absolute left-[69px] top-1/2 -translate-y-1/2 bg-white px-[7px] py-[6px] rounded-full text-[13px] font-bold">OR</p>
                        <button className="bg-[#a4bce0] text-[#362d86] px-[25px] py-[7px] rounded-[4px] ">Difference</button>
                    </div>
                </div>

                <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] p-[25px] rounded-t-[25px] gap-[20px]">
                    { 
                        Array.from({length: itemCount}).map((_, index) => <ImageSlider key={'image_'+index}/>)
                    }
                    {
                        Array.from({length: itemCount}).map((_, index) => <TitleCard key={'title_'+index}/>)
                    }
                </div>


                <div className=" col-span-5 grid grid-cols-5 gap-x-[25px] my-[2px] gap-y-[2px]">
                    
                    <div className="text-primary self-center text-center text-[18px] font-bold ">Pricing</div>

                    <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] py-[15px] place-items-center text-[#181e7f] text-[36px] font-bold">
                        { 
                            Array.from({length: itemCount}).map((_, index) => <p key={'price_'+index}>₹50,000/-</p>)
                        }
                    </div>


                    <p className="text-primary self-center text-center text-[18px] font-bold py-[15px]">Features</p>
                    <div className="col-span-4" />

                    {
                        
                        Array.from({length: featureCount}).map((_, index) => 
                            <>
                                <div className="text-[#707684] self-center text-center text-[14px] ">Feature {index +1}</div>

                                <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] py-[15px] place-items-center text-[#434d5c] text-[12px]">
                                    { 
                                        Array.from({length: itemCount}).map((_, featureIndex) => <p key={`feature_${index}_${featureIndex}`}>Feature in one line.</p>)
                                    }
                                </div>
                            </>
                        )
                    }
                    

                    <p className="text-primary self-center text-center text-[18px] font-bold py-[15px]">Description</p>
                    <div className="col-span-4" />


                    <div className="text-[#707684] self-start text-center text-[14px] py-[15px]">Relative features</div>

                    <div className=" col-span-4 grid grid-cols-4 bg-[#f0f6fe] py-[15px] place-items-center text-[#434d5c] text-[12px] rounded-b-[25px] ">
                        { 
                            Array.from({length: itemCount}).map((_, index) => <p className="px-[40px]" key={'price_'+index}>Lorenispsum is the text that can be used to type the description to create a feel of the what the product holds.</p>)
                        }
                    </div>

                </div>


                <div className=" col-span-5 text-white bg-gradient-to-b from-[#011aa1] to-[#0e1ac7] py-[10px] px-[40px] rounded-[12px] text-[14px] font-bold "> <p>AI Summary</p> </div>


                <div className="text-[#707684] self-start text-center text-[12px] py-[15px]">Pros</div>

                <div className=" col-span-4 grid grid-cols-4 py-[15px] place-items-start text-[#434d5c] text-[12px] rounded-b-[25px] ">
                    {
                        Array.from({length: itemCount}).map((_, index) =>
                            <ul className="px-[50px] list-disc" key={'pros_'+index}>
                            { 
                                Array.from({length: prosConsCount}).map((_, prosIndex) => <li key={'price_'+index}>Pro {prosIndex+1}</li>)
                            }
                            </ul>
                        )
                    }
                </div>


                <div className="text-[#707684] self-start text-center text-[12px] py-[15px]">Cons</div>

                <div className=" col-span-4 grid grid-cols-4 py-[15px] place-items-start text-[#434d5c] text-[12px]">
                    {
                        Array.from({length: itemCount}).map((_, index) =>
                            <ul className="px-[50px] list-disc" key={'cons_'+index}>
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
                            <button key={'button_'+index} className="bg-[#211a66] text-white px-[25px] py-[7px] rounded-[7px] font-semibold">Add to cart</button>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default App
