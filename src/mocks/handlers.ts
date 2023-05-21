import { DefaultBodyType, MockedRequest, RestHandler, rest } from "msw";
import { mockNews } from "./resolvers/mockNews";
import { mockLogin } from "./resolvers/mockLogin";

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.post("http://localhost:8080/login", mockLogin),

  rest.get("https://localhost:8080/news", mockNews),
];
