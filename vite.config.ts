import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 환경 변수에서 BASE_URL을 읽어와 설정합니다.
export default defineConfig({
  plugins: [react()],
  base: "/sky-portfolio-2024/",
});
