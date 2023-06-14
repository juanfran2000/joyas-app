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
      <body className="bg-white mt-[136px]">
        <Nav />
        {children}
        <MyFooter />
      </body>
    </html>
  );
}
