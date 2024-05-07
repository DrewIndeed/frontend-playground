import { Link } from "react-router-dom";

import { Logo } from "@/assets/logo";
import { Mail } from "@/assets/mail";
import MenuButton from "@/components/common/MenuButton";
import useCurrentTime from "@/hooks/useCurrentTime";

import "./index.css";

export default function MetalabPage() {
  // hooks
  const [currTime] = useCurrentTime();
  // render
  return (
    <div className="screen wrapper">
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
    </div>
  );
}
