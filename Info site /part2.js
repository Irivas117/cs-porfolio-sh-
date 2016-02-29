myBlock: {
  var a = 0;
  break myBlock;
  a = 1; // this is never run
};
a === 0;