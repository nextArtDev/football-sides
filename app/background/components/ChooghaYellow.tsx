'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'motion/react'
type Props = {
  className?: string
}

function ChooghaaYellow({ className }: Props) {
  return (
    <motion.section
      initial={false}
      whileInView={{ height: 'auto' }}
      transition={{ type: 'tween', duration: 1.5, ease: 'circOut' }}
      viewport={{ once: true }}
      className={cn('transparent flex h-0 max-w-7xl mx-auto', className)}
    >
      <div className="grid grid-cols-3 grid-rows-6  h-[250px] w-[3rem]">
        <div className="col-span-1 row-span-5 transparent"> </div>
        <div className="col-span-1 row-span-5 bg-[var(--background)]"> </div>
        <div className="col-span-1 row-span-5 transparent"> </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[250px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-[var(--background)]"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-[var(--background)]">
          {' '}
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-6  h-[250px] w-[1rem]">
        <div className="col-span-1 row-span-5 transparent"> </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-6 h-[250px] w-[12rem]">
        <div className="col-span-9 bg-[var(--background)]  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-[var(--background)]  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-[var(--background)]  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-[var(--background)]  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-[var(--background)]  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-[var(--background)]  ">
          {' '}
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[250px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-[var(--background)]"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-[var(--background)]">
          {' '}
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-6  h-[250px] w-[1rem]">
        <div className="col-span-1 row-span-5 transparent"> </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-6 h-[250px] w-[12rem]">
        <div className="col-span-9 bg-[var(--background)]  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-[var(--background)]  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-[var(--background)]  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-[var(--background)]  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-[var(--background)]  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-[var(--background)]  ">
          {' '}
        </div>
      </div>{' '}
      <div className="grid grid-cols-10 grid-rows-6 h-[250px] w-[12rem]">
        <div className="col-span-9 bg-[var(--background)]  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-[var(--background)]  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-[var(--background)]  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-[var(--background)]  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-[var(--background)]  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-[var(--background)]  ">
          {' '}
        </div>
      </div>{' '}
      <div className="grid grid-cols-10 grid-rows-6 h-[250px] w-[12rem]">
        <div className="col-span-9 bg-[var(--background)]  "> </div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-[var(--background)]  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-[var(--background)]  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-[var(--background)]  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-[var(--background)]  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-[var(--background)]  ">
          {' '}
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[250px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-[var(--background)]"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-[var(--background)]">
          {' '}
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-6  h-[250px] w-[1rem]">
        <div className="col-span-1 row-span-5 transparent"> </div>
      </div>
      <div className="grid grid-cols-10 grid-rows-6 h-[250px] w-[12rem]">
        <div className="col-span-9 bg-[var(--background)]  "></div>

        {/* Div 5 */}
        <div className="row-span-4 row-start-2 bg-[var(--background)]  "> </div>

        {/* Div 6 */}
        <div className="col-span-5 col-start-3 row-start-2 bg-[var(--background)]  "></div>

        {/* Div 7 */}
        <div className="col-span-3 col-start-4 row-start-3 bg-[var(--background)]  "></div>

        {/* Div 8 */}
        <div className="row-span-2 row-start-4 col-start-5 bg-[var(--background)]  "></div>

        {/* Div 9 */}
        <div className="row-span-4 row-start-2 col-start-9 bg-[var(--background)]  "></div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6 h-[250px] w-[3rem]">
        {/* Div6 */}
        <div className="col-span-3 row-span-2 bg-[var(--background)]"> </div>

        {/* Div7 */}
        <div className="row-span-3 col-start-2 row-start-3 bg-[var(--background)]">
          {' '}
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-6  h-[250px] w-[3rem]">
        <div className="col-span-1 row-span-5 transparent"> </div>
        <div className="col-span-1 row-span-5 bg-[var(--background)]"></div>
        <div className="col-span-1 row-span-5 transparent"> </div>
      </div>
    </motion.section>
  )
}

export default ChooghaaYellow
