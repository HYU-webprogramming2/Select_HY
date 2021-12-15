<template>
  <div class="box">
    <div>
      <div class="result">
        <div style="color: #004B86">결과</div>
        <div>{{ getResult.department }}</div>
      </div>
      <img :src="getResult.image" width="250"/>
      <div class="explainbox">
        <div class="explain" v-for="item in getResult.explain" :key="item">{{ item }}</div>
      </div>
    </div>
    <div class="sharing">
      <img src="../assets/svgs/sharing.svg" width="350">
    </div>
  </div>
</template>

<script>
import {results} from "@/constants/results";

export default {
  name: "Result",
  computed: {
    vuegetResult() {
      return results[0];
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
}

.box > div {
  margin: auto;
}

.result {
  font-size: 38px;
  margin: 80px auto;
}

.result > div {
  margin: 20px;
}

.explainbox {
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  padding: 20px 30px;
}

.explain {
  max-width: 750px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin: auto;
  line-height: 30px;
}

.sharing {
  position: absolute;
  bottom: 40px;
  right: 70px;
}

.sharing > img:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all 1s;
}

img {
  margin: 20px 0;
}
</style>
