import{_ as t,c as e,o as d,a4 as r}from"./chunks/framework.DzywJFVC.js";const u=JSON.parse('{"title":"v3-snippets","description":"","frontmatter":{},"headers":[],"relativePath":"md/tools/v3-snippets.md","filePath":"md/tools/v3-snippets.md"}'),o={name:"md/tools/v3-snippets.md"},l=r('<h1 id="v3-snippets" tabindex="-1">v3-snippets <a class="header-anchor" href="#v3-snippets" aria-label="Permalink to &quot;v3-snippets&quot;">​</a></h1><p>v3-snippets 是一个适配 Vue3 模版、路由、Api 和 ES6 常用函数的 vscode 插件</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>为了安装扩展，需要启动命令(Ctrl + Shift + P 或 Cmd + Shift + P)并键入 Extensions。您可以选择显示已经安装的代码段或安装新的代码段。搜索 <em>v3-snippets</em>并安装。</p><h2 id="支持的语言-file-extensions" tabindex="-1">支持的语言(file extensions) <a class="header-anchor" href="#支持的语言-file-extensions" aria-label="Permalink to &quot;支持的语言(file extensions)&quot;">​</a></h2><ul><li>JavaScript (.js)</li><li>Vue (.vue)</li></ul><h2 id="代码片段" tabindex="-1">代码片段 <a class="header-anchor" href="#代码片段" aria-label="Permalink to &quot;代码片段&quot;">​</a></h2><p>下面是所有可用代码段的列表以及每个代码段的关键词。 **⇥**表示“TAB”键。</p><h3 id="vue3" tabindex="-1">vue3 <a class="header-anchor" href="#vue3" aria-label="Permalink to &quot;vue3&quot;">​</a></h3><p><strong>注意</strong> :此代码段不适用于 vue2</p><table><thead><tr><th style="text-align:center;">关键词</th><th style="text-align:center;">代码片段</th></tr></thead><tbody><tr><td style="text-align:center;">v3setup→</td><td style="text-align:center;"><code>&lt;template&gt;&lt;div&gt;&lt;/div&gt;&lt;/template&gt;&lt;script setup&gt;const props = defineProps({});const emits = defineEmits();&lt;/script&gt;&lt;style scoped lang=&quot;scss&quot;&gt;&lt;/style&gt;</code></td></tr><tr><td style="text-align:center;">v3options→</td><td style="text-align:center;"><code>&lt;template&gt;&lt;div&gt;&lt;/div&gt;&lt;/template&gt;&lt;script&gt;...&lt;/script&gt;&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</code></td></tr><tr><td style="text-align:center;">v3ref→</td><td style="text-align:center;"><code>const ref = ref(xxx);</code></td></tr><tr><td style="text-align:center;">v3props→</td><td style="text-align:center;"><code>const props = defineProps({ foo: String })</code></td></tr><tr><td style="text-align:center;">v3emits→</td><td style="text-align:center;"><code>const emit = defineEmits([&#39;...&#39;, &#39;...&#39;])</code></td></tr><tr><td style="text-align:center;">v3proxy→</td><td style="text-align:center;"><code>const { proxy } = getCurrentInstance()</code></td></tr><tr><td style="text-align:center;">v3watch→</td><td style="text-align:center;"><code>watch(xx, (newValue, oldValue) =&gt; {}, { deep: true });</code></td></tr><tr><td style="text-align:center;">v3computed→</td><td style="text-align:center;"><code>const $1 = computed(() =&gt; {})</code></td></tr><tr><td style="text-align:center;">v3nextTick→</td><td style="text-align:center;"><code>nextTick(() =&gt; {})</code></td></tr><tr><td style="text-align:center;">v3Mounted→</td><td style="text-align:center;"><code>onMounted(() =&gt; {})</code></td></tr><tr><td style="text-align:center;">v3Updated→</td><td style="text-align:center;"><code>onUpdated(() =&gt; {})</code></td></tr><tr><td style="text-align:center;">v3Updated→</td><td style="text-align:center;"><code>onUpdated(() =&gt; {})</code></td></tr></tbody></table><h3 id="vue-template" tabindex="-1">vue-template <a class="header-anchor" href="#vue-template" aria-label="Permalink to &quot;vue-template&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">关键词</th><th style="text-align:center;">代码片段</th></tr></thead><tbody><tr><td style="text-align:center;">vText→</td><td style="text-align:center;"><code>v-text=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vHtml→</td><td style="text-align:center;"><code>v-html=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vShow→</td><td style="text-align:center;"><code>v-show=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vIf→</td><td style="text-align:center;"><code>v-if=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">velse→</td><td style="text-align:center;"><code>v-else</code></td></tr><tr><td style="text-align:center;">velseif→</td><td style="text-align:center;"><code>v-else-if=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vFor→</td><td style="text-align:center;"><code>v-for=&quot;... in ...&quot; :key=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vFor(withoutKey)→</td><td style="text-align:center;"><code>v-for=&quot;... in ...&quot;</code></td></tr><tr><td style="text-align:center;">vOn→</td><td style="text-align:center;"><code>v-on=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vBind→</td><td style="text-align:center;"><code>v-bind=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vModel→</td><td style="text-align:center;"><code>v-model=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vSlot→</td><td style="text-align:center;"><code>v-slot=&quot;...&quot;</code></td></tr><tr><td style="text-align:center;">vOnce→</td><td style="text-align:center;"><code>v-once</code></td></tr><tr><td style="text-align:center;">iscomponent→</td><td style="text-align:center;"><code>&lt;component :is=&quot;...&quot;&gt;&lt;/component&gt;</code></td></tr></tbody></table><h3 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;vue-router&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">关键词</th><th style="text-align:center;">代码片段</th></tr></thead><tbody><tr><td style="text-align:center;">vroute→</td><td style="text-align:center;"><code>{&#39;path&#39;:...,name:...,component: () =&gt; import(&#39;...&#39;)},mate:...</code></td></tr><tr><td style="text-align:center;">vrte→</td><td style="text-align:center;"><code>import { useRoute } from &#39;vue-router&#39; const route = useRoute()</code></td></tr><tr><td style="text-align:center;">vrter→</td><td style="text-align:center;"><code>import { useRouter } from &#39;vue-router&#39; const router = useRouter()</code></td></tr><tr><td style="text-align:center;">vrtes→</td><td style="text-align:center;">= vrte + vrter</td></tr><tr><td style="text-align:center;">beforeeach→</td><td style="text-align:center;"><code>router.beforeEach((to, from, next) =&gt;{...}</code></td></tr><tr><td style="text-align:center;">beforeresolve→</td><td style="text-align:center;"><code>router.beforeResolve((to, from, next) =&gt; {...}</code></td></tr><tr><td style="text-align:center;">afterEach→</td><td style="text-align:center;"><code>router.afterEach((to, from) =&gt; {...}</code></td></tr><tr><td style="text-align:center;">beforeenter→</td><td style="text-align:center;"><code>beforeEnter(to, from, next) {...}</code></td></tr><tr><td style="text-align:center;">beforeRouteEnter→</td><td style="text-align:center;"><code>beforeRouteEnter(to, from, next) {...}</code></td></tr><tr><td style="text-align:center;">beforeRouteLeave→</td><td style="text-align:center;"><code>beforeRouteLeave(to, from, next) {...}</code></td></tr></tbody></table><h3 id="import-and-export" tabindex="-1">Import and export <a class="header-anchor" href="#import-and-export" aria-label="Permalink to &quot;Import and export&quot;">​</a></h3><table><thead><tr><th style="text-align:right;">关键词</th><th>代码片段</th></tr></thead><tbody><tr><td style="text-align:right;">imp→</td><td><code>import fs from &#39;fs&#39;;</code></td></tr><tr><td style="text-align:right;">imn→</td><td><code>import &#39;animate.css&#39;</code></td></tr><tr><td style="text-align:right;">imd→</td><td><code>import {rename} from &#39;fs&#39;;</code></td></tr><tr><td style="text-align:right;">ime→</td><td><code>import * as localAlias from &#39;fs&#39;;</code></td></tr><tr><td style="text-align:right;">ima→</td><td><code>import { rename as localRename } from &#39;fs&#39;;</code></td></tr><tr><td style="text-align:right;">env→</td><td><code>export const nameVariable = localVariable;</code></td></tr><tr><td style="text-align:right;">enf→</td><td><code>export const log = (parameter) =&gt; { console.log(parameter);};</code></td></tr></tbody></table><h3 id="various-methods" tabindex="-1">Various methods <a class="header-anchor" href="#various-methods" aria-label="Permalink to &quot;Various methods&quot;">​</a></h3><table><thead><tr><th style="text-align:right;">关键词</th><th>代码片段</th></tr></thead><tbody><tr><td style="text-align:right;">fre→</td><td><code>array.forEach(currentItem =&gt; {})</code></td></tr><tr><td style="text-align:right;">fof→</td><td><code>for(const item of object) {}</code></td></tr><tr><td style="text-align:right;">fin→</td><td><code>for(const item in object) {}</code></td></tr><tr><td style="text-align:right;">anfn→</td><td><code>(params) =&gt; {}</code></td></tr><tr><td style="text-align:right;">nfn→</td><td><code>const add = (params) =&gt; {}</code></td></tr><tr><td style="text-align:right;">dob→</td><td><code>const {rename} = fs</code></td></tr><tr><td style="text-align:right;">dar→</td><td><code>const [first, second] = [1,2]</code></td></tr><tr><td style="text-align:right;">sti→</td><td><code>setInterval(() =&gt; {});</code></td></tr><tr><td style="text-align:right;">sto→</td><td><code>setTimeout(() =&gt; {});</code></td></tr><tr><td style="text-align:right;">prom→</td><td><code>return new Promise((resolve, reject) =&gt; {});</code></td></tr><tr><td style="text-align:right;">then→</td><td><code>.then(res =&gt; {})</code></td></tr><tr><td style="text-align:right;">thene→</td><td><code>.then(res =&gt; {},err=&gt;{})</code></td></tr><tr><td style="text-align:right;">thenc→</td><td><code>.then(res =&gt; {}).catch((err) =&gt; {});</code></td></tr></tbody></table><h3 id="element-plus" tabindex="-1">element plus <a class="header-anchor" href="#element-plus" aria-label="Permalink to &quot;element plus&quot;">​</a></h3><table><thead><tr><th style="text-align:right;">关键词</th><th>代码片段</th></tr></thead><tbody><tr><td style="text-align:right;">v3el-btn→</td><td><code>&lt;el-button&gt;</code></td></tr><tr><td style="text-align:right;">v3el-btntext→</td><td><code>&lt;el-button text&gt;</code></td></tr><tr><td style="text-align:right;">v3el-radio→</td><td><code>&lt;el-radio&gt;</code></td></tr><tr><td style="text-align:right;">v3el-checkbox</td><td><code>&lt;el-checkbox&gt;</code></td></tr></tbody></table><h3 id="v3-admin-el" tabindex="-1">v3-admin-el <a class="header-anchor" href="#v3-admin-el" aria-label="Permalink to &quot;v3-admin-el&quot;">​</a></h3><p>v3-admin-el 独有代码段</p><table><thead><tr><th style="text-align:right;">关键词</th><th>代码片段</th></tr></thead><tbody><tr><td style="text-align:right;">v3Dialog→</td><td>生成命令式弹窗 Dialog</td></tr><tr><td style="text-align:right;">v3Drawer→</td><td>生成命令式弹窗 Drawer</td></tr><tr><td style="text-align:right;">v3page-hooks→</td><td>快捷生成 usePage</td></tr><tr><td style="text-align:right;">v3search-hooks→</td><td>快捷生成 useSearch</td></tr><tr><td style="text-align:right;">v3date-json→</td><td>快捷生成表单时间选择框 json</td></tr><tr><td style="text-align:right;">v3input-json→</td><td>快捷生成表单输入框 json</td></tr><tr><td style="text-align:right;">v3radio-json→</td><td>快捷生成表单单选框 json</td></tr><tr><td style="text-align:right;">v3select-json→</td><td>快捷生成表单下拉选择框 json</td></tr><tr><td style="text-align:right;">v3daterange-json→</td><td>快捷生成表单时间区间选择框 json</td></tr></tbody></table>',24),n=[l];function a(i,s,c,g,h,x){return d(),e("div",null,n)}const p=t(o,[["render",a]]);export{u as __pageData,p as default};