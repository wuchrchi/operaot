<template>
    <section class="meterGroup">
        <div v-for="(config, index) in chartConfigs" :key="index" class="powerMeter">
            <h3 class="mHTitle">{{ config.title }}</h3>
            <div class="mBox">
                <h4 class="mTitle">{{ config.subtitle }}</h4>
                <div class="blurContainer" style="backdrop-filter: blur(10px);">
                    <meterComponents :min="config.min" :max="config.max" :value="config.value" />
                </div>
            </div>
            <div class="dots">
                <span v-for="(section, index) in sections" :key="index" class="dot"
                    :class="{ active: currentIndex === index }" @click="currentIndex = index"></span>
            </div>
        </div>
        <div class="dots">
            <span class="['dot', { 'active': currentPage[index] === pageIndex - 1 }]">
            </span>
        </div>
    </section>
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
                { title: '電壓錶', subtitle: '電錶 2', min: 0, max: 500, value: 250 },
                { title: '電壓錶', subtitle: '電錶 3', min: 0, max: 100, value: 50 }
            ]
        };
    }
};
</script>

<style>
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/powermeter.css);
</style>