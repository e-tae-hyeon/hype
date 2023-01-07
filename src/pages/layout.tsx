import { Footer, Header, Layout } from "components/@module";
import { MaxWidth, MediaQuery, Padding } from "components/Layout";
import React from "react";

function LayoutPage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">Layout</h1>
        <MediaQuery />
        <MaxWidth />
        <Padding />
        <Footer />
      </main>
    </Layout>
  );
}

export default LayoutPage;
