<template>
  <div class="signup">
    <div class="input-field">
      <h2>회원가입</h2>
      <input
        type="text"
        v-model="loginEmail"
        placeholder="아이디를 입력하세요"
      />
    </div>
    <div class="input-field">
      <input
        type="password"
        v-model="password"
        placeholder="비밀번호를 입력하세요"
      />
    </div>
    <div class="input-field">
      <input type="text" v-model="name" placeholder="이름을 입력하세요" />
    </div>
    <button signup type="submit" @click="signup" class="signup-button">
      Signup
    </button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "SignupView",
  data() {
    return {
      loginEmail: "",
      password: "",
      name: "",
    };
  },
  methods: {
    async signup() {
      if (!this.loginEmail || !this.password || !this.name) {
        alert("모든 항목을 입력하세요");
        return;
      }
      try {
        const response = await axios.post("http://localhost:8080/user/signup", {
          loginEmail: this.loginEmail,
          password: this.password,
          name: this.name,
        });
        if (response.data.result === "success") {
          alert("회원가입에 성공했습니다");
          this.$router.push("/login");
        } else {
          alert("회원가입에 실패했습니다");
        }
      } catch (e) {
        console.error(e);
        alert("회원가입 중 오류가 발생했습니다");
      }
    },
  },
};
</script>

<style scoped>
.signup {
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

.signup-button {
  margin-top: 11px;
  width: 106.5%;
  padding: 10px;
  background-color: #d3d3d3;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.signup-button:hover {
  background-color: #c0c0c0;
}
</style>
