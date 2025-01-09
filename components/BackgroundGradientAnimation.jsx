import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
    return (
        <BackgroundGradientAnimation>
            <div className="absolute z-10 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
                <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-black to-black">
                    <div>
                        <p className="text-center text-7xl mb-4">About Us</p>
                    </div>
                    <div className="text-center w-w85 m-auto text-2xl">
                        <p>
                            “We build niche technology solving critical management problems of small & medium enterprises.”
                        </p>
                        <p className="wrap">
                            We specialize in creating Saas-based solutions & enterprise solutions depending on the needs of our clients. We simplify business processes with the advantages of speed, scale & technology. We have introduced a flexible pay-as-you-go model with an aim to make automation possible for every enterprise.
                        </p>
                    </div>
                </div>
            </div>

        {/* <div
            className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            <p
                className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                Gradients X Animations
            </p>
        </div> */}
        </BackgroundGradientAnimation>
    );
}
