import "./globals.css";
import Nav from "./componentes/Mynav";
import MyFooter from "./componentes/MyFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white mt-[137px] lg:mt-[163px] 2xl:mt-[187px]">
        <Nav />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
