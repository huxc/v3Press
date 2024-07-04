# useEcharts

::: info 简介

使用 Echarts (只是为了添加图表响应式)，无需 import 可直接使用

:::

## 参数

myChart：Echarts 实例 (必传)<br/>
options：绘制 Echarts 的参数 (必传)

```js
import * as echarts from "echarts";

export function usePieChart(phase) {
  const pieRef = ref(null);
  const seriesDatas = ref([]);
  function initOption(legendData, seriesData) {
    return {
      series: [
        {
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
            },
          },
          data: seriesData,
        },
      ],
    };
  }

  // 饼图初始化
  function initPieCharts(result) {
    let legendData = ["A", "B", "C", "D", "E", "F", "G"];
    let seriesData = [
      { name: "A", value: 20 },
      { name: "B", value: 30 },
      { name: "C", value: 40 },
      { name: "D", value: 50 },
      { name: "E", value: 60 },
      { name: "F", value: 70 },
      { name: "G", value: 80 },
    ];
    const options = initOption(legendData, seriesData);
    const chart = echarts.init(pieRef.value);
    useEcharts(chart, options);
  }

  return { initPieCharts, pieRef };
}
```
