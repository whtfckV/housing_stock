<script setup lang="ts">
import { onMounted, onUnmounted, ref, defineProps } from 'vue';

type Props = {
  onIntersect: () => void;
  rootMargin?: string;
  threshold?: number | number[];
}

const props = defineProps<Props>();

const observerRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!observerRef.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        props.onIntersect();
      }
    },
    {
      rootMargin: props.rootMargin || '0px',
      threshold: props.threshold || 1.0,
    }
  );

  observer.observe(observerRef.value);
});

onUnmounted(() => {
  if (observer && observerRef.value) {
    observer.unobserve(observerRef.value);
    observer.disconnect();
  }
});
</script>

<template>
  <div ref="observerRef"></div>
</template>
