import { Footer, Header, Layout } from "components/@module";
import { BorderRadius, Example, Hover } from "components/Card";
import React from "react";

function CardPage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">Card</h1>
        <BorderRadius />
        <Hover />
        <Example />
        <Footer />
      </main>
    </Layout>
  );
}

export default CardPage;
