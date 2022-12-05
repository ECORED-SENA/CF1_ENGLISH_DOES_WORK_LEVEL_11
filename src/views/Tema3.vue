<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <i>Blending sounds like a native</i> (Ligando sonidos como un nativo)
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-7.up.my-3      
        Traduccion.color-acento-botones(:dialogo="traduccion1")(data-aos="flip-up")   
      .col-lg-5.up.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')      

    .bg13
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/8-MtH7I_h9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p(data-aos="fade-down").mb-5
        span.r--4.fst-italic Let’s see how a connected speech is used in order to be able to interact in a dialogue using the reduction of words when speaking in an everyday conversation. Let’s see an example: 
        span.r--gris  / Veamos cómo se utiliza un discurso conectado con el fin de poder interactuar en un diálogo usando la reducción de palabras al hablar en una conversación cotidiana. Observe el siguiente ejemplo:    

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-3.p-0
          img(data-aos="zoom-in")(src='@/assets/curso/temas/53.svg', alt='') 
        .col-lg-6.p-0
          .contenedor-dialogo
            .contenedor-dialogo__titulo
            .contenedor-dialogo__dialogo
              .tarjeta.bgw.p-4(style='border-radius: 0px 0px 0px 0px')
                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    h3.mb-5(style='color: #FC5F65')  Clara
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #FFDFE0')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd1  Nice to meet you. I am Clara.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema3/d3/1.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                        p Un placer conocerte. Soy clara.
                      a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción                       
                .row.justify-content-center.align-items-center.mb-3
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #E1E8FF')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd2  Pleased to meet you, Clara. Are you enjoying the conference so far?
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema3/d3/2.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                        p Encantado de conocerte, Clara. ¿Estás disfrutando de la conferencia hasta el momento?
                      a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción                       
                  .col-auto
                    h3.mb-5(style='color: #3C3FA7 ')  Benjamin

                .row.justify-content-center.align-items-center.mb-3
                  .col-auto
                    h3.mb-5(style='color: #FC5F65')  Clara
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #FFDFE0')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd1  Not at all. I have an appointment or meeting every 20 minutes.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema3/d3/3.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                        p En lo absoluto. Tengo una cita cada 20 minutos.
                      a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción                      
                .row.justify-content-center.align-items-center.mb-3
                  .col 
                    .contenedor-traductor.mb-5(style='background-color: #E1E8FF')
                      .contenedor-traductor__eng.d-flex.justify-content-between
                        p.mb-0.fst-italic.pd2  I agree with you. It's too much work.
                        Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema3/d3/4.mp3')")
                      .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                        p Estoy de acuerdo contigo. Es demasiado trabajo.

                      a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción                      
                  .col-auto
                    h3.mb-5(style='color: #3C3FA7 ')  Benjamin  

    .bg14
      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6.up.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg', alt='')  
        .col-lg-6.up.my-3      
          Traduccion.color-acento-botones(:dialogo="traduccion2")(data-aos="flip-up")
      p(data-aos="fade-down").mb-5
        span.r--4.fst-italic In this lesson, you’ll learn a bit about three different ways sounds are linked in the connected speech: catenation, intrusion, and gemination. Let’s see some examples: 
        span.r--gris / En esta lección, aprenderá un poco sobre tres formas diferentes en que los sonidos se vinculan en el habla conectada: concatenación, intrusión y geminación. Veamos algunos ejemplos: 

      TabsA.color-acento-botones.mb-5 
        .tarjeta.color-acento-botones--borde.p-4(titulo="<i>Catenation</i> / Concatenación")
          h4.mb-4 <i>Catenation</i> / Concatenación
          Traduccion.color-acento-botones.mb-4(:dialogo="traduccion3")
          h5.text-center <em>For example:</em> / Por ejemplo:           
          .row.justify-content-center.align-items-center
            .col-lg-4.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg', alt='') 
            .col-lg-7.my-3
              .row.justify-content-center.align-items-center
                .col-lg-6         
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="an egg → / a<span>ne</span>gg /"
                      :audio="require('@/assets/curso/audios/Tema3/1.mp3')"
                    )
                  p.fst-italic.mb-5 un huevo    
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="hang out → / han<span>go</span>ut /"
                      :audio="require('@/assets/curso/audios/Tema3/3.mp3')"
                    )
                  p.fst-italic pasar el rato  
                .col-lg-6          
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="clean up → / clea<span>nu</span>p /"
                      :audio="require('@/assets/curso/audios/Tema3/2.mp3')"
                    )
                  p.fst-italic.mb-5 limpiar  
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="hold on → / hol<span>do</span>n /"
                      :audio="require('@/assets/curso/audios/Tema3/5.mp3')"
                    )
                  p.fst-italic aguantar      

        .tarjeta.color-acento-botones--borde.p-4(titulo="<i>Intrusion</i> / Intrusión")
          h4.mb-4 <i>Intrusion</i> / Intrusión
          Traduccion.color-acento-botones.mb-4(:dialogo="traduccion4")
          h5.text-center <em>For example:</em> / Por ejemplo:           
          .row.justify-content-center.align-items-center
            .col-lg-4.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.svg', alt='') 
            .col-lg-7.my-3
              .row.justify-content-center.align-items-center
                .col-lg-6         
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="to eat → to /<span>w</span>/ eat"
                      :audio="require('@/assets/curso/audios/Tema3/6.mp3')"
                    )
                  p.fst-italic.mb-5 comer    
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="do it → do/<span>w</span>/ it"
                      :audio="require('@/assets/curso/audios/Tema3/8.mp3')"
                    )
                  p.fst-italic hazlo  
                .col-lg-6          
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="I agree → I /<span>j</span>/ agree"
                      :audio="require('@/assets/curso/audios/Tema3/7.mp3')"
                    )
                  p.fst-italic.mb-5 Estoy de acuerdo    
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="go on → go /<span>w</span>/ on"
                      :audio="require('@/assets/curso/audios/Tema3/9.mp3')"
                    )
                  p.fst-italic continúa

        .tarjeta.color-acento-botones--borde.p-4(titulo="<i>Geminate consonants</i> / Consonantes geminadas")
          h4.mb-4 <i>Geminate consonants</i> / Consonantes geminadas
          Traduccion.color-acento-botones.mb-4(:dialogo="traduccion5")
          h5.text-center <em>For example:</em> / Por ejemplo:           
          .row.justify-content-center.align-items-center
            .col-lg-4.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.svg', alt='') 
            .col-lg-7.my-3
              .row.justify-content-center.align-items-center
                .col-lg-6         
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="single ladies → / singlladies /"
                      :audio="require('@/assets/curso/audios/Tema3/10.mp3')"
                    )
                  p.fst-italic.mb-5 mujeres solteras    
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="not too → / nottoo / "
                      :audio="require('@/assets/curso/audios/Tema3/12.mp3')"
                    )
                  p.fst-italic no demasiado  
                .col-lg-6          
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="social life → / sociallife /"
                      :audio="require('@/assets/curso/audios/Tema3/11.mp3')"
                    )
                  p.fst-italic.mb-5 vida social 
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="how was → / howwas /"
                      :audio="require('@/assets/curso/audios/Tema3/13.mp3')"
                    )
                  p.fst-italic cómo fue                  

    p(data-aos="fade-down").mb-5.pt-5
      span.r--4.fst-italic Now let’s test how much you learned about connected speech and how to blend sounds and words. Listen to the following dialogue  and take it to practice.
      span.r--gris / Ahora, probemos cuánto aprendió sobre el discurso conectado y cómo combinar sonidos y palabras. Escuche el siguiente diálogo y llévelo a la práctica.

    Dialogo.color-primario(:dialogo="dialogoAct")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad)  Regrets
      template(#descripcion-actividad)       
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
import Traduccion from '../components/Traduccion.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema3',
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
            '<em>First of all, you have to understand that reading in English is very different from speaking in English; and that even speaking English naturally is very different from speaking English slowly.<br><br>In English, words interact with each other, modifying each other. We reduce the words when we speak, we contract them, we mix them, we modify them. That is connected speech: it is a spoken language, fluid and continuous, like that of an everyday conversation; and it is called connected speech because the words are linked to each other.  You are invited to explore the video below:</em>',
          textoEsp:
            'Antes que nada, se debe entender que leer en inglés es muy diferente a hablar en inglés, y que incluso hablar inglés naturalmente es muy diferente de hablar inglés lentamente.<br><br>En inglés, las palabras interactúan entre sí, modificándose entre ellas mismas. Reducimos las palabras cuando hablamos, las contraemos, las mezclamos, las modificamos. Eso es el habla conectada: un lenguaje hablado, fluido y continuo, como el de una conversación cotidiana, y se llama discurso conectado porque las palabras están enlazadas entre sí.  Se le invita a explorar el video que se presenta a continuación:',
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>Speech is a continuous stream of sounds, and these sounds have no clear boundaries between them. It is for this reason that the following aspects of connected speech explain to us to some extent why written English is so different and easier to understand than spoken English.<br><br>There are many different aspects and forms of connected speech. Sometimes, sounds are added, or omitted, or changed, or lengthened in different ways.  It is actually a big subject, and we could spend a long time talking about the several subtopics in it!</em>',
          textoEsp:
            'El habla es un flujo continuo de sonidos, y estos sonidos no tienen límites claros entre ellos. Es por este motivo que los siguientes aspectos del discurso conectado nos explican, en cierta medida, por qué el inglés escrito es tan diferente y más sencillo de entender que el inglés hablado.<br><br>Hay muchos aspectos y formas diferentes de discurso conectado. A veces, los sonidos se agregan, se omiten, se cambian o se alargan de diferentes maneras. En realidad, es un gran tema, ¡y podríamos pasar mucho tiempo hablando de los varios subtemas que contiene!',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>Catenation is one of the ways that speakers join words together. In this aspect of connected speech, a consonant sound at the end of a word is joined to a vowel sound at the beginning of the next word.</em>',
          textoEsp:
            'En esta lección, aprenderá un poco sobre tres formas diferentes en que los sonidos se vinculan en el habla conectada: concatenación, intrusión y geminación. Veamos algunos ejemplos:',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>Intrusion is a characteristic of connected speech. When two words are said together and two vowel sounds are found between them, an additional sound (similar <span>to /j/, /w/, or /r/</span>) is sometimes placed between them to make them easier to pronounce. This sound is called <span>“intrusion”</span>.</em>',
          textoEsp:
            'La intrusión es una característica del discurso conectado. Cuando dos palabras se dicen juntas y dos sonidos de vocales se encuentran entre ellas, a veces se coloca un sonido adicional entre ellas  (parecido a / j /, / w / o / r /) para que sean más fáciles de pronunciar. Este sonido es al que se le denomina "intrusión".',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>Geminate consonants are a double or long consonant sound, which, in connected speech, occurs when a first word ends with the same consonant sound that the next word begins with. In these cases, we join the sounds and lengthen them.</em>',
          textoEsp:
            'Las consonantes geminadas son un sonido de consonante doble o largo, que, en el discurso conectado, ocurre cuando una primera palabra termina con el mismo sonido de consonante con el que comienza la siguiente palabra. En estos casos, juntamos los sonidos y los alargamos.',
        },
      ],
    },
    dialogoAct: {
      personajes: [
        {
          nombre: 'Benjamin',
          img: require('@/assets/curso/temas/b.svg'),
        },
        {
          nombre: 'Clara',
          img: require('@/assets/curso/temas/c.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Benjamin',
          textoIng: 'And how was your last meeting? *** boring, I hope.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema3/act/1.mp3'),
          palabra: 'Not too',
        },

        {
          personaje: 'Clara',
          textoIng: 'No, it wasn’t boring ***. It was very interesting.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema3/act/2.mp3'),
          palabra: 'at all',
        },
        {
          personaje: 'Benjamin',
          textoIng:
            'Oh, well… I hope that the conference will *** giving you interesting meetings.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema3/act/3.mp3'),
          palabra: 'go on',
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
