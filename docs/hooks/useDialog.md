# useDialog

::: info 命令式弹窗

以 js 的方式调用弹窗组件。无需 import 可直接使用。在一个页面有多个弹窗的情况下，减少了`el-dialog`的多个 `v-model` 的定义与维护

:::

## 参数

### 详细参数看下放代码注释

```js
useDialog({
    attrs = {}, // el-dialog组件参数
    props = {}, // el-dialog内部组件的prop参数
    footer = {}, // 底部取消/确认按钮 (若为空对象则不显示) 按钮文字：okText(默认‘确定’)，cancelText(默认‘取消’)
    componentEl, // el-dialog弹出的内容(组件形式且必填)
    beforeClose, // 弹框关闭之前的回调函数 done:为关闭弹框函数，param：为内部组件的回调参数
    afterClose // 窗口关闭之后的回调函数
  }
)
```

### 弹窗的底部按钮

::: danger 注意
如果传入 footer 参数，点击 okText(默认‘确定’)按钮时，需要与组件（componentEl）内部进行业务逻辑交互，则组件（componentEl）内部必须定义一个暴露(defineExpose)出来的函数，且名字必须是`expose_fn`
:::

```vue
<script setup>
const emit = defineEmits(["clsDwr", "clsDlg"]);

function expose_fn() {
  //此处是表单提交
  formRef.value.promiseSubmit().then(() => {
    emit("clsDwr", { a: 1, b: 2 });
    emit("clsDlg", { a: 1, b: 2 });
  });
}
defineExpose({
  expose_fn,
});
</script>
```

### beforeClose 函数

::: danger 注意
在定义了`beforeClose`参数后，组件(componentEl)内的 useDialog 的自定义关闭事件无法自动关闭,需要调用 beforeClose 函数的第一个参数(此参数为关闭函数)才可以关闭
:::

```vue
// 组件内（componentEl）
<script setup>
const emit = defineEmits(["clsDlg"]);

//在需要关闭的逻辑中调用
emit("clsDlg", { ...回传的参数 });
</script>
```

```js
useDialog({
  // param 为组件内回传的参数，如需要多个可以对象的方式回传
  beforeClose: (done, param) => {
    //此处操作业务逻辑
    ...
    // 完成业务逻辑后调用关闭函数
    done();
  },
});
```

## 使用

弹窗只是一个空白的弹框页面，里面的内容必须以**组件**的形式传入，使用如下：<br/>

```vue
<template>
  <div />
</template>

<script setup name="example-table">
import Form from "./components/form/index.vue";

function onDialog(rows) {
  useDialog({
    attrs: { title: "表单编辑" },
    footer: { okText: "提交" },
    props: { oldForm: rows },
    componentEl: Form,
    beforeClose: (done, param) => {
      ... // 其他业务逻辑
      done();
    },
    // param 为组件内回传的参数，如需要多个可以对象的方式回传
    afterClose: (param) => {
      // 刷新表格
      tableRef.value.refresh();
    },
  });
}
</script>
```
