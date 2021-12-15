<template>
  <div class="box">
    <div>
    </div>
    <div>
      <div class="result">
        <div style="color: #004B86">결과</div>
        <div>{{ getResult.department }}</div>
      </div>
      <img :src="getResult.image" width="400"/>
      <div class="explain" v-for="item in getResult.explain" :key="item">{{ item }}</div>
    </div>
    <div class="sharing">
      <img src="../assets/svgs/sharing.svg" width="350">
    </div>
  </div>
</template>

<script>
import {results} from "@/constants/results";
import {store} from "@/store/index";

export default {
  name: "Result",
  computed: {
    getResult() {
    //  const object = Object.values(store.state)
    //  const max = Math.max(...object);
      
    //  for(const property in store.state) {
    //    if(store.state[property]==max) {
    //    console.log(results);
    //      for(const p of results) {
    //        console.log(p);
    //        if(p.type == property) {
    //          return p;
    //        }
    //      }
    //    }
    //  }
    // }

    getResult() {
      const states = {…store.state};
      let result = 'architecture';
      Object.keys(states).forEach(r => {
        result = states[r] > states[result] ? r : result;
      });
      return results.filter(r => r.name === result)[0];
    }

  }
}
</script>

<style scoped>
.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
}

.result {
  font-size: 48px;
  margin: 80px auto;
}

.result > div {
  margin: 20px;
}

.explain {
  max-width: 512px;
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  margin: auto;
}

.sharing {
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 80px;
}

.sharing > img:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: all 1s;
}

img {
  margin: 50px 0;
}
</style>
