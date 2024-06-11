import { Logo } from "@/assets/metalab/logo";
import { Mail } from "@/assets/metalab/mail";
import useCurrentTime from "@/hooks/useCurrentTime";
import { Link } from "react-router-dom";
import MenuButton from "./common/MenuButton";
import { cn } from "@/utils/classname.util";

type Props = {
  hideText: boolean;
};

export default function HomeMainContent({ hideText }: Props) {
  // hooks
  const [currTime] = useCurrentTime();

  return (
    <>
      {/* We make interface phrase */}
      <div className={cn("animate-fadeIn", { "animate-fadeOut": hideText })}>
        <h1 className="main-text flex-center bottom-[12rem] xl:mr-[7rem] mr-[1rem] right-0 left-0">
          We make
        </h1>
        <h1 className="main-text bottom-[6.5rem] xl:left-[48%] left-[52%]">
          interfaces
        </h1>
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

      {/* navigation bar */}
      <MenuButton className="main-menu-btn opacity-0 fixed top-[1.5rem] left-[1.5rem] z-20">
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
    </>
  );
}
