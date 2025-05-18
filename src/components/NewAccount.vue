<template>
  <div class="container">
    <video autoplay loop muted id="bg-video">
    <source :src="videoSrc" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
  <el-card class="box-card2">
        <h2>注册系统</h2 >
          
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" label-position="left" class="demo-ruleForm">
          <div class="input-box">
          <el-form-item label="用户名" prop="username" margin-left="10px">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user" class="input-width" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password"  show-password v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码" prefix-icon="el-icon-document"  class="input-width" ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" show-password v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码" prefix-icon="el-icon-connection" class="input-width"></el-input>
          </el-form-item>
          </div>
          <el-form-item>
            <div class="button-box">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
          </el-form-item>
          </el-form>
  </el-card>
</div>
</template>
<script>

export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        username: '',
        videoSrc: require('@/assets/sun.mp4') ,// 使用 require 引入视频文件
        ruleForm: {
          pass: '',
          checkPass: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
        this.$router.push('/HomePage')
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style >
.box-card2 {
  background-color: rgb(239, 217, 177);
  width: 600px;
  height: 400px;
  margin: 0 auto;
  opacity: 0.8; /* 设置透明度，值范围为 0（完全透明）到 1（完全不透明） */
}
.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 使容器占满整个视口高度 */
}
.button-box {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 60%;
  margin: 0 auto;
}
#bg-video {
  position: fixed; /* 固定背景视频 */
  top: 0;
  left: 0;
  width: 100%; /* 宽度覆盖整个页面 */
  height: 100%; /* 高度覆盖整个页面 */
  object-fit: cover; /* 确保视频覆盖整个容器 */
  opacity: 0.8; /* 设置透明度 */
  transform: scale(1.1); /* 放大视频 */
  z-index: -1; /* 确保视频在最底层 */
}

</style>