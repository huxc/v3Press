# v3-snippets

v3-snippets 是一个适配 Vue3 模版、路由、Api 和 ES6 常用函数的 vscode 插件

## 安装

为了安装扩展，需要启动命令(Ctrl + Shift + P 或 Cmd + Shift + P)并键入 Extensions。您可以选择显示已经安装的代码段或安装新的代码段。搜索 *v3-snippets*并安装。

## 支持的语言(file extensions)

- JavaScript (.js)
- Vue (.vue)

## 代码片段

下面是所有可用代码段的列表以及每个代码段的关键词。 **⇥**表示“TAB”键。

### vue3

**注意** :此代码段不适用于 vue2

|   关键词    |                                                                       代码片段                                                                        |
| :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
|  v3setup→   | `<template><div></div></template><script setup>const props = defineProps({});const emits = defineEmits();</script><style scoped lang="scss"></style>` |
| v3options→  |                               `<template><div></div></template><script>...</script><style lang="scss" scoped></style>`                                |
|   v3ref→    |                                                                `const ref = ref(xxx);`                                                                |
|  v3props→   |                                                     `const props = defineProps({ foo: String })`                                                      |
|  v3emits→   |                                                      `const emit = defineEmits(['...', '...'])`                                                       |
|  v3proxy→   |                                                       `const { proxy } = getCurrentInstance()`                                                        |
|  v3watch→   |                                               `watch(xx, (newValue, oldValue) => {}, { deep: true });`                                                |
| v3computed→ |                                                            `const $1 = computed(() => {})`                                                            |
| v3nextTick→ |                                                                 `nextTick(() => {})`                                                                  |
| v3Mounted→  |                                                                 `onMounted(() => {})`                                                                 |
| v3Updated→  |                                                                 `onUpdated(() => {})`                                                                 |
| v3Updated→  |                                                                 `onUpdated(() => {})`                                                                 |

### vue-template

|      关键词       |              代码片段               |
| :---------------: | :---------------------------------: |
|      vText→       |           `v-text="..."`            |
|      vHtml→       |           `v-html="..."`            |
|      vShow→       |           `v-show="..."`            |
|       vIf→        |            `v-if="..."`             |
|      velse→       |              `v-else`               |
|     velseif→      |          `v-else-if="..."`          |
|       vFor→       |   `v-for="... in ..." :key="..."`   |
| vFor(withoutKey)→ |        `v-for="... in ..."`         |
|       vOn→        |            `v-on="..."`             |
|      vBind→       |           `v-bind="..."`            |
|      vModel→      |           `v-model="..."`           |
|      vSlot→       |           `v-slot="..."`            |
|      vOnce→       |              `v-once`               |
|   iscomponent→    | `<component :is="..."></component>` |

### vue-router

|      关键词       |                              代码片段                               |
| :---------------: | :-----------------------------------------------------------------: |
|      vroute→      |   `{'path':...,name:...,component: () => import('...')},mate:...`   |
|       vrte→       |  `import { useRoute } from 'vue-router' const route = useRoute()`   |
|      vrter→       | `import { useRouter } from 'vue-router' const router = useRouter()` |
|      vrtes→       |                           = vrte + vrter                            |
|    beforeeach→    |            `router.beforeEach((to, from, next) =>{...}`             |
|  beforeresolve→   |          `router.beforeResolve((to, from, next) => {...}`           |
|    afterEach→     |               `router.afterEach((to, from) => {...}`                |
|   beforeenter→    |                 `beforeEnter(to, from, next) {...}`                 |
| beforeRouteEnter→ |              `beforeRouteEnter(to, from, next) {...}`               |
| beforeRouteLeave→ |              `beforeRouteLeave(to, from, next) {...}`               |

### Import and export

| 关键词 | 代码片段                                                        |
| -----: | --------------------------------------------------------------- |
|   imp→ | `import fs from 'fs';`                                          |
|   imn→ | `import 'animate.css'`                                          |
|   imd→ | `import {rename} from 'fs';`                                    |
|   ime→ | `import * as localAlias from 'fs';`                             |
|   ima→ | `import { rename  as localRename } from 'fs';`                  |
|   env→ | `export const nameVariable = localVariable;`                    |
|   enf→ | `export const log = (parameter) => { console.log(parameter);};` |

### Various methods

| 关键词 | 代码片段                                       |
| -----: | ---------------------------------------------- |
|   fre→ | `array.forEach(currentItem => {})`             |
|   fof→ | `for(const item of object) {}`                 |
|   fin→ | `for(const item in object) {}`                 |
|  anfn→ | `(params) => {}`                               |
|   nfn→ | `const add = (params) => {}`                   |
|   dob→ | `const {rename} = fs`                          |
|   dar→ | `const [first, second] = [1,2]`                |
|   sti→ | `setInterval(() => {});`                       |
|   sto→ | `setTimeout(() => {});`                        |
|  prom→ | `return new Promise((resolve, reject) => {});` |
|  then→ | `.then(res => {})`                             |
| thene→ | `.then(res => {},err=>{})`                     |
| thenc→ | `.then(res => {}).catch((err) => {});`         |

### element plus

|        关键词 | 代码片段           |
| ------------: | ------------------ |
|     v3el-btn→ | `<el-button>`      |
| v3el-btntext→ | `<el-button text>` |
|   v3el-radio→ | `<el-radio>`       |
| v3el-checkbox | `<el-checkbox>`    |

### v3-admin-el

v3-admin-el 独有代码段

|            关键词 | 代码片段                        |
| ----------------: | ------------------------------- |
|         v3Dialog→ | 生成命令式弹窗 Dialog           |
|         v3Drawer→ | 生成命令式弹窗 Drawer           |
|     v3page-hooks→ | 快捷生成 usePage                |
|   v3search-hooks→ | 快捷生成 useSearch              |
|      v3date-json→ | 快捷生成表单时间选择框 json     |
|     v3input-json→ | 快捷生成表单输入框 json         |
|     v3radio-json→ | 快捷生成表单单选框 json         |
|    v3select-json→ | 快捷生成表单下拉选择框 json     |
| v3daterange-json→ | 快捷生成表单时间区间选择框 json |
