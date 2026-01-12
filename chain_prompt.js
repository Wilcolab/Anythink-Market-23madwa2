function toDotCase(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  return input
    .trim()
    // handle camelCase boundaries
    .replace(/([a-z])([A-Z])/g, "$1.$2")
    // replace spaces, underscores, and hyphens with dots
    .replace(/[\s_-]+/g, ".")
    // remove multiple dots
    .replace(/\.{2,}/g, ".")
    .toLowerCase();
}
