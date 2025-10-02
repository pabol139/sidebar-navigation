import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import FocusLock from "react-focus-lock";
import { SECTIONS_DATA } from "./constants/sections-data";
import SidebarSection from "./SidebarSection";
import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export default function SidebarNav({
  isOpen,
  isDesktop,
  handleClose,
}: {
  isOpen: boolean;
  isDesktop: boolean;
  handleClose: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    if (!isOpen || isDesktop) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  const content = (
    <>
      <motion.div
        key={"backdrop"}
        initial={{
          opacity: 0,
          transition: {
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.6,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
        className="absolute top-0 left-0 z-10 w-full h-full md:hidden bg-black/30"
        onClick={handleClose}
      ></motion.div>
      <motion.aside
        id="site-sidebar"
        key={"sidebar"}
        initial={{
          transform: "translateX(-100%)",
          transition: {
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
        animate={{
          transform: "translateX(0%)",
          transition: {
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
        exit={{
          transform: "translateX(-100%)",
          transition: {
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.32, 0.72, 0, 1],
          },
        }}
        role={!isDesktop ? "dialog" : undefined}
        aria-modal={!isDesktop ? true : undefined}
        className="fixed left-0 top-0 max-w-80 md:max-w-[revert] w-[var(--sidebar-width)] bg-[var(--sidebar-background)] z-20 text-[var(--sidebar-text)] h-dvh"
      >
        <nav className=" flex flex-col justify-between  border-r border-r-[var(--border)] h-full ">
          <div className="flex-1 px-6 py-6 pb-2 space-y-6 overflow-auto ">
            <div className="flex items-center justify-between gap-1">
              <svg
                width={80}
                height={32}
                fill="white"
                role="presentation"
                viewBox="0 0 160 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 68.906 15.111 L 76.256 15.111 L 76.256 33.778 C 76.256 42.608 68.846 49.778 59.718 49.778 C 50.592 49.778 43.181 42.608 43.181 33.778 L 43.181 15.11 L 50.531 15.11 L 50.531 33.777 C 50.531 39.173 54.648 43.555 59.718 43.555 C 64.789 43.555 68.906 39.173 68.906 33.777 Z M 109.331 30.222 C 109.331 24.826 105.214 20.444 100.143 20.444 C 95.073 20.444 90.956 24.826 90.956 30.222 L 90.956 48.89 L 83.606 48.89 L 83.606 30.222 C 83.606 21.392 91.016 14.222 100.143 14.222 C 109.27 14.222 116.68 21.392 116.68 30.222 L 116.68 48.889 L 109.331 48.889 Z M 6.431 48.889 L 0 48.889 L 0 32.889 L 0.028 32.889 C 0.009 32.593 0 32.297 0 32 L 0 0 L 7.35 0 L 7.35 17.78 C 10.419 15.547 14.24 14.222 18.375 14.222 C 28.518 14.222 36.75 22.188 36.75 32 C 36.75 41.812 28.518 49.778 18.375 49.778 C 13.983 49.778 9.95 48.284 6.79 45.793 Z M 17.916 20.445 C 11.576 20.445 6.431 25.622 6.431 32 C 6.431 38.378 11.576 43.556 17.916 43.556 C 24.255 43.556 29.4 38.378 29.4 32 C 29.4 25.623 24.255 20.445 17.916 20.444 Z M 153.431 15.111 L 159.862 15.111 L 159.862 31.111 L 159.834 31.111 C 159.852 31.405 159.862 31.702 159.862 32 L 159.862 64 L 152.512 64 L 152.512 46.22 C 149.443 48.453 145.621 49.778 141.487 49.778 C 131.344 49.778 123.112 41.812 123.112 32 C 123.112 22.188 131.344 14.222 141.487 14.222 C 145.878 14.222 149.912 15.716 153.072 18.207 Z M 153.431 32 C 153.431 25.622 148.285 20.444 141.946 20.444 C 135.606 20.444 130.462 25.622 130.462 32 C 130.462 38.378 135.606 43.556 141.946 43.556 C 148.285 43.556 153.431 38.378 153.431 32 Z"
                  height="64.0000001220703px"
                  id="TQykMvHcT"
                  width="159.86199951171875px"
                />
              </svg>
              <button
                className="md:hidden relative after:content-[''] after:-inset-3 after:absolute"
                onClick={handleClose}
              >
                <X></X> <span className="sr-only">Close Menu</span>
              </button>
            </div>
            <SidebarSection data={SECTIONS_DATA[0]}></SidebarSection>
            <SidebarSection data={SECTIONS_DATA[1]}></SidebarSection>
            <SidebarSection data={SECTIONS_DATA[2]}></SidebarSection>
          </div>
          <section className="h-[120px] bg-[var(--sidebar-background)] border-t border-t-[var(--border)] flex flex-col gap-2 z-10 w-full pt-5 pb-5 px-6">
            <a
              href=""
              className="hover:bg-gray-300 transition-[background-color,transform] active:scale-95 bg-white text-black  font-semibold px-2  py-1.5  rounded-md flex items-center text-center relative justify-center"
            >
              Login
            </a>
            <a
              href=""
              className=" hover:bg-[#d95a00] transition-[background-color,transform] active:scale-95 bg-[#ff6a00]  font-semibold px-2  py-1.5  rounded-md flex items-center text-center relative justify-center"
            >
              Sign up
            </a>
          </section>
        </nav>
      </motion.aside>
    </>
  );

  return (
    <AnimatePresence initial={false} mode={"popLayout"}>
      {isOpen &&
        (!isDesktop ? (
          <FocusLock returnFocus>{content}</FocusLock>
        ) : (
          <div>{content}</div>
        ))}
    </AnimatePresence>
  );
}
