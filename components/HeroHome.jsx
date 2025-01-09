"use client"; 
import { animated, useSpring } from "@react-spring/web";
import { AiFillGoogleCircle, AiFillGithub, AiFillRedditCircle, AiFillFire } from "react-icons/ai";

function HeroHome() {
  // const spring = useSpring({
  //   from: { x: 0,  },
  //   to: { x: 100,  },
  // })
  const [spring, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 100 },
  }));
  const clickHandler = () => {
    console.log("clicked");
    api.start({
      from: { x: 0, x: 100, y: 0 },
      to: { x: 100, x: 0, y: 100 },
    });
  };
  return (
    <>
    <div className="h-screen">
      <div
        className="h-4/5 text-black bg-cbg text-center justify-center flex items-center text-7xl font-extrabold"
        id="Home"
        >
        Landing Page
        </div>
      <div className="relative h-1/5 w-full flex items-center justify-center overflow-hidden bg-white">
        <div className="animate-marquee flex space-x-6">
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillGoogleCircle />
          <p className="m-1">client_1</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillGithub />
          <p className="m-1">client_2</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillRedditCircle />
          <p className="m-1">client_3</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillFire />
          <p className="m-1">client_4</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillGoogleCircle />
          <p className="m-1">client_5</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillGithub />
          <p className="m-1">client_6</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillRedditCircle />
          <p className="m-1">client_7</p>
          </div>
          <div className="text-4xl flex items-center font-bold  text-black py-4 px-5">
          <AiFillFire />
          <p className="m-1">client_8</p>
          </div>
        </div>
      </div>
    </div>
    
      {/* <animated.div
        onClick={clickHandler}
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...spring,
        }}
      /> */}
    </>
  );
}

export default HeroHome;
