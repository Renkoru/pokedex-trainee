export function getFileNameById(id) {
  if (id < 10) {
    return `00${id}`;
  }

  if (id < 100) {
    return `0${id}`;
  }

  return `${id}`;
}

export function isCaught() {
  const result = Math.floor(Math.random() * 10);

  return result > 4;
  // return result > 1;
}