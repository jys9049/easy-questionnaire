"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import S from "./FormCard.module.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import dayjs from "dayjs";
import { IFormCard } from "./FormCard.types";
const FormCard = ({ form, handleDeleteClick }: IFormCard) => {
  const router = useRouter();

  return (
    <Box
      key={form.id}
      //   onClick={() => router.push("/")}
      className={S.cardContainer}
    >
      <Box className={S.header}>
        <Typography variant="body1">{form.title}</Typography>
      </Box>
      <Box className={S.contents}>
        <Typography variant="body2">{form.description}</Typography>
      </Box>
      <Box className={S.footer}>
        <Typography variant="subtitle2">
          {dayjs(form.updatedAt).format("YYYY-MM-DD HH:MM:ss")}
        </Typography>
        <Box className={S.btnGroup}>
          <IconButton
            size="small"
            onClick={() => router.push(`/add?edit=${form.id}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton size="small" onClick={() => handleDeleteClick(form.id)}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default FormCard;
