export const POKET_ADD = 'POKET_ADDADD2';
export function poketAdd(id) {
  return { type: POKET_ADD, payload: id };
}

export const POKET_REMOVE = 'POKET_REMOVE_2';
export function poketRemove(id) {
  return { type: POKET_REMOVE, payload: id };
}
