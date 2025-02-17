import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: ["--font-poppins"],
  subsets: ["latin"],
  weight: ["300"]
});



export const metadata = {
  title: "TICKETIX",
  description: "One stop event solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
