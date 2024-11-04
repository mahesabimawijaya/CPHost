export function toRupiah(number: number): string {
  const roundedNumber = Math.round(number / 1000) * 1000;

  if (roundedNumber >= 1_000_000_000) {
    return `Rp ${(roundedNumber / 1_000_000_000).toFixed(2)}B`;
  } else if (roundedNumber >= 1_000_000) {
    return `Rp ${(roundedNumber / 1_000_000).toFixed(2)}M`;
  } else if (roundedNumber >= 1_000) {
    return `Rp ${parseInt((roundedNumber / 1_000).toFixed(0))}K`;
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(roundedNumber);
}

export function toRupiahVanilla(number: number): string {
  const roundedNumber = Math.round(number / 1000) * 1000;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(roundedNumber);
}

export const baseImageUrl = import.meta.env.VITE_BASE_CMS_IMAGE_URL;

export const getColorClass = (index: number) => {
  const colors = ["bg-primary", "bg-purple-600", "bg-yellow-400", "bg-red-600"];
  return colors[index] || "";
};
