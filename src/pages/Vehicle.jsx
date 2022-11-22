import React from "react";
import Contents from "../components/Contents";
import Facilites from "../components/Facilites";
import PageTop from "../components/PageTop";
import Permit from "../components/Permit";

export default function Vehicle() {
  return (
    <>
      <PageTop
        title="Vehicle construction"
        sub="차량시공"
        text="오랜 경력과 노하우를 바탕으로 고객 여러분께 최고의 서비스와 만족으로 보답하겠습니다."
      />

      <Facilites />
      <Contents />
      <Permit />
    </>
  );
}
