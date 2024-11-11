import { IFormDataTypes } from "@/types/form.types";
import { http, HttpResponse } from "msw";
import { v4 as uuid } from "uuid";
import { formData } from "./mock/mock";

let data = formData;

export const handlers = [
  http.get("https://localhost:3005/user", () => {
    return HttpResponse.json(
      JSON.stringify({
        id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
        firstName: "John",
        lastName: "Maverick",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }),

  http.post("https://localhost:3005/use", async ({ request }) => {
    try {
      const req = (await request.json()) as IFormDataTypes;
      data.push({ ...req, id: uuid() });
      return HttpResponse.json({ id: req.id }, { status: 200 });
    } catch {
      return HttpResponse.json(
        { message: "폼 생성에 실패했습니다." },
        { status: 400 }
      );
    }
  }),

  http.get("https://localhost:3005/getData", async () => {
    return HttpResponse.json(data, { status: 200 });
  }),

  http.get("https://localhost:3005/getForm/:id", async ({ params }) => {
    if (params.id) {
      const filterForm = data.filter((form) => form.id === params.id);

      return HttpResponse.json(filterForm[0], { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "존재하지 않는 폼입니다." },
        { status: 400 }
      );
    }
  }),

  http.put("https://localhost:3005/edit/:id", async ({ params, request }) => {
    if (params.id) {
      const findIndex = data.findIndex((item) => item.id === params.id);
      const updateData = (await request.json()) as IFormDataTypes;
      console.log("updateData", updateData);
      data[findIndex] = { ...updateData, id: data[findIndex].id };

      return HttpResponse.json("success", { status: 200 });
    } else {
      return HttpResponse.json(
        { message: "폼 수정에 실패하였습니다." },
        { status: 400 }
      );
    }
  }),

  http.delete("https://localhost:3005/delete", async ({ request }) => {
    try {
      const id = await request.json();

      if (id) {
        data = data.filter((form) => form.id !== id);
      }
      return HttpResponse.json(data, { status: 200 });
    } catch {
      return HttpResponse.json(
        { message: "폼 삭제에 실패했습니다." },
        { status: 400 }
      );
    }
  }),
];
