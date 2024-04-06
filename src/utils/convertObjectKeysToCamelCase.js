export function convertObjectKeysToCamelCase(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  let camelCaseObj = {};
  Object.keys(obj).forEach((key) => {
    const camelCaseKey = convertStringToCamelCase(key);
    camelCaseObj[camelCaseKey] = obj[key];
  });
  return camelCaseObj;
}

export function convertStringToCamelCase(string) {
  const camelCaseString = string.replace(/_([a-z])/g, (match, letter) =>
    letter.toUpperCase()
  );
  return camelCaseString;
}
