"use client";
import { useContext } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { ClobalContext } from "@/app/context/Context";

const Overlay = () => {
  const context = useContext(ClobalContext);
  if (!context) return;
  const { overlay, setOverlay } = context;

  const Controls = () => {
    const { zoomIn, zoomOut } = useControls();

    return (
      <div className="tools flex flex-row items-center gap-2">
        <button
          className="px-2 border border-[#2e3c58] rounded-sm shadow-sm text-sm font-bold text-[#2e3c58]"
          onClick={() => zoomIn()}
        >
          +
        </button>
        <button
          className="px-2 border border-[#2e3c58] rounded-sm shadow-sm text-sm font-bold text-[#2e3c58]"
          onClick={() => zoomOut()}
        >
          -
        </button>
        <button
          className="px-2 border border-[#2e3c58] rounded-sm shadow-sm text-sm font-bold text-[#2e3c58]"
          onClick={() => setOverlay("")}
        >
          x
        </button>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 w-full h-full bg-[#000000c5] z-10 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center px-10 py-4 w-[100%] h-[90%] bg-white rounded-md border border-[#2e3c58] gap-2">
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {() => (
              <>
                <Controls />
                <TransformComponent>
                  <img src={overlay} alt="" />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
