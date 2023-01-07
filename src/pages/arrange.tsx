import { Footer, Header, Layout } from "components/@module";
import { ArrangeSection, Display, Gap, Grid, List } from "components/Arrange";
import React from "react";

function ArrangePage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">Arrange</h1>
        <Display />
        <Gap />
        <List />
        <Grid />
        <ArrangeSection />
        <Footer />
      </main>
    </Layout>
  );
}

export default ArrangePage;
