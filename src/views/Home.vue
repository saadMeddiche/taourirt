<template>
    <div class="Holder">
        <div class="Fact">
            <div class="Title">
                <h2>Faits en bref sur Taourirt</h2>
            </div>
            <div class="Content">
                <h5>La Province de Taourirt est située dans la partie nord du Maroc, dans la région de l'Oriental, à environ 100 km à l'ouest de la ville d'Oujda. La ville de Taourirt occupe une position stratégique en tant que plaque tournante des transports dans la région. En effet, la ville est traversée par la principale ligne de chemin de fer est-ouest reliant Casablanca, Rabat et Fès à l'ouest à Oujda à l'est, ce qui en fait un point de passage clé pour les voyageurs et les marchandises.</h5>
            </div>
        </div>
    </div>
   
    <div class="Cards">
        <div class="Card" v-for="(Card , key) in Cards.slice(0,3)" :key="key">
            <div class="Image" >
            <img :src="require(`@/assets/Taourirt-Photos/${Card.img}.jpg`)">
            </div>
            <div class="desvription">
                <p>{{ Card.description }}</p>
            </div>
        </div>
        <div class="Fact">
            <div class="Title">
                <h2>Statistiques de Taourirt</h2>
            </div>
            <div class="Content">
                <h5>La population de la province de Taourirt en 2004 était de 206 762. De plus, la superficie de la province de Taourirt est de 7 432,3 km²</h5>
            </div>
        </div>
        <div class="Card" v-for="(Card , key) in Cards.slice(3,7)" :key="key">
            <div class="Image" >
            <img :src="require(`@/assets/Taourirt-Photos/${Card.img}.jpg`)">
            </div>
            <div class="desvription">
                <p>{{ Card.description }}</p>
            </div>
        </div>
    </div>
</template>   

<script>
    export default{
        data(){
            return{
                Cards:[
                    {img : '1' , description:'TAOURIRT Kasbah of Ouarzazate'},
                    {img : '2' , description:'Easten Ouarzazate'},
                    {img : '3' , description:'Kasbahs In Ouarzazate'},
                    {img : '4' , description:'Kasbah Taourirt, Ouarzazate, région de Draa-Tafilalet'},
                    {img : '5' , description:'Taourirt Kasbah'},
                    {img : '6' , description:'The Splendid Taourirt Kasbah in Ouarzazate'},
                    {img : '7' , description:'Kasbahs In Ouarzazatez'},
                ]
            }
        }
    }
</script>
<style lang="scss" >
    .Fact {
        width: 100%;
  margin: 10px;
  border: 1px solid #ccc;
  background-color: #f5f3e5;
  padding: 20px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 18px;
  line-height: 1.6;

  .Title {
    text-align: center;
    margin-bottom: 20px;

    h2 {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }

  .Content {
    text-align: center;
    hyphens: auto;
  }
}

.Holder,
.Cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .Card {
    margin: 20px;
    padding: 20px;
    width: 300px;
    background-color: #f5f3e5;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 5px #ccc;
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    line-height: 1.6;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .Image {
      height: 200px;
      width: 100%;
      margin-bottom: 10px;
      position: relative;
      overflow: hidden;
      transition: all 0.2s ease-in-out;

      img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: all 0.2s ease-in-out;
      }
    }

    .description {
      text-align: justify;
      hyphens: auto;
      max-height: 150px;
      overflow: hidden;

      p {
        margin: 0;
        padding: 0 10px;
      }
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 2px 5px 10px #ccc;

      .Image {
        transform: scale(1.2);
      }

      .description {
        max-height: 1000px;
      }
    }
  }
}



</style>