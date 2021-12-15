<template>
  <div id="root">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
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

body {
  background-color: #EDF8FF;
  margin: 0;
  padding: 0;
  width: 100%;
}

#root {
  font-family: NotoSansKR, sans-serif;
  text-align: center;
  font-weight: 700;
  color: #000000;
  width: 100%;
}

</style>
