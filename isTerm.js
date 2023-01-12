function isTerm (obj) {
  return typeof obj === 'object' &&
    typeof obj.equals === 'function' &&
    typeof obj.termType === 'string' &&
    typeof obj.value === 'string'
}

export default isTerm
