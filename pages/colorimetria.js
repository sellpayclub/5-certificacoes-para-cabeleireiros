import Head from "next/head";
import ColorimetryLanding from "../components/ColorimetryLanding";

export default function Colorimetria() {
  return (
    <>
      <Head>
        <title>Colorimetria Profissional + Mechas & Loiros</title>
        <meta
          name="description"
          content="Aprenda Colorimetria e Mechas & Loiros sem medo de errar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ColorimetryLanding />
    </>
  );
}