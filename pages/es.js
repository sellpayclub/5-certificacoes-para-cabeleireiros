import Head from "next/head";
import SpanishLanding from "../components/SpanishLanding";

export default function Espanol() {
  return (
    <>
      <Head>
        <title>5 Certificaciones para Estilistas</title>
        <meta
          name="description"
          content="Obtén tu Certificación Profesional de Estilista y dale aún más valor a tu trabajo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SpanishLanding />
    </>
  );
}