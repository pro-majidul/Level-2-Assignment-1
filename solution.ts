const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return !value;
};





const getLength = (input: string | any[]): number => {
  if(typeof input === "string"){

      return input.length;
  }else if(Array.isArray(input)){
      return input.length;
  } else {
      return 0;
  }
}