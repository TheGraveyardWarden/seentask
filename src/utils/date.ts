import moment from "jalali-moment";
import { DateRange, Timestamp, YMD } from "../types";

export const DAYS_FA: Array<string> = [
  "یک شنبه",
  "دو شنبه",
  "سه شنبه",
  "چهار شنبه",
  "پنج شنبه",
  "جمعه",
  "شنبه",
];

export const JALALI_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export const getMonthStr = (month: number): string => {
  return JALALI_MONTHS[month - 1];
};

export const getMonthNrDays = (year: number, month: number): number => {
  const m = moment(`${year}`, "jYYYY");
  return month < 7 ? 31 : month !== 12 ? 30 : m.isLeapYear() ? 30 : 29;
};

export const getYMD = (time: Timestamp): YMD => {
  const d = new Date(time);
  return {
    day: moment(d, "YYYY/MM/DD").locale("fa").format("DD"),
    month: moment(d, "YYYY/MM/DD").locale("fa").format("MM"),
    year: moment(d, "YYYY/MM/DD").locale("fa").format("YYYY"),
  };
};

export const dateToTime = (
  day: string,
  month: string,
  year: string
): Timestamp => {
  const jalaliDate = moment(`${year}/${month}/${day}`, "jYYYY/jM/jD");
  const gregorianDate = jalaliDate
    .startOf("day")
    .clone()
    .locale("en")
    .format("YYYY-MM-DD");
  return new Date(gregorianDate).getTime();
};

export const getDateStr = (time: Timestamp): string => {
  const d = new Date(time);
  return `${moment(d, "YYYY/MM/DD").locale("fa").format("DD")} / ${moment(
    d,
    "YYYY/MM/DD"
  )
    .locale("fa")
    .format("MM")} / ${moment(d, "YYYY/MM/DD").locale("fa").format("YYYY")}`;
};

export const zfill = (number: number, width: number = 2): string => {
  const numString = String(number);
  return numString.padStart(width, "0");
};

export const getTimeStr = (time: Timestamp): string => {
  const d = new Date(time);
  return `${zfill(d.getHours())}:${zfill(d.getMinutes())}`;
};

export const getDaysFromNow = (n: number): Timestamp => {
  let d = new Date(Date.now());
  d.setDate(d.getDate() + n);
  return d.getTime();
};

export const getDaysFa = (time: Timestamp): string => {
  const d = new Date(time);
  return DAYS_FA[d.getDay()];
};

export const getDate = (time: Timestamp): number => {
  const d = new Date(time);
  return Number(moment(d, "YYYY/MM/DD").locale("fa").format("DD"));
};

export const isTimeInRange = (time: Timestamp, range: DateRange): boolean => {
  return time >= range.from && time <= range.to;
};

export const getRangeDay = (time: Timestamp): DateRange => {
  let f = new Date(time);
  let t = new Date(time);

  f.setHours(0, 0, 0, 0);
  t.setHours(23, 59, 59);

  return {
    from: f.getTime(),
    to: t.getTime(),
  };
};

export const getRangeWeek = (
  time: Timestamp,
  week: number = 1
): DateRange => {
  let f = new Date(time);
  let t = new Date(time);

  f.setDate(f.getDate() - (week * 7));
  f.setHours(0, 0, 0, 0);
  t.setHours(23, 59, 59);

  return {
    from: f.getTime(),
    to: t.getTime(),
  };
};

export const getRangeMonth = (
  time: Timestamp,
  month: number = 1
): DateRange => {
  let f = new Date(time);
  let t = new Date(time);

  f.setMonth(f.getMonth() - month);
  f.setHours(0, 0, 0, 0);
  t.setHours(23, 59, 59);

  return {
    from: f.getTime(),
    to: t.getTime(),
  };
};

export const getRangeToday = (): DateRange => {
  return getRangeDay(Date.now());
};

export const getRangeLastWeek = (): DateRange => {
  return getRangeWeek(Date.now());
};

export const getRangeLastMonth = (): DateRange => {
  return getRangeMonth(Date.now());
};

export const getRangeLast3Month = (): DateRange => {
  return getRangeMonth(Date.now(), 3);
};

export const getRangeLast6Month = (): DateRange => {
  return getRangeMonth(Date.now(), 6);
};

export const getRangeLastYear = (): DateRange => {
  return getRangeMonth(Date.now(), 12);
};