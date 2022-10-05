export const handleTransformError = (error: unknown) => {
  if (typeof error === "string") {
    return Error(error.toUpperCase());
  } else if (error instanceof Error) {
    return Error(error.message);
  }
  return Error("");
};
