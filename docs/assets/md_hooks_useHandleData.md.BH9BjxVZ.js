import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.DzywJFVC.js";const g=JSON.parse('{"title":"useHandleData","description":"","frontmatter":{},"headers":[],"relativePath":"md/hooks/useHandleData.md","filePath":"md/hooks/useHandleData.md"}'),n={name:"md/hooks/useHandleData.md"},t=e(`<h1 id="usehandledata" tabindex="-1">useHandleData <a class="header-anchor" href="#usehandledata" aria-label="Permalink to &quot;useHandleData&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">简介</p><p>对 Element Plus 中 ElMessageBox 组件的 hooks 封装，常用于操作单条数据信息 (二次确认【<code>删除</code>、<code>禁用</code>、<code>启用</code>、<code>重置密码</code>】),返回 Promise 对象； 无需 import 可直接使用</p></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><p><code>useHandleData(handleApi, params, message, confirmType, successMsg)</code><br> 第一个参数<code>{function}</code>[<em>handleApi</em>]：操作数据接口的 api 方法 (必传)<br> 第二个参数<code>{object}</code>[<em>params</em>]：携带的操作数据接口的参数<br> 第三个参数<code>{string}</code>[<em>message</em>]：提示信息 (必传)<br> 第四个参数<code>{string}</code>[<em>confirmType</em>]：icon 类型 (不必传,默认为 warning)<br> 第五个参数<code>{string}</code>[<em>successMsg</em>]：返回成功提示信息 (不必传,默认为操作成功)<br><code>return {Promise}</code></p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleDel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ids</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //删除接口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> delApi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api_account.deleteAccount;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 二次确认是否删除</span></span>
<span class="line highlighted"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  useHandleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(delApi, ids, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;确定删除此条数据吗？&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 删除成功后刷新列表数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tableRoot.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">refresh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6),l=[t];function h(p,d,o,k,c,r){return i(),a("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};
