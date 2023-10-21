<template>
  <div>
    <ul
      class="flex flex-row gap-10 justify-around items-center p-4 hover:drop-shadow-sm"
    >
      <li
        class="font-extrabold text-xl dark:text-zinc-50 underline decoration-wavy"
      >
        <NuxtLink to="/">IB</NuxtLink>
      </li>
      <li class="dark:animate-pulse">
        <ColorMode />
      </li>
    </ul>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>
