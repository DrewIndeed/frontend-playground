import { DATETIME_FORMAT, TIME_FORMAT } from "@/constants/date.constant";
import dayjs, { Dayjs } from "dayjs";

export const formatDatetime = (dateTimeVal: string) =>
  dayjs(dateTimeVal).format(DATETIME_FORMAT);

export const formatDateTimeByEpoch = (epoch: number) =>
  dayjs(epoch).format(DATETIME_FORMAT);

export const formatTime = (date: Date | Dayjs) =>
  dayjs(date).format(TIME_FORMAT);
