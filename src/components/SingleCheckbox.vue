<script setup>
defineProps(['label'])
const checked = defineModel()
</script>

<template>
  <div class="single-checkbox-container">
    <input type="checkbox" class="checkbox" :id="label" v-model="checked" />
    <label :for="label" class="list-text checkbox-label">{{ label }}</label>
  </div>
</template>

<style scoped>
.single-checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox {
  -webkit-appearance: none;
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  /* Unchecked Background & Border */
  background-color: var(--grey-900); /* dark background */
  border: 2px solid var(--grey-200); /* default border */
  cursor: pointer;
  place-content: center;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox:hover {
  border-color: var(--green-200);
}

.checkbox:checked {
  background-color: var(--green-200);
  border-color: var(--green-200);
}

.checkbox:checked::before {
  content: '';
  width: 0.75rem;
  height: 0.75rem;
  /* Icon Image */
  background-image: url('@/assets/images/icon-check.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  /* Start hidden */
  transform: scale(0);
  transition: 120ms transform ease-in-out;
}

.checkbox:checked::before {
  transform: scale(1);
}

.checkbox-label {
  color: var(--grey-200);
  margin-left: 1rem;
}
</style>
