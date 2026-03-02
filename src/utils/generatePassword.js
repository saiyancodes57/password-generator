const charSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~|}{[]:;?><,./-=',
}

export const generatePassword = (passwordLength, options) => {
  let masterPool = ''
  let resultList = []
  options.forEach((option) => {
    if (option.checked) {
      masterPool += charSets[option.id]
      resultList.push(charSets[option.id][Math.floor(Math.random() * charSets[option.id].length)])
    }

    // 2. Check if masterPool is empty, return empty string
    if (masterPool === '') return ''
  })

  // 3. Fill resultList with random characters from masterPool
  while (resultList.length < passwordLength) {
    resultList.push(masterPool[Math.floor(Math.random() * masterPool.length)])
  }

  // 4. Shuffle resultList
  for (let i = resultList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[resultList[i], resultList[j]] = [resultList[j], resultList[i]]
  }

  // 5. Final Trim (In case length < number of checked boxes)
  return resultList.slice(0, passwordLength).join('')
}

export const getPasswordStrength = (passwordLength, options) => {
  const checkedCount = options.filter((option) => option.checked).length

  if (checkedCount === 0 || passwordLength === 0) return 0
  if (passwordLength < 8) return 1
  if (passwordLength >= 8 && passwordLength < 12) {
    if (checkedCount <= 2) return 2
    return 3
  }

  if (passwordLength >= 12) {
    if (checkedCount <= 2) return 3
    return 4
  }
  return 1
}
