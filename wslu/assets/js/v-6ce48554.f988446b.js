"use strict";(self.webpackChunkwslu_docs=self.webpackChunkwslu_docs||[]).push([[91],{3523:(e,s,n)=>{n.r(s),n.d(s,{data:()=>t});const t={key:"v-6ce48554",path:"/contributing.html",title:"Contributing",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Code contributions",slug:"code-contributions",children:[{level:3,title:"Setup",slug:"setup",children:[]},{level:3,title:"Structure",slug:"structure",children:[]},{level:3,title:"configure.sh",slug:"configure-sh",children:[]},{level:3,title:"Build & Install",slug:"build-install",children:[]},{level:3,title:"Test",slug:"test",children:[]},{level:3,title:"Push Requests",slug:"push-requests",children:[]}]},{level:2,title:"Financial contributions",slug:"financial-contributions",children:[{level:3,title:"Contributors",slug:"contributors",children:[]},{level:3,title:"Backers",slug:"backers",children:[]},{level:3,title:"Sponsors",slug:"sponsors",children:[]}]}],filePathRelative:"contributing.md",git:{updatedTime:1641223411e3,contributors:[{name:"Jinming Wu, Patrick",email:"me@patrickwu.space",commits:1}]}}},6:(e,s,n)=>{n.r(s),n.d(s,{default:()=>H});var t=n(6252);const r=(0,t._)("h1",{id:"contributing",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),(0,t.Uk)(" Contributing")],-1),o=(0,t.Uk)("We love pull requests from everyone. By participating in this project, you agree to abide by "),a=(0,t.Uk)("Code of Conduct"),l=(0,t.Uk)("."),i=(0,t.uE)('<h2 id="code-contributions" tabindex="-1"><a class="header-anchor" href="#code-contributions" aria-hidden="true">#</a> Code contributions</h2><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h3><p>Run the following to get started:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --recursive --branch dev/master https://github.com/wslutilities/wslu.git\n./configure.sh\n<span class="token function">make</span>\n<span class="token function">sudo</span> <span class="token function">make</span> res_install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wslu\n|-src\n|  |-etc\n|  |  |-wslview.desktop: XDG-style app definition for wslview\n|  |  |-wsl.ico: legacy default icon for wslusc\n|  |  |-wsl-gui.ico: default icon for wslusc GUI shortcut\n|  |  |-wsl-term.ico: default icon for wslusc cli shortcut\n|  |  |-sudo.ps1: helper script for wslgsu\n|  |  |-get_dpi.ps1: helper script for dpi function in wslsys\n|  |  |-wslsc-helper.sh: helper script for wslusc on WSL side\n|  |  \\-runHidden.vbs: helper script for wslusc on Windows side\n|  |-wslu-header: Header file of all script\n|  \\-&lt;components&gt;.sh: Components of script\n|-tests: location for script tests\n\\-extras\n   |-bats: testing utility\n   |-scripts: scripts\n   \\-build\n      |-debian: files for building .deb\n      |-rpm: files for building .rpm\n      |-fedora: files for building Fedora versions of .rpm (4+)\n      |-arch: files for building Arch Linux packages\n      \\-alpine: files for building Alpine Linux packages\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="configure-sh" tabindex="-1"><a class="header-anchor" href="#configure-sh" aria-hidden="true">#</a> configure.sh</h3><p><code>configure.sh</code> is the script to complete some preprocessing task for both developing and packaging building.</p><p>Following parameter is available for developing:</p><ul><li><code>-e, --env</code> -- Environment Check, check whether it is using Fake WSL Environment, normal Linux or WSL.</li><li><code>-p, --prsh</code> -- Check Status of <code>powershell.exe</code>.</li><li><code>-P, --pkg</code> -- Install Needed Packages required by your system for building.</li></ul><p>Following parameter is available for package building:</p><ul><li><code>--build</code> -- helper to add the version to wslu header.</li><li><code>--deb &lt;distro&gt;</code> -- preprocessing script for deb packages.<code>&lt;distro&gt;</code> should be version code name like <code>bionic</code>, <code>stable</code>, <code>kali-rolling</code> or <code>buster</code>.</li><li><code>--rpm</code> -- preprocessing script for rpm packages.</li></ul><h3 id="build-install" tabindex="-1"><a class="header-anchor" href="#build-install" aria-hidden="true">#</a> Build &amp; Install</h3><p>run <code>make</code> to build executables to <code>out</code> folder and manages to <code>out-docs</code> folder. run <code>make doc</code> to build manpage only. run <code>make clean</code> to remove <code>out</code> and <code>out-docs</code> folder. run <code>make test</code> to run tests. run <code>make install</code> to install. run <code>make res_install</code> to install just resources. run <code>make uninstall</code> to uninstall. run <code>cd extras/scripts &amp;&amp; ./builder-docs.sh</code> to build docs to <code>gendocs</code>.</p><p>Pass necessary environment variables if necessary. The default installation is in <code>/usr</code> folder:</p><ul><li><code>DESTDIR</code>: You can change the destination installation folder. It is empty by default.</li><li><code>PREFIX</code>: You can change the prefix for where to install. It is <code>/usr</code> by default.</li></ul><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h3>',17),c=(0,t._)("code",null,"wslu",-1),u=(0,t.Uk)(" use "),p={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("bats"),h=(0,t.Uk)(" for testing. Please refer to "),b={href:"https://github.com/bats-core/bats-core#writing-tests",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("its guide"),g=(0,t.Uk)(" to write tests."),f=(0,t._)("h3",{id:"push-requests",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#push-requests","aria-hidden":"true"},"#"),(0,t.Uk)(" Push Requests")],-1),k=(0,t._)("p",null,"Make sure that the codes changed are tested.",-1),v=(0,t.Uk)("Then create Pull requests "),w={href:"https://github.com/wslutilities/wslu/compare",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("here"),x=(0,t.Uk)("."),y=(0,t._)("h2",{id:"financial-contributions",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#financial-contributions","aria-hidden":"true"},"#"),(0,t.Uk)(" Financial contributions")],-1),U=(0,t.Uk)("We also welcome financial contributions in full transparency on our "),C={href:"https://opencollective.com/wslu",target:"_blank",rel:"noopener noreferrer"},W=(0,t.Uk)("open collective"),S=(0,t.Uk)('. Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.'),P=(0,t.uE)('<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> Contributors</h3><p>Thank you to all the people who have already contributed to wslu! <a href="graphs/contributors"><img src="https://opencollective.com/wslu/contributors.svg?width=890"></a></p><h3 id="backers" tabindex="-1"><a class="header-anchor" href="#backers" aria-hidden="true">#</a> Backers</h3>',3),T=(0,t.Uk)("Thank you to all our backers! ["),I={href:"https://opencollective.com/wslu#backer",target:"_blank",rel:"noopener noreferrer"},q=(0,t.Uk)("Become a backer"),E=(0,t.Uk)("]"),F=(0,t._)("p",null,[(0,t._)("a",{href:"https://opencollective.com/wslu#backers",target:"_blank"},[(0,t._)("img",{src:"https://opencollective.com/wslu/backers.svg?width=890"})])],-1),L=(0,t._)("h3",{id:"sponsors",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#sponsors","aria-hidden":"true"},"#"),(0,t.Uk)(" Sponsors")],-1),R=(0,t.Uk)("Thank you to all our sponsors! (please ask your company to also support this open source project by "),B={href:"https://opencollective.com/wslu#sponsor",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Uk)("becoming a sponsor"),O=(0,t.Uk)(")"),j=(0,t.uE)('<p><a href="https://opencollective.com/wslu/sponsor/0/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/0/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/1/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/1/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/2/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/2/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/3/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/3/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/4/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/4/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/5/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/5/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/6/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/6/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/7/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/7/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/8/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/8/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/9/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/9/avatar.svg"></a></p>',1),A={},H=(0,n(3744).Z)(A,[["render",function(e,s){const n=(0,t.up)("RouterLink"),A=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,(0,t._)("p",null,[o,(0,t.Wm)(n,{to:"/CODE_OF_CONDUCT.html"},{default:(0,t.w5)((()=>[a])),_:1}),l]),i,(0,t._)("p",null,[c,u,(0,t._)("a",p,[d,(0,t.Wm)(A)]),h,(0,t._)("a",b,[m,(0,t.Wm)(A)]),g]),f,k,(0,t._)("p",null,[v,(0,t._)("a",w,[_,(0,t.Wm)(A)]),x]),y,(0,t._)("p",null,[U,(0,t._)("a",C,[W,(0,t.Wm)(A)]),S]),P,(0,t._)("p",null,[T,(0,t._)("a",I,[q,(0,t.Wm)(A)]),E]),F,L,(0,t._)("p",null,[R,(0,t._)("a",B,[D,(0,t.Wm)(A)]),O]),j],64)}]])},3744:(e,s)=>{s.Z=(e,s)=>{for(const[n,t]of s)e[n]=t;return e}}}]);