<template>
  <div class="container">
    <div class="question">
      <div style="color: #004B86">Q. {{ $route.params.number }}</div>
      <div>{{getQuestion.quest}}</div>
    </div>
    <div class="selection">
      <router-link :to="next">
        <img :src="getQuestion.firstImage" width="600"/>
        <div>{{getQuestion.firstAnswer}}</div>
      </router-link>
      <router-link :to="next">
        <img :src="getQuestion.secondImage" width="600"/>
        <div>{{getQuestion.secondAnswer}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {questions} from "@/constants/questions";

export default {
  name: "Game",
  computed: {
    firstImg() {
      return require('../assets/imgs/sample.png')
    },
    secondImg() {
      return require('../assets/imgs/sample.png')
    },
    next() {
      const nextNumber = +this.$route.params.number + 1;
      if (nextNumber === 11) return '/results';
      return '/game/' + nextNumber;
    },
    getQuestion() {
      return questions.find(question => question.number === +this.$route.params.number);
    }
  }
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  margin: 70px auto;
}

.question > div {
  font-size: 48px;
  margin: 10px;
}

.selection {
  display: flex;
  justify-content: space-evenly;
  margin: 0 400px;
}

.selection > div {
  font-size: 36px;
  font-weight: 400;
}
.selection > a {
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  text-decoration: none;
}

.selection > div:hover {
  cursor: pointer;
  transition: all 1s;
  transform: scale(1.1);
}
</style>
