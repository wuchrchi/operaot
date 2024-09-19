<template>
  <div class="tvWall">
    <h3 class="tvTitle">警報&預警</h3>
    <!-- 這是只顯示一次的 alertHeader -->
    <div class="alertBox">
      <div class="alertHeader">
        <span class="alertTitle">發生日期</span>
        <span class="alertTitle">告警狀態</span>
        <span class="alertTitle">查看詳細</span>
      </div>
      <section class="scrollableContent">
        <md-list class="alertList">
          <md-list-item v-for="(alert, index) in alerts" :key="index" class="alertItem">
            <div class="alertContent">
              <span class="alertDate">{{ alert.date }}</span>
              <span class="alertStatus">{{ alert.statusText }}</span>
              <div class="alertStatus">
                <md-filled-button href="#" class="basicBtn details" @click="viewDetails(alert)">
                  <span class="material-symbols-outlined">search</span>
                  查看詳情
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
@import url(../css/tvcomponents.css);
@import url(../css/alarmreport.css);
</style>