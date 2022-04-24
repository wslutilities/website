import{_ as c,r as a,o as i,c as l,a as e,b as o,w as d,F as p,d as s,e as t}from"./app.ab081e37.js";const u={},h=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),s(" Contributing")],-1),b=s("We love pull requests from everyone. By participating in this project, you agree to abide by "),m=s("Code of Conduct"),g=s("."),f=t(`<h2 id="code-contributions" tabindex="-1"><a class="header-anchor" href="#code-contributions" aria-hidden="true">#</a> Code contributions</h2><h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h3><p>Run the following to get started:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone --recursive --branch dev/master https://github.com/wslutilities/wslu.git
./configure.sh
<span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> res_install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wslu
|-src
|  |-etc
|  |  |-wslview.desktop: XDG-style app definition for wslview
|  |  |-wsl.ico: legacy default icon for wslusc
|  |  |-wsl-gui.ico: default icon for wslusc GUI shortcut
|  |  |-wsl-term.ico: default icon for wslusc cli shortcut
|  |  |-sudo.ps1: helper script for wslgsu
|  |  |-get_dpi.ps1: helper script for dpi function in wslsys
|  |  |-wslsc-helper.sh: helper script for wslusc on WSL side
|  |  \\-runHidden.vbs: helper script for wslusc on Windows side
|  |-wslu-header: Header file of all script
|  \\-&lt;components&gt;.sh: Components of script
|-tests: location for script tests
\\-extras
   |-bats: testing utility
   |-scripts: scripts
   \\-build
      |-debian: files for building .deb
      |-rpm: files for building .rpm
      |-fedora: files for building Fedora versions of .rpm (4+)
      |-arch: files for building Arch Linux packages
      \\-alpine: files for building Alpine Linux packages
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="configure-sh" tabindex="-1"><a class="header-anchor" href="#configure-sh" aria-hidden="true">#</a> configure.sh</h3><p><code>configure.sh</code> is the script to complete some preprocessing task for both developing and packaging building.</p><p>Following parameter is available for developing:</p><ul><li><code>-e, --env</code> -- Environment Check, check whether it is using Fake WSL Environment, normal Linux or WSL.</li><li><code>-p, --prsh</code> -- Check Status of <code>powershell.exe</code>.</li><li><code>-P, --pkg</code> -- Install Needed Packages required by your system for building.</li></ul><p>Following parameter is available for package building:</p><ul><li><code>--build</code> -- helper to add the version to wslu header.</li><li><code>--deb &lt;distro&gt;</code> -- preprocessing script for deb packages.<code>&lt;distro&gt;</code> should be version code name like <code>bionic</code>, <code>stable</code>, <code>kali-rolling</code> or <code>buster</code>.</li><li><code>--rpm</code> -- preprocessing script for rpm packages.</li></ul><h3 id="build-install" tabindex="-1"><a class="header-anchor" href="#build-install" aria-hidden="true">#</a> Build &amp; Install</h3><p>run <code>make</code> to build executables to <code>out</code> folder and manages to <code>out-docs</code> folder. run <code>make doc</code> to build manpage only. run <code>make clean</code> to remove <code>out</code> and <code>out-docs</code> folder. run <code>make test</code> to run tests. run <code>make install</code> to install. run <code>make res_install</code> to install just resources. run <code>make uninstall</code> to uninstall. run <code>cd extras/scripts &amp;&amp; ./builder-docs.sh</code> to build docs to <code>gendocs</code>.</p><p>Pass necessary environment variables if necessary. The default installation is in <code>/usr</code> folder:</p><ul><li><code>DESTDIR</code>: You can change the destination installation folder. It is empty by default.</li><li><code>PREFIX</code>: You can change the prefix for where to install. It is <code>/usr</code> by default.</li></ul><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h3>`,17),_=e("code",null,"wslu",-1),v=s(" use "),w={href:"https://github.com/bats-core/bats-core",target:"_blank",rel:"noopener noreferrer"},k=s("bats"),x=s(" for testing. Please refer to "),y={href:"https://github.com/bats-core/bats-core#writing-tests",target:"_blank",rel:"noopener noreferrer"},C=s("its guide"),I=s(" to write tests."),L=e("h3",{id:"push-requests",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#push-requests","aria-hidden":"true"},"#"),s(" Push Requests")],-1),F=e("p",null,"Make sure that the codes changed are tested.",-1),S=s("Then create Pull requests "),T={href:"https://github.com/wslutilities/wslu/compare",target:"_blank",rel:"noopener noreferrer"},E=s("here"),B=s("."),P=e("h2",{id:"financial-contributions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#financial-contributions","aria-hidden":"true"},"#"),s(" Financial contributions")],-1),q=s("We also welcome financial contributions in full transparency on our "),N={href:"https://opencollective.com/wslu",target:"_blank",rel:"noopener noreferrer"},R=s("open collective"),W=s('. Anyone can file an expense. If the expense makes sense for the development of the community, it will be "merged" in the ledger of our open collective by the core contributors and the person who filed the expense will be reimbursed.'),D=t('<h3 id="contributors" tabindex="-1"><a class="header-anchor" href="#contributors" aria-hidden="true">#</a> Contributors</h3><p>Thank you to all the people who have already contributed to wslu! <a href="graphs/contributors"><img src="https://opencollective.com/wslu/contributors.svg?width=890"></a></p><h3 id="backers" tabindex="-1"><a class="header-anchor" href="#backers" aria-hidden="true">#</a> Backers</h3>',3),V=s("Thank you to all our backers! ["),j={href:"https://opencollective.com/wslu#backer",target:"_blank",rel:"noopener noreferrer"},A=s("Become a backer"),O=s("]"),G=e("p",null,[e("a",{href:"https://opencollective.com/wslu#backers",target:"_blank"},[e("img",{src:"https://opencollective.com/wslu/backers.svg?width=890"})])],-1),H=e("h3",{id:"sponsors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sponsors","aria-hidden":"true"},"#"),s(" Sponsors")],-1),U=s("Thank you to all our sponsors! (please ask your company to also support this open source project by "),X={href:"https://opencollective.com/wslu#sponsor",target:"_blank",rel:"noopener noreferrer"},Y=s("becoming a sponsor"),M=s(")"),z=t('<p><a href="https://opencollective.com/wslu/sponsor/0/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/0/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/1/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/1/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/2/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/2/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/3/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/3/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/4/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/4/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/5/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/5/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/6/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/6/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/7/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/7/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/8/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/8/avatar.svg"></a><a href="https://opencollective.com/wslu/sponsor/9/website" target="_blank"><img src="https://opencollective.com/wslu/sponsor/9/avatar.svg"></a></p>',1);function J(K,Q){const r=a("RouterLink"),n=a("ExternalLinkIcon");return i(),l(p,null,[h,e("p",null,[b,o(r,{to:"/CODE_OF_CONDUCT.html"},{default:d(()=>[m]),_:1}),g]),f,e("p",null,[_,v,e("a",w,[k,o(n)]),x,e("a",y,[C,o(n)]),I]),L,F,e("p",null,[S,e("a",T,[E,o(n)]),B]),P,e("p",null,[q,e("a",N,[R,o(n)]),W]),D,e("p",null,[V,e("a",j,[A,o(n)]),O]),G,H,e("p",null,[U,e("a",X,[Y,o(n)]),M]),z],64)}var $=c(u,[["render",J],["__file","contributing.html.vue"]]);export{$ as default};
