import { OpenGraphParser } from "react-native-opengraph-kit";

export const getOpenGraphData = async (url) => {
  const result = OpenGraphParser.extractMeta(url);
  console.log("result :", result);

  return result[0] || null;
};
