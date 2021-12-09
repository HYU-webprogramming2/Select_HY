<template>
  <Home msg="나에게 어울리는 학과는?"/>
</template>

<script>
import Home from "./views/Home";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@font-face {
  font-family: 'NotoSansKR';
  src: url('./assets/font/NotoSansKR-Bold.ttf') format('ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'NotoSansKR';
  src: url('./assets/font/NotoSansKR-Medium.ttf') format('ttf');
  font-weight: 400;
}

#app {
  font-family: NotoSansKR, sans-serif;
  text-align: center;
  font-weight: 700;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
