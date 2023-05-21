import { DefaultBodyType, MockedRequest, RestHandler, rest } from "msw";
import { mockNews } from "./resolvers/mockNews";

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.post("http://localhost:8080/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
      })
    );
  }),

  rest.get("https://localhost:8080/news", mockNews),
];
