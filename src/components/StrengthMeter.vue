<script setup>
import { computed } from 'vue'
const props = defineProps({
  passwordStrengthScore: {
    type: Number,
    default: 0,
  },
})

const configs = {
  0: { label: '', class: '' },
  1: { label: 'TOO WEAK!', class: 'too-weak' },
  2: { label: 'WEAK', class: 'weak' },
  3: { label: 'MEDIUM', class: 'medium' },
  4: { label: 'STRONG', class: 'strong' },
}

const currentLabel = computed(() => configs[props.passwordStrengthScore].label)
</script>

<template>
  <div class="strength-container">
    <p class="strength-text strength-tag">STRENGTH</p>
    <div class="strength-meter">
      <p class="text-preset-3">{{ currentLabel }}</p>
      <div class="strength-bar">
        <div
          v-for="n in 4"
          class="strength-bar-fill"
          :class="[n <= passwordStrengthScore ? configs[passwordStrengthScore]?.class || '' : '']"
          :key="n"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.strength-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--grey-850);
}

.strength-tag {
  color: var(--grey-600);
}

.strength-meter {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.strength-meter p {
  color: var(--grey-200);
}

.strength-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.strength-bar-fill {
  background-color: transparent;
  border: 2px solid var(--grey-600);
  height: 1.75rem;
  width: 0.625rem;
}

.too-weak {
  background-color: var(--red-500);
  border-color: var(--red-500);
}

.weak {
  background-color: var(--orange-400);
  border-color: var(--orange-400);
}

.medium {
  background-color: var(--yellow-300);
  border-color: var(--yellow-300);
}

.strong {
  background-color: var(--green-200);
  border-color: var(--green-200);
}
</style>
