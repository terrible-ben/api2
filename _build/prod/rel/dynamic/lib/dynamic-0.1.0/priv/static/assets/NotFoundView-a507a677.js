import{_ as c,o as e,f as t,l as o,B as a}from"./index-d7a01a1b.js";const n="/alert-triangle-white.svg",m="/alert-triangle-black.svg",d={name:"NotFoundView",computed:{themeIs(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},darkTheme(){return!!window.matchMedia("(prefers-color-scheme: dark)").matches}}},l={class:"max-h-screen"},i={class:"max-h-screen"},h={key:0,src:n,alt:"alert-triangle",class:"mx-auto w-16 mt-96"},_={key:1,src:m,alt:"alert-triangle",class:"mx-auto w-16 mt-96 xs:pl-28"},u=o("h1",{class:"text-center text-rock-blue-800 dark:text-rock-blue-500"}," Error 404 not found ",-1);function k(r,f,p,x,g,s){return e(),t("div",l,[o("div",i,[s.themeIs==="dark"?(e(),t("img",h)):a("",!0),s.themeIs==="light"?(e(),t("img",_)):a("",!0),u])])}const M=c(d,[["render",k]]);export{M as default};
