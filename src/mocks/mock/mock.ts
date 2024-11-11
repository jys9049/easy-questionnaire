import { IFormDataTypes } from "@/types/form.types";
import { v4 as uuid } from "uuid";

export const formData: IFormDataTypes[] = [
  {
    id: uuid(),
    title: "찬반 투표",
    description: "찬성 혹은 반대를 선택해주세요.",
    updatedAt: "2024-02-14T13:24:22",
    form: [
      {
        id: uuid(),
        title: "찬성 혹은 반대",
        type: "RADIO_FORM",
        value: [
          {
            id: uuid(),
            title: "찬성",
          },
          {
            id: uuid(),
            title: "반대",
          },
        ],
        require: true,
      },
    ],
  },
  {
    id: uuid(),
    title: "찬반 투표2",
    updatedAt: "2024-03-16T16:24:12",
    description: "찬성 혹은 반대를 선택해주세요.",
    form: [
      {
        id: uuid(),
        title: "찬성 혹은 반대",
        type: "RADIO_FORM",
        value: [
          {
            id: uuid(),
            title: "찬성",
          },
          {
            id: uuid(),
            title: "반대",
          },
        ],
        require: true,
      },
    ],
  },
];
