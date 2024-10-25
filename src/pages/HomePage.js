import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 280px - 180px)" }}>
        <Content />
      </div>
      <div className="h-[180px] p-4">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
