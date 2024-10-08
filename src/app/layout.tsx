import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mock-Up Construction",
  description: "Providing top-quality construction materials and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="flex-grow w-full">
          {children}
        </div>
      </body>
    </html>
  );
}


// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Valley Construction Supply",
//   description: "Providing quality construction materials and services since 1995.",
//   keywords: "construction, building materials, construction supply, tools, Valley Construction",
//   viewport: "width=device-width, initial-scale=1",
//   openGraph: {
//     title: "Valley Construction Supply",
//     description: "Your partner in construction supply, offering quality materials and reliable services.",
//     url: "https://www.valleyconstructionsupply.com",
//     type: "website",
//     images: [
//       {
//         url: "/images/og-image.jpg", // Update with your actual image path
//         width: 1200,
//         height: 630,
//         alt: "Valley Construction Supply",
//       },
//     ],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </head>
//       <body className={`${inter.className} bg-gray-100 text-gray-900`}>
//         <Header />
//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
