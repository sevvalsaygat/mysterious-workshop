// 7500 → "₺ 7.500" (Turkish thousands separator)
export const formatPrice = (price: number) =>
  `₺ ${new Intl.NumberFormat("tr-TR").format(price)}`;
