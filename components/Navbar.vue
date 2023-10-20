<template>
  <div>
    <ul
      class="flex flex-row gap-10 justify-around items-center p-4 hover:drop-shadow-sm"
    >
      <li
        class="font-extrabold text-xl dark:text-white text-black underline decoration-wavy"
      >
        IB
      </li>
      <li class="flex flex-row justify-evenly items-center gap-8">
        <ul class="flex flex-row gap-5">
          <li v-if="route.path !== '/'">
            <NuxtLink
              class="hover:underline hover:cursor-pointer text-black font-semibold dark:text-white decoration-wavy underline-offset-1"
              to="/"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:underline hover:cursor-pointer text-black font-semibold dark:text-white decoration-wavy underline-offset-1"
              to="/navs/media-kit"
              >Media Kit</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              class="hover:underline hover:cursor-pointer text-black font-semibold dark:text-white decoration-wavy underline-offset-1"
              to="/navs/projects"
              >Projects</NuxtLink
            >
          </li>
        </ul>
        <ColorMode />
      </li>
    </ul>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const device = useDevice();
const route = useRoute();
</script>
