import { Arima, Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Menambahkan beberapa weights jika diperlukan
  variable: "--font-poppins" // Pastikan variabel berbeda untuk setiap font
});
const arima = Arima({
  subsets: ['vietnamese', 'latin'], // Menambahkan subset 'latin' jika diperlukan
  weight: ["400", "700"], // Menambahkan beberapa weights jika diperlukan
  variable: "--font-arima" // Pastikan variabel berbeda untuk setiap font
});

export { poppins, inter, arima };
