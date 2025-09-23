export function required(val) {
  return val && val.toString().trim().length > 0;
}

export function isEmail(val) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(val || "").toLowerCase());
}
