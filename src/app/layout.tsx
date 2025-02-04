import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import "../../public/app/bootstrap/css/bootstrap.css";
import "../../public/app/swiper/swiper-bundle.min.css";
import "../../public/app/dist/app.css";
import "../../public/assets/font/font-awesome.css";
import ClientScripts from "@/components/(frontend)/basic-structure/ClientScripts";

export const metadata: Metadata = {
  title: "Spicebar Delivery",
  description: "Your Trusted Food Delivery Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="body header-fixed main counter-scroll home1"
        suppressHydrationWarning
      >
        <div className="preload preload-container">
          <div className="preload-logo"></div>
        </div>
        {children}
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
        <Script src="/app/js/jquery.cookie.min.js"></Script>
        <Script src="/app/js/plugin.js"></Script>
        <Script src="/app/js/swiper-bundle.min.js"></Script>
        <Script src="/app/js/swiper.js"></Script>
        <Script src="app/js/jquery-validate.js"></Script>
        <Script src="app/js/countto.js"></Script>
        <Script src="app/js/jquery.easing.js"></Script>
        <Script src="app/js/wow.min.js"></Script>
        <Script src="app/js/app.js"></Script>
        <Script src="app/js/bootstrap.bundle.min.js"></Script>
        <Script src="app/js/simpleParallax.min.js"></Script>
        <Script src="app/js/jquery.magnific-popup.min.js"></Script>
        <Script src="app/js/gallery.js"></Script>
        <ClientScripts />
      </body>
    </html>
  );
}
