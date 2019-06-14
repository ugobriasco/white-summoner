function randomArrayElement(arr) {
  try {
    return arr[Math.floor(Math.random() * arr.length)];
  } catch (e) {
    console.log(e);
    new Error(e);
  }
}

module.exports = { randomArrayElement };
