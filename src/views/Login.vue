<template>
  <div class="login">
    <h2>로그인</h2>
    <div class="input-field">
      <input
        type="text"
        v-model="loginEmail"
        placeholder=" ex) test@naver.com"
      />
    </div>
    <div class="input-field">
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button type="submit" @click="login" class="login-button">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      loginEmail: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.loginEmail || !this.password) {
        alert("아이디와 비밀번호를 모두 입력하세요");
        return;
      }
      const response = await this.$store.dispatch("login", {
        loginEmail: this.loginEmail,
        password: this.password,
      });
      alert(response.message);
      if (response.success) {
        this.$router.push("/");
      }
    },
  },
};

//     async login() {
//       if (!this.loginEmail || !this.password) {
//         alert("아이디와 비밀번호를 모두 입력하세요");
//         return;
//       }
//       // try {
//       console.log("store부르기전", this.$store);
//       const response = await this.$store.dispatch("login", {
//         loginEmail: this.loginEmail,
//         password: this.password,
//       });
//       console.log("로그인에서 부름 response", response);
//       console.log("store부르고서", this.$store);
//       if (response.data.code === 20000) {
//         alert("로그인에 성공했습니다");
//         console.log("받아온 토큰", response.data.data.accessToken);
//         console.log("store토큰", this.$store.state.accessToken);
//         this.$router.push("/");
//       } else if (response.data.code === 40400) {
//         alert("아이디 또는 비밀번호가 일치하지 않습니다");
//         console.log("로그인실패", response.data.message);
//       }
//       // } catch (e) {
//       //   console.error(e);
//       //   alert("로그인 중 오류가 발생했습니다");
//       // }
//     },
//   },
// };
</script>

<style scoped>
.login {
  width: 300px;
  margin: 70px auto;
}

.input-field {
  margin: 20px 0;
}

.input-field input {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #333;
  background-color: #f8f8f8;
}

.input-field input:focus {
  outline: none;
  border-bottom-color: #007bff;
}

.login-button {
  margin-top: 11px;
  width: 106.5%;
  padding: 10px;
  background-color: #d3d3d3;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #c0c0c0;
}
</style>
