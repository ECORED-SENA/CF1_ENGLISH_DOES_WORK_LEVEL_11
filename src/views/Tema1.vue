<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <i>Use of reporting verbs in the past, present, and future tenses</i> (Uso de los verbos para reportar en los tiempos pasado, presente y futuro)
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-7.p-0.up.my-3      
        Traduccion.color-acento-botones(:dialogo="traduccion1")(data-aos="flip-up")   
      .col-lg-5.up.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.jpg', alt='')             

    .bg2.mb-5
      .col-12.px-5.pt-5
        p(data-aos="fade-down") #[i The following dialogue will allow us to enter the theme. When we want to report what people say, we use reporting verbs. Different reporting verbs have different patterns. For example:]
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3.p-0
            figure
              img(src="@/assets/curso/temas/7.svg", style="")
          .col-lg-6.p-0
            .contenedor-dialogo
              .contenedor-dialogo__titulo
              .contenedor-dialogo__dialogo
                .tarjeta.bgw.p-4(style='border-radius: 0px 0px 0px 0px')
                  .row.justify-content-center.align-items-center.mb-3
                    .col-auto
                      h3.mb-5(style='color: #FC5F65')  Isabel
                    .col 
                      .contenedor-traductor.mb-5(style='background-color: #FFDFE0')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.mb-0.fst-italic.pd1  I went to the doctor. He advised me to change my diet
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema1/1/1.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial1}")
                          p Fui al doctor. Me aconsejó que cambiara mi dieta.
                        a.boton-traduccion(@click='dial1 = !dial1' style='background-color: #fed947') Ver traducción                       
                  .row.justify-content-center.align-items-center.mb-3
                    .col 
                      .contenedor-traductor.mb-5(style='background-color: #E1E8FF')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.mb-0.fst-italic.pd2  Really? Why? What reason did he give you?
                          Audio.color-acento-botones.mx-3(:audio="require('@/assets/curso/audios/Tema1/1/2.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial2}")
                          p ¿En serio? ¿Por qué? ¿Qué razón te dio?
                        a.boton-traduccion(@click='dial2 = !dial2' style='background-color: #fed947') Ver traducción                       
                    .col-auto
                      h3.mb-5(style='color: #3C3FA7 ') Antonio

                  .row.justify-content-center.align-items-center.mb-3
                    .col-auto
                      h3.mb-5(style='color: #FC5F65')  Isabel
                    .col 
                      .contenedor-traductor.mb-5(style='background-color: #FFDFE0')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.mb-0.fst-italic.pd1  He insisted I fainted because I have a nutritional imbalance and that sugar is causing my migraines.
                          Audio.color-acento-botones.mx-3.aw(:audio="require('@/assets/curso/audios/Tema1/1/3.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial3}")
                          p Insistió en que me desmayé porque tengo un desequilibrio nutricional y que el azúcar está causando mis migrañas.
                        a.boton-traduccion(@click='dial3 = !dial3' style='background-color: #fed947') Ver traducción                      
                  .row.justify-content-center.align-items-center.mb-3
                    .col 
                      .contenedor-traductor.mb-5(style='background-color: #E1E8FF')
                        .contenedor-traductor__eng.d-flex.justify-content-between
                          p.mb-0.fst-italic.pd2  Maybe he’s right. He is a really good doctor, very professional.
                          Audio.color-acento-botones.mx-3.aw1(:audio="require('@/assets/curso/audios/Tema1/1/4.mp3')")
                        .contenedor-traductor__esp(:class="{ mostrar: dial4}")
                          p Tal vez tenga razón. Él es un muy buen médico, muy profesional.

                        a.boton-traduccion(@click='dial4 = !dial4' style='background-color: #fed947') Ver traducción                      
                    .col-auto
                      h3.mb-5(style='color: #3C3FA7 ') Antonio    
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')        
      .col-lg-7.p-0      
        Traduccion.color-acento-botones(:dialogo="traduccion2")(data-aos="flip-up")   
      
    .bg3 
      h4.mb-4.pt-4 How to identify indirect speech in a sentence. 
      Traduccion.color-acento-botones(:dialogo="traduccion3")(data-aos="flip-up")  

      .row.justify-content-center.mb-5
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/11.png', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  h5.mb-3.text-center Present Simple 
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="I want to apply for a new job"
                      :audio="require('@/assets/curso/audios/Tema1/1.mp3')"
                    )
                  p.mb-0 Quiero aplicar a un nuevo trabajo.
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/12.png', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  h5.mb-3.text-center Direct Speech               
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="He said, “I want to apply for a new job.”"
                      :audio="require('@/assets/curso/audios/Tema1/2.mp3')"
                    )
                  p.mb-0 Él dijo, “quiero aplicar a un nuevo trabajo”.
        .col-lg-4
          .tarjeta-avatar
            img(src='@/assets/curso/temas/13.png', alt='' style="width: 300px") 
            .bg-tarjeta.p-4.rounded-3
              .tarjeta(style="background-color: #F0F4FF; margin-top: 140px").w-100.p-4
                  h5.mb-3.text-center Reported Speech               
                  TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                      texto="He said that he wanted to apply for a new job."
                      :audio="require('@/assets/curso/audios/Tema1/3.mp3')"
                    )
                  p.mb-0 Él dijo que quería aplicar a un nuevo trabajo.

      h4.mb-5.tblue Verb tense changes in reported speech / Cambios de tiempo verbal en el estilo indirecto
      Traduccion.color-acento-botones(:dialogo="traduccion4")(data-aos="flip-up") 

      .row.justify-content-center.mb-5
        .col-lg-10
          .d-flex
            img(src='@/assets/curso/temas/14.svg', alt='' ).h-100
            .bg-white.p-5.w-100
              SlyderA(tipo='b')
                div
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      h4.mb-3.text-center.tblue1 Direct Speech 
                      p.mb-3.text-center Present simple             
                      TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                          texto="“My friend <span>lies</span> in his resume”."
                          :audio="require('@/assets/curso/audios/Tema1/4.mp3')"
                        )
                                    
                      h4.mb-3.text-center.tblue1 Reported Speech
                      p.mb-3.text-center Past simple            
                      TarjetaAudio.color-acento-botones.bg-white.mx-1(
                          texto="She <span>said</span> (that) her friend <span>lied</span> in his resume."
                          :audio="require('@/assets/curso/audios/Tema1/5.mp3')"
                        )

                div
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      h4.mb-3.text-center.tblue1 Direct Speech
                      p.mb-3.text-center Present continuous          
                      TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                          texto="“We <span>are working</span> overtime”."
                          :audio="require('@/assets/curso/audios/Tema1/6.mp3')"
                        )
                                    
                      h4.mb-3.text-center.tblue1 Reported Speech
                      p.mb-3.text-center Past continuous      
                      TarjetaAudio.color-acento-botones.bg-white.mx-1(
                          texto="They <span>said</span> (that) they <span>were working</span> overtime."
                          :audio="require('@/assets/curso/audios/Tema1/7.mp3')"
                        )

                div
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      h4.mb-3.text-center.tblue1 Direct Speech 
                      p.mb-3.text-center Present perfect             
                      TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                          texto="“I <span>have found</span> some great bargains”."
                          :audio="require('@/assets/curso/audios/Tema1/8.mp3')"
                        )
                                      
                      h4.mb-3.text-center.tblue1 Reported Speech
                      p.mb-3.text-center Past perfect         
                      TarjetaAudio.color-acento-botones.bg-white.mx-1(
                          texto="You <span>said</span> (that) you <span>had found</span> some great bargains."
                          :audio="require('@/assets/curso/audios/Tema1/9.mp3')"
                        )

                div
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      h4.mb-3.text-center.tblue1 Direct Speech 
                      p.mb-3.text-center Past simple           
                      TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                          texto="“I <span>went</span> for a job interview at a new company”."
                          :audio="require('@/assets/curso/audios/Tema1/10.mp3')"
                        )
                                    
                      h4.mb-3.text-center.tblue1 Reported Speech
                      p.mb-3.text-center Past perfect         
                      TarjetaAudio.color-acento-botones.bg-white.mx-1(
                          texto="She <span>said</span> (that) she <span>had gone</span> for a job interview at a new company."
                          :audio="require('@/assets/curso/audios/Tema1/11.mp3')"
                        )

                div
                  .row.justify-content-center.mb-5
                    .col-lg-10
                      h4.mb-3.text-center.tblue1 Direct Speech 
                      p.mb-3.text-center Will         
                      TarjetaAudio.color-acento-botones.mb-3.bg-white.mx-1(
                          texto="“Our products <span>will be</span> eco-friendly”."
                          :audio="require('@/assets/curso/audios/Tema1/12.mp3')"
                        )
                                      
                      h4.mb-3.text-center.tblue1 Reported Speech
                      p.mb-3.text-center Would        
                      TarjetaAudio.color-acento-botones.bg-white.mx-1(
                          texto="They <span>said</span> (that) their products <span>would be</span> eco-friendly."
                          :audio="require('@/assets/curso/audios/Tema1/13.mp3')"
                        )                                                                              

    .pt-5
    p(data-aos="fade-down").mb-5.pt-5 
      span.r--4.fst-italic Below are some warnings to identify the correct use of "that": 
      span.r--gris / A continuación, se brindan algunas recomendaciones para identificar el uso correcto de “<i>that</i>”: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12
        .tarjeta.position-relative(data-aos="flip-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3
              .imagen-absolute
                img(data-aos="zoom-in")(src='@/assets/curso/temas/15.svg', alt='')
            .col-lg-10.bg4.p-4.ps-5
              p(data-aos="fade-down").mb-0.ps-5 
                span.r--white.fst-italic The word “<i>that</i>” is enclosed in parenthesis to show that it is optional. The meaning is exactly the same whether you use “that” or don’t use it. 
                span.r--black / La palabra “<i>that</i>” está entre paréntesis para mostrar que es opcional. El significado es exactamente el mismo si usa “<i>that</i>” o si no la usa.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        p(data-aos="fade-down")
          span.r--4.fst-italic You have to take into account the idea and intention of the information cited, since sometimes, when reporting it, a change of tense is not necessary. 
          span.r--gris / Se debe tener en cuenta la idea y la intención de la información citada, porque a veces, al reportarla, no es necesario un cambio de tiempo.  
        p(data-aos="fade-down").text-center.my-5
          span.r--4.fst-italic For example: 
          span.r--gris / Por ejemplo: 
        .row.justify-content-center.align-items-center.mb-5           
          .col-lg-6
            .bg5.h-100.p-4
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')        
              h5.tblue.mb-4.text-center Direct speech
              TarjetaAudio.color-acento-botones.bg-white.mb-4.mx-1(
                  texto="He said, “I check the inventory every week.”"
                  :audio="require('@/assets/curso/audios/Tema1/14.mp3')"
                )               
              p.mb-0 Él dijo, “yo reviso el inventario todas las semanas”.                   
          .col-lg-6
            .bg5.h-100.p-4
              img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')        
              h5.tblue.mb-4.text-center Reported Speech
              TarjetaAudio.color-acento-botones.bg-white.mb-4.mx-1(
                  texto="He said that he checks the inventory every week."
                  :audio="require('@/assets/curso/audios/Tema1/15.mp3')"
                )               
              p.mb-0 Él dijo que revisa el inventario todas las semanas.                   
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')                
      .col-lg-8
        p(data-aos="fade-down")
          span.r--4.fst-italic In this example, checking the inventory is implied as a habitual action, which is repeated with some regularity. Therefore, you still need to retain the present tense of the verb. 
          span.r--gris / En este ejemplo, revisar el inventario se implica como una acción habitual, que se repite con cierta regularidad, por lo tanto, debe retener el tiempo presente del verbo.         

    .bg6
      h4.mb-4.pt-4.tblue Other reporting verbs / Otros verbos para reportar
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-8      
          Traduccion.color-acento-botones(:dialogo="traduccion5")(data-aos="flip-up") 
        .col-lg-4      
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')  

      .row.justify-content-center.mb-5
        .col-lg-8
          .bgw.p-5.w-100.brad
            SlyderA(tipo='b')
              div
                .row.justify-content-center
                  .col-lg-6
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')  

                  .col-lg-6
                    h4.mb-4.text-center.tblue1 Direct Speech 
                    p.mb-4.text-center Present simple             
                    TarjetaAudio.color-acento-botones.mb-5.bg-white.mx-1(
                        texto="“My friend <span>lies</span> in his resume”."
                        :audio="require('@/assets/curso/audios/Tema1/16.mp3')"
                      )
                                  
                    h4.mb-4.text-center.tblue1 Reported Speech
                    p.mb-4.text-center Past simple            
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="She <span>admitted</span> (that) her friend <span>lied</span> in his resume."
                        :audio="require('@/assets/curso/audios/Tema1/17.mp3')"
                      )                        
              div
                .row.justify-content-center
                  .col-lg-6
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')  

                  .col-lg-6
                    h4.mb-4.text-center.tblue1 Direct Speech 
                    p.mb-4.text-center Present continuous           
                    TarjetaAudio.color-acento-botones.mb-5.bg-white.mx-1(
                        texto="“We <span>are working</span> overtime”."
                        :audio="require('@/assets/curso/audios/Tema1/18.mp3')"
                      )
                                  
                    h4.mb-4.text-center.tblue1 Reported Speech
                    p.mb-4.text-center Past continuous        
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="They <span>complained</span> (that) they <span>were working</span> overtime."
                        :audio="require('@/assets/curso/audios/Tema1/19.mp3')"
                      ) 
              div
                .row.justify-content-center
                  .col-lg-6
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')  

                  .col-lg-6
                    h4.mb-4.text-center.tblue1 Direct Speech 
                    p.mb-4.text-center Present perfect          
                    TarjetaAudio.color-acento-botones.mb-5.bg-white.mx-1(
                        texto="“I <span>have found</span> some great bargains”."
                        :audio="require('@/assets/curso/audios/Tema1/20.mp3')"
                      )
                                  
                    h4.mb-4.text-center.tblue1 Reported Speech
                    p.mb-4.text-center Past perfect  
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="You <span>claimed</span> (that) you <span>had found</span> some great bargains."
                        :audio="require('@/assets/curso/audios/Tema1/21.mp3')"
                      ) 
              div
                .row.justify-content-center
                  .col-lg-6
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')  

                  .col-lg-6
                    h4.mb-4.text-center.tblue1 Direct Speech 
                    p.mb-4.text-center Past simple           
                    TarjetaAudio.color-acento-botones.mb-5.bg-white.mx-1(
                        texto="“I <span>went</span> for a job interview at a new company”."
                        :audio="require('@/assets/curso/audios/Tema1/22.mp3')"
                      )
                                  
                    h4.mb-4.text-center.tblue1 Reported Speech
                    p.mb-4.text-center Past perfect            
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="She <span>answered</span> (that) she <span>had gone</span> for a job interview at a new company."
                        :audio="require('@/assets/curso/audios/Tema1/23.mp3')"
                      ) 
              div
                .row.justify-content-center
                  .col-lg-6
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')  

                  .col-lg-6
                    h4.mb-4.text-center.tblue1 Direct Speech 
                    p.mb-4.text-center Will          
                    TarjetaAudio.color-acento-botones.mb-5.bg-white.mx-1(
                        texto="“Our products <span>will be</span> eco-friendly”."
                        :audio="require('@/assets/curso/audios/Tema1/24.mp3')"
                      )
                                  
                    h4.mb-4.text-center.tblue1 Reported Speech
                    p.mb-4.text-center Would        
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="They <span>promised</span> (that) their products <span>would be</span> eco-friendly."
                        :audio="require('@/assets/curso/audios/Tema1/25.mp3')"
                      ) 
    p(data-aos="fade-down").mb-5
      span.r--4.fst-italic Some of these reporting verbs seem a bit more difficult to use than ‘“say”, “tell”, and “ask”, but it’s just a matter of learning the verb patterns or structures. 
      span.r--gris / Algunos de estos verbos para reportar parecen un poco más difíciles de usar que ‘“say”, “tell” y “ask”, pero solo es cuestión de aprender los patrones o estructuras verbales.
    .bg7
      .row.justify-content-center.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-3
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor(style='height: 369px')
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/27.png')})`}")
              .tarjeta-flip__contenido.p-4.text-center
                div
                  p Agree
                  p Claim
                  p Offer
                  p Promise
                  p Refuse
                  p Swear
                  p Threaten
                  p Decide              

        .col-sm-6.col-xl-3.mb-4.mb-xl-3
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor(style='height: 369px')
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/28.png')})`}")
              .tarjeta-flip__contenido.p-4.text-center
                div
                  p Advise
                  p Beg
                  p Convince
                  p Encourage
                  p Forbid
                  p Invite
                  p Order
                  p Recommend
        .col-sm-6.col-xl-3.mb-4.mb-xl-3
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor(style='height: 369px')
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/29.png')})`}")
              .tarjeta-flip__contenido.p-4.text-center
                div
                  p Accuse somebody of
                  p Apologize (to somebody) for
                  p Blame (somebody) for
                  p Complain about
                  p Confess to
                  p Deny
                  p Admit
                  p Insist on
        .col-sm-6.col-xl-3.mb-4.mb-xl-3
          .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor(style='height: 369px')
              .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/30.png')})`}")
              .tarjeta-flip__contenido.p-4.text-center
                div
                  p Admit
                  p Agree
                  p Answer
                  p Claim
                  p Complain
                  p Confess
                  p Explain
                  p Suggest 

      .row.justify-content-center.mb-5
        .col-lg-5
          Traduccion.color-acento-botones(:dialogo="traduccion6")(data-aos="flip-up") 
        .col-lg-7
          .bgw.p-5.w-100.brad
            SlyderA(tipo='b')
              div
                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')
                  .col-lg-8
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="They <span>refused to order</span> materials from that supplier."
                        :audio="require('@/assets/curso/audios/Tema1/26.mp3')"
                      )
                    p.mt-4 Ellos se negaron a pedir materiales a ese proveedor.

                .row.justify-content-center.align-items-center
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')  
                  .col-lg-8          
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="The workers <span>threatened to stop</span> working."
                        :audio="require('@/assets/curso/audios/Tema1/27.mp3')"
                      )
                    p.mt-4 Los trabajadores amenazaron con dejar de trabajar.
              div
                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')
                  .col-lg-8
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="The customer <span>reminded the salesman to wrap</span> the box in gift paper."
                        :audio="require('@/assets/curso/audios/Tema1/28.mp3')"
                      )
                    p.mt-4 El cliente le recordó al vendedor que envolviera la caja en papel de regalo.

                .row.justify-content-center.align-items-center
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')  
                  .col-lg-8          
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="The hairdresser <span>warned</span> me not <span>to get</span> my hair wet."
                        :audio="require('@/assets/curso/audios/Tema1/29.mp3')"
                      )
                    p.mt-4 El peluquero me advirtió que no me mojara el pelo.
              div
                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')
                  .col-lg-8
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="The shipping company <span>apologized</span> to us <span>for</span> not <span>delivering</span> the package on time."
                        :audio="require('@/assets/curso/audios/Tema1/30.mp3')"
                      )
                    p.mt-4 La empresa transportadora se disculpó con nosotros por no entregar el paquete a tiempo.

                .row.justify-content-center.align-items-center
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')  
                  .col-lg-8          
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="The client <span>blamed</span> her bank <span>for blocking</span> the purchase with her credit card."
                        :audio="require('@/assets/curso/audios/Tema1/31.mp3')"
                      )
                    p.mt-4 La cliente culpó a su banco por bloquear la compra con su tarjeta de crédito.
              div
                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')
                  .col-lg-8
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="They <span>agreed that</span> their factory would use recycled materials."
                        :audio="require('@/assets/curso/audios/Tema1/32.mp3')"
                      )
                    p.mt-4 Ellos acordaron que su fábrica utilizaría materiales reciclados.

                .row.justify-content-center.align-items-center
                  .col-lg-4
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')  
                  .col-lg-8          
                    TarjetaAudio.color-acento-botones.bg-white.mx-1(
                        texto="The employees <span>denied that</span> they had accepted a wage cut."
                        :audio="require('@/assets/curso/audios/Tema1/33.mp3')"
                      )
                    p.mt-4 Los empleados negaron haber aceptado un recorte salarial.                                  
    p(data-aos="fade-down").mb-5.pt-5
      span.r--4.fst-italic Now it’s your turn to use the reporting verbs. Complete the following dialogue.
      span.r--gris / Ahora es su turno de usar los verbos para reportar. Complete el siguiente diálogo. 

    Dialogo.color-primario(:dialogo="dialogoAct")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad)  To practice modal verbs
      template(#descripcion-actividad) 

    p(data-aos="fade-down").mb-5.pt-5
      span.r--4.fst-italic Now let’s see this storyboard where Luisa reports to Ana what the boss said at the last meeting.
      span.r--gris / Y veamos este guion gráfico en el que Luisa le reporta a Ana lo que el jefe dijo en la última reunión.

    .row.justify-content-center.align-items-center       
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/WWaSlqOWFFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
</template>

<script>
import traductor from '@/components/tarjetaTraductor.vue'
import Traduccion from '../components/Traduccion.vue'
import TraduccionChat from '../components/TraduccionChat.vue'
export default {
  name: 'Tema1',
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
            '<em>Sometimes someone says something, for example “I’m working in a law firm””. And later, we’re going to tell someone else what the first person said.<br>This is where the topic of how to change direct speech (“I’m working in a law firm”) into reported speech (Camila said she was working in a law firm) comes in, for which the most common verbs are “<span>say</span>”, “<span>tell</span>”, and “<span>ask</span>”. But these are not the only verbs to report what someone said, we can also use others, such as “promise”, “warn”, “advise”, and “recommend”.</em>',
          textoEsp:
            'A veces, alguien dice algo, por ejemplo: “Estoy trabajando en una oficina de abogados”. Y más tarde, vamos a contarle a alguien más lo que dijo la primera persona. <br>Es aquí donde entra el tema de cómo cambiar el discurso directo (“Estoy trabajando en una oficina de abogados”) en discurso indirecto (Camila dijo que estaba trabajando en una oficina de abogados), siendo para esto los verbos más comunes “<span><em>say</span></em>”, “<span><em>tell</span></em>” y “<span><em>ask<span><em>”. Pero estos no son los únicos verbos para informar lo que alguien dijo, también podemos usar otros, como “<span><em>promise</span></em>”, “<span><em>warn</span></em>”, “<span><em>advise<span><em>” y “<span><em>recommend</span></em>”.',
        },
      ],
    },
    dialogoChat: {
      personajes: [
        {
          nombre: 'Antonio',
          img: require('@/assets/curso/temas/p1.png'),
        },
        {
          nombre: 'Isabel',
          img: require('@/assets/curso/temas/p2.png'),
        },
      ],
      dialogo: [
        {
          personaje: 'Isabel',
          textoIng: 'I went to the doctor. He advised me to change my diet',
          textoEsp: 'Fui al doctor. Me aconsejó que cambiara mi dieta.',

          audio: require('@/assets/curso/audios/Tema1/1/1.mp3'),
        },
        {
          personaje: 'Antonio',
          textoIng: 'Really? Why? What reason did he give you?',
          textoEsp: '¿En serio? ¿Por qué? ¿Qué razón te dio?',

          audio: require('@/assets/curso/audios/Tema1/1/2.mp3'),
        },
        {
          personaje: 'Isabel',
          textoIng:
            'He insisted I fainted because I have a nutritional imbalance and that sugar is causing my migraines.',
          textoEsp:
            'Insistió en que me desmayé porque tengo un desequilibrio nutricional y que el azúcar está causando mis migrañas.',

          audio: require('@/assets/curso/audios/Tema1/1/3.mp3'),
        },
        {
          personaje: 'Antonio',
          textoIng:
            'Maybe he’s right. He is a really good doctor, very professional.',
          textoEsp:
            'Tal vez tenga razón. Él es un muy buen médico, muy profesional.',

          audio: require('@/assets/curso/audios/Tema1/1/4.mp3'),
        },
      ],
    },
    traduccion2: {
      dialogo: [
        {
          textoIng:
            '<em>Reported speech is often used to convey what someone else said without directly quoting what was said. For this, most often, the tense of the sentence is changed. Reporting verbs such as “<span><em>say</span></em>”, “<span><em>tell</span></em>”, “<span><em>ask</span></em>”, and others are used to present the information. The first person’s words are not enclosed in quotation marks.<br> And in some cases, but not always, the word “that” is used to connect the reporting verb to the reported information.</em>',
          textoEsp:
            'El discurso indirecto suele usarse para transmitir lo que alguien más dijo sin citar directamente lo que se dijo. Para esto, la mayoría de las veces, se cambia el tiempo de la oración. Los verbos para reportar, como “say”, “tell”, “ask” y otros se utilizan para presentar la información. Las palabras de la primera persona no se presentan entre comillas, y en algunos casos, pero no siempre, la palabra "that" se usa para conectar el verbo con la información reportada.',
        },
      ],
    },
    traduccion3: {
      dialogo: [
        {
          textoIng:
            '<em>You must learn that in reported speech verb tenses change. That is, in direct speech or direct style, all verb tense expressions are in the present. But when the indirect style or reported speech is used, this verb changes to the past tense. Let’s see the following example:</em>',
          textoEsp:
            'Debe aprender que en el reported speech los tiempos verbales cambian, es decir, en el direct speech, o estilo directo, todas las expresiones de tiempos verbales están en presente.  Pero cuando se utiliza el estilo indirecto, o reported speech, este verbo cambia a pasado. Veamos el siguiente ejemplo:”.',
        },
      ],
    },
    traduccion4: {
      dialogo: [
        {
          textoIng:
            '<em>It is necessary to adapt the personal pronouns according to the person to whom they refer and to whom they are speaking. The verb tense is also modified depending on its relationship with the current moment, which generally implies moving it to the past. Let’s see the following examples:</em>',
          textoEsp:
            'Es necesario adaptar los pronombres personales de acuerdo con la persona a la que se refieran y a la que se esté hablando. También se modifica el tiempo verbal en función de cuál sea su relación con el momento actual, lo que generalmente implica trasladarlo al pasado. Veamos los siguientes ejemplos:',
        },
      ],
    },
    traduccion5: {
      dialogo: [
        {
          textoIng:
            '<em>Reporting verbs are verbs that we use <span>to communicate ideas, actions, or intentions</span> of people at a given moment. These verbs, as their name suggests, are reported speech verbs, exactly like the verbs <span>say, tell or ask</span>, which are so often used in reported speech in English. However, the peculiarity of most reporting verbs is that they not only communicate a message, but also an intention, feeling, idea, etc.<br><br> Nevertheless, more reporting verbs can be used, besides “say”, “tell”, and “ask”.  Let’s see some examples:</em>',
          textoEsp:
            'Los <em>reporting verbs</em> son verbos que utilizamos para comunicar ideas, acciones o intenciones de la gente en un momento dado. Estos verbos, como su propio nombre indica, son verbos de estilo indirecto, exactamente igual que los verbos <em>say, tell</em> o <em>ask</em>, que tanto se utilizan en el estilo indirecto en inglés (<em>reported speech</em>). Sin embargo, la particularidad de la mayoría de los <em>reporting verbs<em> es que no solo comunican un mensaje, sino también una intención, sentimiento, idea, etc.<br><br> Sin embargo, se pueden usar más verbos informativos, además de  “<em>say</em>”, “<em>tell</em>” y “<em>ask</em>”. Veamos algunos ejemplos:',
        },
      ],
    },
    traduccion6: {
      dialogo: [
        {
          textoIng:
            '<em>In the first place, it is necessary to adapt the personal pronouns according to the person to whom they refer and to whom they are speaking. The verb tense is also modified depending on its relationship with the current moment, which generally implies moving it to the past (for example, from the simple present to the simple past), and naturally, in reported speech an introduction is added (“He said that…”, “He asked if…”) to present what that person commented.<br><br>So, how does the verb change in <span>reported speech</span>? Let’s see how these structures are applied in reported speech sentences</em>',
          textoEsp:
            'En primer lugar, es necesario adaptar los pronombres personales de acuerdo con la persona a la que se refieran y a la que se esté hablando. También se modifica el tiempo verbal en función de cuál sea su relación con el momento actual, lo que generalmente implica trasladarlo al pasado (por ejemplo, del presente simple al pasado simple), y naturalmente, en el estilo indirecto se añade una introducción (“Dijo que…”, “Preguntó si…”) para presentar lo que esa persona comentó.<br><br>Entonces, ¿cómo cambia el verbo en el <em>reported speech</em>? Vamos a ver cómo se aplican estas estructuras en oraciones de discurso indirecto.',
        },
      ],
    },
    dialogoAct: {
      personajes: [
        {
          nombre: 'Isabel',
          img: require('@/assets/curso/temas/i.svg'),
        },
        {
          nombre: 'Andrea',
          img: require('@/assets/curso/temas/a.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'Isabel',
          textoIng:
            'Also, he promised *** review my diet plan in the future if my medical conditions improve.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema1/act/1.mp3'),
          palabra: 'to',
        },

        {
          personaje: 'Andrea',
          textoIng: 'Sounds good. What else did he ***  you?',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema1/act/2.mp3'),
          palabra: 'tell',
        },
        {
          personaje: 'Isabel',
          textoIng: 'He recommended me *** lots of water.',
          textoEsp: '',
          audio: require('@/assets/curso/audios/Tema1/act/3.mp3'),
          palabra: 'drinking',
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
