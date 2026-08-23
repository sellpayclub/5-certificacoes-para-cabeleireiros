import Head from "next/head";
import GastronomyLanding from "../components/GastronomyLanding";

export default function Gastronomia() {
  return (
    <>
      <Head>
        <title>10 Certificados para Gastronomia</title>
        <meta
          name="description"
          content="Conheça os 10 certificados para Gastronomia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <GastronomyLanding />
    </>
  );
}