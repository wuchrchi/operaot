<template>
    <div ref="chartContainer" style=" border-radius: 100px;
    border: none;
    width: 100%;
    height: 17vh;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'meterComponents',
    props: ['min', 'max', 'value'],
    mounted() {
        this.initChart();
        window.addEventListener('resize', this.resizeChart);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.resizeChart);
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$refs.chartContainer);
            this.setChartOptions();
        },
        setChartOptions() {
            const containerWidth = this.$refs.chartContainer.clientWidth;
            const containerHeight = this.$refs.chartContainer.clientHeight;

            // 依據容器大小自動調整字體大小
            const fontSize = Math.max(12, Math.min(containerWidth, containerHeight) / 20);

            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}V'
                },
                series: [
                    {
                        name: 'Temperature',
                        type: 'gauge',
                        min: this.min,
                        max: this.max,
                        radius: '100%',
                        center: ['50%', '55%'],
                        axisLine: {
                            lineStyle: {
                                width: 10,
                                color: [
                                    [0.7, '#FF8A75'],
                                    [0.8, '#B4F1BE'],
                                    [1, '#FF8A75']
                                ]
                            }
                        },
                        axisLabel:{
                            fontSize: fontSize,
                        },
                        axisTick: { show: false },
                        detail: {
                            formatter: '{value} V',
                            fontSize: fontSize, 
                            offsetCenter: [0, '60%'],
                            color: '#00210C'
                        },
                        data: [{ value: this.value, name: '' }],
                        splitLine: {
                            length: 10,
                            distance: -10,
                            lineStyle: {
                                width: 2,
                                color: '#fff'
                            }
                        },
                        pointer: {
                            width: 2,
                            itemStyle: {
                                color: '#00210C'
                            }
                        }
                    }
                ]
            };

            // 設置圖表選項
            this.chart.setOption(option);
        },
        resizeChart() {
            if (this.chart) {
                // 重新設置圖表選項並調整大小
                this.setChartOptions();
                this.chart.resize();
            }
        }
    }
};
</script>
<style></style>