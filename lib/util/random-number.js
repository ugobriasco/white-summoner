function randomNumber(digits) {
  var num = Math.floor(
    Math.pow(10, digits - 1) + Math.random() * 9 * Math.pow(10, digits - 1)
  );
  return num.toString();
}

module.exports = { randomNumber };
