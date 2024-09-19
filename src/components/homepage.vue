<template>
  <div class="light homeBody">
    <navBar />
    <section class="main">
      <appDrawer />
      <div class="mainContent">
        <section class="rightContent">
          <tvComponents />
          <powerMeter />
          <alarmReport />
        </section>
        <section class="leftContent">
          <mapcomponents />
          <controlPanel /> 
          <chartGroup/>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import navBar from './navbar.vue';
import appDrawer from './appdrawer.vue';
import tvComponents from './tvcomponents.vue';
import powerMeter from './powermeter.vue';
import alarmReport from './alarmreport.vue';
import mapcomponents from './mapcomponents.vue';
import controlPanel from './controlpanel.vue';
import chartGroup from './chartgroup.vue';

export default {
  name: 'HomePage',
  components: {
    navBar,
    appDrawer,
    tvComponents,
    powerMeter,
    alarmReport,
    mapcomponents,
    controlPanel,
    chartGroup
  },

};
</script>

<style >
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/homepage.css);
</style>
