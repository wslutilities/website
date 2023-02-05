import{_ as d,M as l,p as t,q as r,R as e,t as s,N as a,a1 as n}from"./framework-96b046e1.js";const u={},o=n(`<h2 id="安裝" tabindex="-1"><a class="header-anchor" href="#安裝" aria-hidden="true">#</a> 安裝</h2><h3 id="alpine-linux" tabindex="-1"><a class="header-anchor" href="#alpine-linux" aria-hidden="true">#</a> Alpine Linux</h3><p>你可以用以下指令通过 <strong>Alpine Linux 3.12+</strong> 安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apk add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="arch-linux" tabindex="-1"><a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a> Arch Linux</h3><p>你可以用以下方法安装 <code>wslu</code>：</p><ol><li>如未操作过，请先用命令 <code>pacman-key --init</code> 初始化 <code>pacman-key</code>；</li><li>使用命令 <code>pacman-key -r A2861ABFD897DD37</code> 将 WSL Utilities 公共密钥从密钥服务器加入 <code>pacman</code>，或通过以下方法从官网下载公共密钥导入:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://pkg.wslutiliti.es/public.key
pacman-key --add public.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用命令 <code>pacman-key --lsign-key A2861ABFD897DD37</code>本地签名密钥;</li><li>将以下内容加入 <code>/etc/pacman.conf</code>:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[wslutilities]
Server = https://pkg.wslutiliti.es/arch/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用命令 <code>pacman -Sy &amp;&amp; pacman -S wslu</code> 来运行安装。</li></ol><h3 id="centos-rhel-oracle-linux" tabindex="-1"><a class="header-anchor" href="#centos-rhel-oracle-linux" aria-hidden="true">#</a> CentOS/RHEL/Oracle Linux</h3><p>为相应的发行版添加仓库：</p><ul><li><strong>CentOS 7</strong>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_7/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>CentOS 8</strong>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y epel-release 
sudo dnf config-manager --set-enabled PowerTools
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Oracle Linux 7</strong>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>Oracle Linux 8</strong>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Red Hat Enterprise Linux 7</strong>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/RHEL_7/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>Red Hat Enterprise Linux 8</strong>:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-$(/bin/arch)-rpms
sudo yum-config-manager --add-repo https://download.opensuse.org/repositories/home:/wslutilities/CentOS_8/home:wslutilities.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后用以下指令 <code>sudo yum install wslu</code> 安装 <code>wslu</code>。</p><h3 id="debian" tabindex="-1"><a class="header-anchor" href="#debian" aria-hidden="true">#</a> Debian</h3><p>你可以用以下指令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc

# Debian 10
echo &quot;deb https://pkg.wslutiliti.es/debian buster main&quot; | sudo tee -a /etc/apt/sources.list
# Debian 11
echo &quot;deb https://pkg.wslutiliti.es/debian bullseye main&quot; | sudo tee -a /etc/apt/sources.list

sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fedora" tabindex="-1"><a class="header-anchor" href="#fedora" aria-hidden="true">#</a> Fedora</h3><p>你可以用以下指令通过 <code>COPR</code> 安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf copr enable wslutilities/wslu
sudo dnf install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fedora-remix-for-wsl" tabindex="-1"><a class="header-anchor" href="#fedora-remix-for-wsl" aria-hidden="true">#</a> Fedora Remix for WSL</h3><p>已预装。</p><h3 id="kali-linux" tabindex="-1"><a class="header-anchor" href="#kali-linux" aria-hidden="true">#</a> Kali Linux</h3><p>你可以用以下指令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install gnupg2 apt-transport-https
wget -O - https://pkg.wslutiliti.es/public.key | sudo tee -a /etc/apt/trusted.gpg.d/wslu.asc
echo &quot;deb https://pkg.wslutiliti.es/kali kali-rolling main&quot; | sudo tee -a /etc/apt/sources.list
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pengwin" tabindex="-1"><a class="header-anchor" href="#pengwin" aria-hidden="true">#</a> Pengwin</h3><p>已预装。</p><h3 id="pengwin-enterprise-7" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-7" aria-hidden="true">#</a> Pengwin Enterprise 7</h3><p>你可以用以下指令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pengwin-enterprise-8" tabindex="-1"><a class="header-anchor" href="#pengwin-enterprise-8" aria-hidden="true">#</a> Pengwin Enterprise 8</h3><p>加入 EPEL 仓库:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y epel-release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以用以下指令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo dnf install -y wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3>`,48),c={class:"custom-container tip"},p=e("p",{class:"custom-container-title"},"提示",-1),h={href:"https://bugs.launchpad.net/ubuntu/+source/wslu",target:"_blank",rel:"noopener noreferrer"},v=n(`<div class="custom-container warning"><p class="custom-container-title">警告</p><p>从 Ubuntu 22.04 LTS 开始不再预装<code>wslu</code>。请安装 PPA 版。</p></div><p>Ubuntu 22.04 LTS 之前的版本已预装。针对旧版本的安装，请安装依赖于 wslu 的 ubuntu-wsl:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install ubuntu-wsl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m=e("code",null,"wslu",-1),g={href:"https://launchpad.net/~wslutilities/+archive/ubuntu/wslu",target:"_blank",rel:"noopener noreferrer"},b=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo add-apt-repository ppa:wslutilities/wslu
sudo apt update
sudo apt install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="opensuse" tabindex="-1"><a class="header-anchor" href="#opensuse" aria-hidden="true">#</a> OpenSUSE</h3><p>你可以用以下命令安装 <code>wslu</code>：</p><h4 id="leap-15-1-15-2" tabindex="-1"><a class="header-anchor" href="#leap-15-1-15-2" aria-hidden="true">#</a> Leap 15.1 - 15.2</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SUSE_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Leap_\${SUSE_VERSION}/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="leap-15-3-15-4" tabindex="-1"><a class="header-anchor" href="#leap-15-3-15-4" aria-hidden="true">#</a> Leap 15.3 - 15.4</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SUSE_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/\${SUSE_VERSION}/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tumbleweed" tabindex="-1"><a class="header-anchor" href="#tumbleweed" aria-hidden="true">#</a> Tumbleweed</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/openSUSE_Tumbleweed/home:wslutilities.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="suse-linux-enperprise-server" tabindex="-1"><a class="header-anchor" href="#suse-linux-enperprise-server" aria-hidden="true">#</a> SUSE Linux Enperprise Server</h3><p>你可以用以下命令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SLESCUR_VERSION=&quot;$(grep VERSION= /etc/os-release | sed -e s/VERSION=//g -e s/\\&quot;//g -e s/-/_/g)&quot;
sudo zypper addrepo https://download.opensuse.org/repositories/home:/wslutilities/SLE_$SLESCUR_VERSION/home:wslutilities.repo
sudo zypper addrepo https://download.opensuse.org/repositories/graphics/SLE_12_SP3_Backports/graphics.repo
sudo zypper up
sudo zypper in wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void-linux" tabindex="-1"><a class="header-anchor" href="#void-linux" aria-hidden="true">#</a> Void Linux</h3><p>你可以用以下命令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo xbps-install wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="clear-linux" tabindex="-1"><a class="header-anchor" href="#clear-linux" aria-hidden="true">#</a> Clear Linux</h3><p>你可以用以下命令安装 <code>wslu</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo swupd 3rd-party add wslutilities https://pkg.wslutiliti.es/clearlinux
sudo swupd 3rd-party bundle-add wslu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他发行版" tabindex="-1"><a class="header-anchor" href="#其他发行版" aria-hidden="true">#</a> 其他发行版</h3>`,19),x=e("p",null,[e("strong",null,"⚠ 不建议")],-1),w=e("code",null,"curl | bash",-1),_={href:"https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,[s("在你想要安装的发行版下运行以下命令："),e("code",null,"curl -sL https://raw.githubusercontent.com/wslutilities/wslu/master/extras/scripts/wslu-install | bash")],-1),y=e("h3",{id:"针对更旧的版本-只限英文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#针对更旧的版本-只限英文","aria-hidden":"true"},"#"),s(" 针对更旧的版本 （只限英文）")],-1),S=e("h4",{id:"install-from-wsl-translinux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-from-wsl-translinux","aria-hidden":"true"},"#"),s(" Install from "),e("code",null,"wsl-translinux")],-1),k=e("code",null,"wslu",-1),E={href:"https://github.com/cerebrate/wsl-translinux",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/cerebrate/wsl-translinux/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"sudo apt install wslu",-1),R=e("code",null,"wslu",-1),I=n(`<p>However, with lack of support, I moved my packages to my own apt repository.</p><h4 id="install-version-1-2" tabindex="-1"><a class="header-anchor" href="#install-version-1-2" aria-hidden="true">#</a> Install version 1.2</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --branch v1.2 https://github.com/patrick330602/wslu.git ~/.wslu
cd ~/.wslu
./configure -i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="install-version-1-1-1-0" tabindex="-1"><a class="header-anchor" href="#install-version-1-1-1-0" aria-hidden="true">#</a> Install version 1.1/1.0</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone --branch v1.1 https://github.com/patrick330602/wslu.git
#for 1.0: change 1.1 to 1.0
cd wslu
sudo make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To uninstall, <code>run sudo make uninstall</code></p><h4 id="install-pre-releases" tabindex="-1"><a class="header-anchor" href="#install-pre-releases" aria-hidden="true">#</a> Install pre-releases</h4><p>directly run <code>wslu-dev</code> after cloning.</p>`,8);function q(N,V){const i=l("ExternalLinkIcon");return t(),r("div",null,[o,e("div",c,[p,e("p",null,[s("Ubuntu 版本需要在"),e("a",h,[s("此"),a(i)]),s("进行反馈。")])]),v,e("p",null,[s("请从以下 PPA 安装最新版 "),m,s("： "),e("a",g,[s("https://launchpad.net/~wslutilities/+archive/ubuntu/wslu"),a(i)])]),b,e("blockquote",null,[x,e("p",null,[w,s(" 这种方法并不安全。 "),e("a",_,[s("相关文章"),a(i)])])]),f,y,S,e("p",null,[k,s(" is part of "),e("a",E,[s("wsl-translinux"),a(i)]),s(" apt repository.")]),e("p",null,[s("Following the guidelines "),e("a",L,[s("Here"),a(i)]),s(" to add the repository. Then you can simply run "),O,s(" to install "),R,s(".")]),I])}const z=d(u,[["render",q],["__file","install.html.vue"]]);export{z as default};