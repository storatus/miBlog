import "../globals.css";
import { Suspense } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Mi Blog",
  description: "Este Es Mi Blog",
  metadataBase: new URL("https://miBlog.ai"),
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen mx-auto flex-1 flex-col bg-gray-900">
      <div style={{ minHeight: "5%" }}>
        <Suspense fallback="...">
          <Nav />
        </Suspense>
      </div>
      <main className="flex w-full flex-1 justify-center">{children}</main>
      <div style={{ minHeight: "5%" }}>
        <Footer />
      </div>
    </section>
  );
}
