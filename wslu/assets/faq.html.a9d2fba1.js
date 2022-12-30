import{_ as i,r as o,o as d,c as n,a as e,b as s,F as h,e as a,d as t}from"./app.ce95f057.js";const c={},l=a('<h2 id="what-is-wsl" tabindex="-1"><a class="header-anchor" href="#what-is-wsl" aria-hidden="true">#</a> What is WSL?</h2><p>WSL is short for &quot;Windows Subsystem for Linux&quot;, which is a Linux Subsystem from Windows 10. WSL provides developers with a familiar Bash shell and Linux environment in which you can run most Linux command-line tools, directly on Windows, UNMODIFIED, without needing an entire Linux virtual machine.</p><h2 id="why-deprecating-wslupath" tabindex="-1"><a class="header-anchor" href="#why-deprecating-wslupath" aria-hidden="true">#</a> Why deprecating <code>wslupath</code>?</h2><p>WSL now have a better wsl path conversion tool <code>wslpath</code> provided by Microsoft that is builtin for all distros. <code>wslupath</code> is still here for compatibility.</p><h2 id="when-pinned-in-the-taskbar-why-the-shortcut-created-by-wslusc-will-have-2-icons" tabindex="-1"><a class="header-anchor" href="#when-pinned-in-the-taskbar-why-the-shortcut-created-by-wslusc-will-have-2-icons" aria-hidden="true">#</a> When pinned in the taskbar, why the shortcut created by <code>wslusc</code> will have 2 icons?</h2><p>This is a limitation of WSL and it is expected. when running the shortcut, it will use your Windows X server(X410, VcXsrv, Xming, etc) to create a separate window for displaying the Linux app. Since it is displaying in another app, the window for displaying app will be separated from the original shortcut.</p><h2 id="i-am-unable-to-update-and-access-patrickwu-space-is-not-accessible-what-happened" tabindex="-1"><a class="header-anchor" href="#i-am-unable-to-update-and-access-patrickwu-space-is-not-accessible-what-happened" aria-hidden="true">#</a> I am unable to update and <code>access.patrickwu.space</code> is not accessible. What happened?</h2>',7),p=t("the package has moved to a new location "),u={href:"https://pkg.wslutiliti.es/",target:"_blank",rel:"noopener noreferrer"},w=t("https://pkg.wslutiliti.es/"),f=t(" that do not relies on my personal website. For old users, you should remove the "),m=e("code",null,"http://access.patrickwu.space",-1),_=t(" entry from "),b=e("code",null,"/etc/apt/sources.list",-1),y=t(" and readd following the guidelines for Kali Linux and Debian GNU/Linux."),x=a('<h2 id="what-is-the-error-code-returned" tabindex="-1"><a class="header-anchor" href="#what-is-the-error-code-returned" aria-hidden="true">#</a> What is the error code returned?</h2><table><thead><tr><th>error code</th><th>description</th></tr></thead><tbody><tr><td>1</td><td>general error/unknown error.</td></tr><tr><td>20</td><td>input is empty or invalid.</td></tr><tr><td>21</td><td>input is empty.</td></tr><tr><td>22</td><td>input is invalid.</td></tr><tr><td>30</td><td>file do not exist.</td></tr><tr><td>31</td><td>folder do not exist.</td></tr><tr><td>32</td><td>feature not implemented.</td></tr><tr><td>33</td><td>required component do not exist.</td></tr><tr><td>34</td><td>unsupported feature (for a distro)</td></tr><tr><td>40</td><td>Unknown system input.</td></tr></tbody></table><h2 id="hotel" tabindex="-1"><a class="header-anchor" href="#hotel" aria-hidden="true">#</a> Hotel?</h2><p>Trivago.</p>',4);function v(g,k){const r=o("ExternalLinkIcon");return d(),n(h,null,[l,e("p",null,[p,e("a",u,[w,s(r)]),f,m,_,b,y]),x],64)}var W=i(c,[["render",v],["__file","faq.html.vue"]]);export{W as default};
