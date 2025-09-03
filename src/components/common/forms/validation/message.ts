/* eslint-disable no-useless-escape */
export const minText = (t: string, l: number) => {
  return `${t} must be ${l} character or more`;
};
export const maxText = (t: string, l: number) => {
  return `${t} must be equal and less than ${l} character`;
};
export const requiredText = (t: string) => {
  return `${t} is required`;
};
export const invalidDateText = (t: string) => {
  return `${t} must be a valid date`;
};

export const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

export const emailRegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
export const vehicleRegExp = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
