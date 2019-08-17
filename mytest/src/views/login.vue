<!--  -->
<template>
  <el-form :model="defaultUser" :rules="rules2" ref='defaultUser' label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h3 class="title">系统登入</h3>
      <el-form-item prop="userName">
          <el-input type="text" v-model='defaultUser.userName' auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
          <el-input type="password" v-model="defaultUser.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox :model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style='width:100%;'>
          <el-button :loading="logining" @click.native.prevent="handleSubmit" type="primary" style="width:100%" >登录</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
import {requestLogin} from '../api/api'
export default {
  data () {
    return {
      logining:false,
      defaultUser:{
        userName:"admin",
        password:'123456'
      },
      rules2:{
        userName:[{required:true,message:'请输入账号',triger:'blur'}],
        password:[{required:true,message:'请输入密码',triger:'blur'}]
      },
      checked:true
    };
  },
  methods: {
    handleReset(){
      this.$refs.defaultUser.resetFields();
    },
    handleSubmit(ev){
      var _this = this;
      this.$refs.defaultUser.validate((valid) => {
        if(valid){
          this.logining = true;
          var loginParams = {username:this.defaultUser.userName,password:this.defaultUser.password}
          requestLogin(loginParams).then(data =>{
            this.logining = false;
            let {msg,code,user} = data;
            if(code !==200){
              this.$message({
                message:msg,
                type:'error'
              });
            }else{
              sessionStorage.setItem('user',JSON.stringify(user));
              this.$router.push({path:'/main'});
            }
          });
        }else{
          console.log('error submit!');
          return false;
        }
      })
    }
  }
}

</script>
<style scoped lang='scss'>
    .login-container{
      border-radius: 5px;
      background-clip: padding-box;
      margin: 180px auto;
      width: 350px;
      padding: 35px 35px 15px 35px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
    }
    .login-container .title{
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .login-container .remember{
      margin: 0 0 35px 0;
    }
</style>