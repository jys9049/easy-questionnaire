"use server";
import { Container } from "@mui/material";

import S from "./page.module.css";

export default async function Home() {
  return <Container className={S.container}></Container>;
}
