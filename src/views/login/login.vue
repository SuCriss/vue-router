<template>
  <div class="login">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="footer">
      <van-button size="small" @click="login" type="primary">登录</van-button>
      <van-button size="small" @click="register" type="info">注册</van-button>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Toast, Dialog } from "vant";
export default {
  name: "login",
  props: [""],
  data() {
    return {
      username: "",
      password: ""
    };
  },

  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    login() {
        let _this = this;
      if (!_this.username) {
        Toast("请输入用户名");
      } else if (!_this.password) {
        Toast("请输入密码");
      } else {
        localStorage.setItem("sid", _this.username);
        Dialog.alert({
          title: "温馨提示",
          message: "登录成功"
        }).then(() => {
          // on close
          _this.$router.push('/home')
        });
      }
      this.username = this.password = "";
    },
    register() {
      let _this = this;
      if (!_this.username) {
        Toast("请输入用户名");
      } else if (!_this.password) {
        Toast("请输入密码");
      } else {
        localStorage.setItem("sid", _this.username);
      }
      this.username = this.password = "";
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.login {
  width: 300px;
  height: 100%;
  overflow: hidden;
  margin: 100px auto;
  .footer {
    margin-top: 20px;
    button {
      margin: 15px;
    }
  }
}
</style>
 
 
