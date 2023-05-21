"use client";

import { useNews } from "./hooks/useNews";

export default function News() {
  useNews();
  return (
    <main>
      <div>news</div>
    </main>
  );
}
