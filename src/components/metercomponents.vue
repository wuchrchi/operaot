<template>
    <div ref="chartContainer" style="width: 100%; height: 15vh;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    name: 'metertComponents',
    props: ['min', 'max', 'value'],
    mounted() {
        this.initChart();
    },
    methods: {
        initChart() {
            const chart = echarts.init(this.$refs.chartContainer);
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
                        axisTick: { show: false },
                        detail: {
                            formatter: '{value} V',
                            fontSize: 16,
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
            chart.setOption(option);
        }
    }
};
</script>
