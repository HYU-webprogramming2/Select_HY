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
      <img @click="sendKakao" src="../assets/svgs/sharing.svg" width="350">
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
      const states = {...store.state};
      let result = 'architecture';
      Object.keys(states).forEach(r => {
        result = states[r] > states[result] ? r : result;
      });
      return results.filter(r => r.type === result)[0];
    }
  }, methods: {
    sendKakao: () => {
      console.log("??")
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '나에게 어울리는 하냥 학과는??',
          imageUrl:
              'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          description: '내 미래 하냥 학과는 어디일까요?',
          link: {mobileWebUrl: 'http://naver.com', webUrl: 'http://naver.com',},
        },
        buttons: [{
          title: '웹으로 보기',
          link: {mobileWebUrl: 'http://naver.com', webUrl: 'http://naver.com',},
        },],
      })
    }
  },
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
