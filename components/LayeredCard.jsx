const LayeredCard = () => {
    return (
        <>
        <div className="parent relative w-full h-full flex items-center justify-center">
  <div className="child1 w-2/4 h-2/4 rounded-xl bg-green-300 absolute z-30  translate-y-5 translate-x-5 opacity-90">
  </div >
  <div className="child2 w-2/4 h-2/4 rounded-xl bg-pink-300 absolute z-20  transform -rotate-6 translate-y-1 -translate-x-2 opacity-95">
  </div>
  <div className="child3 w-2/4 h-2/4 rounded-xl bg-blue-300 absolute z-10  transform -rotate-12 translate-y-1 -translate-x-10">
  </div>
</div>
        </>
    )
}
export default LayeredCard; 