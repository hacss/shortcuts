const assert = require("assert");
const make = require("./index.js");

const fonts = [1, 2, 3, 4, 5, 6]
  .map(n => `h${n}`)
  .concat(["body1", "body2", "caption", "button"]);

fonts.forEach(key => {
  assert.match(
    make().variables.font[key],
    /sans-serif$/,
    `Font "${key}" does not include default family: sans-serif`,
  );
});

fonts.forEach(key => {
  const fontFamily = `"Roboto"`;
  assert.match(
    make({ fontFamily }).variables.font[key],
    new RegExp(fontFamily + "$"),
    `Font "${key}" does not include configured family: ${fontFamily}`,
  );
});

fonts.forEach(key => {
  const fontFamily = `"Roboto"`;
  assert.match(
    make({ fontFamily: { default: fontFamily } }).variables.font[key],
    new RegExp(fontFamily + "$"),
    `Font "${key}" does not include configured family: ${fontFamily}`,
  );
});

fonts.forEach(key => {
  const fontFamily = `"Roboto"`;
  assert.match(
    make({ fontFamily: { default: `"Roboto"`, [key]: fontFamily } }).variables
      .font[key],
    new RegExp(fontFamily + "$"),
    `Font "${key}" does not include configured family: ${fontFamily}`,
  );
});
