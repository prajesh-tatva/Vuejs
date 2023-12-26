<script setup>
import { ref } from 'vue'
// components
import FloatLabelTextbox from '@/components/FloatLabelTextbox.vue';

// images
import IcShow from '@/assets/images/ic-show.svg';
import IcHide from '@/assets/images/ic-hide.svg';

// show and hide password
const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

</script>

<template>
  <el-row class="login-wrapper">
    <el-col :span="12" class="_left">
      <el-carousel class="el" trigger="click">
        <el-carousel-item v-for="item in 3" :key="item">
          <em><img src="@/assets/images/login-thumb.png" alt="thumb" /></em>
        </el-carousel-item>
      </el-carousel>
      <h2>Selling only the best things <span>online</span></h2>
      <p>If you don't believe in what you're selling, neither will your prospect</p>
    </el-col>
    <el-col :span="12" class="_right">
      <div class="_form">
        <em class="logo"><img src="@/assets/images/login-logo.svg" alt="logo" /></em>
        <h3>Welcome to Hexadash!</h3>
        <p class="sm">Please sign in to your account</p>
        <FloatLabelTextbox text="Email" />
        <FloatLabelTextbox text="Password" :type="showPassword ? 'text' : 'password'" append="true"
          :iconbtn="showPassword ? IcShow : IcHide" @togglePasswordVisibility="togglePasswordVisibility" />
        <div class="link-block">
          <el-checkbox label="Remember me" />
          <a href="#" title="Forgot Password">Forgot Password?</a>
        </div>
        <el-button type="primary" @click="$router.push('/home')" class="sign-btn">Sign In</el-button>
        <p>Don’t have an account? <a href="#" title="Sign Up">Sign Up</a></p>
      </div>
    </el-col>
  </el-row>
</template>
