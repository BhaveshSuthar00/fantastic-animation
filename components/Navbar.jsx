import Link from "next/link";

function Navbar() {
    return ( 
        <div className=" w-full m-auto fixed top-1 py-1 z-40 mt-2">
            <div className="flex justify-space-between w-w85 items-center bg-black text-white p-2 m-auto rounded-2xl">
                <div>
                    {/* Logo  left hand logo */}
                </div>
                <div className="w-1/5 flex justify-between  px-3 py-3 ml-3">
                    {/* center menu list */}
                    <Link href="#Home">Home</Link>
                    <Link href="#AboutUs">About Us</Link>
                    <Link href="#ContactUs">Contact Us</Link>
                </div>
                <div className="ml-auto mr-3">
                    {/* right hand side single button for book demo */}
                    {/* linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103) */}
                    <button className="animate-shimmer items-center justify-center rounded-md border border-slate-50 bg-[linear-gradient(110deg,#adffc1b9,45%,#cef593,55%,#acfbcd)] bg-[length:200%_100%] px-3 py-3  font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Book Demo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;