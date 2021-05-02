export const subtractArrayFromArray = <T>(source: T[], minus: T[]) => {
  return source.filter((s) => !minus.some((m) => s === m));
};
