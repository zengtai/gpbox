import { useRef, useState } from "react";
import Draggable from "react-draggable";

export default function Player({ src, width, height, isShow, updateState }) {
  const [show, setShow] = useState(isShow);

  const [isClick, setIsClick] = useState(false);

  function handleClick() {
    updateState(!show);
    console.log(`click back`);
  }

  function handleStart() {
    setIsClick(true);
  }
  function handleDrag() {
    setIsClick(false);
  }
  function handleEnd() {
    if (isClick) {
      handleClick();
    }
  }

  const nodeRef = useRef(null);

  return (
    <>
      {show ? (
        <div
          className="fixed inset-0 z-30 overflow-hidden bg-black/80"
          onClick={handleClick}
        >
          <Draggable
            nodeRef={nodeRef}
            axis="y"
            bounds="parent"
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleEnd}
          >
            <div
              id="closePlayer"
              ref={nodeRef}
              // onClick={isClick ? handleClick : null}
              className="absolute top-2 left-0 z-40 flex h-12 w-12 cursor-pointer items-center justify-center rounded-r-full border-y-4 border-r-4 border-white/20 bg-rose-500/80 xl:hidden"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </div>
          </Draggable>
          <iframe
            allowFullScreen={true}
            className="max-w-screen mx-auto min-h-screen bg-black"
            width={width}
            height={height}
            src={src}
          ></iframe>
        </div>
      ) : null}
    </>
  );
}
