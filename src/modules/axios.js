import axios from 'axios';

export async function refresh() {

    console.log('refresh() 실행');

  if (!this.$store.accessToken || Date.now() > this.$store.accessTokenExpire) { 
    if (!this.$store.refreshToken) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/refresh', {}, {
    headers: {
      'Authorization': `Bearer ${this.$store.accessToken}`,
      'refreshToken': this.$store.refreshToken
    }
  });
     
  console.log('토큰 갱신:', response.data.data.accessToken);
  console.log('토큰 갱신(스토어에있는거):', this.$store.accessToken);
  console.log('리프레쉬 토큰 갱신:', response.data.data.refreshToken);

      this.accessToken = response.data.data.accessToken;
      this.accessTokenExpire = Date.now() + 50000 ; // 50초후 만료
      this.refreshToken = response.data.data.refreshToken;

    } catch (error) {
      console.error(error);
    }
  }

  return this.accessToken;
}