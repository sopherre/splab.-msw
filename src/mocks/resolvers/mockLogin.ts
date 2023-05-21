import { MockedRequest, ResponseResolver, restContext } from "msw";

export const mockLogin: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  sessionStorage.setItem("is-authenticated", "true");

  return res(ctx.status(200), ctx.json({ ok: true }));
};
