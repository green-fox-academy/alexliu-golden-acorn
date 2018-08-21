export const BUY_ACORN = 'BUY_ACORN'
export const EAT_ACORN = 'EAT_ACORN'
​
export function buyAcorn(number) {
  return { type: BUY_ACORN, number }
}
​
export function eatAcorn(index) {
  return { type: EAT_ACORN, number }
}
​