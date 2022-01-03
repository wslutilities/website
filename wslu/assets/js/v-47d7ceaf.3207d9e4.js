"use strict";(self.webpackChunkwslu_docs=self.webpackChunkwslu_docs||[]).push([[868],{6986:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-47d7ceaf",path:"/eo/faq.html",title:"",lang:"eo",frontmatter:{},excerpt:"",headers:[{level:2,title:"What is WSL?",slug:"what-is-wsl",children:[]},{level:2,title:"Why deprecating wslupath?",slug:"why-deprecating-wslupath",children:[]},{level:2,title:"When pinned in the taskbar, why the shortcut created by wslusc will have 2 icons?",slug:"when-pinned-in-the-taskbar-why-the-shortcut-created-by-wslusc-will-have-2-icons",children:[]},{level:2,title:"I am unable to update and access.patrickwu.space is not accessible. What happened?",slug:"i-am-unable-to-update-and-access-patrickwu-space-is-not-accessible-what-happened",children:[]},{level:2,title:"What is the error code returned?",slug:"what-is-the-error-code-returned",children:[]},{level:2,title:"Hotel?",slug:"hotel",children:[]}],filePathRelative:"eo/faq.md",git:{updatedTime:1641223411e3,contributors:[{name:"Jinming Wu, Patrick",email:"me@patrickwu.space",commits:1}]}}},1897:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var i=a(6252);const r=(0,i.uE)('<h2 id="what-is-wsl" tabindex="-1"><a class="header-anchor" href="#what-is-wsl" aria-hidden="true">#</a> What is WSL?</h2><p>WSL is short for &quot;Windows Subsystem for Linux&quot;, which is a Linux Subsystem from Windows 10. WSL provides developers with a familiar Bash shell and Linux environment in which you can run most Linux command-line tools, directly on Windows, UNMODIFIED, without needing an entire Linux virtual machine.</p><h2 id="why-deprecating-wslupath" tabindex="-1"><a class="header-anchor" href="#why-deprecating-wslupath" aria-hidden="true">#</a> Why deprecating <code>wslupath</code>?</h2><p>WSL now have a better wsl path conversion tool <code>wslpath</code> provided by Microsoft that is builtin for all distros. <code>wslupath</code> is still here for compatibility.</p><h2 id="when-pinned-in-the-taskbar-why-the-shortcut-created-by-wslusc-will-have-2-icons" tabindex="-1"><a class="header-anchor" href="#when-pinned-in-the-taskbar-why-the-shortcut-created-by-wslusc-will-have-2-icons" aria-hidden="true">#</a> When pinned in the taskbar, why the shortcut created by <code>wslusc</code> will have 2 icons?</h2><p>This is a limitation of WSL and it is expected. when running the shortcut, it will use your Windows X server(X410, VcXsrv, Xming, etc) to create a separate window for displaying the Linux app. Since it is displaying in another app, the window for displaying app will be separated from the original shortcut.</p><h2 id="i-am-unable-to-update-and-access-patrickwu-space-is-not-accessible-what-happened" tabindex="-1"><a class="header-anchor" href="#i-am-unable-to-update-and-access-patrickwu-space-is-not-accessible-what-happened" aria-hidden="true">#</a> I am unable to update and <code>access.patrickwu.space</code> is not accessible. What happened?</h2>',7),d=(0,i.Uk)("the package has moved to a new location "),n={href:"https://pkg.wslutiliti.es/",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Uk)("https://pkg.wslutiliti.es/"),o=(0,i.Uk)(" that do not relies on my personal website. For old users, you should remove the "),h=(0,i._)("code",null,"http://access.patrickwu.space",-1),l=(0,i.Uk)(" entry from "),c=(0,i._)("code",null,"/etc/apt/sources.list",-1),u=(0,i.Uk)(" and readd following the guidelines for Kali Linux and Debian GNU/Linux."),p=(0,i.uE)('<h2 id="what-is-the-error-code-returned" tabindex="-1"><a class="header-anchor" href="#what-is-the-error-code-returned" aria-hidden="true">#</a> What is the error code returned?</h2><table><thead><tr><th>error code</th><th>description</th></tr></thead><tbody><tr><td>1</td><td>general error/unknown error.</td></tr><tr><td>20</td><td>input is empty or invalid.</td></tr><tr><td>21</td><td>input is empty.</td></tr><tr><td>22</td><td>input is invalid.</td></tr><tr><td>30</td><td>file do not exist.</td></tr><tr><td>31</td><td>folder do not exist.</td></tr><tr><td>32</td><td>feature not implemented.</td></tr><tr><td>33</td><td>required component do not exist.</td></tr><tr><td>34</td><td>unsupported feature (for a distro)</td></tr><tr><td>40</td><td>Unknown system input.</td></tr></tbody></table><h2 id="hotel" tabindex="-1"><a class="header-anchor" href="#hotel" aria-hidden="true">#</a> Hotel?</h2><p>Trivago.</p>',4),w={},b=(0,a(3744).Z)(w,[["render",function(e,t){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("p",null,[d,(0,i._)("a",n,[s,(0,i.Wm)(a)]),o,h,l,c,u]),p],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);