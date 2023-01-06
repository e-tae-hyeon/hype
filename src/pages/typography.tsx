import { Header, Layout } from "components/@module";
import {
  Font,
  SizeInDesktop,
  SizeInMobile,
  Weight,
} from "components/Typography";
import React from "react";

function TypographyPage() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col gap-12 p-4">
        <h1 className="h1">Typography</h1>
        <Font />
        <Weight />
        <SizeInDesktop />
        <SizeInMobile />
      </main>
    </Layout>
  );
}

export default TypographyPage;
