<template>
  <div class="login-container">
    <el-card class="login-box">
      <h2 class="login-title">用户登录</h2>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>



<script>

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    };
  },
};

</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('C:\Users\Haisen\Pictures\Camera Roll\五.jpg') no-repeat  center center;
  background-size: contain;
}

.login-box {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5); /* 半透明白色 */
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
}

</style>