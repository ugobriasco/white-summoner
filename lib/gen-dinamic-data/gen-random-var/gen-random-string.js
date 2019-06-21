const capsCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getRandomString = length => {
  if (!length || typeof length != "number") {
    return "";
  }
  let result = "";
  for (let i = 0; i < length; i++) {
    result += capsCharacters.charAt(
      Math.floor(Math.random() * capsCharacters.length)
    );
  }
  return result;
};

module.exports = getRandomString;
