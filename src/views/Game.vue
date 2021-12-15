<template>
  <div class="container">
    <div class="question">
      <div style="color: #004B86">Q. {{ $route.params.number }}</div>
      <div>{{ getQuestion.quest }}</div>
    </div>
    <div class="selection">
      <img :src="getQuestion.image" width="120"/>
      <div class="answers">
        <div v-for="(item) in getQuestion.answers" :key="item.number">
          <router-link :to="next">
            <div v-on:click="onClick(item)" class="answer">{{ item.contents }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {questions} from "@/constants/questions";
import {store} from "@/store";

export default {
  name: "Game",
  computed: {
    firstImg() {
      return require('../assets/imgs/1.png');
    },
    secondImg() {
      return require('../assets/imgs/1.png');
    },
    next() {
      const nextNumber = +this.$route.params.number + 1;
      if (nextNumber === 16) return '/results';
      return '/game/' + nextNumber;
    },
    getQuestion() {
      return questions.find(question => question.number === +this.$route.params.number);
    }
  },
  methods: {
    onClick: (item) => {
      item.value.forEach((val) => store.commit('increment', val));
    },
  },
};
</script>

<style scoped>
.answer {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #ffffff;
  padding: 15px;
  margin: 10px;
  width: 800px;
  font-size: 18px;
  border-radius: 50px;
}

.question {
  display: flex;
  flex-direction: column;
  margin: 40px auto;
}

.question > div {
  font-size: 24px;
  margin: 10px;
}

.selection > img {
  margin-bottom: 50px;
}

.selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 400px;
}

.selection > div {
  font-size: 36px;
  font-weight: 400;
}

.answers {
  display: flex;
  flex-direction: column;
}

.answers > div > a {
  font-size: 36px;
  font-weight: 400;
  color: #000000;
  text-decoration: none;
}

.answers > div:hover {
  cursor: pointer;
  transition: all 1s;
  transform: scale(1.1);
}
</style>
