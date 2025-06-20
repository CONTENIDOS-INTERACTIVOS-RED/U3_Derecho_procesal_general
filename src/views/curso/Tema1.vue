<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Clases de procesos y estructura general del proceso civil'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/9.png", data-aos="zoom-in")        
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/10.png")
            .col-lg
              p.mb-0 El estudio del #[b proceso] civil en #[b Colombia], exige comprender, desde el inicio, que no todos los litigios se tramitan de la misma manera. El Código General del Proceso, Ley 1564 del 2012, #[b establece diferentes clases de procesos] para adecuar el trámite a la naturaleza del conflicto, su complejidad, el valor económico en discusión y los intereses jurídicos en juego. 
        p(data-aos="fade-down") Esta clasificación tiene como objetivo, asegurar que la administración de justicia sea eficaz, oportuna y proporcionada a cada caso.

    p(data-aos="fade-down") En primer lugar, los procesos civiles pueden clasificarse, de manera general, en:

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Los procesos declarativos
              p Tienen como propósito principal obtener del juez una declaración sobre la existencia, inexistencia o modificación de una relación jurídica. Dentro de estos, a su vez, se encuentran subdivisiones como el proceso verbal, el proceso verbal sumario y los declarativos especiales, cada uno con etapas procesales diferenciadas y tiempos más o menos ágiles dependiendo del valor del litigio y su complejidad. Por ejemplo, un proceso verbal puede aplicarse en una demanda de resolución de contrato, mientras que un sumario verbal podría ser el canal para un proceso de perturbación de la posesión.          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png") 
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Los procesos ejecutivos
              p El objetivo no es debatir la existencia de un derecho, sino hacer efectivo un derecho ya reconocido, generalmente contenido en un título ejecutivo como una letra de cambio, un pagaré o una sentencia. En estos casos, el juez ordena directamente el pago o la ejecución forzada de la obligación, y la discusión se centra en las excepciones que el deudor pueda plantear para oponerse a dicha ejecución (Reynal Querol, 2008).          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Los procesos de jurisdicción voluntaria
              p No se tramitan con el propósito de resolver un conflicto entre partes enfrentadas, sino de obtener una autorización o reconocimiento judicial sobre determinados hechos jurídicos. Ejemplos típicos de esta clase son los procesos de autorización para enajenar bienes de menores o de nombramiento de curador.          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Los procesos de liquidación
              p Los procesos de liquidación o liquidadores, son aquellos que buscan liquidar un patrimonio, los ejemplos más comunes son las sucesiones, insolvencia, liquidaciones de empresas o sociedades conyugales o patrimoniales.          
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/11.png")  

    p(data-aos="fade-down") Además de identificar las clases de procesos, es esencial dominar la estructura general del proceso civil, pues esto permitirá anticipar y organizar cada una de las etapas procesales de forma lógica y estratégica. Todo proceso civil, salvo las excepciones legales, se desarrolla en tres grandes fases:

    .bg-full-width.bg-color-info.mb-5(data-aos="fade-right")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/16.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.9%" y="51.5%" numero="+")
                  h5 Etapa de postulación
                  p Donde las partes presentan sus pretensiones y defensas.
                .bg-color-white.box-shadow.p-3(x="91.9%" y="6.6%" numero="+")
                  h5 Etapa probatoria
                  p En la que se practica la prueba necesaria para esclarecer los hechos.
                .bg-color-white.box-shadow.p-3(x="97.1%" y="84%" numero="+")
                  h5 Etapa decisoria
                  p Que concluye con la sentencia que pone fin al litigio.                                     

    p(data-aos="fade-down") A su vez, estas fases están precedidas y seguidas por actuaciones preliminares o posteriores, como medidas cautelares, recursos y ejecución de la sentencia (Morello, 2001).

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/17.svg")
            .col-lg
              p.mb-0 El proceso se rige por los principios de oralidad, inmediación, concentración y publicidad, lo cual ha transformado profundamente la práctica procesal desde la entrada en vigor del CGP. La oralidad, por ejemplo, implica que las audiencias se realizan de forma verbal y presencial, lo que exige preparación y claridad argumentativa por parte de los abogados (Reynal Querol, 2008).
        p(data-aos="fade-down") Comprender las clases de procesos y su estructura, no solo es un requisito académico, sino una herramienta práctica para ejercer con responsabilidad y eficacia, la labor como litigante, defensor, juez o asesor jurídico. Elegir incorrectamente el tipo de proceso, desconocer sus etapas o actuar fuera de los principios que lo rigen, puede conducir a la nulidad de actuaciones, pérdida de oportunidades probatorias y serias afectaciones. al derecho de defensa y al acceso efectivo a la justicia.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/18.png", data-aos="zoom-in")  

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Clasificación de los procesos

    .bg-full-width.bg-color-11.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img.img-a.img-t(src="@/assets/curso/temas/19.png")         
          .col-lg
            .py-4.j1
              p(data-aos="fade-down").mb-0 La clasificación de los procesos en el ámbito del Derecho Procesal Civil colombiano, responde a la necesidad de adaptar el procedimiento a la naturaleza, finalidad y complejidad de los conflictos jurídicos. El Código General del Proceso, Ley 1564 del 2012, que regula de manera integral la actividad procesal civil, ha adoptado una estructura que distingue los procesos principalmente en función del Derecho sustancial que se busca hacer valer y la forma en que dicho Derecho debe concretarse mediante una decisión judicial. Comprender esta clasificación no solo permite identificar las reglas procedimentales aplicables a cada tipo de caso, sino que también posibilita garantizar los principios de celeridad, eficiencia y acceso a la justicia (Gómez Sánchez, 2004).

    p(data-aos="fade-down") Los procesos civiles se agrupan en procesos declarativos, procesos ejecutivos, procesos liquidatorios y procesos de jurisdicción voluntaria, cada uno con características propias, finalidades específicas y reglas particulares. Esta clasificación no es caprichosa. Responde a la lógica jurídica de que no todos los conflictos requieren el mismo nivel de intervención del juez, ni las mismas etapas procesales, ni las mismas exigencias probatorias.

    AcordionA(tipo="b")(data-aos="fade-left")
      .div(titulo="Procesos declarativos")
        .row.align-items-center.p-4.p-md-5
          .col-lg-9.mb-3.mb-lg-0
            p Se ocupan de resolver controversias jurídicas que requieren una definición judicial sobre la existencia, constitución, modificación o extinción de una relación jurídica. Su finalidad es que el juez emita una declaración sobre el derecho de fondo en disputa. Dentro de esta categoría se incluyen procesos como el #[b verbal general], que es el procedimiento ordinario más utilizado y que admite una gran variedad de pretensiones, como, por ejemplo, una demanda de resolución de contrato de compraventa por incumplimiento, o una demanda de responsabilidad civil extracontractual por daños causados en un accidente. En el proceso verbal sumario, la tramitación es más ágil y está prevista para asuntos de menor complejidad, como los relacionados con perturbación a la posesión de inmuebles o restitución de tenencia. 

            p También existen #[b procesos declarativos especiales], regulados de forma autónoma, entre los que destacan el proceso monitorio, que permite reclamar obligaciones dinerarias de naturaleza contractual de mínima cuantía.

            p Por ejemplo, un proveedor que ha facturado productos entregados y no ha recibido pago, puede acudir al proceso monitorio para obtener orden de pago inmediato si el deudor no se opone fundadamente el juez emite sentencia. Otros procesos especiales son el divisorio, para dividir la copropiedad sobre un bien, y el #[b expropiatorio], mediante el cual el Estado adquiere forzosamente un bien privado por razones de utilidad pública, previa indemnización (Morello, 2001).          
          .col-lg-3.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/20.png") 

      .div(titulo="Procesos ejecutivos")
        .row.align-items-center.p-4.p-md-5
          .col-lg-9.mb-3.mb-lg-0
            p Se basan en la existencia de un título ejecutivo, es decir, un documento que contiene una obligación clara, expresa y exigible. A diferencia de los procesos declarativos, en los ejecutivos no se discute la existencia del Derecho, sino que se busca su cumplimiento forzado. Por ejemplo, si una persona firmó un pagaré y no lo pagó, el acreedor no necesita iniciar un juicio para que se reconozca la obligación, sino que directamente puede acudir al juez con el título y solicitar medidas cautelares como el embargo de bienes, para garantizar el pago. Otros ejemplos de títulos ejecutivos son las #[b sentencias firmes], las actas de conciliación con fuerza ejecutiva, los #[b contratos legalmente autenticados], o las #[b liquidaciones laborales] aprobadas judicialmente. El proceso ejecutivo es, por tanto, un mecanismo de tutela judicial efectiva, diseñado para lograr resultados rápidos y eficaces cuando ya existe certeza sobre la obligación incumplida (Gómez Sánchez, 2004).          
          .col-lg-3.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/21.png") 

      .div(titulo="Procesos liquidatorios")
        .row.align-items-center.p-4.p-md-5
          .col-lg-9.mb-3.mb-lg-0
            p Su función es poner fin a situaciones patrimoniales complejas mediante su distribución legal y ordenada. Estos procesos se activan cuando se disuelve un patrimonio colectivo, como sucede en la sucesión por causa de muerte, en la cual se debe identificar a los herederos, establecer los bienes del causante, pagar deudas y adjudicar los bienes restantes conforme a la Ley o al testamento. Este proceso puede extenderse por años, especialmente si existen conflictos entre herederos o si se requieren peritajes para valorar bienes. También son procesos liquidatorios, la #[b terminación de la sociedad conyugal] o de #[b la sociedad patrimonial] entre compañeros permanentes, donde se determina el haber común y se reparte conforme a la contribución de cada uno. Otro proceso fundamental en este grupo, es el de #[b insolvencia de persona natural no comerciante], una figura reciente en el ordenamiento colombiano que permite a personas endeudadas renegociar sus obligaciones o liquidar sus bienes bajo la vigilancia de un juez, evitando así procedimientos ejecutivos múltiples o el embargo indiscriminado de su patrimonio. Esta figura busca preservar el mínimo vital y promover la reintegración económica del deudor.          
          .col-lg-3.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/22.png") 

      .div(titulo="Procesos de jurisdicción voluntaria")
        .row.align-items-center.p-4.p-md-5
          .col-lg-9.mb-3.mb-lg-0
            p Se diferencian de los demás, porque no existe conflicto entre las partes. En lugar de que un demandante exija algo de un demandado, se trata de actos jurídicos en los que una persona requiere la intervención del juez para validar, autorizar o reconocer una situación legal. Por ejemplo, cuando una persona desea adoptar a un menor, es necesario acudir al juez para que revise los requisitos, valore el entorno del adoptante y autorice la adopción si se cumplen los estándares legales y constitucionales. También se incluyen aquí trámites como la #[b designación judicial de apoyos] para personas con discapacidad, conforme a la Ley 1996 del 2019, que garantiza el respeto de su autonomía en el ejercicio de la capacidad jurídica. Otras figuras típicas de jurisdicción voluntaria, son la #[b declaración de muerte presunta], el nombramiento de guardadores, la #[b emancipación de menores], o la #[b autorización para enajenar bienes de menores de edad].          
          .col-lg-3.mb-3.mb-lg-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/23.png")  

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/24.png', alt='')       
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-down") Es importante señalar que cada uno de estos procesos se rige por un conjunto de reglas procesales diferentes, tanto en términos de formalidades como de plazos, medios probatorios y estructura de audiencias. De ahí que la clasificación procesal no es una simple taxonomía académica, sino una herramienta práctica de aplicación directa, que permite al operador jurídico seleccionar la vía adecuada para hacer valer sus derechos y evitar nulidades, rechazos o demoras. Además, esta clasificación está estrechamente vinculada con principios rectores del CGP, como la oralidad, concentración, economía procesal y acceso efectivo a la justicia, todos los cuales apuntan a una administración de justicia más eficiente, participativa y transparente (Gómez Sánchez, 2004).

    p(data-aos="fade-down") En conclusión, la correcta identificación del tipo de proceso aplicable es un paso esencial para todo jurista. No solo define la estrategia jurídica, sino que también asegura que el Derecho sustancial sea tutelado conforme a los procedimientos legalmente establecidos. 

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Estructura del proceso civil 

    p(data-aos="fade-down") La comprensión de la estructura del proceso civil es esencial para interpretar el funcionamiento de la justicia y la protección de los derechos en el marco del ordenamiento jurídico colombiano.


    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Estructura del proceso civil 
            p.mb-4(data-aos="fade-right") En el PDF Estructura del proceso civil, se describe detalladamente cada una de las etapas procesales establecidas en el Código General del Proceso, desde la presentación de la demanda hasta la sentencia, destacando los principios rectores, las actuaciones claves de las partes y el rol activo del juez, en el desarrollo del litigio.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estructura del proceso civil 
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/25.png', alt='')      



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html" target="_blank" rel="noopener noreferrer") Ley 1564 del 2012. Por medio de la cual se expide el Código General del Proceso y se dictan otras disposiciones. 12 de julio de 2012. D.O. 48.489. 
            p.ms-4.ps-2.my-4 Bejarano Guzmán, R. (2023). Procesos declarativos, arbitrales y ejecutivos. Editorial Temis.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/70656?page=158" target="_blank" rel="noopener noreferrer") Cruz Tejada, H. (2017). El proceso civil a partir del Código General del Proceso (2a ed.). Universidad de los Andes.                              

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/proceso-verbal-sumario.html" target="_blank" rel="noopener noreferrer") Gerencie.com. (2022). Proceso verbal sumario. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://procesal.uexternado.edu.co/proceso-ejecutivo-y-arbitraje/" target="_blank" rel="noopener noreferrer") Robles Ustariz, M. I. (2018). Proceso ejecutivo y arbitraje. Universidad Externado de Colombia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/proceso-ejecutivo.html" target="_blank" rel="noopener noreferrer") Gerencie.com. (2023). Proceso ejecutivo.                            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=M5V0yYzLpxY" target="_blank" rel="noopener noreferrer") CARLOS COLMENARES. (2012). El Proceso Ejecutivo Oswaldo Saldarriaga [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=znwGZY6aahc" target="_blank" rel="noopener noreferrer") Kato Ocañero. (2022). Código general del proceso colombiano audio libro [video]. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=HL0R6RbJrqs" target="_blank" rel="noopener noreferrer") ISRAEL BANGUERA (2016). Como hacer una demanda [video].                            

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
