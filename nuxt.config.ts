// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/ui",
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  app: {
    pageTransition: { name: "page", mode: "in-out" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Ibrahim Zaman",
      meta: [
        {
          name: "description",
          content: "An amazing website.",
        },
      ],
    },
  },
  googleFonts: {
    families: {
      Roboto: true,
      Inter: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
    fontsDir: "assets/fonts",
  },
  css: ["~/assets/css/tailwind.css"],
  colorMode: {
    classSuffix: "",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
