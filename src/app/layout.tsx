 "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./style/index.css";
import "./style/globals.css";
import "./style/prism-vsc-dark-plus.css";
// import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import ToasterContext from "@/utils/ToasterContext";
import { ThemeProvider } from "next-themes";
import PreLoader from "@/components/Common/PreLoader";
import Header from "@/components/Header";
import { dir } from 'i18next'
import { languages, fallbackLng } from './i18n/settings'
import { useTranslation } from "./i18n";
import Footer from "@/components/Footer";


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };



const RootLayout = ({ children, params: { session, lng , ...params} }: Readonly<{ children: React.ReactNode; params: any }>) => {
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);


  return (
    // <html dir={dir(lng)} className="!scroll-smooth" lang={lng}>
    <html className="!scroll-smooth" lang={lng}>
      <body>
        {/* {loading ? (
          <PreLoader />
        ) : ( */}
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <ToasterContext />
            <Header />
            {children}
            <Footer lng={lng}/>
            {/* <ScrollToTop /> */}
          </ThemeProvider>
        </SessionProvider>
         {/* )}  */}
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
export default RootLayout;

// export async function generateStaticParams() {
//   console.log("1111 generateStaticParams =====> ", languages.map((lng) => ({ lng })))
//   return languages.map((lng) => ({ lng }))
// }

// export async function generateMetadata({ params: { lng } }) {
//   console.log("2222 generateStaticParams =====> ", languages.indexOf(lng) < 0)
//   if (languages.indexOf(lng) < 0) lng = fallbackLng
//   const { t } = await useTranslation(lng)
//   return {
//     title: t('title'),
//     content: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
//   }
// }


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1000);
//   }, []);


//   return (
//     <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
//       <body>
//         {loading ? (
//           <PreLoader />
//         ) : (
//           <SessionProvider>
//             <ThemeProvider
//               attribute="class"
//               enableSystem={false}
//               defaultTheme="light"
//             >
//               <ToasterContext />
//               <Header />
//               {children}
//               {/* <Footer /> */}
//               {/* <ScrollToTop /> */}
//             </ThemeProvider>
//           </SessionProvider>
//         )}
//       </body>
//       {/* <body className={inter.className}>{children}</body> */}
//     </html>
//   );
// }
