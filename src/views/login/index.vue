<template>
  <div class="min-h-screen hero bg-primary login flex items-center justify-center">
    <div class="w-1/3 flex justify-center items-center login-content">
      <div class="text-center">
        <div class="max-w-md text-base-content flex flex-col justify-center items-center">
          <div class="mx-5 mb-5 mt-10 font-semibold">
            <h2>vue admin</h2>
          </div>
          <div class="mb-10 w-96">
            <div class="form-control">
              <el-input v-model="username" type="text" placeholder="请输入用户名" class="focus:outline-none input" />
            </div>
            <div class="mt-5 form-control">
              <el-input v-model="password" type="password" placeholder="请输入密码" class="focus:outline-none input" />
            </div>
            <div class="mt-10 form-control">
              <el-button type="primary" class="btn btn-primary w-full" @click="login">登录</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const username = ref("");
const password = ref("");
</script>

<style scoped>
.login {
  background-image: url("/src/assets/images/login-background.webp");
  background-size: 100% 100%;
  background-attachment: fixed;

  /* & .login-content {
    background-color: hsla(0, 0%, 0%, 0.3);
  }

  & h2 {
    color: #fff;
    font-size: 1.8rem;
  } */
}
</style>
