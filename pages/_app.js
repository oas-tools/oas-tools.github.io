import "../styles.css";
import "nextra-theme-docs/style.css";
import { useEffect } from "react";

export default function Nextra({ Component, pageProps }) {
  useEffect(() => {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        //check if there is any key for theme in local storage and if the system color theme is dark
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light'); 
    }
  },[]);

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
      <Component {...pageProps} />
  );
}