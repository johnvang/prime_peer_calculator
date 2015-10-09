$(function(){

    $("#inputForm").on('submit', function(event){
        event.preventDefault();

        var value1 = $("#inputForm .number1").val();
        var value2 = $("#inputForm .number2").val();
        var operator = $("#inputForm .operator").val();

        var numAndOper = {
            number1: value1,
            number2: value2,
            operator: operator
        };

        $.ajax({
            type: "POST",
            url: "/calculation",
            data: numAndOper,
            success: function(response){
                console.log("success!");
                console.log(response);
                //console.log(numAndOper);
                $(".appendHere").html("<p>" + response + "</p>");

            }
         })
        //$('#inputForm').children('input').val('');
    })


});