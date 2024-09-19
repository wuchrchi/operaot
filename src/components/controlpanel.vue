<template>
    <div class="mointerWall">
        <h3 class="tvTitle">監視</h3>
        <div class="mointerGp">
            <div class="firstLinegp">
                <div v-for="(alert, index) in firstLineAlerts" :key="index" class="mointer">
                    <span class="mointerTitle">
                        {{ alert.info }}
                    </span>
                    <!-- 為每個圖表分配唯一的 ref -->
                    <div :ref="'chartFirst-' + index" style="width: 100%; height: 100%;"></div>
                </div>
            </div>
            <div class="secLinegp">
                <div v-for="(alert, index) in secondLineAlerts" :key="index" class="mointer mointersec">
                    <span class="mointerTitle">
                        {{ alert.info }}
                    </span>
                    <!-- 為每個圖表分配唯一的 ref -->
                    <div :ref="'chartSecond-' + index" style="width: 100%; height: 100%;"></div>
                    <md-filled-button href="#" class="basicBtn " @click="viewDetails(alert)">
                        <span class="material-symbols-outlined">touch_app</span>
                        執行
                    </md-filled-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'controlPanel',
    data() {
        return {
            // 第一行數據
            firstLineAlerts: [
                { info: '監控1', value: 130 },
                { info: '監控2', value: 90 },
                { info: '監控3', value: 75 },
                { info: '監控4', value: 75 },
                { info: '監控5', value: 75 }
            ],
            // 第二行數據
            secondLineAlerts: [
                { info: '監控6', value: 130 },
                { info: '監控7', value: 90 },
                { info: '監控8', value: 75 },
                { info: '監控9', value: 75 },
                { info: '監控10', value: 75 }
            ]
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.firstLineAlerts.forEach((_, index) => {
                this.initChart(index, 'chartFirst-');
            });
            this.secondLineAlerts.forEach((_, index) => {
                this.initChart(index, 'chartSecond-');
            });
        });
    },
    methods: {
        initChart(index, chartPrefix) {
            const chartElement = this.$refs[`${chartPrefix}${index}`][0]; // 根據動態 ref 獲取 DOM 元素
            const alertValue = chartPrefix === 'chartFirst-' ? this.firstLineAlerts[index].value : this.secondLineAlerts[index].value;

            const option = {
                series: [
                    {
                        type: 'gauge',
                        pointer: {
                            show: false,
                        },
                        axisLine: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        detail: {
                            backgroundColor: '#fff',
                            borderColor: '#999',
                            borderWidth: 2,
                            lineHeight: 40,
                            height: 40,
                            borderRadius: 8,
                            offsetCenter: [0, 0],
                            formatter: '{value} hrs',
                            rich: {
                                value: {
                                    fontSize: 50,
                                    fontWeight: 'bolder',
                                    color: '#777',
                                },
                            },
                        },
                        data: [{ value: alertValue }],
                    },
                ],
            };

            const chart = echarts.init(chartElement);
            chart.setOption(option);
        },
        viewDetails(alert) {
            console.log("查看詳情: ", alert);
            // 添加查看詳情邏輯
        },
    },
};
</script>

<style >
@import url(../css/m3color.css);
@import url(../css/controlpanel.css);
</style>
