"use client"

import { useEffect, useRef } from "react";
import Techstars from '@/assets/techstars.png';
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";
import { ScrollParallax } from "react-just-parallax";
import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from '@/assets/product_image.png';
import dartImage from '@/assets/dart_metrics.gif';
import tractionImage from '@/assets/traction_metrics.gif';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }

}

const tabs = [
     {
       icon: "/assets/lottie/stars.lottie",
       title: "Slice & Dice",
       isNew: false,
       backgroundPositionX: 0,
       backgroundPositionY: 0,
       backgroundSizeX: 150,
     },
     {
       icon: "/assets/lottie/vroom.lottie",
       title: "Plug & Play",
       isNew: false,
       backgroundPositionX: 98,
       backgroundPositionY: 100,
       backgroundSizeX: 135,
     },
     {
       icon: "/assets/lottie/stars.lottie",
       title: "Generate & Distribute",
       isNew: true,
       backgroundPositionX: 100,
       backgroundPositionY: 27,
       backgroundSizeX: 177,
     },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
     const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
     const tabRef = useRef<HTMLDivElement>(null);

     const xPercent = useMotionValue(0);
     const yPercent = useMotionValue(0);
     const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercent}% ${yPercent}%, black, transparent)`;

     useEffect(()=>{
          if(!tabRef.current) return;

       const { height, width } = tabRef.current?.getBoundingClientRect();
       const perimeter = (height * 2) + (width * 2);
       const times = [
         0,
         width / perimeter,
         (width + height) / perimeter,
         (width * 2 + height) / perimeter,
         1
       ];
       const options: ValueAnimationTransition = {
         times:times,
         duration:5,
         repeat: Infinity,
         ease: "linear",
         repeatType: "loop",
       };
       animate(xPercent, [0,100,100,0,0], options);
       animate(yPercent, [0,0,100,100,0], options);
     },[tabRef, xPercent, yPercent]);

     const handleTabHover = () => {
       if(dotLottieRef.current === null) return;
       dotLottieRef.current.seek(0);
       dotLottieRef.current.play();
     }
     return (
       <div onMouseEnter={handleTabHover} className="border border-[#3700ff]/25 flex p-2.5 rounded-lg gap-2.5 items-center flex-1 relative">
         <motion.div ref={tabRef} style={{maskImage:maskImage}} className="absolute inset-0 -m-px border border-[#5328f3]/50 rounded-md"></motion.div>
         <div className="h-12 w-12 border border-[#3700ff]/25 rounded-md inline-flex items-center justify-center">
           <DotLottiePlayer
             ref={dotLottieRef}
             src={tab.icon}
             className="h-5 w-5"
             autoplay
           />
         </div>
         <div className="font-medium">{tab.title}</div>
         {tab.isNew &&  (
           <div className="text-xs rounded-md px-2 py-0.5 bg-[#5328f3] text-white font-semibold">new</div>
         )}
       </div>
     )
}

export const Features = () => {

     return (
          <section className='flex items-center relative py-20'>
               <div className='container'>
                    <div className=" text-white min-h-screen">
                         <motion.div
                              className="max-w-7xl mx-auto"
                              initial="initial"
                              animate="animate"
                              variants={staggerChildren}
                         >
                              <motion.div className="flex items-center justify-center mb-16"
                                   initial={{ opacity: 0, y: -20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, delay: 0.6 }}>
                                   <img
                                        src={Techstars.src}
                                        width={400}
                                        alt="Techstars '24"
                                        className=''
                                   />
                              </motion.div>
                              <motion.header className="mb-16 text-center" variants={fadeInUp}>
                                   <p className="text-sm uppercase tracking-wider mb-2 font-medium text-[#6e48fb]">
                                        Master your Metrics
                                   </p>
                                   <h1 className="text-3xl md:text-5xl font-semibold mb-8  bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-300 leading-10">
                                        Streamlining all your venture performance metrics.
                                   </h1>
                              </motion.header>
                              <div className="mt-10 flex flex-col gap-3 lg:flex-row">
                                   {
                                   tabs.map(tab => (
                                   <FeatureTab {...tab} key={tab.title}/>
                                   ))
                                   }
                              </div>
                              <div className="relative border border-[#5328f3]/50 p-2.5 rounded-lg mt-3">
                                   <div
                                        className="aspect-video bg-cover border border-[#5328f3]/50 rounded-lg"
                                        style={{
                                        backgroundImage:`url(${productImage.src})`,
                                        }}
                                   >
                                        <ScrollParallax isAbsolutelyPositioned>
                                             <div className="absolute hidden md:block -left-[10rem] bottom-[1rem] border border-[#5328f3]/50 p-1 rounded-lg bg-gray-900">
                                                  
                                                  <img
                                                       src={dartImage.src}
                                                       className="rounded-lg"
                                                       width={300}
                                                       alt="Dart Metrics"
                                                  />
                                                  
                                             </div>
                                        </ScrollParallax>
                                        <ScrollParallax isAbsolutelyPositioned>
                                             <div className="absolute hidden md:block -right-[10rem] top-[1rem] rounded-lg bg-transparent">
                                                  <img
                                                       src={tractionImage.src}
                                                       className="border border-[#5328f3]/50 rounded-lg"
                                                       width={300}
                                                       alt="Traction Metrics"
                                                  />
                                             </div>
                                        </ScrollParallax>
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </div>
          </section>
     )
}