export function convertObjectKeysToCamelCase(obj: { [key: string]: any }) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let camelCaseObj: { [key: string]: any } = {};
  Object.keys(obj).forEach((key: string) => {
    const camelCaseKey: string = convertStringToCamelCase(key);
    camelCaseObj[camelCaseKey] = obj[key];
  });
  return camelCaseObj;
}

export function convertStringToCamelCase(string: string): string {
  const camelCaseString: string = string.replace(/_([a-z])/g, (match, letter) =>
    letter.toUpperCase()
  );
  return camelCaseString;
}
