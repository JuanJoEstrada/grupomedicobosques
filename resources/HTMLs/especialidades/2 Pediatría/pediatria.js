const formNiña = document.getElementById('formNiña');
const formNiño = document.getElementById('formNiño');
const niñaEstatura = document.getElementById('niñaEstatura');
const niñoEstatura = document.getElementById('niñoEstatura');

formNiña.addEventListener('submit', (e) => {
  e.preventDefault();
  const niñaMama = document.getElementById('niñaEstaturaMama');
  const niñaPapa = document.getElementById('niñaEstaturaPapa');
  const estaturaNiña = () => {
    const estatura = (Number(niñaMama.value) + Number(niñaPapa.value) - 13) / 2;
    return estatura;
  };
  niñaEstatura.textContent = estaturaNiña();
});
formNiña.addEventListener('reset', () => {
  niñaEstatura.textContent = '  ';
});

formNiño.addEventListener('submit', (e) => {
  e.preventDefault();
  const niñoMama = document.getElementById('niñoEstaturaMama');
  const niñoPapa = document.getElementById('niñoEstaturaPapa');
  const estaturaNiño = () => {
    const estatura = (Number(niñoMama.value) + Number(niñoPapa.value) + 13) / 2;
    return estatura;
  };
  niñoEstatura.textContent = estaturaNiño();
});
formNiño.addEventListener('reset', () => {
  niñoEstatura.textContent = '  ';
});
