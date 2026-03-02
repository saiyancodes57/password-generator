<script setup>
const length = defineModel()
</script>

<template>
  <div class="password-slider">
    <div class="count">
      <label for="slider" class="char-length character-length">Character Length</label>
      <p class="text-preset-2 count-value">{{ length }}</p>
    </div>
    <input type="range" min="0" max="20" v-model="length" class="slider" id="slider" />
  </div>
</template>

<style scoped>
.password-slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 1vw, 1rem);
}

.count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.character-length {
  color: var(--grey-200);
}

.count-value {
  color: var(--green-200);
}

/* Styles the slider track */
.slider {
  width: 100%;
  height: 1.75rem;
  --webkit-appearance: none;
  appearance: none;
  height: 0.5rem;
  background: var(--grey-850);
  cursor: pointer;
}

/* Styles the slider thumb */
.slider::-webkit-slider-thumb {
  --webkit-appearance: none;
  appearance: none;
  width: 1.75rem;
  height: 1.75rem;
  background: var(--white);
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}

/* Styles the firefox slider thumb */
input[type='range']::-moz-range-thumb {
  width: 1.75rem;
  height: 1.75rem;
  background: var(--white);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

/* Styles the slider thumb on Chrome/Safari */
.slider::-webkit-slider-thumb:hover {
  border: 2px solid var(--green-200);
  background: var(--grey-850);
}

/* Firefox hover/active state */
.slider:hover::-moz-range-thumb,
.slider:active::-moz-range-thumb {
  border: 2px solid var(--green-200);
  background: var(--grey-850);
}
</style>
