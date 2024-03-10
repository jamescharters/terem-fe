import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./testSetup.ts"],
        include: ["./src/**/*.test.{ts,tsx}"],
    },
    resolve: {
        alias: {
            // Allow absolute paths in imports, e.g. import Button from '@/components/Button'
            "@": "/src",
        },
    },
});
