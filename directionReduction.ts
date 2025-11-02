function dirReduc(plan: string[]): string[] {
  // This record create something like a map for each direction and it's opposite
  const opposite: Record<string, string> = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST",
  };

  const stack: string[] = [];

  for (const direction of plan) {
    // If the last direction in the stack is opposite to the current one, remove it
    if (stack.length > 0 && opposite[direction] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(direction);
    }
  }

  return stack;
}

// Test cases
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"])); // []
console.log(dirReduc(["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"])); // ["WEST", "WEST"]

