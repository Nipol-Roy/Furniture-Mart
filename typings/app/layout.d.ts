
/** @format */

import { Toaster } from "react-hot-toast";
import "./globals.css";
import ReduxProvider from "./lib/reduxProvider";
import Footer from "./navbar/footer";
import Navbar from "./navbar/navbar";

declare interface metadataType {
	static title: string;

	static description: string;
}
