"use client";

import { Container } from "@mui/material";

import { useEffect } from "react";
import S from "./page.module.css";

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

  return <Container className={S.container}></Container>;
}
