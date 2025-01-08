
const { default: LayeredCard } = require("./LayeredCard")

const MyComponent  = () => {
    return (
        <>
        <div className="flex items-center justify-center h-screen">
        <div className="w-2/4 flex justify-center h-screen items-center">
        <LayeredCard />
        </div>
        <div className="w-2/4">
        <p className="text-sm">
        built by cognition    
        </p>
        <p>
        devin is a collaborative AI temmate
        </p>
        
        <p>
        built to help ambitous engineer teams
        </p>
        
        </div>
        </div>
        </>
    )
}

export default MyComponent ; 