<template>
  <navebar></navebar>
  <router-view/>
</template>
<script>
  import navebar from './components/navebare.vue'
  export default{
    components:{
      navebar,
    }
  }
</script>
<style lang="scss">
  body{
    margin: 0;
  }
</style>