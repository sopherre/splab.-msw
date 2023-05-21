import { MockedRequest, ResponseResolver, restContext } from "msw";

interface News {
  id: string;
  title: string;
}
export const mockNews: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  const news: News = {
    id: "id",
    title: "10",
  };

  return res(ctx.json(news));
};
