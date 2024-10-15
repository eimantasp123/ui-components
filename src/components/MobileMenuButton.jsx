import { motion, MotionConfig } from "framer-motion";
import PropTypes from "prop-types";

export default function MobileMenuButton({ active, setActive }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        animate={active ? "open" : "closed"}
        className="relative py-6 pr-8"
      >
        {/* First line */}
        <motion.span
          style={{
            left: "58%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute left-0 top-0 h-[2px] w-6 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />

        {/* Second line */}
        <motion.span
          style={{
            left: "calc(50% + 6px)",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-5 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              left: "58%",
              width: ["16px", "24px", "24px"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              left: "calc(50% + 6px)",
              width: ["24px", "16px", "16px"],
            },
          }}
        />

        {/* Last line */}
        <motion.span
          style={{
            left: "calc(50% + 8px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-[2px] w-3 bg-black"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "58%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 8px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

MobileMenuButton.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
};
