<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg_grad-01
      .row.mb-5
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/temas/1.png", alt="alt")
        .col-lg-9
          Traduccion.color-secundario.mt-5(:dialogo="traduccion1")(data-aos="flip-up")

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import Traduccion from '../components/Traduccion.vue'
export default {
  name: 'Sintesis',
  components: {
    Traduccion,
  },
  data: () => ({
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>Up to this point, we have been able to understand everything that has to do with how to report or retransmit information in the different grammatical tenses or with different modal verbs, and how they change from direct speech to indirect speech (or <span>“reported speech”</span>, which is the information already reported), and the different verbs that we can use to present this information that someone else said before. And we have also been able to understand different aspects of pronunciation that explain why English when spoken naturally can be difficult to understand or pronounce. For this reason, you are invited to see the following conceptual scheme that summarizes these topics:</em>',
          textoEsp:
            'Hasta este punto, hemos podido comprender todo lo que tiene que ver con cómo reportar o retransmitir información en los diferentes tiempos gramaticales o con diferentes verbos modales, y cómo cambian del discurso directo al discurso indirecto (que es la información ya reportada), y los diferentes verbos que podemos usar para presentar esta información que alguien más dijo antes. Y también hemos podido comprender diferentes aspectos de la pronunciación que nos explican por qué el inglés cuando se habla de forma natural puede ser difícil de comprender o de pronunciar. Por ello, se invita a que aprecie el siguiente esquema conceptual que resume estos temas:',
        },
      ],
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
