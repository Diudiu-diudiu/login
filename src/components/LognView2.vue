<template>
<div class="container">
  <video autoplay loop muted id="bg-video">
    <source :src="videoSrc" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
  
  <div class="box-div">
    <el-row >
      <el-col :span="12">
      <el-card class="box-card1">
        <h2>欢迎使用</h2>
        <h3>登录系统，处理工作，记录生活，积极向上</h3>
        <h3 class="line-space">让花成花,</h3>
        <h3 class="line-space">让树成树,</h3>
        <h3 class="line-space">允许一切如其所是!</h3>
        <br>
        <br>
        <h4 style="text-align: right; margin-top: auto;"> <i class="el-icon-user"></i> 小朱老师</h4>
      </el-card>
      </el-col>
    
    
      <el-col :span="12">
      <el-card class="box-card1">
        <h2>登录系统</h2 >
        <el-form icon="el-icon-user-solid">
          <el-form-item >
            <el-input v-model="username" placeholder="请输入用户名" prefix-icon="el-icon-user" class="input-width"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="password" placeholder="请输入密码" prefix-icon="el-icon-lock" class="input-width" type="password"
            show-password></el-input>
          </el-form-item>

          <div class="button-div">
          <el-form-item >
            <el-row>
                <el-col :span="12">
                  <el-button type="primary" @click="login" class="button-width">登录</el-button>
                </el-col>
                <el-col :span="12">
                  <el-button type="primary" @click="register" class="button-width">注册</el-button>
                </el-col>
              </el-row>
          </el-form-item>
        </div>

        </el-form>
              <el-row type="flex" justify="center" align-items="center" class="login-title">
                <span>第三方登录</span>
              </el-row>
              <div class="login-buttons">
                <el-button type="primary" icon="el-icon-wallet" circle @click="wechatLogin"></el-button>
                <el-button type="primary" icon="el-icon-s-goods" circle @click="qqLogin"></el-button>
                <el-button type="primary" icon="el-icon-camera" circle @click="weiboLogin"></el-button>
              </div>
      </el-card>
      </el-col>
    </el-row>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      videoSrc: require('@/assets/268528_small.mp4') // 使用 require 引入视频文件
    }
  },
  methods: {
    login() {
      // 登录逻辑
      console.log('登录')
      if (this.username === 'haisen' && this.password === '123456') {
        // 登录成功
        console.log('登录成功')
        this.$router.push('/HomePage')
      } else {
        // 登录失败
        console.log('登录失败')
        this.$message.error('用户名或密码错误')
      }
    },
    register() {
      // 注册逻辑
      console.log('注册')
      this.$router.push('/NewAccount')
    },

  }
  
}
</script>
<style >


body, html {
  height: 100%;
  margin: 0;
  overflow: hidden; /* 防止滚动条出现 */
}

#bg-video {
  position: fixed; /* 固定背景视频 */
  top: 0;
  left: 0;
  width: 100%; /* 宽度覆盖整个页面 */
  height: 100%; /* 高度覆盖整个页面 */
  object-fit: cover; /* 确保视频覆盖整个容器 */
  opacity: 0.7; /* 设置透明度 */
  transform: scale(1.1); /* 放大视频 */
  z-index: -1; /* 确保视频在最底层 */
}


h2 {
  margin: 0 auto 20px; /* 添加底部间距 */
  width: fit-content; /* 使h2的宽度适应内容 */
  text-align: center; /* 文本居中 */
}

.container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 使容器占满整个视口高度 */
}

.box-card1{
  width: 600px;
  height: 400px;
  margin: 0 auto;
  opacity: 0.8; /* 设置透明度，值范围为 0（完全透明）到 1（完全不透明） */
  border-radius: 10px;
  background-color: whitesmoke;
  box-shadow: 0 2px 12px 0 rgba(232, 215, 215, 0.1);
  
}


.box-div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  width: 1300px;
  
}

.input-width {
  height: 60px;
  width: 70%; /* 设置输入框的宽度 */
  display: block; /* 确保是块级元素 */
  margin: 0 auto; /* 水平居中 */
}

/* 覆盖 Element UI 的输入框高度 */
.el-input__inner {
  height: 55px !important; /* 设置输入框的高度 */
  line-height: 55px !important; /* 设置行高，以确保文字垂直居中 */
  font-size: 18px; /* 设置字体大小 */
}

.button-width {
  width: 90%; /* 设置按钮的宽度 */
  display: block; /* 确保是块级元素 */
  margin: 0 auto ; /* 添加左右间距 */
}

.button-div {
  width: 60%; /* 设置按钮容器的宽度 */
  margin: 0 auto; /* 水平居中 */
}
.login-buttons {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 60%;
  margin: 0 auto;
}
.login-title {
  margin-bottom: 20px; /* 添加底部间距 */
}


</style>