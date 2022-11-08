import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const index = () => {
  return (
    <AnimatePresence>
      <motion.div className="flex items-center justify-center h-[100vh]">
        <motion.p
          initial={{ translateY: -50, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: 50, opacity: 0 }}
          transition={{ type: "spring" }}
        >
          index
        </motion.p>
        <Link href="/">Home</Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default index;
