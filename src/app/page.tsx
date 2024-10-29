"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import "@/mocks";

export default function Home() {
  useEffect(() => {
    (async () => {
      const data = await fetch("https://example.com/use", {
        method: "POST",
        body: "hi",
      });
      console.log(await data.json());
    })();
  }, []);

  return <div className={styles.page}></div>;
}
