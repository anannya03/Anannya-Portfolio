import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export const ExperienceModal = ({
    modalContent,
    setIsOpen,
    isOpen,
    title,
    position,
    tech,
  }) => {
    useEffect(() => {
        const body = document.querySelector("body");
        if(isOpen) {
            body.style.overflow= "hidden";
        } else {
            body.style.overflow = "scroll";
        }
    }, [isOpen]);

    const content = (
        <div
          className="fixed inset-0 z-50 px-4 py-36 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <button className="absolute top-4 md:top-6 text-xl right-4">
            <MdClose />
          </button>
    
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl h-fit rounded-lg overflow-hidden bg-projectModal shadow-lg cursor-auto m-4"
          >

        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2">{title}</h4>
          <h3 className="text-base font-bold mb-2">{position}</h3>
          <div className="flex flex-wrap gap-2 text-sm text-amber">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm text-zinc-300">
            {modalContent}
          </div>
          </div>


        </motion.div>
        </div>
    );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
  };