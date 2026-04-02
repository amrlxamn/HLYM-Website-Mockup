import { motion } from "framer-motion";
import styled from "styled-components";

export const CustomCursorRoot = styled(motion.div)`
  border: 1px solid #ffffffd9;
  border-radius: 999px;
  height: 34px;
  left: 0;
  mix-blend-mode: difference;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 34px;
  z-index: 9999;

  @media (hover: none), (pointer: coarse) {
    display: none;
  }
`;
