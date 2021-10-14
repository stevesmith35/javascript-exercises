const ftoc = function(f) {
  let c = (f - 32) * (5/9);

  if (Number.isInteger(c) ) {
    return parseInt(c);
  } else {
    return parseFloat(c.toFixed(1));
  }
};

const ctof = function(c) {
  let f = (c * 1.8000 + 32);

  if (Number.isInteger(f)){
    return parseInt(f);
  } else {
    return parseFloat(f.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
