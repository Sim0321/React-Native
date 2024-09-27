import { useEffect, useState } from "react";

// 앱이 맨처음에 진입할 때 랜덤 포춘쿠키
const getRandomCookieKey = () => {
  const cookieLen = 15;
  const randomNum = Math.floor(Math.random() * cookieLen);
  return `cookie_${randomNum + 1}`;
};

export const useCookie = () => {
  const [cookieKey, setCookieKey] = useState("");

  useEffect(() => {
    const randomCookieKey = getRandomCookieKey();
    setCookieKey(randomCookieKey);
  }, []);

  return {
    cookieKey,
  };
};
