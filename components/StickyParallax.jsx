'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import styles from '../app/styles.module.css'
import { useRef } from 'react'

export default function StickyParallax() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const parallax = useRef(null);
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 h-vh-100 " />

      <Parallax pages={5} className='overflow-y-scroll no-scrollbar' ref={parallax}>
        <ParallaxLayer  offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="text-4xl">Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div onClick={() => parallax.current.scrollTo(0)} className={`flex justify-center text-lg/10 h-40 w-1/4 items-center rounded-lg ml-p15 bg-red-400`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer onClick={() => parallax.current.scrollTo(2)} offset={1} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div  className={`flex justify-center text-xl h-40 items-center rounded-lg w-1/4 ml-p15 bg-purple-500`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer  offset={2} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div onClick={() => parallax.current.scrollTo(1)} className={`flex justify-center items-center text-lg h-40 w-1/4 text-center rounded-lg ml-p15 bg-black`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
