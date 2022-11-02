import { defineConfig } from "cypress";

export default defineConfig({
    component: {
        specPattern: "cypress/**/*.spec.{ts,tsx}",
        devServer: {
            framework: "create-react-app",
            bundler: "webpack"
        }
    },

    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    reporter: "junit",

    env: {
        coverage: false
    }
});
