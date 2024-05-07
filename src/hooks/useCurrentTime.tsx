import { formatTime } from "@/utils/date.util";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

export default function useCurrentTime() {
  const [currTime, setCurrTime] = useState<Dayjs>(dayjs());
  useEffect(() => {
    const checkTime = setInterval(() => {
      setCurrTime(dayjs());
    }, 1000);
    return () => {
      clearInterval(checkTime);
    };
  }, []);
  return [formatTime(currTime)];
}
