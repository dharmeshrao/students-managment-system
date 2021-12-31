const setLocalstorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
const getLocalstorage = (key) => {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
};
export { setLocalstorage, getLocalstorage };
