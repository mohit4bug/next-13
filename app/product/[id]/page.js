import Collapse from "../../../components/collapse/Collapse";
import Details from "../../../components/details/Details";
import Features from "../../../components/features/Features";
import Button from "../../../components/small/button/Button";


export default function Product() {

    const isNew = true;

    return (
        <div>
            <div className="flex flex-col md:flex-row">
                {/* Image container */}
                <div className="flex-[6] p-4 grid grid-cols-2 gap-4">
                    <img className="rounded-xl h-full object-cover w-full col-span-2" src="https://ciseco-reactjs.vercel.app/static/media/detail1.f45e3a4d9bfeafd2f70b.jpg" alt="" />
                    <img className="rounded-xl h-full object-cover w-full" src="https://ciseco-reactjs.vercel.app/static/media/detail2.15a523b16c02d0246953.jpg" alt="" />
                    <img className="rounded-xl h-full object-cover w-full" src="https://ciseco-reactjs.vercel.app/static/media/detail3.5a27cd1769627a6e4f5d.jpg" alt="" />
                </div>
                {/* Details */}
                <div className="flex-[4] p-4">
                    <h1 className="heading">Nike Air Shoes</h1>
                    <div className="flex gap-2 items-center">
                        {/* price */}
                        <p className="text-green-500 text-2xl font-semibold">₹5600</p>
                        {/* Vertical seprator */}
                        <div className="h-4 border" />
                        <span className="flex items-center gap-1">
                            {/* star icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-yellow-500">
                                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                            </svg>
                            {/* Rating count */}
                            <p className="text-sm">4.2</p>
                        </span>
                        {/* Review count */}
                        <p className="text-sm underline text-neutral-500 cursor-pointer">125 reviews</p>
                        {/* Is new */}
                        {isNew && (
                            <div className="flex items-center text-sm gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                <p>New in</p>
                            </div>
                        )}

                    </div>
                    {/* Color choosing section */}
                    <div className="py-2 text-sm flex flex-col gap-1">
                        <p>Color: <span className="font-semibold">Black</span></p>
                        <div className="flex items-center gap-1 ">
                            <div className={`md:px-8 px-6 py-4 rounded-sm cursor-pointer bg-neutral-200`} />
                            <div className={`md:px-8 px-6 py-4 rounded-sm cursor-pointer bg-neutral-300`} />
                            <div className={`md:px-8 px-6 py-4 rounded-sm cursor-pointer bg-neutral-400`} />
                            <div className={`md:px-8 px-6 py-4 rounded-sm cursor-pointer bg-neutral-500`} />
                            <div className={`md:px-8 px-6 py-4 rounded-sm cursor-pointer bg-neutral-600`} />
                        </div>
                    </div>

                    {/* Size choosing section */}
                    <div className="py-2 text-sm flex flex-col gap-1">
                        <p>Size: <span className="font-semibold">XS</span></p>
                        <div className="flex items-center gap-1 ">
                            <div className="px-4 py-2 rounded-sm cursor-pointer font-semibold border">XS</div>
                            <div className="px-4 py-2 rounded-sm cursor-pointer font-semibold border">S</div>
                            <div className="px-4 py-2 rounded-sm cursor-pointer font-semibold border">M</div>
                            <div className="px-4 py-2 rounded-sm cursor-pointer font-semibold border">L</div>
                            <div className="px-4 py-2 rounded-sm cursor-pointer font-semibold border">XL</div>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="py-2 flex items-center gap-4">
                        <span className="flex items-center">
                            <button className="h-10 w-10 rounded-full border hover:border-slate-800 grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <p className="px-2">1</p>
                            <button className="h-10 w-10 rounded-full border hover:border-slate-800 grid place-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </span>
                        <Button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            Add to cart
                        </Button>
                    </div>

                    <hr className="h-0  my-4" />

                    {/* Collapse */}
                    <div className="flex flex-col gap-2">
                        <Collapse title={"Description"} />
                        <Collapse title={"Fabric + Care"} />
                        <Collapse title={"How it Fits"} />
                        <Collapse title={"FAQ"} />
                    </div>
                    {/* Features */}
                    <div className="grid grid-cols-2 gap-4 my-4">
                        <Features bg={"bg-pink-100"} />
                        <Features bg={"bg-blue-100"} />
                        <Features bg={"bg-orange-100"} />
                        <Features bg={"bg-yellow-100"} />
                    </div>
                </div>
            </div>

            <div className="p-4">
                {/* Product details */}
                <Details />
            </div>
        </div>
    )
}