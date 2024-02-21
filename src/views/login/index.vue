<template>
  <div class="min-h-screen hero bg-primary login flex items-center justify-center">
    <div class="w-1/3 flex justify-center items-center login-content">
      <div class="text-center">
        <div
          class="max-w-md text-base-content p-4 bg-gray bg-opacity-25 rounded-md flex flex-col justify-center items-center">
          <div class="mx-5 mb-5 mt-5 font-semibold">
            <h1 text-white text-3xl>vue admin</h1>
          </div>
          <el-form :model="formData" w-96>
            <el-form-item>
              <el-input v-model="formData.username" size="large" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="formData.password" size="large" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="btn btn-primary w-full" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = reactive({
  username: '',
  password: ''
})

const login = async () => {
  console.log('login.')
}
</script>

<style scoped lang="less">
.login {
  background-image: url("/src/assets/images/login-background.webp");
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>
