import Link from "next/link";
import CartProduct from "../cartProduct/CartProduct";
import Dropdown from "../dropdown/Dropdown";

export default function Cart() {
    return (
        <Dropdown>
            <div className="whitespace-nowrap flex flex-col p-2 gap-2">
                <div className="max-h-80 overflow-auto">
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                    {/* <CartProduct /> */}
                </div>
                <div>
                    <div className="text-sm font-semibold flex items-center justify-between">
                        <p>Subtotal</p>
                        <p>₹900</p>
                    </div>
                    <p className="text-[0.7rem] text-left">Shipping and taxes calculated at checkout.</p>
                    <div className="flex mt-2 items-center gap-2">
                        <Link href={'/'} className="btn-secondary-md w-full">View cart</Link>
                        <Link href={'/'} className="btn-primary-md w-full">Checkout</Link>
                    </div>
                </div>
            </div>
        </Dropdown>
    )
}