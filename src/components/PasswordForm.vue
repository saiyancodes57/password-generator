<script setup>
import { ref } from 'vue'
import PasswordSlider from './PasswordSlider.vue'
import SingleCheckbox from './SingleCheckbox.vue'
import StrengthMeter from './StrengthMeter.vue'
import BaseButton from './BaseButton.vue'
const emit = defineEmits(['generate'])
defineProps(['score'])

const passwordLength = ref(12)

const options = ref([
  { id: 'uppercase', label: 'Include Uppercase Letters', checked: false },
  { id: 'lowercase', label: 'Include Lowercase Letters', checked: false },
  { id: 'numbers', label: 'Include Numbers', checked: false },
  { id: 'symbols', label: 'Include Symbols', checked: false },
])

const handleSubmit = () => {
  emit('generate', passwordLength.value, options.value)
}
</script>

<template>
  <form class="password-form" @submit.prevent="handleSubmit">
    <PasswordSlider v-model="passwordLength" />
    <div class="checkbox-container">
      <SingleCheckbox
        v-for="option in options"
        :key="option.id"
        :label="option.label"
        v-model="option.checked"
      />
    </div>
    <div class="bottom-container">
      <StrengthMeter :password-strength-score="score" />
      <BaseButton />
    </div>
  </form>
</template>

<style scoped>
.password-form {
  padding: 1rem;
  background-color: var(--grey-800);
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.checkbox-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.bottom-container {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 2rem);
}
</style>
