import { useCallback, useEffect, useState } from "react";
import { axios } from "@/lib/axios";

export const useNews = () => {
  const [success, setIsSuccess] = useState(false);
  const [news, setNews] = useState({
    id: "",
    title: "",
  });

  const login = useCallback(async () => {
    try {
      const response = await axios.post("/login");
      setIsSuccess(response.data.ok);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const fetchNews = useCallback(async () => {
    try {
      const res = await fetch("https://localhost:8080/news");
      const data = await res.json();
      setNews(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    login();
  }, [fetchNews, login]);

  return { success, news };
};
