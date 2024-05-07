import { Link } from "react-router-dom";
import { useRef } from "react";
import debounce from "lodash.debounce";

import BgVideo from "@/assets/bg.mp4";
import { Logo } from "@/assets/logo";
import { Mail } from "@/assets/mail";
import MenuButton from "@/components/common/MenuButton";
import useCurrentTime from "@/hooks/useCurrentTime";

import "./index.css";

export default function MetalabPage() {
  // refs
  const vidRef = useRef<HTMLVideoElement>(null);

  // hooks
  const [currTime] = useCurrentTime();

  // consts
  const menuItems = ["Uber", "Calvin Klein", "The Athletic"];

  // methods
  const play = debounce(() => vidRef.current && vidRef.current.play(), 100);
  const pause = debounce(() => vidRef.current && vidRef.current.pause(), 100);

  // render
  return (
    <div className="screen wrapper">
      {/* video background */}
      <div className="absolute screen">
        <video
          className="brightness-75 contrast-125"
          ref={vidRef}
          src={BgVideo}
          autoPlay
          muted
          loop
        />
      </div>

      {/* We make interface phrase */}
      <h1 className="main-text flex-center bottom-[12rem] mr-[4rem] right-0 left-0">
        We make
      </h1>
      <h1 className="main-text bottom-[6.5rem] left-[50%]">interfaces</h1>

      {/* navigation bar */}
      <MenuButton className="fixed top-[1.5rem] left-[1.5rem]">Menu</MenuButton>
      <div className="logo-wrapper">
        <Link to="/metalab">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="time-wrapper">
        <div className="time">{currTime}</div>
        <MenuButton
          prefix={
            <div className="text-white mr-2 transition-all duration-300">
              Get in Touch
            </div>
          }
          className="p-1.5 ml-[0.75rem] w-[25px] h-[25px] hover:w-[105px] overflow-hidden"
          prefixClassName="shrink-0 fixed right-[16px] w-max pb-[1px]"
          childrenClassName="fixed right-[5.5px]"
        >
          <Mail className="text-white w-[12px] h-[12px]" />
        </MenuButton>
      </div>

      {/* menu items */}
      <div className="menu-items-wrapper">
        {menuItems.map((item) => (
          <MenuButton onMouseEnter={pause} onMouseLeave={play} className="item">
            {item}
          </MenuButton>
        ))}
      </div>

      {/* introduction */}
    </div>
  );
}
