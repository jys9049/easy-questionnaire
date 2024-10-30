"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import S from "./Menubar.module.css";
import { usePathname, useRouter } from "next/navigation";

const Menubar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box className={S.header}>
      <Button
        onClick={() => router.push("/")}
        className={S.menuBtn}
        variant="outlined"
      >
        <HomeIcon />
        <Typography variant="subtitle2">홈으로</Typography>
      </Button>
      <Button
        onClick={() => router.push("/add")}
        className={S.menuBtn}
        variant={pathname === "/add" ? "contained" : "outlined"}
      >
        <NoteAddIcon />
        <Typography variant="subtitle2">폼 생성하기</Typography>
      </Button>
      <Button className={S.menuBtn} variant="outlined">
        <FormatListBulletedIcon />
        <Typography variant="subtitle2">폼 리스트</Typography>
      </Button>
      <Button className={S.menuBtn} variant="outlined">
        <EqualizerIcon />
        <Typography variant="subtitle2">통계보기</Typography>
      </Button>
    </Box>
  );
};

export default Menubar;
