import{_ as i,r as l,o as t,c as d,a as e,b as a,F as o,e as r,d as s}from"./app.ef1dff1f.js";const u={},p=r(`<h2 id="\u5B89\u88DD" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88DD" aria-hidden="true">#</a> \u5B89\u88DD</h2><h3 id="alpine-linux" tabindex="-1"><a class="header-anchor" href="#alpine-linux" aria-hidden="true">#</a> Alpine Linux</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u901A\u904E <strong>Alpine Linux 3.12+</strong> \u5B89\u88DD <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apk add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u6CD5\u5B89\u88DD <code>wslu</code>\uFF1A</p><ol><li>\u5982\u672A\u64CD\u4F5C\u904E\uFF0C\u8ACB\u5148\u7528\u6307\u4EE4 <code>pacman-key --init</code> \u6700\u521D\u5316 <code>pacman-key</code>\uFF1B</li><li>\u4F7F\u7528\u6307\u4EE4 <code>pacman-key -r A2861ABFD897DD37</code> \u5C07 WSL Utilities \u516C\u5171\u5BC6\u9470\u5F9E\u5BC6\u9470\u4F3A\u670D\u5668\u52A0\u5165 <code>pacman</code>\uFF0C\u6216\u901A\u904E\u4EE5\u4E0B\u65B9\u6CD5\u5F9E\u5B98\u7DB2\u4E0B\u8F09\u516C\u5171\u5BC6\u9470\u5C0E\u5165:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3"><li>\u4F7F\u7528\u6307\u4EE4 <code>pacman-key --lsign-key A2861ABFD897DD37</code>\u672C\u5730\u7C3D\u540D\u5BC6\u9470;</li><li>\u5C07\u4EE5\u4E0B\u5167\u5BB9\u52A0\u5165 <code>/etc/pacman.conf</code>:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="5"><li>\u4F7F\u7528\u6307\u4EE4 <code>pacman -Sy &amp;&amp; pacman -S wslu</code> \u4F86\u57F7\u884C\u5B89\u88DD\u3002</li></ol><h3 id="centos-rhel-oracle-linux" tabindex="-1"><a class="header-anchor" href="#centos-rhel-oracle-linux" aria-hidden="true">#</a> CentOS/RHEL/Oracle Linux</h3><p>\u70BA\u76F8\u61C9\u7684\u767C\u884C\u7248\u65B0\u589E\u5009\u5EAB\uFF1A</p><ul><li><strong>CentOS 7</strong>:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7136\u5F8C\u7528\u4EE5\u4E0B\u6307\u4EE4 <code>sudo yum install wslu</code> \u5B89\u88DD <code>wslu</code>\u3002</p><h3 id="debian" tabindex="-1"><a class="header-anchor" href="#debian" aria-hidden="true">#</a> Debian</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88DD <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https

# Debian 10
echo &quot;deb https://pkg.wslutiliti.es/debian buster main&quot; | sudo tee -a /etc/apt/sources.list
# Debian 11
echo &quot;deb https://pkg.wslutiliti.es/debian bullseye main&quot; | sudo tee -a /etc/apt/sources.list

sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora" aria-hidden="true">#</a> Fedora</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u901A\u904E <code>COPR</code> \u5B89\u88DD <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="fedora-remix-for-wsl" tabindex="-1"><a class="header-anchor" href="#fedora-remix-for-wsl" aria-hidden="true">#</a> Fedora Remix for WSL</h3><p>\u5DF2\u9810\u8F09\u3002</p><h3 id="kali-linux" tabindex="-1"><a class="header-anchor" href="#kali-linux" aria-hidden="true">#</a> Kali Linux</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5 <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo &quot;deb https://pkg.wslutiliti.es/kali kali-rolling main&quot; | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="pengwin" tabindex="-1"><a class="header-anchor" href="#pengwin" aria-hidden="true">#</a> Pengwin</h3><p>\u5DF2\u9810\u8F09\u3002</p><h3 id="pengwin-enterprise-7" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-7" aria-hidden="true">#</a> Pengwin Enterprise 7</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5 <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="pengwin-enterprise-8" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-8" aria-hidden="true">#</a> Pengwin Enterprise 8</h3><p>\u52A0\u5165 EPEL \u5009\u5EAB:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y epel-release
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5 <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo dnf install -y wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>`,48),c={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),b=s("Ubuntu \u7248\u672C\u9700\u8981\u5728"),m={href:"https://bugs.launchpad.net/ubuntu/+source/wslu",target:"_blank",rel:"noopener noreferrer"},g=s("\u6B64"),x=s("\u9032\u884C\u53CD\u994B\u3002"),w=r(`<div class="custom-container warning"><p class="custom-container-title">\u8B66\u544A</p><p>\u5F9E Ubuntu 22.04 LTS \u958B\u59CB\u4E0D\u518D\u9810\u88DD<code>wslu</code>\u3002\u8ACB\u5B89\u88DD PPA \u7248\u3002</p></div><p>Ubuntu 22.04 LTS \u4E4B\u524D\u7684\u7248\u672C\u5DF2\u9810\u88DD\u3002\u91DD\u5C0D\u820A\u7248\u672C\u7684\u5B89\u88DD\uFF0C\u8ACB\u5B89\u88DD\u4F9D\u8CF4\u65BC wslu \u7684 ubuntu-wsl:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update
sudo apt install ubuntu-wsl
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,3),_=s("\u8ACB\u5F9E\u4EE5\u4E0B PPA \u5B89\u88DD\u6700\u65B0\u7248 "),v=e("code",null,"wslu",-1),f=s("\uFF1A "),S={href:"https://launchpad.net/~wslutilities/+archive/ubuntu/wslu",target:"_blank",rel:"noopener noreferrer"},y=s("https://launchpad.net/~wslutilities/+archive/ubuntu/wslu"),E=r(`<h3 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse" aria-hidden="true">#</a> OpenSUSE</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5 <code>wslu</code>\uFF1A</p><h4 id="leap-15-1-15-2" tabindex="-1"><a class="header-anchor" href="#leap-15-1-15-2" aria-hidden="true">#</a> Leap 15.1 - 15.2</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SUSE_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="suse-linux-enperprise-server" tabindex="-1"><a class="header-anchor" href="#suse-linux-enperprise-server" aria-hidden="true">#</a> SUSE Linux Enperprise Server</h3><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5 <code>wslu</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SLESCUR_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5176\u4ED6\u767C\u884C\u7248" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u767C\u884C\u7248" aria-hidden="true">#</a> \u5176\u4ED6\u767C\u884C\u7248</h3>`,12),k=e("p",null,[e("strong",null,"\u26A0 \u4E0D\u5EFA\u8B70")],-1),L=e("code",null,"curl | bash",-1),O=s(" \u9019\u7A2E\u65B9\u6CD5\u4E26\u4E0D\u5B89\u5168\u3002 "),R={href:"https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install",target:"_blank",rel:"noopener noreferrer"},I=s("\u76F8\u95DC\u6587\u7AE0"),q=e("p",null,[s("\u5728\u4F60\u60F3\u8981\u5B89\u88DD\u7684\u767C\u884C\u7248\u4E0B\u57F7\u884C\u4EE5\u4E0B\u6307\u4EE4\uFF1A"),e("code",null,"curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash")],-1),N=e("h3",{id:"\u91DD\u5C0D\u66F4\u820A\u7684\u7248\u672C-\u53EA\u9650\u82F1\u6587",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u91DD\u5C0D\u66F4\u820A\u7684\u7248\u672C-\u53EA\u9650\u82F1\u6587","aria-hidden":"true"},"#"),s(" \u91DD\u5C0D\u66F4\u820A\u7684\u7248\u672C \uFF08\u53EA\u9650\u82F1\u6587\uFF09")],-1),V=e("h4",{id:"install-from-wsl-translinux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-from-wsl-translinux","aria-hidden":"true"},"#"),s(" Install from "),e("code",null,"wsl-translinux")],-1),U=e("code",null,"wslu",-1),z=s(" is part of "),C={href:"https://github.com/cerebrate/wsl-translinux",target:"_blank",rel:"noopener noreferrer"},P=s("wsl-translinux"),A=s(" apt repository."),D=s("Following the guidelines "),T={href:"https://github.com/cerebrate/wsl-translinux/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},$=s("Here"),F=s(" to add the repository. Then you can simply run "),H=e("code",null,"sudo apt install wslu",-1),B=s(" to install "),j=e("code",null,"wslu",-1),W=s("."),K=r(`<p>However, with lack of support, I moved my packages to my own apt repository.</p><h4 id="install-version-1-2" tabindex="-1"><a class="header-anchor" href="#install-version-1-2" aria-hidden="true">#</a> Install version 1.2</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu
cd ~/.wslu
./configure -i
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="install-version-1-1-1-0" tabindex="-1"><a class="header-anchor" href="#install-version-1-1-1-0" aria-hidden="true">#</a> Install version 1.1/1.0</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone --branch v1.1 https://github.com/patrick330602/wslu.git
#for 1.0: change 1.1 to 1.0
cd wslu
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>To uninstall, <code>run sudo make uninstall</code></p><h4 id="install-pre-releases" tabindex="-1"><a class="header-anchor" href="#install-pre-releases" aria-hidden="true">#</a> Install pre-releases</h4><p>directly run <code>wslu-dev</code> after cloning.</p>`,8);function M(G,J){const n=l("ExternalLinkIcon");return t(),d(o,null,[p,e("div",c,[h,e("p",null,[b,e("a",m,[g,a(n)]),x])]),w,e("p",null,[_,v,f,e("a",S,[y,a(n)])]),E,e("blockquote",null,[k,e("p",null,[L,O,e("a",R,[I,a(n)])])]),q,N,V,e("p",null,[U,z,e("a",C,[P,a(n)]),A]),e("p",null,[D,e("a",T,[$,a(n)]),F,H,B,j,W]),K],64)}var X=i(u,[["render",M],["__file","install.html.vue"]]);export{X as default};
