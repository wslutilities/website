import{_ as l,r as t,o as r,c as o,a as e,b as a,F as d,e as i,d as s}from"./app.c200953e.js";const u={},p=i(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><h3 id="alpine-linux" tabindex="-1"><a class="header-anchor" href="#alpine-linux" aria-hidden="true">#</a> Alpine Linux</h3><p>You can install <code>wslu</code> on <strong>Alpine Linux 3.12+</strong> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apk add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><p>You can install <code>wslu</code> with the following methods:</p><ol><li>If not done so, initial <code>pacman-key</code> with <code>pacman-key --init</code>;</li><li>add the WSL Utilties Public Signing Key to <code>pacman</code> from the keyserver from keyserver using <code>pacman-key -r A2861ABFD897DD37</code> or download from our website and import the key:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>Locally sign the key with <code>pacman-key --lsign-key A2861ABFD897DD37</code>;</li><li>add the following content in your <code>/etc/pacman.conf</code>:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>run <code>pacman -Sy &amp;&amp; pacman -S wslu</code> to install.</li></ol><h3 id="centos-rhel-oracle-linux" tabindex="-1"><a class="header-anchor" href="#centos-rhel-oracle-linux" aria-hidden="true">#</a> CentOS/RHEL/Oracle Linux</h3><p>Add the repository for the corresponding Linux distribution:</p><ul><li><strong>CentOS 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>CentOS 8</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y epel-release 
sudo dnf config-manager --set-enabled PowerTools
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>Oracle Linux 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>Oracle Linux 8</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>Red Hat Enterprise Linux 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>Red Hat Enterprise Linux 8</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Then install with the command <code>sudo yum install wslu</code>.</p><h3 id="debian" tabindex="-1"><a class="header-anchor" href="#debian" aria-hidden="true">#</a> Debian</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc

# Debian 10
echo &quot;deb https://pkg.wslutiliti.es/debian buster main&quot; | sudo tee -a /etc/apt/sources.list
# Debian 11
echo &quot;deb https://pkg.wslutiliti.es/debian bullseye main&quot; | sudo tee -a /etc/apt/sources.list

sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora" aria-hidden="true">#</a> Fedora</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="fedora-remix-for-wsl" tabindex="-1"><a class="header-anchor" href="#fedora-remix-for-wsl" aria-hidden="true">#</a> Fedora Remix for WSL</h3><p>Preinstalled.</p><h3 id="kali-linux" tabindex="-1"><a class="header-anchor" href="#kali-linux" aria-hidden="true">#</a> Kali Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo &quot;deb https://pkg.wslutiliti.es/kali kali-rolling main&quot; | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="pengwin" tabindex="-1"><a class="header-anchor" href="#pengwin" aria-hidden="true">#</a> Pengwin</h3><p>Preinstalled.</p><h3 id="pengwin-enterprise-7" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-7" aria-hidden="true">#</a> Pengwin Enterprise 7</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="pengwin-enterprise-8" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-8" aria-hidden="true">#</a> Pengwin Enterprise 8</h3><p>Add the EPEL repository:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y epel-release
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>`,47),c={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"INFO",-1),b=s("For Ubuntu version, you should only report bug at "),m={href:"https://bugs.launchpad.net/ubuntu/+source/wslu",target:"_blank",rel:"noopener noreferrer"},g=s("Launchpad"),x=s("."),w=i(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Starting from Ubuntu 22.04 LTS, Ubuntu on WSL no longer bundled with <code>wslu</code>. Please install the PPA version.</p></div><p>Preinstalled before Ubuntu 22.04 LTS. On older installations of Ubuntu please install <code>ubuntu-wsl</code> that depends on <code>wslu</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update
sudo apt install ubuntu-wsl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),v=s("To install the latest version of "),_=e("code",null,"wslu",-1),f=s(", you can install via our PPA: "),y={href:"https://launchpad.net/~wslutilities/+archive/ubuntu/wslu",target:"_blank",rel:"noopener noreferrer"},S=s("https://launchpad.net/~wslutilities/+archive/ubuntu/wslu"),k=i(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo add-apt-repository ppa:wslutilities/wslu
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse" aria-hidden="true">#</a> OpenSUSE</h3><p>You can install <code>wslu</code> with the following command:</p><h4 id="leap-15-1-15-2" tabindex="-1"><a class="header-anchor" href="#leap-15-1-15-2" aria-hidden="true">#</a> Leap 15.1 - 15.2</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SUSE_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_\${SUSE_VERSION}/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="leap-15-3-15-4" tabindex="-1"><a class="header-anchor" href="#leap-15-3-15-4" aria-hidden="true">#</a> Leap 15.3 - 15.4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SUSE_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/\${SUSE_VERSION}/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="tumbleweed" tabindex="-1"><a class="header-anchor" href="#tumbleweed" aria-hidden="true">#</a> Tumbleweed</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Tumbleweed/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="suse-linux-enperprise-server" tabindex="-1"><a class="header-anchor" href="#suse-linux-enperprise-server" aria-hidden="true">#</a> SUSE Linux Enperprise Server</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SLESCUR_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="void-linux" tabindex="-1"><a class="header-anchor" href="#void-linux" aria-hidden="true">#</a> Void Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo xbps-install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="clear-linux" tabindex="-1"><a class="header-anchor" href="#clear-linux" aria-hidden="true">#</a> Clear Linux</h3><p>You can install <code>wslu</code> with the following command:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo swupd 3rd-party add wslutilities https://pkg.wslutiliti.es/clearlinux
sudo swupd 3rd-party bundle-add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="other-distributions" tabindex="-1"><a class="header-anchor" href="#other-distributions" aria-hidden="true">#</a> Other distributions</h3>`,19),E=e("p",null,[e("strong",null,"\u26A0 Not Recommend")],-1),L=e("code",null,"curl | bash",-1),O=s(" method is not secure. "),R={href:"https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install",target:"_blank",rel:"noopener noreferrer"},I=s("Related article"),N=e("p",null,[s("You can install "),e("code",null,"wslu"),s(" with the following command on your preferred distribution: "),e("code",null,"curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash")],-1),V=e("h3",{id:"for-older-verions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#for-older-verions","aria-hidden":"true"},"#"),s(" For Older Verions")],-1),U=e("h4",{id:"install-from-wsl-translinux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-from-wsl-translinux","aria-hidden":"true"},"#"),s(" Install from "),e("code",null,"wsl-translinux")],-1),q=e("code",null,"wslu",-1),P=s(" is part of "),z={href:"https://github.com/cerebrate/wsl-translinux",target:"_blank",rel:"noopener noreferrer"},A=s("wsl-translinux"),C=s(" apt repository."),Y=s("Following the guidelines "),D={href:"https://github.com/cerebrate/wsl-translinux/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},F=s("Here"),T=s(" to add the repository. Then you can simply run "),$=e("code",null,"sudo apt install wslu",-1),H=s(" to install "),B=e("code",null,"wslu",-1),W=s("."),j=i(`<p>However, with lack of support, I moved my packages to my own apt repository.</p><h4 id="install-version-1-2" tabindex="-1"><a class="header-anchor" href="#install-version-1-2" aria-hidden="true">#</a> Install version 1.2</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu
cd ~/.wslu
./configure -i
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="install-version-1-1-1-0" tabindex="-1"><a class="header-anchor" href="#install-version-1-1-1-0" aria-hidden="true">#</a> Install version 1.1/1.0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone --branch v1.1 https://github.com/patrick330602/wslu.git
#for 1.0: change 1.1 to 1.0
cd wslu
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>To uninstall, <code>run sudo make uninstall</code></p><h4 id="install-pre-releases" tabindex="-1"><a class="header-anchor" href="#install-pre-releases" aria-hidden="true">#</a> Install pre-releases</h4><p>directly run <code>wslu-dev</code> after cloning.</p>`,8);function K(G,M){const n=t("ExternalLinkIcon");return r(),o(d,null,[p,e("div",c,[h,e("p",null,[b,e("a",m,[g,a(n)]),x])]),w,e("p",null,[v,_,f,e("a",y,[S,a(n)])]),k,e("blockquote",null,[E,e("p",null,[L,O,e("a",R,[I,a(n)])])]),N,V,U,e("p",null,[q,P,e("a",z,[A,a(n)]),C]),e("p",null,[Y,e("a",D,[F,a(n)]),T,$,H,B,W]),j],64)}var Q=l(u,[["render",K],["__file","install.html.vue"]]);export{Q as default};
