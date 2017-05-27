<template>
    <div class="login-wp">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <div class="title">登录</div>
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
        <div class="drop"></div>    
    </div>
</template>

<script>
    import {getUser} from '../service/getData'
    import {mapState, mapMutations} from 'vuex'
  export default {
    data() {
        var checkUserName = (rule,value,callback) => {
            if(value==''){
                callback(new Error('请输入用户名'));
            }
            callback();
        };
      var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } 
            callback();
        }
      return {
        ruleForm2: {
            username:'',
            pass: '',
            checkPass: ''
        },
        rules2: {
            username: [
                {validator:checkUserName,trigger:'blur'}
            ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
        ...mapMutations([
            'LOGIN_SUCCESS'
            ]),
      open4(msg) {
        this.$message.error('登录出错，'+msg);
      },
       submitForm(formName) {
        var _this = this;
        _this.$refs[formName].validate(async (valid) => {
          if (valid) {
                let params = new URLSearchParams();
                params.append('name', this.ruleForm2.username);
                params.append('password', this.ruleForm2.pass);
                this.userInfo = await getUser(params)
                this.userInfo.json().then(function(data){
                    if(data.success){
                        _this.LOGIN_SUCCESS(data.data);
                        _this.$router.go(-1)
                    }else {
                        _this.open4(data.msg);
                    }
                })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
    .login-wp form {
        position: absolute;
        z-index:9;
        width:400px;
        height: 250px;
        border-radius: 5px;
        background-color: #fff;
        top:50%;
        margin-top:-150px;
        left:50%;
        margin-left:-250px;
    }   
    .title {
        line-height: 40px;
        margin-bottom: 30px;
        border-bottom: 1px solid #ddd;
        font-size: 20px;
        text-align: center;
        border-top:2px solid #20a0ff;
    }
    .drop {
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        background:rgba(0,0,0,.8);
    }
    .el-input .el-input__inner {
        width:88%;
    }
    .el-form-item {
        padding-right:30px;
    }
</style>