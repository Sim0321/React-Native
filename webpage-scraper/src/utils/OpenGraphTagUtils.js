import { OpenGraphParser } from "react-native-opengraph-kit";

export const getOpenGraphData = async (url) => {
  // console.log("받는 url은 ::", url);
  const result = await OpenGraphParser.extractMeta(url);
  // console.log("result util :", result);

  return result[0] || null;
};
