<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <i>Modal verbs</i> (verbos modales)
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-8.up.my-3      
        Traduccion.color-acento-botones(:dialogo="traduccion1")(data-aos="flip-up")   
      .col-lg-4.up.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='')      

    .bg8
      .row.justify-content-center.align-items-stretch
        .col-lg-8.up.py-5      
          p(data-aos="fade-down").mb-3.pt-5
            span.r--4.fst-italic Next, we are invited to listen to the following dialogue between two characters using some modal verbs. 
            span.r--gris / A continuación, se invita a escuchar el siguiente diálogo entre dos personajes utilizando algunos verbos modales.

          .contenedor-dialogo
            .contenedor-dialogo__titulo: img.img-w.img-a(src='@/assets/curso/temas/42.png', alt='').mb-0
            .contenedor-dialogo__dialogo.pt-0.p-5
              .tarjeta.bg-white.p-4(style='border-radius: 0px 0px 10px 10px')
                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    h3.mb-5(style='color: #FC5F65')  Carlos
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #FFDFE0')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd1  Hello, Andrea. Mrs. Gonzalez asked me if you were okay.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema2/d1/1.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                        p Hola, Andrea. La profesora González me preguntó si estabas bien.
                      a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción                       
                .row.justify-content-center.align-items-center.mb-3
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #E1E8FF')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd2  Hi, Carlos. Yeah, I’m fine but I had an asthma attack in the cafeteria and the school nurse said I might have another one later.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema2/d1/2.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                        p Hola, Carlos. Sí, estoy bien, pero tuve un ataque de asma en la cafetería y la enfermera de la escuela dijo que podría tener otro más tarde.
                      a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción                       
                  .col-auto
                    h3.mb-5(style='color: #3C3FA7 ')  Andrea

                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    h3.mb-5(style='color: #FC5F65')  Carlos
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #FFDFE0')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd1  Was it that bad?
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema2/d1/3.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                        p ¿Fue tan malo?
                      a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción                      
                .row.justify-content-center.align-items-center.mb-3
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #E1E8FF')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd2  Yes. She insisted that I should stay in the infirmary.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema2/d1/4.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                        p Sí. Ella insistió en que debía quedarme en la enfermería.

                      a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción                      
                  .col-auto
                    h3.mb-5(style='color: #3C3FA7 ')  Andrea                     
             
    h4(data-aos="fade-down").tblue.pt-5.mb-5 <i>Reported modal verbs</i> / Verbos modales reportados  

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-8.up.my-3      
        Traduccion.color-acento-botones(:dialogo="traduccion2")(data-aos="flip-up")   
      .col-lg-4.up.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')      

    h5(data-aos="fade-down").tblue1 <i>Direct Speech</i>/ Reporte directo
    p(data-aos="fade-down").mb-5 <i>Let’s see some examples of direct speech</i>:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.my-3
        .bg9.p-4.h-100.text-center.brad
          h5.mb-4 Must (obligation)
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/1.mp3')")
            p.mb-0.tblue  “The consumer #[b must pay]  extra for the added value of the product.”
      .col-lg-3.my-3
        .bg9.p-4.h-100.text-center.brad
          h5.mb-4 Can (ability)
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/2.mp3')")
            p.mb-0.tblue  “We #[b can’t]  work in two shifts.”
      .col-lg-3.my-3
        .bg9.p-4.h-100.text-center.brad
          h5.mb-4 May (possibility)
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/3.mp3')")
            p.mb-0.tblue  “Your package #[b may arrive]  next week.”
      .col-lg-3.my-3
        .bg9.p-4.h-100.text-center.brad
          h5.mb-4 Shall (suggestions and advice)
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/4.mp3')")
            p.mb-0.tblue  “I #[b shall go]  when I please.” 

    h5(data-aos="fade-down").tblue1 Reported Speech/ Reporte indirecto
    p(data-aos="fade-down").mb-5 Let’s see some examples of reported speech:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-3.my-3
        .bg10.p-4.h-100.text-center.brad
          h5.mb-4 Had to
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/5.mp3')")
            p.mb-0.tblue The businessman #[b admitted] (that) the consumer #[b had to pay] extra for the added value of the product.
      .col-lg-3.my-3
        .bg10.p-4.h-100.text-center.brad
          h5.mb-4 Could
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/6.mp3')")
            p.mb-0.tblue They #[b denied] (that) they #[b could work] in two shifts. 
      .col-lg-3.my-3
        .bg10.p-4.h-100.text-center.brad
          h5.mb-4 Might
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/7.mp3')")
            p.mb-0.tblue The seller #[b answered] (that) my package #[b might arrive] next week.
      .col-lg-3.my-3
        .bg10.p-4.h-100.text-center.brad
          h5.mb-4 Should
          .bgw.p-4.bradp.brad
            Audio.color-acento-botones.img-a.mb-4(:audio="require('@/assets/curso/audios/Tema2/8.mp3')")
            p.mb-0.tblue She #[b claimed] (that) she #[b should] go when she pleases.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-7.up.my-3      
        Traduccion.color-acento-botones(:dialogo="traduccion3")(data-aos="flip-up")   
      .col-lg-5.up.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.svg', alt='')   

    .bg11 
      img.img-a.img-t.pb-5.pb-md-0(data-aos="zoom-in")(src='@/assets/curso/temas/45.svg', alt='')  

      .row.justify-content-center.align-items-center.mb-4.bg12.mt-5.p-3
        .col-lg-6.up.my-3
          .row.justify-content-end.align-items-center
            .col-lg-6.up
              h4.my-4.tblue1.text-center Direct Speech 
              p.mb-4.text-center Have to
              TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                  texto="“The branding has to reflect the values of the company”."
                  :audio="require('@/assets/curso/audios/Tema2/9.mp3')"
                )
          .row.justify-content-start.align-items-center
            .col-lg-6.up.d-none.d-lg-block 
              img.img-a.img-t.sup(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')   

        .col-lg-6.up.brleft.my-3
          .row.justify-content-start.align-items-center
            .col-lg-6.up
              h4.my-4.tblue1.text-center Reported Speech 
              p.mb-4.text-center Had to
              TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                  texto="They stated (that) the branding had to reflect the values of the company."
                  :audio="require('@/assets/curso/audios/Tema2/10.mp3')"
                )
          .row.justify-content-end.align-items-center
            .col-lg-6.up.d-none.d-lg-block 
              img.img-a.img-t.sup(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='') 

        h4(data-aos="fade-down").mb-0.text-center.mt-4 SEMI-MODAL                              

    h4(data-aos="fade-down").tblue.pt-3.mb-5 <i>Modals that don’t change when reported</i> / Modales que no cambian cuando se reportan           

    p(data-aos="fade-down").mb-5
      span.r--4.fst-italic Let’s remember that some modal verbs change tense when they are reported, but not all of them. 
      span.r--gris / Recordemos que algunos verbos modales cambian de tiempo cuando se reportan, pero no todos ellos.

    img.img-a.img-t.pb-5(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg', alt='')  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
            texto="He said, “It must be very difficult to be a surgeon”."
            :audio="require('@/assets/curso/audios/Tema2/11.mp3')"
          ) 
        p Él dijo, “Debe ser muy difícil ser cirujano”.  
      .col-lg-3.my-3
        TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
            texto="He said that it must be very difficult to be a surgeon."
            :audio="require('@/assets/curso/audios/Tema2/12.mp3')"
          ) 
        p Él dijo que debe ser muy difícil ser cirujano.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        Traduccion.color-acento-botones(:dialogo="traduccion4")(data-aos="flip-up")

    p(data-aos="fade-down").mb-5
      span.r--4.fst-italic Let’s practice a little reporting modal verbs. Complete the following dialogue.
      span.r--gris / Practiquemos un poco reportar verbos modales. Complete el siguiente diálogo. 

    Dialogo.color-primario(:dialogo="dialogoAct")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad)  To practice modal verbs
      template(#descripcion-actividad) 

</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
import Traduccion from '../components/Traduccion.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema2',
  components: {
    Traduccion,
    TraduccionChat,
    traductor,
  },
  data: () => ({
    dial1: true,
    dial2: true,
    dial3: true,
    dial4: true,
    traduccion1: {
      dialogo: [
        {
          textoIng:
            '<em>Modal verbs are auxiliary verbs. This means that they don’t conjugate with the grammatical persons, so: they don’t  have an infinitive, gerund, or participle.<br><br>A modal verb can express ability, need, condition or “modality” (yes, complex ideas!), hence its meaning depends on the context of the sentence and the verbs with which they are conjugated. The most used modal verbs in English are: can, could, may, might, will, would, must, shall, should, and ought to.<br><br>When we use the reported speech  we want to relay what someone else has previously said, but we don’t use the exact words because we focus more on the idea of the message rather than the exact words. And just like verb tenses do, some modals, in reported speech, also shift back </em>',
          textoEsp:
            'Los <em>modal verbs</em> son verbos auxiliares, esto quiere decir que no se conjugan con las personas gramaticales, por lo que no tienen infinitivo, gerundio o participio.<br><br>Un modal verb puede expresar habilidad, necesidad, condición o "modalidad" (sí, ¡ideas complejas!), de ahí que su significado dependa del contexto de la oración y de los verbos con los que se conjuga. Los modal verbs más usados en inglés son: <em>can, could, may, might, will, would, must, shall, should</em> y <em>ought to</em>.<br><br>Cuando usamos el discurso indirecto, queremos retransmitir lo que dijo previamente otra persona, pero no usamos las palabras exactas, porque nos enfocamos más en la idea del mensaje que en las palabras exactas. Y al igual que los tiempos verbales, algunos modales, en el discurso indirecto, también retroceden en el tiempo.',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>We use modal verbs before a main verb to give it an extra meaning of ability, possibility, certainty, permission, requirements, suggestions, and advice. And when used in reported speech, there are some modal verbs that change tense.</em>',
          textoEsp:
            'Usamos los verbos modales antes de un verbo principal para darle un sentido de capacidad, posibilidad, certeza, permiso, requisitos, sugerencias y consejos. Y cuando se usan en el discurso indirecto, hay algunos verbos modales que cambian de tiempo.',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em><span>“Have to”</span> is a semi-modal verb that is used very frequently in English to express general obligations and less forceful than those expressed by <span>“must”. “Have to”</span> is considered to be <span>semi-modal</span> because it does not strictly follow the rules for modal verbs.</em>',
          textoEsp:
            '"<em><b>Have to</em></b>" es un verbo <em><b>semi-modal</em></b> que se usa muy frecuentemente en inglés para expresar obligaciones generales y menos contundentes que las que expresa "<em><b>must</em></b>". Se considera que "<em><b>have to</em></b>" es un <em><b>semi-modal</em></b> porque no sigue rigurosamente las reglas de los verbos modales.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>According to formal grammar rules, certain modals should definitely change, though in everyday conversation many native speakers do not change the modals. </em>',
          textoEsp:
            'Según las reglas de la gramática formal, ciertos modales definitivamente deberían cambiar, aunque en la conversación diaria muchos hablantes nativos no cambian los modales.',
        },
      ],
    },
    dialogoAct: {
      personajes: [
        {
          nombre: 'Carlos',
          img: require('@/assets/curso/temas/aa.svg'),
        },
        {
          nombre: 'Andrea',
          img: require('@/assets/curso/temas/cc.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Carlos',
          textoIng: 'Is there anything I *** help you with?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema2/act/1.mp3'),
          palabra: 'can',
        },

        {
          personaje: 'Andrea',
          textoIng:
            'Actually, there is. Can you bring me my books? Ms. Gonzalez warned me that I *** to finish and submit my essay today.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema2/act/2.mp3'),
          palabra: 'had',
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
