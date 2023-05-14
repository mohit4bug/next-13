import Image from "next/image";

export default function CartProduct() {
    return (
        <div className="flex items-center gap-2">
            {/* Relative div for image */}
            <div className="relative w-16 h-20 rounded-md overflow-hidden">
                <Image src={'/hoodie.png'} fill className="object-cover bg-sky-50 w-full h-full" alt="product" />
            </div>

            {/* Details */}
            <div className="flex flex-col w-52 p-2">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold cursor-pointer hover:underline">Pink Hoodie</p>
                    <p className="text-[0.8rem] border-2 cursor-pointer  border-green-500 rounded-md text-green-500 font-semibold px-2">₹300</p>
                </div>
                <p className="text-[0.8rem] text-left">Natural | XL</p>
                <div className="text-[0.8rem] flex justify-between mt-2">
                    <p>Qty 1</p>
                    <p className="text-sky-500 font-semibold cursor-pointer hover:underline">Remove</p>
                </div>
            </div>
        </div>
    )
}