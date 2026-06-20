function consecutiveSubstrings(string) {
  const result = []

  for (let start = 0; start < string.length; start++) {
    for (let end = start + 1; end <= string.length; end++) {
      result.push(string.slice(start, end))
    }
  }

  return result
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


