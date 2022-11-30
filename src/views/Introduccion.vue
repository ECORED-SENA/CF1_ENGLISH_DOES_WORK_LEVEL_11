<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg1.mb-5
      .col-12.px-5.pt-5
        .row.mb-4
          .col-lg-3
            figure
              img(src="@/assets/curso/temas/2.png", style="width:350px").m-auto
          .col-lg-9
            .row
              figure.fig-p1
                img(src="@/assets/curso/temas/4.svg")
              .col-12.p-5.bg-c2
                p.mb-0 Este nivel de formación bilingüe se enfoca en narrar lo que otras personas dijeron, con la ayuda del #[b.tred discurso indirecto], en todos los tiempos verbales, o con #[b.tred diferentes] tiempos modales, y sus diferentes cambios a la hora de reportar, porque no se expresa la información en el mismo tiempo cuando el orador original la dijo que cuando retransmitimos el mensaje. Para esto, vamos a hacer mucho énfasis en usar diferentes verbos para reportar, no solamente los más comunes: “#[b.tred say]”, “#[b.tred tell]” y “#[b.tred ask]”. Y por último, se practicará #[b.tred mezclar sonidos] y palabras con diferentes aspectos del discurso conectado, para sonar más natural a la hora de hablar y para entender mejor lo que nos dicen cuando escuchamos a alguien más. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se invita a explorar el video que se presenta a continuación
              figure.fig-p2
                img(src="@/assets/curso/temas/3.svg")
        .row.mb-4.mb-lg-0
          .col-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
