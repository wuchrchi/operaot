<template>
     <nav>
      <div class="leadingIcon">
        <div >
          <img src="/public/assets/logo.svg" alt="logo" class="icon"/>
        </div>
        <p>您好，使用者</p>
      </div>
      <div class="toolBtns light-medium-contras">
        <md-filled-icon-button href="#" class="">
          <span class="material-symbols-outlined">apps</span>
        </md-filled-icon-button>
        <md-filled-icon-button href="#" class="">
          <span class="material-symbols-outlined">circle_notifications</span>
        </md-filled-icon-button>
        <md-filled-icon-button href="#" class="">
          <span class="material-symbols-outlined">person</span>
        </md-filled-icon-button>
      </div>
    </nav>

</template>

<script>

export default {
    name: 'navBar',
       data() {
        return {
        };
    },

};
</script>

<style>
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/nav.css);
</style>