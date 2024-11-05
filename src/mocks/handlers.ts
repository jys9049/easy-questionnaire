import { http, HttpResponse } from "msw";

let form: any[] = [];

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
    const req: any = await request.json();

    form = req;
    return HttpResponse.json({ id: req.id }, { status: 201 });
  }),

  http.get("https://localhost:3005/getData", async () => {
    return HttpResponse.json(form, { status: 201 });
  }),
];
