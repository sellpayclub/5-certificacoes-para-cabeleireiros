import Head from "next/head";
import MembersArea from "../components/MembersArea";

export default function AreaDeMembros() {
  return (
    <>
      <Head>
        <title>Área de membros | 5 Certificações para Cabeleireiros</title>
        <meta
          name="description"
          content="Aulas e eBooks das certificações profissionais para cabeleireiros."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MembersArea />
    </>
  );
}