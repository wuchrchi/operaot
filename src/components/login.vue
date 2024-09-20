<template>
  <div class="light body">
    <header class="title">
      <div class="logo">
            <img src="../../public/assets/logo.png" alt="Dash Board Demo" class="titleIcon" />
      </div>
      <h1 class="titleText">Dash Board</h1>
    </header>
    <section class="rowSection">
      <transition name="smart-animate" mode="out-in">
        <div class="outlineBox" v-if="isLoginVisible" key="login">
          <div class="login">
            <form @submit.prevent="login">
              <md-outlined-text-field type="account" name="account" label="帳號" id="account" class="input"
                v-model="account"></md-outlined-text-field>
              <md-outlined-text-field type="account" name="Password" label="密碼" id="Password" class="input"
                v-model="account"></md-outlined-text-field>
              <div class="btnGroup">


                <md-filled-button href="#" class="basicBtn" @click.prevent="login">
                  <span class="material-symbols-outlined"> login</span>
                  <label for="">登入</label>
                </md-filled-button>
                <md-text-button href="#" class="basicBtn forgotPsd"
                  @click.prevent="showForgotPassword">忘記帳號與密碼</md-text-button>
              </div>
            </form>
          </div>
        </div>
        <!-- 選擇頻道 -->
        <div id="selectChannel" v-else-if="!isLoginVisible && !isForgotPasswordVisible" key="selectChannel"
          class="outlineBox">
          <div class="login">
            <h2>選擇平台</h2>
            <div class="backButtonGroup">

              <md-icon-button href="#" @click.prevent="showLogoutConfirmation">
                <span class="material-symbols-outlined"> arrow_back</span>

              </md-icon-button>
            </div>
            <div class="selectPermissions">
              <md-filled-button class="basicBtn">Admin</md-filled-button>
              <md-filled-button class="basicBtn" @click="navigateTo('/HomePage')">operator</md-filled-button>
              <md-filled-button class="basicBtn" to="homepage">Universal</md-filled-button>
            </div>
          </div>
        </div>
        <!-- 忘記密碼 -->
        <div id="forgotpsd" v-else key="forgotpsd" class="outlineBox">
          <div class="login ">
            <h2>忘記帳號與密碼</h2>
            <div class="backButtonGroup">
              <md-icon-button href="#" @click.prevent="showLogin">
                <span class="material-symbols-outlined"> arrow_back</span>
              </md-icon-button>
            </div>
            <form @submit.prevent="submitForgotPassword" class="forgot">
              <md-outlined-text-field type="text" name="email" label="請輸入信箱" id="email" class="input"
                v-model="email"></md-outlined-text-field>
              <md-filled-button href="#" class="basicBtn" @click.prevent="submitForgotPassword">
                <label class="centertext"> 提交</label>
              </md-filled-button>

            </form>
          </div>
        </div>
      </transition>
    </section>
    <footer>
      <p>夾子練習用©2024</p>
    </footer>
    <!-- 登出提示框 -->
    <div v-if="showConfirmation" class="confirmationModal">
      <div class="confirmationContent">
        <p>確定登出?</p>
        <div class="confirmationButtons">

          <md-filled-button class="basicBtn cancel" @click.prevent="hideLogoutConfirmation">
            <span class="material-symbols-outlined"> cancel</span>
            <label class="centertext"> 取消</label>
          </md-filled-button>
          <md-filled-button class="basicBtn send " @click="logout">
            <span class="material-symbols-outlined"> logout</span>

            <label class="centertext "> 登出</label>
          </md-filled-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      account: '',
      password: '',
      email: '',
      isLoginVisible: true,
      isForgotPasswordVisible: false,
      showConfirmation: false,
    };
  },
  methods: {
    login() {
      // 在這裡可以添加驗證邏輯
      this.isLoginVisible = false;
    },
    showForgotPassword() {
      this.isLoginVisible = false;
      this.isForgotPasswordVisible = true;
    },
    showLogin() {
      this.isLoginVisible = true;
      this.isForgotPasswordVisible = false;
      this.$router.push('/');
    },
    submitForgotPassword() {
      // 在這裡可以添加提交忘記密碼的邏輯
      console.log('提交忘記密碼請求，電子郵件:', this.email);
      // 可以發送請求到後端處理
    },
    showLogoutConfirmation() {
      this.showConfirmation = true;
    },
    hideLogoutConfirmation() {
      this.showConfirmation = false;
    },
    logout() {
      this.hideLogoutConfirmation();
      this.showLogin();
    },
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>





<style >
@import '../css/container.css';
@import '../css/reset.css';
@import '../css/m3color.css';
@import '../css/login.css';
</style>
