// import { Geist, Geist_Mono } from "next/font/google";
import { SignInPage } from "@/components/pages/SignInPage";
import { ClientProviders } from "@/Providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return <SignInPage />;
}
