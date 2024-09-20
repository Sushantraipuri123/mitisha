import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/employees": "https://app.darkevil.online",
  //     "/interns": "https://app.darkevil.online",
  //   },
  // },
  plugins: [react()],
});

//local host
//http://localhost:8080
