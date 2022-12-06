export const parseNumber = (value: any, mode: boolean = true): number | null => {
  if (mode) {
    let convert = Number.parseFloat(value);
    if (convert == NaN) {
      return null;
    }
    return convert;
  }
  else {
    const convert = Number.parseInt(value);
    return convert == NaN ? null : convert;
  }
}

export const numberToFix = (value: any): string => {
  const temp = Number.parseFloat(value);
  const convert = parseNumber(value, true);

  if (convert) {
    return convert.toFixed(2);
  }
  return `0`;
}