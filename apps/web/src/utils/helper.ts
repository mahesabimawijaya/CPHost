import { Period } from "../types/LandingPage";

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

export const domains = [
  {
    id: 1,
    name: ".com",
    price: 98000,
  },
  {
    id: 1,
    name: ".net",
    price: 88000,
  },
  {
    id: 1,
    name: ".info",
    price: 108000,
  },
  {
    id: 1,
    name: ".la",
    price: 78000,
  },
  {
    id: 1,
    name: ".store",
    price: 72000,
  },
];

export const periods: Period[] = [
  {
    id: 1,
    benefit: "Monthly",
  },
  {
    id: 2,
    benefit: "Yearly",
  },
];

// Current date
const now = new Date();

// 1 month later
const month = new Date(now);
month.setMonth(now.getMonth() + 1);
export const oneMonthLater = month.toISOString();
// 1 year later
const year = new Date(now);
year.setFullYear(now.getFullYear() + 1);
export const oneYearLater = year.toISOString();

function generateInvoiceCode() {
  const prefix = "INV";
  const timestamp = Date.now().toString().slice(-6); // Get last 4 digits of the timestamp
  return `${prefix}-${timestamp}`;
}

// Example usage
export const newInvoiceCode = generateInvoiceCode();

export function loadSnapScript(callback: () => void) {
  const script = document.createElement("script");
  script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
  script.setAttribute("data-client-key", import.meta.env.VITE_MIDTRANS_CLIENT_KEY); // Replace with your Midtrans client key
  script.onload = callback;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  };
}
