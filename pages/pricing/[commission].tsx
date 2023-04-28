import ContainerComponent from "@/component/container";
import HeadComponent from "@/component/head";
import CommissionDetailComponent from "@/component/pages/commission-detail";
import { CommissionTypeData } from "@/data/commission-type.data";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

export default function CommissionDetail() {
  const router = useRouter();
  const id = router.query.commission;
  const commission = CommissionTypeData.find((data) => data.link === id);
  const title = `價目表 | ${
    CommissionTypeData.find((data) => data.link === id)?.name
  }`;
  if (!id || !commission) return <></>;
  return (
    <>
      <HeadComponent title={title} />
      <ContainerComponent
        element={CommissionDetailComponent({ data: commission })}
      ></ContainerComponent>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = CommissionTypeData.map((data) => ({
    params: { commission: data.link },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return { props: {} };
};
