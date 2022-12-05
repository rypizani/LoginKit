  export function passwordValidator(password) {
  if (!password) return "A Senha deve ser preenchida"
  if (password.length < 5) return 'A senha deve ter pelo menos 5 caracteres'
  return ''
}
