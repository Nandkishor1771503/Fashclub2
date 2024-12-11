import React from "react";
import { motion } from "motion/react";

function Qualities() {
  const styles = "flex  gap-2 items-center justify-center rounded-xl lg:rounded-2xl shadow-lg z-30 h-14 md:h-16 lg:h-20"
  const parentVariant = {
    hidden : {opacity : 0},
    show : {opacity : 1 ,transition :{staggerChildren  : 0.3 ,duration : 2}}
  }
  const chikdVariant ={
    hidden: { opacity : 0},
    show : { opacity : 1 }
  }
  return (
    <>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 m-auto my-20 " variants={parentVariant} initial="hidden" whileInView="show" viewport={{once:true}}>
        <motion.div className={`${styles} bg-[#cc9965] `} variants={chikdVariant}>
            <span className="text-lg">1.</span>
            <h3 className="text-xl">best cloth and style</h3>
        </motion.div>
        <motion.div className={`${styles} bg-[#e3b174]`} variants={chikdVariant}>
            <span className="text-lg">2.</span>
            <h3 className="text-xl">best cloth and style</h3>
        </motion.div>
        <motion.div className={`${styles} bg-[#f5c283]`} variants={chikdVariant}>
            <span className="text-lg">3.</span>
            <h3 className="text-xl">best cloth and style</h3>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Qualities;
