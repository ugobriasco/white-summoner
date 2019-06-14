function getMyDate() {
  const d = new Date();
  const yy = d.getYear().toString();
  const MM = _pad(d.getMonth() + 1, 2);
  const dd = _pad(d.getDate(), 2);
  const hh = _pad(d.getHours(), 2);
  const mm = _pad(d.getMinutes(), 2);
  const ss = _pad(d.getSeconds(), 2);

  return yy + MM + dd + hh + mm + ss;
}

function _pad(number, length) {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
}

module.exports = { getMyDate };
