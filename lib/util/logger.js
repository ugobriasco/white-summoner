const { find, isArray, isEmpty, isObject, isString } = require("lodash");

function log(handler, color, symbol, data) {
  const reset = "\x1b[0m";
  if (isEmpty(data)) {
    console.log("");
  }
  const parserMap = [
    {
      matches: d => isString(d),
      parser: d => d
    },
    {
      matches: d => isArray(d),
      parser: d => d.join(" — ")
    },
    {
      matches: d => isObject(d),
      parser: d => `${d.message} ${color} ${d.meta}`
    }
  ];
  const parser = find(parserMap, p => p.matches(data));

  return handler(color, symbol, reset, parser.parser(data), reset);
}

const logger = {
  log: data => console.log(data),
  hipe: data => log(console.log, "", "☕", data),
  info: data => log(console.info, "\x1b[34m", "⌽", data),
  success: data => log(console.log, "\x1b[32m", "✓", data),
  warn: data => log(console.warn, "\x1b[33m", "▵", data),
  error: data => log(console.error, "\x1b[31m", "✗", data),
  group: (start = true) => (start ? console.group() : console.groupEnd())
};

module.exports = logger;
