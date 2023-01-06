import { Footer, Header, Layout } from "components/@module";
import { AboutService, GettingByService } from "components/Home";
import React from "react";

function HomePage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">Design Guide</h1>
        <AboutService />
        <GettingByService />
      </main>
      <Footer />
    </Layout>
  );
}

export default HomePage;
