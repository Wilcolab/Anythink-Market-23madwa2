function toCamelCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  return input
    .trim()
    // convert underscores, hyphens, and spaces to a single space
    .replace(/[_\-]+/g, " ")
    // handle camelCase boundaries (optional safety)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // normalize case
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}
