<template>
  <div class="alarmWall">
    <h3 class="alarmTitle">警報&預警</h3>
    <!-- 這是只顯示一次的 alertHeader -->
    <div class="alertBox">
      <div class="alertHeader">
        <h4 class="alertTitle">發生日期</h4>
        <h4 class="alertTitle">告警狀態</h4>
        <h4 class="alertTitle">查看詳細</h4>
      </div>
      <section class="scrollableContent alarm">
        <md-list class="alertList">
          <md-list-item v-for="(alert, index) in alerts" :key="index" class="alertItem">
            <div class="alertContent">
              <span class="alertDate">{{ alert.date }}</span>
              <span class="alertStatus">{{ alert.statusText }}</span>
              <div class="alertStatus">
                <md-filled-button href="#" class="basicBtn details" @click="viewDetails(alert)">
                  <span class="material-symbols-outlined">search</span>
                  查看
                </md-filled-button>
              </div>
            </div>
          </md-list-item>
        </md-list>
      </section>
    </div>
  </div>
</template>


<script>
export default {
  name: 'alarmReport',
  data() {
    return {
      alerts: [
        {
          date: '2024-09-11 14:30',
          statusText: '告警'
        },
        {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }, {
          date: '2024-09-10 09:15',
          statusText: '預警'
        }
      ]
    };
  },
  methods: {
    viewDetails(alert) {
      console.log('查看告警詳情:', alert);
    }
  }
};
</script>
<style >
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/alarmreport.css);
</style>