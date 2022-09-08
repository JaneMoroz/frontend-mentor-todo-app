// Get theme from the local storage
export function getFromStorage<T>(key: string, initialValue: T) {
  let value = initialValue;
  if (localStorage.getItem(key)) {
    value = JSON.parse(localStorage.getItem(key)!);
  }
  return value;
}

// Save theme to local storage
export function saveToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}
