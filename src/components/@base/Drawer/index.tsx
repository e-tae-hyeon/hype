import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Overlay from "../Overlay";

type Props = {
  isVisible: boolean;
  onBackDrop: () => void;
  children: React.ReactNode;
};

function Drawer({ isVisible, onBackDrop, children }: Props) {
  return (
    <>
      <Overlay isVisible={isVisible} onBackDrop={onBackDrop} />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed inset-y-0 right-0 w-[65vw] bg-neutral-800 p-8"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Drawer;
