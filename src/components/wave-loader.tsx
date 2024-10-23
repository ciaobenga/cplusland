import { motion } from "framer-motion";

export function WaveLoaderComponent() {
  const containerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    start: {
      y: "0%",
    },
    end: {
      y: "100%",
    },
  };

  const dotTransition: { duration: number; repeat: number; repeatType: "reverse"; ease: string } = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse", // Explicitly assign the correct type here
    ease: "easeInOut",
  };

  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <motion.div
        className="flex gap-3"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[0, 1, 2].map((index) => (
          <motion.div key={index} variants={dotVariants} transition={dotTransition}>
            <div className="w-3 h-3 rounded-full bg-black dark:bg-white" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
