import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // ✅ 추가

export default defineConfig({
  base: "/capstonePrototype0/",
  plugins: [react(), svgr()], // ✅ svgr 추가
});
