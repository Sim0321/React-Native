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
