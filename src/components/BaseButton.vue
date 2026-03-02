<script setup>
defineEmits(['generate'])
</script>

<template>
  <button type="submit" class="generate-btn">
    <p class="text-preset-4 generate-text">GENERATE</p>
    <img src="../assets/images/icon-arrow-right.svg" alt="Arrow pointing right" class="arrow" />
  </button>
</template>

<style scoped>
.arrow {
  width: 0.75rem;
  height: 0.75rem;
}

.generate-text {
  color: var(--grey-800);
  font-family: 'JetBrains Mono';
  border: 2px solid var(--green-200);
}

.generate-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 6.5rem;
  cursor: pointer;
  background-color: var(--green-200);
  color: var(--grey-800);
  border: none;
  transition:
    filter 0.3s ease-in-out,
    transform 0.2s ease;
}

.arrow {
  transition: translate 0.3s ease;
}

.generate-btn:hover .arrow {
  translate: 10px;
}

.generate-btn:hover {
  filter: brightness(0.8);
}
</style>
