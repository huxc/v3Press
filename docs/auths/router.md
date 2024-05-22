# 路由配置

路由统一放到`src/routers/modules`文件夹下，配置格式如下：其中 `permissionCode` 为权限码；vscode 插件 v3-snippets 有提供快捷代码段; 关键字`vrouter`

```js
/**
 * @description 📚 路由参数配置简介
 * @param path ==> 路由菜单访问路径
 * @param name ==> 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识)
 * @param redirect ==> 路由重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 路由菜单元信息
 * @param meta.icon ==> 菜单对应的图标
 * @param meta.title ==> 路由标题
 * @param meta.permissionCode ==> 权限码
 * @param meta.keepAlive ==> 当前路由是否缓存
 * @param meta.sort ==> 路由排序（影响菜单的前后顺序）
 * @param meta.isHide ==> 是否在菜单中隐藏 (通常列表详情页需要隐藏 默认false)
 * */
export default {
  path: "/table",
  name: "table",
  component: markRaw(Layout),
  redirect: "/table/t2",
  meta: {
    title: "表格",
    sort: 0,
    icon: "data",
    permissionCode: "",
  },
  children: [
    {
      path: "/table/t1",
      name: "table-t1",
      component: () => import("@/views/table/t1/index.vue"),
      meta: {
        title: "列表",
        keepAlive: false,
        icon: "data",
        permissionCode: "",
      },
    },
  ],
};
```
