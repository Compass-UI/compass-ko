define(['jquery'], function(){

    var vm = {
        id: '123',
        fname: 'David',
        lname:  'Shams'
    }
    $('#id').text(vm.id);
    $('#fname').text(vm.fname);
    $('#lname').text(vm.lname);
})

