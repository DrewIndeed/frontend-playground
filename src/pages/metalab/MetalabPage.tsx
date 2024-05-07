import { Link } from "react-router-dom";

import BgVideo from "@/assets/bg.mp4";
import { Logo } from "@/assets/logo";
import { Mail } from "@/assets/mail";
import MenuButton from "@/components/common/MenuButton";
import useCurrentTime from "@/hooks/useCurrentTime";

import { useRef } from "react";
import "./index.css";

export default function MetalabPage() {
  // refs
  const vidRef = useRef<HTMLVideoElement>(null);

  // hooks
  const [currTime] = useCurrentTime();

  // consts
  const menuItems = ["Uber", "Calvin Klein", "The Athletic"];

  // methods
  const play = () => {
    vidRef.current && vidRef.current.play();
  };
  const pause = () => {
    vidRef.current && vidRef.current.pause();
  };

  // render
  return (
    <div className="screen wrapper">
      {/* video background */}
      <div className="absolute screen">
        <video ref={vidRef} src={BgVideo} autoPlay muted loop />
      </div>

      {/* navigation bar */}
      <MenuButton className="fixed z-10 top-[1.5rem] left-[1.5rem]">
        Menu
      </MenuButton>
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
          className="p-1.5 ml-[2.5rem] w-[25px] h-[25px] hover:w-[105px] overflow-hidden"
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
    </div>
  );
}
