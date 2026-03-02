<script setup>
import { ref } from 'vue'
import PasswordDisplay from './components/PasswordDisply.vue'
import PasswordForm from './components/PasswordForm.vue'
import { generatePassword, getPasswordStrength } from './utils/generatePassword.js'

const password = ref('P4$5W0rD!')
const passwordStrengthScore = ref(0)

const generatePasswordHandler = (passwordLength, options) => {
  const isAnyChecked = options.some((option) => option.checked)

  if (isAnyChecked) {
    password.value = generatePassword(passwordLength, options)
    passwordStrengthScore.value = getPasswordStrength(passwordLength, options)
  }
}
</script>

<template>
  <h1 class="page-title">Password Generator</h1>
  <PasswordDisplay :password="password" />
  <PasswordForm @generate="generatePasswordHandler" :score="passwordStrengthScore" />
</template>

<style scoped>
h1 {
  color: var(--grey-600);
  text-align: center;
  margin-bottom: 1rem;
}
</style>
