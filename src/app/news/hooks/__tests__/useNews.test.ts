import { renderHook, waitFor } from "@testing-library/react";
import { useNews } from "../useNews";
import { server } from "@/mocks/server";
import { rest } from "msw";

describe("useNewsフックのテスト", () => {
  it("axiosのモック確認テスト", async () => {
    const { result } = renderHook(useNews);

    await waitFor(() => {
      expect(result.current.success).toBe(true);
    });
  });

  it("fetch関数のモック確認テスト", async () => {
    const { result } = renderHook(useNews);

    await waitFor(() => {
      expect(result.current.news).toStrictEqual({
        id: "id",
        title: "best 10",
      });
    });
  });

  it("カスタムレスポンスのテスト", async () => {
    const mockFn = jest.fn();
    server.use(
      rest.post("http://localhost:8080/login", (req, res, ctx) => {
        mockFn(); // クエリパラメータを引数にモック関数を呼び出す
        return res(ctx.status(200));
      })
    );

    renderHook(useNews);

    await waitFor(() => {
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});
