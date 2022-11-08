import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const index = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <Link href="/">Home</Link>

      <motion.ul variants={list} animate='visible' initial='hidden'>
        <motion.li>1</motion.li>
        <motion.li variants={item}>2</motion.li>
        <motion.li variants={item}>3</motion.li>
      </motion.ul>
    </div>
  );
};

export default index;
