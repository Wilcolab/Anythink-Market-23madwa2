function toCamelCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  return input
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
