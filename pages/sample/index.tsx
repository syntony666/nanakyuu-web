import ContainerComponent from "@/component/container";
import HeadComponent from "@/component/main/head";
import SampleComponent from "@/component/pages/sample";
import React from "react";

const title = "作品範例 | 奶加委託";

export default function Home() {
  return (
    <>
      <ContainerComponent
        element={SampleComponent()}
        title={title}
      ></ContainerComponent>
    </>
  );
}
