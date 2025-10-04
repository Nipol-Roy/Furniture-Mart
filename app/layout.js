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
      <body className="px-2 md:px-5 lg:px-20 xl:px-40 bg-slate-50">
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
