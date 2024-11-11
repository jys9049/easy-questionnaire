"use client";

import { IFormDataTypes } from "@/types/form.types";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import S from "./page.module.css";
import FormCard from "@/components/FormCard";

const ListPage = () => {
  const [data, setData] = useState<IFormDataTypes[]>([]);

  const getFormList = async () => {
    try {
      const res = await fetch("https://localhost:3005/getData", {
        cache: "no-store",
      });
      if (res.ok) {
        const fetchData = await res.json();
        setData(fetchData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (id: string) => {
    try {
      const res = await fetch("https://localhost:3005/delete", {
        method: "DELETE",
        body: JSON.stringify(id),
      });

      if (res.ok) {
        console.log("삭제되었습니다.");
        await getFormList();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getFormList();
    })();
  }, []);

  return (
    <Box className={S.listContainer}>
      {data &&
        data.map((form) => (
          <FormCard
            form={form}
            key={form.id}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
    </Box>
  );
};

export default ListPage;
