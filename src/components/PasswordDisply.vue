<script setup>
import { ref } from 'vue'
const props = defineProps(['password'])

const isCopied = ref(false)

const handleCopy = async () => {
  try {
    if (!props.password) return
    await navigator.clipboard.writeText(props.password)

    isCopied.value = true

    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy password:', error)
  }
}
</script>

<template>
  <div class="password-display">
    <p class="password-text">{{ props.password }}</p>
    <button class="copy-button" type="button" @click="handleCopy">
      <span v-if="isCopied" class="text-preset-3">Copied!</span>
      <img src="../assets/images/icon-copy.svg" alt="copy" class="copy-icon" />
    </button>
  </div>
</template>

<style scoped>
.password-text {
  color: var(--grey-200);
}

.password-display {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey-800);
  color: var(--grey-700);
  padding: 1rem;
  margin-bottom: 1rem;
}

.copy-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
}

span {
  color: var(--green-200);
  font-family: 'JetBrains Mono', monospace;
}

.copy-icon:hover {
  filter: brightness(1.5);
}
</style>
