function descendingOrder(n) {
  return parseInt(
    n
      .toString() // turn number to string
      .split("") // string -> array of digits
      .sort((a, b) => b - a) // sort descending
      .join("") // join back into string
  );
}

console.log(descendingOrder(894374384));

/**
 * Input a non zero number
 * convert a number to string
 * split string to array
 * sort the array from desc to asc
 * join the array back to string
 * remove duplicates
 * Output descending number (largest to lowest)
 *
 * -> key learning convert number -> string -> array
 */
