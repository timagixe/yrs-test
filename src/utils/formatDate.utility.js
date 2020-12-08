export const formatDate = (dobString, locale, options) =>
  new Date(dobString).toLocaleDateString(locale, options);
