const selectEstado = document.getElementById('select-estado');

let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

for (let estado of arrayTextoEstado) {
  let optionEstado = document.createElement('option');
  optionEstado.innerHTML = estado;
  
  selectEstado.appendChild(optionEstado);
}

const btnEnviar = document.getElementById('btn-enviar');
const iptName = document.getElementById('input-name');

btnEnviar.addEventListener('click', enviarFormulário);

function enviarFormulário(event) {
  event.preventDefault();
  if (iptName.value === "") {
    alert('Preencha o campo nome');
    return false;
  }
}