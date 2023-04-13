<template>
    <div class="Holder">
        <div class="Fact">
            <div class="Title">
                <h2>Toponymie</h2>
            </div>
            <div class="Content">
                <h5>Son nom d'origine berbère signifie « petite montagne ».</h5>
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
            <div class="Title">
                <h2>Histoire</h2>
            </div>
            <div class="Content">
                <h5>
                    Depuis le XIIe siècle, la cité majestueuse de Taourirt trône fièrement dans les annales de l'histoire. Elle doit son édification et son essor à une poignée de Berbères zénètes issus des tribus Beni Iznassen/Snassen qui ont su y bâtir une communauté florissante. Au fil des siècles, ces premiers habitants ont été rejoints par les Krarma et les Ahlaf, deux tribus arabo-berbères, qui ont contribué à l'enrichissement culturel de la ville.
                    <br>
                    <br>
                    Cependant, la prospérité de Taourirt a également attiré l'attention des dynasties rivales. Au cours des XIIIe et XIVe siècles, les Hafsides et les Mérinides se sont affrontés sur les terres de la cité, y laissant leur empreinte historique. Ces batailles dynastiques ont marqué un tournant décisif dans l'histoire de Taourirt, lui conférant une renommée éternelle et en faisant un symbole de la résilience de son peuple face à l'adversité.
                </h5>
            </div>
        </div>
        <div class="Card" v-for="(Card , key) in Cards.slice(2,5)" :key="key">
            <div class="Image" >
            <img :src="require(`@/assets/Taourirt-Photos/${Card.img}.jpg`)">
            </div>
            <div class="desvription">
                <p>{{ Card.description }}</p>
            </div>
        </div>
        <div class="Fact">
            <div class="Content">
                <h5>
                    Au XVIIe siècle, Moulay Ismaïl, célèbre sultan du Maroc, prend la décision sage de fonder une kasbah à Taourirt. Cette initiative a été motivée par sa préoccupation pour la sécurité de la population locale face aux invasions ottomanes. Ainsi, les tribus de Krarma, Tafrata, Ahlaf, Beni Iznassen/Snassen ont trouvé refuge dans cette forteresse imprenable, qui est rapidement devenue un symbole de la résistance face à l'ennemi commun.
                    <br>
                    <br>
                    Au XIXe siècle, la ville de Taourirt a consolidé son rôle stratégique dans la défense de l'empire marocain grâce à la kasbah Moulay Ismaïl. Cette place forte a permis de contrôler la route Fès-Oujda et de garantir la sécurité des axes commerciaux reliant Sijilmassa à l'Europe. Taourirt est alors devenue un centre commercial vital et une étape obligatoire pour les caravanes marchandes qui traversaient le désert marocain. La ville a ainsi connu une prospérité sans précédent, qui a laissé une empreinte indélébile sur son histoire et son patrimoine culturel.
                </h5>
            </div>
        </div>
        <div class="Card" v-for="(Card , key) in Cards.slice(5,7)" :key="key">
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
                    {img : 'H1' , description:'Kasbah de Taourirt'},
                    {img : 'H2' , description:'Kasbah de Taourirt'},
                    {img : 'H3' , description:'Pays De Hafsides'},
                    {img : 'H4' , description:'Beni Snassen'},
                    {img : 'H5' , description:'Drapeau Beni Snassen'},
                    {img : 'H6' , description:'Moulay Ismaïl'},
                    {img : 'H7' , description:'Un vestige de Sijilmassa'},
                ]
            }
        }
    }
</script>