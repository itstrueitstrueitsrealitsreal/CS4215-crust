// Note: Common functions for Visitor and InstructionRunner

/* **********************
 * using arrays as stacks
 * **********************/
// add values destructively to the end of
// given array; return the array
export const push = (array, ...items) => {
    for (let item of items) {
      array.push(item);
    }
    return array;
};