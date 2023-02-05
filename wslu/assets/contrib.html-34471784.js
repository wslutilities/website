import{_ as n,M as c,p as s,q as r,R as t,t as e,N as l}from"./framework-96b046e1.js";const i={},a=t("h2",{id:"development",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#development","aria-hidden":"true"},"#"),e(" Development")],-1),d=t("code",null,"git submodule init; git submodule update",-1),_=t("code",null,"wsluconfig --test",-1),u={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"wsluconfig --interop-check",-1),p=t("code",null,"/proc/sys/fs/binfmt_misc/WSLInterop",-1),m=t("code",null,"cmd.exe",-1),f=t("code",null,"powershell.exe",-1),b=t("code",null,"reg.exe",-1);function k(x,g){const o=c("ExternalLinkIcon");return s(),r("div",null,[a,t("p",null,[e("To make contributions to the project, you will need to run "),d,e(" in order to start develop. To run tests, enter "),_,e("; test cases are written in "),t("a",u,[e("bats"),l(o)]),e(", please check the documentation before writing documentation. TO check WSL Interopability, please run "),h,e(". This will check "),p,e(", "),m,e(", "),f,e(", and "),b,e(".")])])}const w=n(i,[["render",k],["__file","contrib.html.vue"]]);export{w as default};