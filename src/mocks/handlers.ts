import { DefaultBodyType, MockedRequest, RestHandler, rest } from "msw";

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
      })
    );
  }),

  rest.get("/news", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        news: {
          id: "id",
          title: "best 10",
        },
      })
    );
  }),
];
