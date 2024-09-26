import dayjs from "dayjs";
import { COLOR } from "./color";

export const getSections = (buses) => {
  const bBuses = []; // data
  const gBuses = []; // data
  const rBuses = []; // data
  for (const bus of buses) {
    if (bus.type === "B") bBuses.push(bus);
    else if (bus.type === "G") gBuses.push(bus);
    else if (bus.type === "R") rBuses.push(bus);
  }
  const sections = [];
  if (bBuses.length > 0) {
    sections.push({
      title: "간선버스",
      data: bBuses,
    });
  }
  if (gBuses.length > 0) {
    sections.push({
      title: "지선버스",
      data: gBuses,
    });
  }
  if (rBuses.length > 0) {
    sections.push({
      title: "직행버스",
      data: rBuses,
    });
  }
  return sections;
};

export const getBusNumColorByType = (type) => {
  switch (type) {
    case "B":
      return COLOR.BUS_B;
    case "G":
      return COLOR.BUS_G;
    case "R":
      return COLOR.BUS_R;
    default:
      return "transparent";
  }
};

export const getRemainedTimeText = (now, arrivalTime) => {
  const remainMinute = dayjs(arrivalTime).diff(dayjs(now), "minute");
  const remainSecond = dayjs(arrivalTime).diff(dayjs(now), "second") % 60;
  if (remainMinute <= 0 && remainSecond <= 0) return "도착 또는 출발";
  if (remainMinute <= 0 && remainSecond < 30) return "곧 도착";
  if (remainMinute <= 0) return `${remainSecond}초`;
  return `${remainMinute}분 ${remainSecond}초`;
};

const MAX_SEAT_NUM_OF_R = 45;
export const getSeatStatusText = (type, numOfPassengers) => {
  switch (type) {
    case "B":
    case "G":
      return numOfPassengers >= 30
        ? "혼잡"
        : numOfPassengers >= 20
        ? "보통"
        : "여유";
    case "R":
      return `${MAX_SEAT_NUM_OF_R - numOfPassengers}석`;
    default:
      return "transparent";
  }
};
