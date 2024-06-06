import gsap from "gsap";
import debounce from "lodash.debounce";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import BgVideo from "@/assets/metalab/bg.mp4";
import { Logo } from "@/assets/metalab/logo";
import { Mail } from "@/assets/metalab/mail";
import useCurrentTime from "@/hooks/useCurrentTime";

import MenuButton from "../components/common/MenuButton";
import "../index.css";

export default function MetalabHomePage() {
  // refs
  const vidRef = useRef<HTMLVideoElement>(null);

  // hooks
  const [currTime] = useCurrentTime();

  // consts
  const menuItems = ["Uber", "Calvin Klein", "The Athletic"];

  // methods
  const play = debounce(() => vidRef.current && vidRef.current.play(), 100);
  const pause = debounce(() => vidRef.current && vidRef.current.pause(), 100);

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
    const startVid = setTimeout(() => play(), 2100);
    return () => {
      ctx.revert();
      clearTimeout(startVid);
    };
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

        {/* We make interface phrase */}
        <h1 className="main-text flex-center bottom-[12rem] xl:mr-[7rem] mr-[1rem] right-0 left-0">
          We make
        </h1>
        <h1 className="main-text bottom-[6.5rem] xl:left-[48%] left-[52%]">
          interfaces
        </h1>

        {/* navigation bar */}
        <MenuButton className="main-menu-btn opacity-0 fixed top-[1.5rem] left-[1.5rem]">
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
            className="email"
            prefixClassName="shrink-0 fixed right-[16px] w-max pb-[1px]"
            childrenClassName="fixed right-[5.5px]"
          >
            <Mail className="text-white w-[12px] h-[12px]" />
          </MenuButton>
        </div>

        {/* menu items */}
        <div className="menu-items-wrapper">
          {menuItems.map((item) => (
            <MenuButton
              key={item}
              onMouseEnter={pause}
              onMouseLeave={play}
              className="item"
            >
              {item}
            </MenuButton>
          ))}
        </div>

        {/* introduction */}
        <p className="intro">
          Since 2006, we've helped the most
          <br />
          innovative startups and reputable
          <br />
          brands design, build, and ship
          <br />
          products worth talking about.
        </p>
      </div>
    </div>
  );
}
