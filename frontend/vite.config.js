import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 配置：启用 React 插件；固定本地开发端口为 5173
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
