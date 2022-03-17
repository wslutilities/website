"use strict";(self.webpackChunkwslu_docs=self.webpackChunkwslu_docs||[]).push([[605],{227:(e,n,s)=>{s.r(n),s.d(n,{data:()=>l});const l={key:"v-cb4aacd2",path:"/install.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Installation",slug:"installation",children:[{level:3,title:"Alpine Linux",slug:"alpine-linux",children:[]},{level:3,title:"Arch Linux",slug:"arch-linux",children:[]},{level:3,title:"CentOS/RHEL/Oracle Linux",slug:"centos-rhel-oracle-linux",children:[]},{level:3,title:"Debian",slug:"debian",children:[]},{level:3,title:"Fedora",slug:"fedora",children:[]},{level:3,title:"Fedora Remix for WSL",slug:"fedora-remix-for-wsl",children:[]},{level:3,title:"Kali Linux",slug:"kali-linux",children:[]},{level:3,title:"Pengwin",slug:"pengwin",children:[]},{level:3,title:"Pengwin Enterprise 7",slug:"pengwin-enterprise-7",children:[]},{level:3,title:"Pengwin Enterprise 8",slug:"pengwin-enterprise-8",children:[]},{level:3,title:"Ubuntu",slug:"ubuntu",children:[]},{level:3,title:"OpenSUSE",slug:"opensuse",children:[]},{level:3,title:"SUSE Linux Enperprise Server",slug:"suse-linux-enperprise-server",children:[]},{level:3,title:"Other distributions",slug:"other-distributions",children:[]},{level:3,title:"For Older Verions",slug:"for-older-verions",children:[]}]}],filePathRelative:"install.md",git:{updatedTime:1638499152e3,contributors:[{name:"Jinming Wu, Patrick",email:"me@patrickwu.space",commits:1}]}}},947:(e,n,s)=>{s.r(n),s.d(n,{default:()=>V});var l=s(6252);const a=(0,l.uE)('<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><h3 id="alpine-linux" tabindex="-1"><a class="header-anchor" href="#alpine-linux" aria-hidden="true">#</a> Alpine Linux</h3><p>You can install <code>wslu</code> on <strong>Alpine Linux 3.12+</strong> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apk add wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><p>You can install <code>wslu</code> with the following methods:</p><ol><li>If not done so, initial <code>pacman-key</code> with <code>pacman-key --init</code>;</li><li>add the WSL Utilties Public Signing Key to <code>pacman</code> from the keyserver from keyserver using <code>pacman-key -r A2861ABFD897DD37</code> or download from our website and import the key:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://pkg.wslutiliti.es/public.key\npacman-key --add public.key\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>Locally sign the key with <code>pacman-key --lsign-key A2861ABFD897DD37</code>;</li><li>add the following content in your <code>/etc/pacman.conf</code>:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[wslutilities]\nServer = https://pkg.wslutiliti.es/arch/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>run <code>pacman -Sy &amp;&amp; pacman -S wslu</code> to install.</li></ol><h3 id="centos-rhel-oracle-linux" tabindex="-1"><a class="header-anchor" href="#centos-rhel-oracle-linux" aria-hidden="true">#</a> CentOS/RHEL/Oracle Linux</h3><p>Add the repository for the corresponding Linux distribution:</p><ul><li><strong>CentOS 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>CentOS 8</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y epel-release \nsudo dnf config-manager --set-enabled PowerTools\nsudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>Oracle Linux 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>Oracle Linux 8</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\nsudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms\nsudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>Red Hat Enterprise Linux 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>Red Hat Enterprise Linux 8</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm\nsudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms\nsudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then install with the command <code>sudo yum install wslu</code>.</p><h3 id="debian" tabindex="-1"><a class="header-anchor" href="#debian" aria-hidden="true">#</a> Debian</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https\nwget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc\necho &quot;deb https://pkg.wslutiliti.es/debian buster main&quot; | sudo tee -a /etc/apt/sources.list\nsudo apt update\nsudo apt install wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora" aria-hidden="true">#</a> Fedora</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf copr enable wslutilities/wslu\nsudo dnf install wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="fedora-remix-for-wsl" tabindex="-1"><a class="header-anchor" href="#fedora-remix-for-wsl" aria-hidden="true">#</a> Fedora Remix for WSL</h3><p>Preinstalled.</p><h3 id="kali-linux" tabindex="-1"><a class="header-anchor" href="#kali-linux" aria-hidden="true">#</a> Kali Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https\nwget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc\necho &quot;deb https://pkg.wslutiliti.es/kali kali-rolling main&quot; | sudo tee -a /etc/apt/sources.list\nsudo apt update\nsudo apt install wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="pengwin" tabindex="-1"><a class="header-anchor" href="#pengwin" aria-hidden="true">#</a> Pengwin</h3><p>Preinstalled.</p><h3 id="pengwin-enterprise-7" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-7" aria-hidden="true">#</a> Pengwin Enterprise 7</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="pengwin-enterprise-8" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-8" aria-hidden="true">#</a> Pengwin Enterprise 8</h3><p>Add the EPEL repository:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y epel-release\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>',47),i=(0,l._)("p",null,"Attention!",-1),r=(0,l.Uk)("For Ubuntu version, you should not only report bug here but also report bug at "),t={href:"https://bugs.launchpad.net/ubuntu/+source/wslu",target:"_blank",rel:"noopener noreferrer"},o=(0,l.Uk)("Launchpad"),d=(0,l.Uk)("."),u=(0,l.uE)('<p>Preinstalled in the latest apps. On older installations of Ubuntu please install <code>ubuntu-wsl</code> that depends on <code>wslu</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update\nsudo apt install ubuntu-wsl\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',2),p=(0,l.Uk)("To install the latest version before "),c=(0,l._)("code",null,"wslu",-1),h=(0,l.Uk)(" reaches "),b=(0,l._)("code",null,"main",-1),m=(0,l.Uk)(" reporsitory, you can install via our PPA: "),g={href:"https://launchpad.net/~wslutilities/+archive/ubuntu/wslu",target:"_blank",rel:"noopener noreferrer"},x=(0,l.Uk)("https://launchpad.net/~wslutilities/+archive/ubuntu/wslu"),w=(0,l.uE)('<h3 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse" aria-hidden="true">#</a> OpenSUSE</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_15.1/home:wslutilities.repo\nsudo zypper up\nsudo zypper in wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="suse-linux-enperprise-server" tabindex="-1"><a class="header-anchor" href="#suse-linux-enperprise-server" aria-hidden="true">#</a> SUSE Linux Enperprise Server</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SLESCUR_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;\nsudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo\nsudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo\nsudo zypper up\nsudo zypper in wslu\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="other-distributions" tabindex="-1"><a class="header-anchor" href="#other-distributions" aria-hidden="true">#</a> Other distributions</h3>',7),v=(0,l._)("p",null,[(0,l._)("strong",null,"⚠ Not Recommend")],-1),f=(0,l._)("code",null,"curl | bash",-1),k=(0,l.Uk)(" method is not secure. "),y={href:"https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("Related article"),S=(0,l._)("p",null,[(0,l.Uk)("You can install "),(0,l._)("code",null,"wslu"),(0,l.Uk)(" with the following command on your preferred distribution: "),(0,l._)("code",null,"curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash")],-1),U=(0,l._)("h3",{id:"for-older-verions",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#for-older-verions","aria-hidden":"true"},"#"),(0,l.Uk)(" For Older Verions")],-1),E=(0,l._)("h4",{id:"install-from-wsl-translinux",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#install-from-wsl-translinux","aria-hidden":"true"},"#"),(0,l.Uk)(" Install from "),(0,l._)("code",null,"wsl-translinux")],-1),L=(0,l._)("code",null,"wslu",-1),O=(0,l.Uk)(" is part of "),R={href:"https://github.com/cerebrate/wsl-translinux",target:"_blank",rel:"noopener noreferrer"},P=(0,l.Uk)("wsl-translinux"),A=(0,l.Uk)(" apt repository."),C=(0,l.Uk)("Following the guidelines "),I={href:"https://github.com/cerebrate/wsl-translinux/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},D=(0,l.Uk)("Here"),F=(0,l.Uk)(" to add the repository. Then you can simply run "),Y=(0,l._)("code",null,"sudo apt install wslu",-1),q=(0,l.Uk)(" to install "),H=(0,l._)("code",null,"wslu",-1),W=(0,l.Uk)("."),z=(0,l.uE)('<p>However, with lack of support, I moved my packages to my own apt repository.</p><h4 id="install-version-1-2" tabindex="-1"><a class="header-anchor" href="#install-version-1-2" aria-hidden="true">#</a> Install version 1.2</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu\ncd ~/.wslu\n./configure -i\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="install-version-1-1-1-0" tabindex="-1"><a class="header-anchor" href="#install-version-1-1-1-0" aria-hidden="true">#</a> Install version 1.1/1.0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone --branch v1.1 https://github.com/patrick330602/wslu.git\n#for 1.0: change 1.1 to 1.0\ncd wslu\nsudo make install\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>To uninstall, <code>run sudo make uninstall</code></p><h4 id="install-pre-releases" tabindex="-1"><a class="header-anchor" href="#install-pre-releases" aria-hidden="true">#</a> Install pre-releases</h4><p>directly run <code>wslu-dev</code> after cloning.</p>',8),T={},V=(0,s(3744).Z)(T,[["render",function(e,n){const s=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[a,(0,l._)("blockquote",null,[i,(0,l._)("p",null,[r,(0,l._)("a",t,[o,(0,l.Wm)(s)]),d])]),u,(0,l._)("p",null,[p,c,h,b,m,(0,l._)("a",g,[x,(0,l.Wm)(s)])]),w,(0,l._)("blockquote",null,[v,(0,l._)("p",null,[f,k,(0,l._)("a",y,[_,(0,l.Wm)(s)])])]),S,U,E,(0,l._)("p",null,[L,O,(0,l._)("a",R,[P,(0,l.Wm)(s)]),A]),(0,l._)("p",null,[C,(0,l._)("a",I,[D,(0,l.Wm)(s)]),F,Y,q,H,W]),z],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,l]of n)e[s]=l;return e}}}]);