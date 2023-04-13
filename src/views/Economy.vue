<template>
    <div class="Holder">
        <div class="Fact">
            <div class="Title">
                <h2>Économie</h2>
            </div>
            <div class="Content">
                <h5>La ville de Taourirt est renommée pour son agriculture extensive, qui s'appuie principalement sur la culture de l'olive et la présence d'usines de transformation. Cette activité économique est une véritable richesse pour la région, offrant des perspectives d'emploi et contribuant à la vitalité de l'économie locale. En outre, la ville encourage le développement de l'exploitation des plantes aromatiques et médicinales, qui sont très prisées sur les marchés internationaux.</h5>
            </div>
        </div>
    </div>

    <div class="Cards">
        <div class="Card" v-for="(Card , key) in Cards.slice(0,2)" :key="key">
            <div class="Image" >
            <img :src="require(`@/assets/Taourirt-Photos/${Card.img}.jpg`)">
            </div>
            <div class="desvription">
                <p>{{ Card.description }}</p>
            </div>
        </div>
        <div class="Fact">
          
            <div class="Content">
                <h5>Au fil des ans, les Marocains résidant à l'étranger ont également joué un rôle économique important dans la ville de Taourirt. En particulier, ceux établis en France et aux Pays-Bas ont contribué au développement de l'économie locale, en investissant dans des projets immobiliers et en créant des entreprises locales. Leur présence dynamique a également contribué à l'enrichissement culturel de la ville et à son ouverture sur le monde.</h5>
            </div>
        </div>
        <div class="Card" v-for="(Card , key) in Cards.slice(2,3)" :key="key">
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
                    {img : 'E1' , description:'Olives'},
                    {img : 'E2' , description:'l\’industrie de transformation agricole'},
                    {img : 'E3' , description:'Le retour des Marocains résidants à l\’étranger'},
                    // {img : 'H4' , description:'Beni Snassen'},
                    // {img : 'H5' , description:'Drapeau Beni Snassen'},
                    // {img : 'H6' , description:'Moulay Ismaïl'},
                    // {img : 'H7' , description:'Un vestige de Sijilmassa'},
                ]
            }
        }
    }
</script>