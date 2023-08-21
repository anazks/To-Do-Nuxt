

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
		MONGO_URI: "mongodb+srv://anazks:123@cluster0.jxpil.mongodb.net/To-Do-App?retryWrites=true&w=majority",
	},
  nitro: {
		plugins: ["@/server/db/index.ts"],
	},
  // Other configuration options
});
