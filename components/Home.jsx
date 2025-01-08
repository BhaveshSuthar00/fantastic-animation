import LayeredCard from "@/components/LayeredCard";
import MyComponent  from "@/components/MyComponent ";
import MyBooklet from "./MyBooklet";
const HomeData = () => {
    return <>
    <div className="snap-y h-auto bg-red-500  text-7xl font-extrabold " id="Home">
        <div className="snap-center h-screen">
        <MyComponent/>
        </div>
        <div className="snap-center h-screen ">
        <MyBooklet/>
        </div>
        
    </div>
    </>
}
export default HomeData;