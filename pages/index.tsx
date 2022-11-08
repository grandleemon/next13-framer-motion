import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const item = {
    visible: {
      opacity: 1,
      x: 0,
      width: "500px",
      height: "100%",
      padding: "40px",
    },
    hidden: { opacity: 0, x: -100 },
  };

  const menu = {
    visible: {
      width: "100vw",
      height: "100vh",
      opacity: 1,
      borderRadius: 0,
      transition: { when: "beforeChildren", staggerChildren: 1.3 },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 1.3
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
          >
            <Link href="/test1">test1</Link>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsVisible(!isVisible)}>Animate</button>
      <button onClick={() => setShowPopup(!showPopup)}>Open popup</button>
      <Link href="/test2">test2</Link>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            className="absolute top-0 flex justify-center items-center left-0 w-[100vw] h-[100vh] bg-black/30"
          >
            <motion.div
              className="w-[500px] h-[300px] bg-white rounded-md"
              initial={{ translateY: -50 }}
              animate={{ translateY: 0 }}
              exit={{ translateY: 50 }}
              transition={{ type: "spring", duration: 1 }}
            >
              <button onClick={() => setShowPopup(false)}>X</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <button onClick={() => setMenuOpen(!menuOpen)}>Open Menu</button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-50 left-50 bg-black/80"
            initial="hidden"
            animate="visible"
            variants={menu}
          >
            <motion.div
              className="bg-white absolute top-0 left-0"
              variants={item}
            >
              <button onClick={() => setMenuOpen(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
