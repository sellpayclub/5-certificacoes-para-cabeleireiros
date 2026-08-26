export default function PracticalClasses() {
  return (
    <section
      className="bg-[#f7ece7] py-[110px] max-[820px]:py-[82px] max-[560px]:py-[54px]"
      id="aulas-praticas"
    >
      <div className="container">
        <div className="mx-auto max-w-[920px] text-center">
          <span className="section-kicker justify-center">
            Aprendizado além do material
          </span>
          <h2 className="mb-0 mt-[14px] font-sans text-[clamp(34px,4.6vw,55px)] font-extrabold leading-[1.07] tracking-[-0.035em] text-[#35121d] max-[560px]:text-[clamp(27px,7.4vw,33px)] max-[560px]:leading-[1.16]">
            além das apostilas, você receberá aulas PRÁTICAS com professores te
            ensinando passo a passo:
          </h2>
        </div>

        <div className="mx-auto mt-[52px] w-full max-w-[760px] overflow-hidden rounded-[22px] border border-[#bb955e8c] bg-[#35121d] p-[9px] shadow-[0_24px_52px_rgba(53,18,29,0.24)] max-[560px]:mt-[38px] max-[560px]:rounded-[18px] max-[560px]:p-[6px]">
          <video
            className="block max-h-[720px] w-full rounded-[14px] bg-[#35121d] object-contain max-[560px]:rounded-[12px]"
            src="https://lcbczyzedluaoxtuajoz.supabase.co/storage/v1/object/public/VIDEOS%20CORTES/videos%20aulas.mp4"
            aria-label="Aulas práticas com professores ensinando passo a passo"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
}