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
  src: url('./assets/fonts/NotoSansKR-Bold.ttf') format('ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'NotoSansKR';
  src: url('./assets/fonts/NotoSansKR-Medium.ttf') format('ttf');
  font-weight: 400;
}

html {
  min-width: 1440px;
  min-height: 1024px;
}

root, body {
  background-color: #EDF8FF;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}

#app {
  font-family: NotoSansKR, sans-serif;
  text-align: center;
  font-weight: 700;
  color: #000000;
  height: 100%;
  width: 100%;
}

</style>
