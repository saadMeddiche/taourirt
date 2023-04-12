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
  body {
  background-color: #f5deb3; /* light beige */
  background-position: center center;
  font-size: 16px;
  line-height: 1.5;
  padding: 50px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); 
  border: 1px solid rgba(0, 0, 0, 0.2); 
  max-width: 800px;
  margin: 0 auto;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

p {
  margin-top: 1em;
  margin-bottom: 1em;
}

a {
  color: #8b4513;
  text-decoration: none;
  border-bottom: 1px solid #8b4513;
}

a:hover {
  color: #a0522d;
  border-bottom: 1px solid #a0522d;
}

</style>