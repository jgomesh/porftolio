window.addEventListener('DOMContentLoaded', function()
{
    var $min = document.querySelector('.data-form [name="realDPX-min"]'),
        $max = document.querySelector('.data-form [name="realDPX-max"]');

    $min.DatePickerX.init({
        minDate    : new Date(2022, 1, 12),  
        maxDate    : $max
    });

    $max.DatePickerX.init({
        mondayFirst: true,
        minDate    : $min,
        maxDate    : new Date(2023, 1, 30),
        clearButton: false
    });

});


// VALIDAÇÕES FORMULÁRIA
window.onload = waitJs;

function waitJs(){
  const validate = new JustValidate('#form');

  validate
  .addField('#name', [
      {
        rule: 'minLength',
        value: 11,
      },
      {
        rule: 'maxLength',
        value: 50,
      },
      {
          rule: 'required',
          errorMessage: 'Este item é obrigatório',
        },
  ])
  .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Este item é obrigatório',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      },
  ])
  .addField('#consent_checkbox', [
      {
        rule: 'required',
        errorMessage: 'Este item é obrigatório',
      },
  ]);
}

const deleteButton = document.querySelector('#delete-btn');
let inputsGeral = document.querySelectorAll('.input-text');
const checkboxButton = document.querySelector('#consent_checkbox');
deleteButton.addEventListener('click', apagaTudo)

function apagaTudo(event){
    event.preventDefault();
    for(let i = 0;i < inputsGeral.length;i += 1){
        inputsGeral[i].value = ''
    }
    checkboxButton.checked = false
}