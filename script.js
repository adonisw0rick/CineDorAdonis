var dialog;
var dialog2;
$('#start').click(function () {
    dialog.dialog('open')
})

dialog = $('#dialog-form').dialog({
    show: { effect: 'fold', duration: 700 },
    hide: { effect: 'fold', duration: 700 },
    autoOpen: false,
    modal: true,
    buttons: {
        'Comprar Entradas': function () {
            dialog.dialog('close')
            
            dialog2.dialog('open')
        },
        'Cancelar': function () {
            dialog.dialog('close')
        }
    },
    close: function () {
        dialog.dialog('close')
    }
})

function compra(){
    dialog2.dialog('open');
}


dialog2 = $('#dialog-form2').dialog({
    show: { effect: 'fold', duration: 700 },
    hide: { effect: 'fold', duration: 700 },
    autoOpen: false,
    modal: true,
    buttons: {
        'Ir a Selección de asientos': function () {
            dialog2.dialog('close')
            $("#lds-spinner").css('display','block');
            setTimeout(nuevo,3000)
            function nuevo() {
                nuevaclave('nasientos', $('#numeroentradas')["0"].valueAsNumber);
                nuevaclave('hora', $('#hora')["0"].selectedOptions["0"].innerHTML);

                nuevaclave('dia', $('#fecha')["0"].selectedOptions["0"].innerHTML);
                window.location.href = "sala.html";
            }
            
        },
        'Cancelar': function () {
            dialog2.dialog('close')
        }
    },
    close: function () {
        dialog.dialog('close')
    }
})
