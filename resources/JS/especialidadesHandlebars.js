const source = document.getElementById('handlebarsLogoMedic').innerHTML;
// eslint-disable-next-line no-undef
const template = Handlebars.compile(source);
const context = {
  especialidadesArray: [
    {
      name: 'Ginecología',
      sourceImage:
        './resources/images/especialidades/1 Ginecología/ginecologia.png',
      description:
        'Seguimiento de la salud ginecológica en distintas etapas de la mujer.',
      toGo: './resources/HTMLs/especialidades/1 Ginecología/ginecologia.html',
    },
    {
      name: 'Pediatría',
      sourceImage:
        './resources/images/especialidades/2 Pediatría/pediatria.png',
      description:
        'Especialización médica del niño desde su nacimiento hasta su adolescencia.',
      toGo: './resources/HTMLs/especialidades/2 Pediatría/pediatria.html',
    },
    {
      name: 'Dermatología',
      sourceImage:
        './resources/images/especialidades/3 Dermatología/dermatologia.png',
      description:
        'Atención centrada en enfermedades de la piel, uñas, cabello.',
      toGo: './resources/HTMLs/especialidades/3 Dermatología/dermatologia.html',
    },
    {
      name: 'Psicología',
      sourceImage:
        './resources/images/especialidades/4 Psicología/psicologia.png',
      description:
        'Comportamiento del ser humano, en relación con el medio ambiente físico y social que lo rodea.',
      toGo: './resources/HTMLs/especialidades/4 Psicología/psicologia.html',
    },
    {
      name: 'Paidopsiquiatría',
      sourceImage:
        './resources/images/especialidades/5 Paidopsiquiatría/pidopsiquiatria.png',
      description:
        'Psiquiatra enfocado desde el nacimiento hasta inicios de la vida adulta.',
      toGo:
        './resources/HTMLs/especialidades/5 Paidopsiquiatría/paidopsiquiatria.html',
    },
    {
      name: 'Terapia de Lenguaje',
      sourceImage:
        './resources/images/especialidades/6 Terapia de Lenguaje/terapia de lenguaje.png',
      description:
        'Tratamiento de alteraciones en audición, habla y motricidad oral durante el desarrollo.',
      toGo:
        './resources/HTMLs/especialidades/6 Terapia de Lenguaje/terapiadelenguaje.html',
    },
    {
      name: 'Nutrición',
      sourceImage:
        './resources/images/especialidades/7 Nutrición/nutricion.png',
      description:
        'La alimentación es fundamental para el buen desarrollo y estado de la salud humana.',
      toGo: './resources/HTMLs/especialidades/7 Nutrición/nutricion.html',
    },
    {
      name: 'Acupunura',
      sourceImage:
        './resources/images/especialidades/8 Acupuntura/acupuntura.png',
      description:
        'Medicina oriental para prevención y tratamiento de enfermedades por medio de finas agujas.',
      toGo: './resources/HTMLs/especialidades/4 Psicología/psicologia.html',
    },
  ],
};
const compileHtml = template(context);
const muestraEspecialidades = document.getElementById('logoEspecialidades');
muestraEspecialidades.innerHTML = compileHtml;
