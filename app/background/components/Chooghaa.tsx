'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'motion/react'
type Props = {
  className?: string
}

function Chooghaa({ className }: Props) {
  return (
    <motion.section
      initial={false}
      whileInView={{ height: 'auto' }}
      transition={{ type: 'tween', duration: 1.5, ease: 'circOut' }}
      className={cn('bg-yellow-400 flex h-0 max-w-7xl mx-auto', className)}
    >
      <div className="grid grid-cols-3 grid-rows-6  h-[700px] w-[3rem]">
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
        <div className="col-span-1 row-span-5 bg-black"> </div>
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[700px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-black"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-black"> </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-6  h-[700px] w-[1rem]">
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-6 h-[700px] w-[12rem]">
        <div className="col-span-9 bg-black  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-black  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-black  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-black  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-black  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-black  "> </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[700px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-black"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-black"> </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-6  h-[700px] w-[1rem]">
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-6 h-[700px] w-[12rem]">
        <div className="col-span-9 bg-black  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-black  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-black  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-black  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-black  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-black  "> </div>
      </div>{' '}
      <div className="grid grid-cols-10 grid-rows-6 h-[700px] w-[12rem]">
        <div className="col-span-9 bg-black  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-black  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-black  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-black  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-black  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-black  "> </div>
      </div>{' '}
      <div className="grid grid-cols-10 grid-rows-6 h-[700px] w-[12rem]">
        <div className="col-span-9 bg-black  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-black  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-black  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-black  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-black  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-black  "> </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[700px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-black"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-black"> </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-6  h-[700px] w-[1rem]">
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-6 h-[700px] w-[12rem]">
        <div className="col-span-9 bg-black  "></div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-black  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-black  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-black  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-black  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-black  "></div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[700px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-black"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-black"> </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6  h-[700px] w-[3rem]">
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
        <div className="col-span-1 row-span-5 bg-black"></div>
        <div className="col-span-1 row-span-5 bg-yellow-400"> </div>
      </div>
    </motion.section>
  )
}

export default Chooghaa
