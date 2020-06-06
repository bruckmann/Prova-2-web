$(document).ready(function() {	
	$('#cpf').mask('999.999.999-99');
    $('#cep').mask('99999-999')
    $('#date').mask('99/99/9999')
});

$('#salario').priceFormat({
    prefix: 'R$ ',
    centsSeparator: ',',
    thousandsSeparator: '.'
});