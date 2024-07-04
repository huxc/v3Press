# 权限接口

登录成功后调用权限接口，建议服务端接口应返回所有权限码，返回值最好可区分按钮权限和菜单权限，如：

```json
{
  "code": 200,
  "msg": "成功",
  "data": [
    {
      "id": 1,
      "permissionName": "", //权限名称
      "permissionType": 1, // 权限类型1菜单2按钮
      "permissionCode": "USER_MANAGEMENT_1" // 权限码
    }
  ],
  "success": true
}
```

## 处理请求权限码接口

接口处理放在`src/store/modules/user.js`的`generateRoutes`函数中，此函数中的代码需要根据实际业务接口返回值进行相应调整

```js
/**
 *获取权限code 过滤动态路由
 */
const generateRoutes = () => {
  return new Promise((resolve, reject) => {
    // 如果是管理员应用所有权限
    if (state.username === "admin") {
      asyncRoutes.value = dynamicRouter;
      resolve(asyncRoutes.value);
    } else {
      api_account_getAuths({ ruleId: state.ruleId }).then(
        (res) => {
          // 根据接口 获取所有按钮权限 和 页面权限
          const { btnAuths, pageAuths } = splitPageAndBtn(res.data);
          authCodes.value = btnAuths;
          // 根据页面权限code 动态获取过滤路由集合
          asyncRoutes.value = filterAsyncRoutes(dynamicRouter, pageAuths);
          resolve(asyncRoutes.value);
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};
```
