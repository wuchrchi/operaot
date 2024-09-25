<template>
    <div class="meterWall">
        <section class="meterGroup">
            <div v-for="(config, index) in chartConfigs" :key="index" class="powerMeter">
                <h3 class="mHTitle">{{ config.title }}</h3>
                <div class="mBox">
                    <h4 class="mTitle">{{ config.subtitle }}</h4>
                    <div class="blurContainer" style="backdrop-filter: blur(10px);">
                        <meterComponents :min="config.min" :max="config.max" :value="config.value" />
                    </div>
                </div>
            </div>
     
        </section>
       
    </div>
</template>


<script>
import meterComponents from './metercomponents.vue';

export default {
    name: 'powerMeter',
    components: { meterComponents },
    data() {
        return {
            chartConfigs: [
                { title: '電壓錶', subtitle: '電錶 1', min: 0, max: 400, value: 100 },
                { title: '電壓錶', subtitle: '電錶 2', min: 0, max: 400, value: 250 },
                { title: '電壓錶', subtitle: '電錶 3', min: 0, max: 400, value: 250 },
                { title: '電壓錶', subtitle: '電錶 4', min: 0, max: 400, value: 250 },
            ]
        };
    },
    mounted() {
        this.scrollToFirstMeter();
    },
    methods: {
        scrollToFirstMeter() {
            // 尋找第一個 .powerMeter 並滾動到該元素
            const firstMeter = this.$el.querySelector('.powerMeter');
            if (firstMeter) {
                firstMeter.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
};

</script>

<style>
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/powermeter.css);


</style>