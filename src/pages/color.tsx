import { Footer, Header, Layout } from "components/@module";
import { Grayscale, Primary, System } from "components/Color";
import React from "react";

function ColorPage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">Color</h1>
        <Primary />
        <Grayscale />
        <System />
        <Footer />
      </main>
    </Layout>
  );
}

export default ColorPage;
