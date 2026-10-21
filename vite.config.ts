import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import {sentryReactRouter,type SentryReactRouterBuildOptions} from "@sentry/react-router/vite";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "naif-omran",
  project: "travel-agency-dashboard",
  authToken: process.env.SENTRY_AUTH_TOKEN,
};



export default defineConfig(config => {
  return {
    plugins: [ tailwindcss(),reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig, // Also pass the config here!
    ssr: {
    noExternal: [/@syncfusion/],
  },
   resolve: {
      tsconfigPaths: true,
    },
  };
});


