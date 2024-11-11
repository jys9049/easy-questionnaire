"use client";

import { Box, Button, Container, Input, TextField } from "@mui/material";

import SideFormMenu from "@/components/SideFormMenu";
import TextFieldForm from "@/components/TextFieldForm";
import RadioForm from "@/components/RadioForm";
import CheckBoxForm from "@/components/CheckBoxForm";

import S from "./page.module.scss";
import React, { useEffect, useState } from "react";
import {
  IFormArrayType,
  IFormInfoTypes,
  TRadioAndCheckboxValueType,
} from "./page.types";
import { v4 as uuid } from "uuid";
import { useRouter, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import { IFormDataTypes } from "@/types/form.types";

const AddFormPage = () => {
  const router = useRouter();
  const param = useSearchParams();
  const editId = param.get("edit");

  const [isEdit, setIsEdit] = useState(false);
  const [formInfo, setFormInfo] = useState<IFormInfoTypes>({
    title: "",
    description: "",
  });
  const [formArray, setFormArray] = useState<IFormArrayType[]>([]);

  const handleAddForm = (type: string) => {
    const currentFormArray: IFormArrayType[] = [...formArray];

    const defaultValue = {
      id: uuid(),
      type: type,
      title: "",
      description: "",
      require: false,
    };

    switch (type) {
      case "TEXT_FIELD_FORM":
        currentFormArray.push({
          ...defaultValue,
          value: "",
        });
        break;
      case "CHECKBOX_FORM":
        currentFormArray.push({
          ...defaultValue,
          value: [{ id: uuid(), title: "" }],
        });
        break;
      case "RADIO_FORM":
        currentFormArray.push({
          ...defaultValue,
          value: [{ id: uuid(), title: "" }],
        });
        break;
    }
    setFormArray(currentFormArray);
  };

  const handleTitleAndDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, [e.target.id]: e.target.value });
  };

  const handleFormTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormArray(
      formArray.map((form) =>
        form.id === e.target.id ? { ...form, title: e.target.value } : form
      )
    );
  };

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormArray(
      formArray.map((form) =>
        form.id === e.target.id ? { ...form, value: e.target.value } : form
      )
    );
  };

  const handleCheckAndRadioTextChange = (
    formId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormArray(
      formArray.map((form) => {
        if (form.id === formId && form.value instanceof Array) {
          console.log(form);
          return {
            ...form,
            value: form.value.map((val) =>
              val.id === e.target.id ? { ...val, title: e.target.value } : val
            ),
          };
        }
        return form;
      })
    );
  };

  const handleCheckAndRadioAddClick = (id: string) => {
    setFormArray(
      formArray.map((form) => {
        if (form.id === id && form.value instanceof Array) {
          return {
            ...form,
            value: [...form.value, { id: uuid(), title: "" }],
          };
        }
        return form;
      })
    );
  };

  const handleCheckAndRadioRemoveClick = (formId: string, valueId: string) => {
    setFormArray(
      formArray.map((form) => {
        if (form.id === formId && form.value instanceof Array) {
          return {
            ...form,
            value: form.value.filter((val) => val.id !== valueId),
          };
        }
        return form;
      })
    );
  };

  const handleRequireChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormArray(
      formArray.map((form) =>
        form.id === e.target.id ? { ...form, require: !form.require } : form
      )
    );
  };

  const handleFormRemove = (id: string) => {
    setFormArray(formArray.filter((form) => form.id !== id));
  };

  const handleSubmit = async () => {
    try {
      let res;
      const bodyData = {
        title: formInfo.title,
        description: formInfo.description,
        updatedAt: dayjs(),
        form: formArray,
      };

      if (isEdit) {
        const editId = param.get("edit");
        res = await fetch(`https://localhost:3005/edit/${editId}`, {
          method: "PUT",
          body: JSON.stringify(bodyData),
        });
      } else {
        res = await fetch("https://localhost:3005/use", {
          method: "POST",
          body: JSON.stringify(bodyData),
        });
      }

      if (res && res.ok) {
        router.push("/list");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (editId) {
      setIsEdit(!!editId);
      (async () => {
        try {
          const res = await fetch(`https://localhost:3005/getForm/${editId}`);
          if (res.ok) {
            const data = (await res.json()) as IFormDataTypes;
            setFormInfo({
              title: data.title,
              description: data.description || "",
            });

            if (typeof data.form === "object") {
              const currentArray: IFormArrayType[] = [];
              data.form.forEach((item) => currentArray.push(item));
              setFormArray([...currentArray]);
            }
          }
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, []);

  return (
    <Container className={S.container}>
      <SideFormMenu handleAddForm={handleAddForm} />
      <Box className={S.form}>
        <Input
          fullWidth
          id={"title"}
          value={formInfo.title}
          onChange={handleTitleAndDescChange}
          placeholder="제목을 입력해 주세요."
        />
        <TextField
          fullWidth
          multiline
          id="description"
          placeholder="설명을 입력해 주세요."
          value={formInfo.description}
          onChange={handleTitleAndDescChange}
        />
        {formArray.map((form, idx) => {
          if (form.type === "TEXT_FIELD_FORM") {
            return (
              <TextFieldForm
                key={idx}
                id={form.id}
                titleValue={form.title}
                handleRemove={handleFormRemove}
                handleTitleChange={handleFormTitleChange}
                handleRequireChange={handleRequireChange}
                handleChange={handleTextFieldChange}
              />
            );
          } else if (form.type === "CHECKBOX_FORM") {
            return (
              <CheckBoxForm
                key={idx}
                id={form.id}
                title={form.title}
                value={form.value as TRadioAndCheckboxValueType[]}
                handleTitleChange={handleFormTitleChange}
                handleInputChange={handleCheckAndRadioTextChange}
                handleAddClick={handleCheckAndRadioAddClick}
                handleCheckBoxRemove={handleCheckAndRadioRemoveClick}
                handleRemove={handleFormRemove}
                handleRequireChange={handleRequireChange}
              />
            );
          } else if (form.type === "RADIO_FORM") {
            return (
              <RadioForm
                key={idx}
                id={form.id}
                title={form.title}
                value={form.value as TRadioAndCheckboxValueType[]}
                handleTitleChange={handleFormTitleChange}
                handleInputChange={handleCheckAndRadioTextChange}
                handleAddClick={handleCheckAndRadioAddClick}
                handleRadioRemove={handleCheckAndRadioRemoveClick}
                handleRemove={handleFormRemove}
                handleRequireChange={handleRequireChange}
              />
            );
          }
        })}
        <Box className={S.submitBtnWrap}>
          <Button fullWidth className={S.submitBtn} onClick={handleSubmit}>
            {isEdit ? "수정하기" : "생성하기"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddFormPage;
