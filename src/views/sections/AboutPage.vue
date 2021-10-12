<template>
    <div 
      id="about-page" 
    >
      <v-container>
      <!--  <div class="saying py-16 mb-16">
          <v-card elevation="8" class="text-center mx-auto"
          max-width="819px"
>
            <v-icon x-large color="green">
              mdi-chart-line
            </v-icon>
          </v-card>
        </div>
-->
      <div
        id="services"  
        class="py-16 ma-16">


        <v-heading 
          :is="tag"
          class="display-1 v-heading mb-14 text-center"
          >
            Sobre Nós
        </v-heading>

        <p>O projeto pretende focar-se nos inúmeros objetivos para o 
          desenvolvimento sustentável das Nações Unidas.
           A Enrich Life é uma rede social de voluntariado eletrónico 
           virada para mobile que será dividida em duas partes essenciais,
            a área da rede social e a do voluntariado eletrónico
            .A rede social irá servir para os utilizadores partilharem 
            experiências vividas em projetos de voluntariado internacionais e nacionais. 
            Por exemplo, um utilizador foi a África fazer um voluntariado internacional e 
            gostou de ficar hospedado num hotel das redondezas, desta forma poderá partilhar 
            a experiência com toda a comunidade Enrich Life, de futuro, os utilizadores terão 
            as indicações essenciais sobre esse mesmo hotel. Na área do voluntariado eletrónico 
            constarão anúncios de voluntariados nacionais e, consequentemente, o utilizador que 
            se interessar por um voluntariado específico, responde ao anúncio enviando assim uma
             mensagem privada ao organizador. Para a aplicação funcionar com sucesso e tornar-se num
              ciclo de voluntariado, criei o sistema “DAR PARA RECEBER”, onde para receber algo tem
               que se dar algo em troca. Ou seja, este sistema permite que um utilizador crie um projeto
                de voluntariado na aplicação e possa juntar pessoas para por exemplo uma ida à praia apanhar lixo,
                 ou para levar as compras a casa de um idoso. Nos tempos que correm, simples ações como estas são
                  bastante importantes, como ir à farmácia comprar medicamentos, pois sabemos que sair de casa nesta
                   faixa etária é perigoso e acarreta dificuldades. Deste  modo, todos podem receber algo em troca
                    de forma voluntária, o que tornaria a aplicação mais dinâmica, pois seria um DAR para poder 
                    RECEBER. Sem dúvida que, para o meu sistema funcionar, têm de existir utilizadores honestos 
                    e com ideais bem definidos no que diz respeito a voluntariados, mas vou partir do bom senso 
                    dos mesmos, acreditando que estão dispostos a doar um pouco do seu tempo em nome de uma boa 
                    causa. Não vivemos sozinhos neste mundo, se todos disponibilizarmos um pouco do nosso tempo, 
                    poderemos ter um mundo bem melhor.Por vezes, os jovens, e não só, não têm acesso a estes eventos,
                     assim poderão vir a interessar-se pelos mesmos que a nível individual são também bastante enriquecedores. 
                     Penso que cada um de nós pode despender algumas horas para ajudar o próximo.
                     No caso específico do voluntariado internacional não seriam apenas algumas horas, 
                     mas no âmbito de aproveitar as férias para ajudar e apoiar alguns países. 
                     “Ser voluntário é ajudar gratuitamente alguém sem custos para investir em um mundo melhor.” 
                     Fagner Gouveia Espero envolver cada vez mais pessoas numa causa para o bem comum da humanidade. 
                     Através do DAR PARA RECEBER consegue-se cada vez mais ter um círculo maior de pessoas que realizem 
                     voluntariados e que utilizem esta aplicação, vendo nela uma ferramenta importante na rede dos 
                     voluntariados. A Enrich Life destina-se a todas as pessoas que demonstram vontade em disponibilizar 
                     um pouco do seu tempo e das suas competências a uma causa, de forma voluntária,
           mas que nem sempre conseguem encontrar as melhores oportunidades.</p>
</div>
</v-container>
  
    </div>   
  
</template>



<script>
 export default {
    name: 'AbouPage',
    
    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style>

h2{
  font-size: 35px;
}

#history{
  background-color: #fafafa;
}
</style>
