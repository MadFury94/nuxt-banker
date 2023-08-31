import { defineAppConfig } from "#imports";

export const isDev = import.meta.env.DEV as boolean;
export const serverUrl = import.meta.env.VITE_SERVER_URL as string;

export default defineAppConfig({
  isDev,
  app: {
    name: "Online Banker",
    serverUrl,
  },
});
