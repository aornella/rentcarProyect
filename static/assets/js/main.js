$(function () {
  /*Init slick carousel*/
  if ($(".regular").length != 0) {
    $(".regular").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  /*Init galeria de imagenes*/
  if ($('.magnific-popup').length != 0) {
    $('.magnific-popup').magnificPopup({
      type: 'image'
    });
  }
  /*Levantamiento de aside para el detalle de los vehiculos*/
  $(document).on('click', '[data-action]', function () {
    var ob = $(this);
    var aside = $('#aside');
    aside.toggleClass('active-aside');
    //aside.html(ob.attr('data-action'));
  });
  /*Cierra div emergente aside*/
  $(document).on("click", ".aside-close", function () {
    var aside = $('#aside');
    aside.removeClass('active-aside');
  });

  $(document).on('click', '#btn-nav', function () {
    var nav = $('#nav-list');
    nav.toggleClass('nav-list-h');
  });

  /*validacion */
  var dataJ = JSON.parse('{"regiones": [{"region": "Arica y Parinacota","comunas": ["Arica", "Camarones", "Putre", "General Lagos"]},{"region": "Tarapacá","comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]},{"region": "Antofagasta","comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]},{"region": "Atacama","comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]},{"region": "Coquimbo","comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]},{"region": "Valparaíso","comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]},{"region": "Región del Libertador Gral. Bernardo O’Higgins","comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]},{"region": "Región del Maule","comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]},{"region": "Región de Ñuble","comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]},{"region": "Región del Biobío","comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]},{"region": "Región de la Araucanía","comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]},{"region": "Región de Los Ríos","comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]},{"region": "Región de Los Lagos","comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]},{"region": "Región Aisén del Gral. Carlos Ibáñez del Campo","comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]},{"region": "Región de Magallanes y de la Antártica Chilena","comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]},{"region": "Región Metropolitana de Santiago","comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]}]}');
  console.log(dataJ);
  /*Recorro y cargo las regiones correspondientes*/
  $.each(dataJ.regiones, function (key, data) {
    $('[name="ipt_region"]').append('<option value="' + key + '">' + data.region + '</option>');
  });

  /*validacion de fechas */
  $.validator.addMethod("maxDate", function (e) {
    var curDate = $('#date_start').datepicker("getDate");
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate());
    maxDate.setHours(0, 0, 0, 0); // clear time portion for correct results
    console.log(this.value, curDate, maxDate);
    if (curDate > maxDate) {
      $(this).datepicker("setDate", maxDate);
      return false;
    }
    return true;
  });

  $('#date_start').datepicker({
    dateFormat: 'dd.mm.yy',
    minDate: '-18y',
    maxDate: "+0",
    onClose: function () { $(this).valid(); },
  });

  $('input[name="ipt_fono"]').mask('+569-000 00000');


  !function (a, b) { "function" == typeof define && define.amd ? define(function () { return a.Rut = b() }) : "object" == typeof exports ? module.exports = b() : a.Rut = b() }(this, function () { var a; return a = function () { function a(a, b) { this.setRut(a, b) } var b, c, d; return a.prototype.setRut = function (a, c) { if (null == c && (c = !1), "string" != typeof a) throw new Error("rut tiene que ser string"); this.rut = c ? b(a) : b(a.substr(0, a.length - 1)), this.checkDigit = c ? d(a) : a.substr(a.length - 1).toUpperCase(), this.isValid = this.validate() }, a.prototype.validate = function () { var a; return /([0-9]|k)/i.test(this.checkDigit) ? (a = d(this.rut), this.checkDigit.toLowerCase() === a.toLowerCase()) : !1 }, a.prototype.getCleanRut = function () { return this.rut + "" + this.checkDigit }, a.prototype.getNiceRut = function (a) { return null == a && (a = !0), a ? c(this.rut) + "-" + this.checkDigit : this.rut + "-" + this.checkDigit }, b = function (a) { return a.replace(/(\.|\-)/g, "") }, d = function (a) { var b, c, d, e; for (e = 0, b = a.length, c = 2; --b >= 0;)e += a.charAt(b) * c, 8 === ++c && (c = 2); return d = e % 11, 1 === d ? "K" : 0 === d ? "0" : String(11 - d) }, c = function (a) { return a.split("").reverse().reduce(function (a, b, c) { return a = 0 === c % 3 ? b + "." + a : b + "" + a }) }, a }() });



  jQuery.validator.addMethod("letras", function (value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
  }, "Ingrese solo carácteres no numeros");




  /*Configuración jquery validation*/
  $("#form_reg").validate({

    errorClass: "my-error-class",
    validClass: "my-valid-class",

    rules: {

      ipt_nombre: {

        required: true,
        letras: true

      },
      ipt_fecha: 'required',
      ipt_fono: 'required',
      ipt_region: {
        required: true
      },

      ipt_rut: {
        required: true,


      },

      date_start: {
        required: true,
        maxDate: true

      },

      ipt_correo: {
        required: true,
        email: true
      },
      ipt_fono: {
        required: true,
        minlength: 9,
        maxlength: 12
      }
    },
    messages: {
      ipt_rut: "Favor ingresar su rut",
      ipt_nombre: "Favor ingresar su nombre",

      date_start: {
        required: 'Debe ingresar fecha',
        maxDate: 'Fecha máxima es hoy o antes'
      },


      ipt_fono: "Ingrese telefono valido",
      ipt_region: "Ingrese region valida",
      ipt_correo: "Ingrese correo valido",

    },
    submitHandler: function (form) {
      alert("Ingreso exitoso!");
    }
  });

  $("#form_log").validate({

    errorClass: "my-error-class",
    validClass: "my-valid-class",

    rules: {

      ipt_user: {
        required: true,

      },
      ipt_pass: {
        required: true,

      }



    },

    messages: {
      ipt_user: "Favor ingresar nombre usuario valido",
      ipt_pass: "Favor ingresar clave minimo 5 carácteres",


    }, submitHandler: function (form) {
      alert("Login exitoso!");
    }

  });

});

