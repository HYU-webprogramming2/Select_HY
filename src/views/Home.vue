<template>
  <div class="container">
    <img :src="icon" alt="icon" width="590" height="510"/>
    <div>
      <div class="title">나에게 어울리는 학과는?</div>
      <div>한양대학교 학과 중 나의 성향과 가장 잘 맞는 학과를 골라드립니다.</div>
      <div>물론 입학과 졸업은 보장 못함.</div>
      <router-link to="/game/1">
        <button>시작하기</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    icon() {
      return require('../assets/svgs/hyrion.svg')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.title {
  font-size: 48px;
  font-weight: 700;
  color: #004B86;
  width: fit-content;
  margin-bottom: 30px;
}

div {
  font-size: 24px;
  font-weight: 400;
  margin: 10px auto auto;
}

img {
  margin: auto auto 0 auto;
}

button {
  background-color: #0069AA;
  box-shadow: 0 10px 11px rgba(146, 207, 244, 0.5);
  border-radius: 39px;
  padding: 16px 54px;
  font-size: 30px;
  margin-top: 30px;
  color: #ffffff;
  text-align: center;
}

button:hover {
  cursor: pointer;
  transition: all 2s;
  transform: scale(1.1);
}

</style>
