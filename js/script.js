/* Menu Toggle */

$(document).ready(function(){
   $("#toggler").click(function(){
     $("#toggle-nav").fadeToggle(500);
   });
 });

 $('.menu-toggle').on('click', function() {
   $('.wrapper').toggleClass('menu--is-revealed');
 });

 /* Half Page Responsive */

 $(document).ready(function($) {
   var alterClass = function() {
     var ww = document.body.clientWidth;
     if (ww < 1199) {
       $('.LeftContent ').removeClass('LeftContent');
       $('.RightContent ').removeClass('RightContent');
     } else if (ww >= 1200) {
       $('.LeftContent').addClass('LeftContent');
       $('.RightContent ').addClass('RightContent');
     };
   };
 });

 var options = {
  pdfOpenParams: {
      navpanes: 0,
      toolbar: 0,
      statusbar: 0,
      pagemode: "thumbs",
      view: "FitV"
  },
  forcePDFJS: true,
  PDFJS_URL: "vendor/pdfjs/web/viewer.html"
};

PDFObject.embed("../../../pdf/certificados/certificado1.pdf", "#certificado_1", options);
PDFObject.embed("../../../pdf/certificados/certificado2.pdf", "#certificado_2", options);
PDFObject.embed("../../../pdf/certificados/certificado3.pdf", "#certificado_3", options);
PDFObject.embed("../../../pdf/certificados/certificado4.pdf", "#certificado_4", options);
PDFObject.embed("../../../pdf/certificados/certificado5.pdf", "#certificado_5", options);

PDFObject.embed("../../../pdf/estudios/estudio1.pdf", "#estudio_1", options);
PDFObject.embed("../../../pdf/estudios/estudio2.pdf", "#estudio_2", options);
PDFObject.embed("../../../pdf/estudios/estudio3.pdf", "#estudio_3", options);
PDFObject.embed("../../../pdf/estudios/estudio4.pdf", "#estudio_4", options);
PDFObject.embed("../../../pdf/estudios/estudio5.pdf", "#estudio_5", options);