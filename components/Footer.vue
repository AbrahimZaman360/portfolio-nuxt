<template>
  <div class="fixed w-full bottom-0 p-4">
    <div>
      <h1 class="text-center text-md font-medium">
        Created with 🥰 by
        <a
          class="underline hover:cursor-pointer underline-offset-2 decoration-wavy"
          @click="showNotification"
          >Ibrahim Zaman</a
        >
      </h1>
    </div>
  </div>
</template>

<script setup>
const toast = useToast();
const device = useDevice();

const showNotification = () => {
  toast.add({
    title: "Happy Easter Egg 🥚🥚🥚!",
    closeButton: {
      loading: false,
      variant: "solid",
    },
  });
};
</script>
