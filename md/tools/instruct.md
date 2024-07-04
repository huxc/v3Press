# 指令

## 按钮权限控制

根据业务接口自行调整

```js
import appStore from "@/store/index.js";

const auth = {
  /**
   * v-auth
   * 按钮权限控制隐藏显示
   */
  mounted(el, binding) {
    const value = binding.value || "";
    const auths = appStore.userStore.authCodes || [];
    if (value !== "" && !auths.includes(value))
      el.parentNode && el.parentNode.removeChild(el);
  },
};
export default auth;
```

## 按钮防抖指令

```js
const debounce = {
  /**
   * v-debounce
   * 按钮防抖指令，可自行扩展至input
   * 接收参数：function类型
   */
  mounted(el, binding) {
    if (typeof binding.value !== "function") {
      // eslint-disable-next-line no-throw-literal
      throw "callback must be a function";
    }
    let timer = null;
    /**
     * 监听事件
     */
    el.__handleClick__ = function () {
      if (timer) clearInterval(timer);

      timer = setTimeout(() => {
        binding.value();
      }, 500);
    };
    el.addEventListener("click", el.__handleClick__);
  },
  /**
   * 取消监听
   */
  beforeUnmount(el) {
    el.removeEventListener("click", el.__handleClick__);
  },
};

export default debounce;
```

## 按钮节流指令

```js
const throttle = {
  /**
   * 需求：防止按钮在短时间内被多次点击，使用节流函数限制规定时间内只能点击一次。
   *思路：
   *  1、第一次点击，立即调用方法并禁用按钮，等延迟结束再次激活按钮
   *  2、将需要触发的方法绑定在指令上
   *使用：给 Dom 加上 v-throttle 及回调函数即可
   *<button v-throttle="debounceClick">节流提交</button>
   */
  mounted(el, binding) {
    if (typeof binding.value !== "function") {
      // eslint-disable-next-line no-throw-literal
      throw "callback must be a function";
    }
    let timer = null;
    /**
     * 监听事件
     */
    el.__handleClick__ = function () {
      if (timer) clearTimeout(timer);

      if (!el.disabled) {
        el.disabled = true;
        binding.value();
        timer = setTimeout(() => {
          el.disabled = false;
        }, 1000);
      }
    };
    el.addEventListener("click", el.__handleClick__);
  },
  /**
   * 取消监听
   */
  beforeUnmount(el) {
    el.removeEventListener("click", el.__handleClick__);
  },
};

export default throttle;
```
