/** @format */

import { Toaster } from "react-hot-toast";
import "./globals.css";
import ReduxProvider from "./lib/reduxProvider";
import Footer from "./navbar/footer";
import Navbar from "./navbar/navbar";

export const metadata = {
  title: "Furnitur E-commerce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
