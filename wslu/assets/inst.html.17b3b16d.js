import{e}from"./app.06da043a.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=e(`<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><blockquote><p>CAUTION: please remove the old packages if you have installed, they will damage your manpage folder!</p></blockquote><p>To install, just run the following command in the bash prompt:</p><p><code>curl -o- https://raw.githubusercontent.com/patrick330602/wslu/master/install.sh | bash</code></p><p>This will install to the folder <code>.wslu</code> under your home.</p><p>To install manually, run the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/patrick330602/wslu.git
<span class="token comment"># or git clone https://github.com/patrick330602/wslu.git &lt;destination&gt; for your preferred destination</span>
<span class="token builtin class-name">cd</span> /path/to/wslu/folder
./configure -i
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="remove-reinstall" tabindex="-1"><a class="header-anchor" href="#remove-reinstall" aria-hidden="true">#</a> Remove &amp; Reinstall</h2><ul><li>run <code>wsluconfig -u</code> will remove the link from the system but not the source folder. You can install it again by entering <code>wsluconfig -i</code>;</li><li>run <code>wsluconfig -p</code> will remove everything installed;</li><li>if there is something run, run <code>wsluconfig -r</code> to reinstall.</li></ul>`,9);function l(t,o){return s}var c=n(a,[["render",l]]);export{c as default};
