import { motion } from "motion/react";

const Logo = () => {
  return (
    <motion.svg
      width="48"
      height="48"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.rect
        x="2.5"
        y="2.5"
        width="235"
        height="235"
        rx="117.5"
        stroke="white"
        strokeWidth="5"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      />
      <motion.path
        d="M118.737 171V61.9091H81.8762C73.3535 61.9091 66.3578 63.3651 60.889 66.277C55.4203 69.1534 51.372 73.1129 48.7441 78.1555C46.1163 83.1982 44.8024 88.9332 44.8024 95.3608C44.8024 101.788 46.1163 107.488 48.7441 112.46C51.372 117.431 55.4025 121.337 60.8358 124.178C66.269 126.984 73.2115 128.386 81.6632 128.386H111.493V116.455H82.0893C76.2654 116.455 71.5779 115.602 68.0268 113.898C64.4402 112.193 61.8478 109.778 60.2498 106.653C58.6163 103.493 57.7995 99.7287 57.7995 95.3608C57.7995 90.9929 58.6163 87.1754 60.2498 83.9084C61.8833 80.6413 64.4934 78.12 68.0801 76.3445C71.6667 74.5334 76.4075 73.6278 82.3024 73.6278H105.527V171H118.737ZM67.3876 121.994L40.541 171H55.8819L82.3024 121.994H67.3876Z"
        fill="white"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.75 }}
      />
      <motion.path
        d="M119.284 171V61.9091H132.495V116.028H133.773L182.779 61.9091H200.037L154.228 111.128L200.037 171H184.057L146.131 120.29L132.495 135.631V171H119.284Z"
        fill="white"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ delay: 0.8, duration: 0.75 }}
      />
    </motion.svg>
  );
};

export default Logo;
