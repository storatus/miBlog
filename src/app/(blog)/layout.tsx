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
    <section className="flex min-h-screen mx-auto flex-1 flex-col bg-gray-900 relative">
      <div style={{ minHeight: "5%" }}>
        <Suspense fallback="...">
          <Nav />
        </Suspense>
      </div>
      <main className="max-w-6xl container mx-auto flex flex-1  mt-20">
        {children}
      </main>
      <div style={{ minHeight: "5%" }}>
        <Footer />
      </div>
    </section>
  );
}
