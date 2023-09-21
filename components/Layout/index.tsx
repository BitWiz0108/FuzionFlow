import { useEffect } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="w-full bg-[#1D2CF3] text-white min-h-screen font-sans">
      <Header />
      <div className="flex flex-col h-full justify-start items-center overflow-hidden border-l border-[#464646]">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
