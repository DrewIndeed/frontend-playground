import gsap from "gsap";
import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";

import BgVideo from "@/assets/metalab/bg.mp4";
import HomeMainContent from "../components/HomeMainContent";
import MenuButton from "../components/common/MenuButton";
import { MenuItems } from "../constants/HomeData";

import { cn } from "@/utils/classname.util";
import "../index.css";

export default function MetalabHomePage() {
  // refs
  const vidRef = useRef<HTMLVideoElement>(null);

  // states
  const [hoveringKey, setHoveringKey] = useState("");
  const [previousThumbnail, setPreviousThumbnail] = useState("");

  // methods
  const play = debounce(() => {
    setTimeout(() => {
      vidRef.current && vidRef.current.play();
    }, 300); // THIS CAN BE ADJUSTED
    setHoveringKey("");
  }, 100);
  const pause = debounce((key: string) => {
    setTimeout(() => {
      vidRef.current && vidRef.current.pause();
      setHoveringKey(key);
      setPreviousThumbnail(MenuItems[key]?.thumbnail);
    }, 300);
  }, 100);

  // effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".main-menu-btn", {
        opacity: 1,
        duration: 0.2,
        delay: 2.1,
        ease: "power3.easeInOut",
      });
      gsap.fromTo(
        [".logo-wrapper", ".time-wrapper", ".menu-items-wrapper"],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.2,
          delay: 2.2,
          ease: "power3.easeInOut",
        }
      );
    });
    const startVid = setTimeout(() => play(), 2100); // 2.1s
    return () => {
      ctx.revert();
      clearTimeout(startVid);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // render
  return (
    <div className="flex-center screen">
      <div className="wrapper animate-pageIn bg-[#7f7f7e]">
        {/* video background */}
        <video
          className="bg-[#7f7f7e] brightness-75 contrast-125 absolute w-full h-full"
          ref={vidRef}
          src={BgVideo}
          // autoPlay
          muted
          loop
        />
        {/* hover target content */}
        <div
          style={{
            backgroundImage: `url(${
              MenuItems[hoveringKey]?.thumbnail || previousThumbnail
            })`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className={cn(
            "hover-target-content absolute w-screen h-screen brightness-[.6] contrast-125 animate-fadeIn",
            { "animate-fadeOut": hoveringKey.length === 0 }
          )}
        ></div>
        {/* menu items */}
        <div className="menu-items-wrapper">
          {Object.keys(MenuItems).map((key) => {
            return (
              <MenuButton
                key={MenuItems[key].id}
                onMouseEnter={() => pause(key)}
                onMouseLeave={play}
                className="item"
              >
                {MenuItems[key].title}
              </MenuButton>
            );
          })}
        </div>
        {/* main content, disappear when hovering menu items */}
        <HomeMainContent hideText={hoveringKey.length > 0} />
      </div>
    </div>
  );
}
