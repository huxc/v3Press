import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DzywJFVC.js";const g=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"md/start/introduce.md","filePath":"md/start/introduce.md"}'),l={name:"md/start/introduce.md"},p=n(`<h1 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h1><p><code>v3-admin-el</code> 一款基于 <code>Vue3.4</code> + <code>Vite5</code> + <code>Pinia</code> + <code>Element-Plus</code> 后台管理框架模版，使用目前(2024)最新技术栈开发。对表格、表单进行了可配置(json)封装，同时加入常用全局 <code>hooks</code>,如：<code>命令式弹窗</code>、<code>命令式抽屉</code>、<code>列表分页查询</code>等。大幅提升后台管理系统的效率和质量。<br><br>项目内置了一些常用工具如：<code>常用函数</code>、 <code>指令</code>、<code>权限控制</code>、<code>自动格式化</code>、<code>layout布局</code>、<code>请求封装</code>、<code>请求拦截</code>、<code>登录拦截</code>、<code>统一配置</code>、<code>自动化部署</code>等；<br><br><code>v3-cli</code>是为<code>v3-admin-el</code>量身定制的脚手架工具，包含：<code>创建/初始化项目</code>、<code>根据swagger生成接口</code>、<code>根据路由生成Page</code>;<br><br><code>v3-snippets</code> 是<code>vscode</code>插件，除了常用代码段之外还有<code>v3-admin-el</code>特有代码段。</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─.husky   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Git hooks工具，通过通过钩子控制代码质量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─.vscode  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vscode的常规配置、插件推荐</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├─public   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 静态根目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└─src      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 工作目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─api  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 统一请求库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─config  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 域名配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─helper  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// axios封装</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─modules </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 请求接口文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─assets  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 静态文件夹</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─icons  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// svg存放的目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─images  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 图片存放目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─components  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 公共全局组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">collapse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transition  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 折叠组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dialog  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 命令式弹窗组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">form    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可配置式表单组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">form</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">item  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可配置表单子组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">search  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查询组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">svg     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可显示本地svg组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─v3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">table   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可配置表格组件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      ├─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      └─hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─config      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局配置文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─directives  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局指令</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─modules</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─enums  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 枚举类文件集合，列入下拉列表的默认值都放在这里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─hooks  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─layouts  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 主页面布局</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      ├─Header</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      │  └─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      ├─Main</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      │  └─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      ├─Menu</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │      └─Tabs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │          └─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─routers  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 路由配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  ├─helper </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//静态、动态路由读取工具</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─modules </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 路由子文件放这</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─store  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局状态管理pinia</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─modules </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 多种类状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─styles  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    │  └─element</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ├─utils  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 工具集（尽量存放纯函数）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    └─views  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开发的所有页面放这</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ├─error </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 错误页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ├─home  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 首页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ├─login </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 登录页</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  └─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │      └─hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ├─menu  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 测试菜单页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  ├─menu1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  ├─menu2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  │  ├─menu21</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  │  ├─menu22</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  │  │  ├─menu221</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  │  │  └─menu222</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  │  └─menu23</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        │  └─menu3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ├─redirect </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 跳转专用页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        └─table </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 表格页面 仅供参考</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ├─components</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            │  └─form</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            │      └─hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ├─hooks</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ├─t1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ├─t2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ├─t3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            └─t4</span></span></code></pre></div>`,4),h=[p];function k(e,t,E,d,r,c){return a(),i("div",null,h)}const y=s(l,[["render",k]]);export{g as __pageData,y as default};
