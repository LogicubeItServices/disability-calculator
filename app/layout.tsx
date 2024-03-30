import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StepProgressBar from "@/components/StepProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex items-center justify-center bg-black p-4`}>
        <main className="p-20 bg-gradient-to-br from-[#BBE1FA] to-[#0F4C75] w-[80vw] min-h-[80vh]  rounded-3xl  max-md:p-3 max-md:h-[90vh] max-md:w-[90vw] max-lg:p-10">
          <h1 className="text-sm max-md:mb-10 capitalize">
       <span className="text-xl font-bold">
        Welcome to disability calculator for hearing impairment and speech and language disability <br />
        </span> 
        as per notication of the Ministry of Social Justice and Empowerment, Government of India. <br />
        dated 4th January, 2018.
        <br /></h1>
          <section className="grid grid-cols-[0.2fr,1.8fr] h-full max-md:h-[70%]  max-md:flex  max-md:flex-col max-md:justify-evenly ">
            <div className="flex flex-col justify-center max-md:h-fit ">
              <StepProgressBar />
            </div>
            <div className="bg-black/50  text-white rounded-2xl p-5 w-[90%] mx-auto min-h-[80%] max-md:min-h-[80%] max-xl:h-fit items-center flex  m-auto  py-10">
              <div className="w-full h-fit">{children}</div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
