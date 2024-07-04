# 按钮权限

## 指令

每个页面的按钮权限可使用 v-auth 指令，根据权限码是否存在来设置按钮是否隐藏，如逻辑需要改动可更改 v-auth 指令

```js
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();

const auth = {
  /**
   * v-auth
   * 按钮权限控制隐藏显示
   */
  mounted(el, binding) {
    const value = binding.value || "";
    const auths = userStore.authCodes || [];
    if (value !== "" && !auths.includes(value))
      el.parentNode && el.parentNode.removeChild(el);
  },
};
export default auth;
```

## 使用

在使用中可直接给按钮添加指令传入对应的权限码。如：

```js
<el-button class="btn" v-auth="xxx_code" type="primary" @click="onxx()">
    新建
</el-button>
```

## 规范

在开发过程中，不管有没有权限需求，都应该把权限预置在项目中，将每个路由和页面的权限码，统一放在一个 js 文件中。权限码可设置为空字符串，待需要加入权限的时候只需修改这个 js 文件即可。不用每个页面去查找。便于维护，如：将所有权限码写入`enums/auth.js`中

```js
//enums/auth.js

// 所有路由的权限码
export const routeAuths = {
  // key最好是路由name
  table: "",
  // 其他路由
};

// A页面所有按钮权限码
export const APage = {
  creact: "A页面的新增权限码",
  update: "A页面的新增权限码",
  delete: "A页面的新增权限码",
  // 其他按钮
};

// B页面所有按钮权限码
export const BPage = {
  creact: "B页面的新增权限码",
  update: "B页面的新增权限码",
  delete: "B页面的新增权限码",
  // 其他按钮
};
```

在页面、路由中引入权限码，如：

```js
import Layout from "@/layouts/index.vue";
import { routeAuths } from "@/enums/auth.js";

export default {
  path: "/table",
  name: "table",
  ...
  meta: {
    ...
    permissionCode: routeAuths.table,
  },
};
```

```vue
<template>
  <el-button
    class="btn"
    v-auth="APage.creact"
    type="primary"
    @click="onDrawer()"
  >
    新建
  </el-button>
</template>

<script setup name="example-table">
import { APage } from "@/enums/auth.js";
</script>
```
