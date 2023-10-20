// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/ui",
    "@nuxtjs/device",
    "@nuxtjs/google-fonts",
  ],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
