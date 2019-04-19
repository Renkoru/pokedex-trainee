export const POCKET_ADD = 'POCKET_ADDADD2';
export function pocketAdd(id) {
  return { type: POCKET_ADD, payload: id };
}

export const POCKET_REMOVE = 'POCKET_REMOVE_2';
export function pocketRemove(id) {
  return { type: POCKET_REMOVE, payload: id };
}
