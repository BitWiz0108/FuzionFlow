import { useRouter } from "next/router";

import Layout from "@/components/Layout";
import FAQ from "@/components/FAQ";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div className="w-full">
        <FAQ />
      </div>
    </Layout>
  );
}
