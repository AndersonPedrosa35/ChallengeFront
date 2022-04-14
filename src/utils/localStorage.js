export function getStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function createStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}