function ascendingUniqueOrder(num) {
  const b = num
    .toString()
    .split("")
    .sort((a, b) => a - b);

  return Number([...new Set(b)].join(""));
}

console.log(ascendingUniqueOrder(9348347146341));

/**
 * A non negative number
 * covert to string
 * split to array
 * sort to ascending
 * remove duplicates
 * join to string
 */
