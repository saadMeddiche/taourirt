<template>
    <div class="Navbar">

        <div class="Logo">
            <p>Taourirt</p>
        </div>
        <button class="ToggleBtn" @click="showLinks = !showLinks"></button>
        <div class="Links" v-show="showLinks">
            <router-link v-for="(Link , key) in Links" :key="key" :to="{name : Link.name}" class="Link" :class="{ active : Link.active}">{{Link.name}}</router-link>
        </div>

    </div>
</template>

<script>
    export default{
        data(){
            return {
                Links:{
                    'Home':      {name: 'Home',      active:false},
                    'History':   {name: 'History',   active:false},
                    'Economy':   {name: 'Economy',   active:false},
                    'Traditions':{name: 'Traditions',active:false},
                },
                showLinks: true

            }
        },
        watch:{
            $route(){
                this.indicate_current_page()
            }
        },
        methods:{
            indicate_current_page(){
                Object.values(this.Links).forEach(Link => {
                    Link.active = false
                });
                this.Links[this.$route.name].active = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .Navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f0e8;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  font-family: "Georgia", serif;
  font-size: 18px;
  color: #6b563d;
  text-shadow: 1px 1px #ccc;

  .Logo {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px #ccc;

    p {
      margin: 0;
    }
  }
  .ToggleBtn{
    display: none;
    margin: 10px;
    background-color: #6b563d;
  }

  .Links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .Link {
      position: relative;
      padding: 10px;
      text-decoration: none;
      color: #6b563d;
      transition: color 0.3s ease-in-out;

      &:before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        bottom: -5px;
        right: -5px;
        background-color: #f6f0e8;
        z-index: -1;
      }

      &:hover {
        color: #a1804b;
      }

      &.active {
        color: white;
        background-color: #a1804b;
        border-radius: 4px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;

    .Logo {
      margin-bottom: 10px;
    }
    .ToggleBtn{
        display: block;
    }
    .Links {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .Link {
        width: 90%;
        padding: 5px;
      }
    }
  }
}


</style>