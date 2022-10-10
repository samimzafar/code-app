export const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(`Get Item From Storage error -- ${error}`);
  }
};

export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`Set Item to  Storage error -- ${error}`);
  }
};
