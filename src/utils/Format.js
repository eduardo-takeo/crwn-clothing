// Native JS number formatter
// Check for reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
export const FormatCurrency = (
  value,
  locale = "en-US",
  style = "currency",
  currency = "USD"
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style,
    currency,
  });

  return formatter.format(value);
};
