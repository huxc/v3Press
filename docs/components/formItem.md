# 表单组件

::: info 提示
默认组件支持所有 el-from 的表单组件，另可自行扩展 v3-form 支持的组件
:::

## 默认组件

el-form 的所有表单组件已支持
::: warning 对应关系如下
input -> el-input <br/>
select -> v3-select // 自定义组件<br/>
selectv2 -> el-select-v2 <br/>
date -> el-date-picker <br/>
radio -> v3-radio-group // 自定义组件 <br/>
checkbox -> el-checkbox <br/>
checkbox-group -> v3-checkbox-group // 自定义组件<br/>
cascader -> el-cascader <br/>
textarea -> el-input // 默认 type: 'textarea'<br/>
number -> el-input-number <br/>
uploadImg -> v3-upload-img // 自定义组件<br/>
uploadFile -> v3-upload-file //自定义尚未完善<br/>
:::
前面名称就是表单 json 数组中 tag 的属性值

```js
const formItems = [
  {
    tag: "select",
    attrs: {
      //支持表单组件的所有属性 此处支持v3-select以及el-selete的所有属性
    },
  },
  // 其余相同
];
```

## 可扩展组件

现有组件无法满足需求时，可自行扩展组件，组件放在 src/components/v3-form-item 下面。以 v3-select 自定义组件为例
::: info
`const value = defineModel()` 此 value 为表单值 与 form 表单的值进行绑定<br/>
subProps 中可设置 label 对应的字段，value 对应的字段，disabled 对应的字段
:::

```vue
// src/components/v3-form-item/v3-select
<template>
  <el-select v-bind="$attrs" v-model="value">
    <el-option
      v-for="option in $attrs.options"
      :key="`${option[subProps.value]}${option[subProps.label]}`"
      :label="option[subProps.label]"
      :value="option[subProps.value]"
      :disabled="option[subProps.disabled] || false"
    />
  </el-select>
</template>

<script setup name="v3-select">
defineProps({
  subProps: {
    type: Object,
    default: () => ({
      label: "label",
      value: "value",
      disabled: "",
    }),
  },
});

const value = defineModel();
</script>
```

编写好组件进行配置，让 v3-form 进行识别

```js
// src/components/v3-form-item/map-form-item.js

//获取组件
export function formItemComponents() {
  const components = {
    ...
    'v3-select': defineAsyncComponent(() => import('./v3-select.vue'))
  }
  return components
}

// 配置组件映射
const componentMap = {
  ...

  'select': {
    component: 'v3-select',
    attrs: {
      //此处可设置默认属性
      placeholder: '请选择',
      clearable: true,
      filterable: true
    }
  }
}
```
