# v3-svg

## 对本地的 SVG 图片的显示

项目自定义 svg 文件放入 src/assets/icons<br />
组件直接使用文件名称<br />
name：文件名<br />
iconStyle：自定义样式(width、color 等)<br />
代码如下：

```vue
<v3-svg name="data" :icon-style="iconStyle" />
```
