// this is only for getting the data fron the server


// $(document).ready(function () {
//     $.get("https://api.exchangeratesapi.io/latest", {},function (data) {

//         var currencyOneSelectElem = $("<select/>").addClass("currency-one");
//         var currencyTwoSelectElem = $("<select/>").addClass("currency-two");

//         currencyOneSelectElem.appendTo(".exchange-container")
//         currencyTwoSelectElem.appendTo(".exchange-container")


//         for ( var currencyCode in data.rates){
//             var optionElem = $("<option/>").text(currencyCode).val(currencyCode)

//             optionElem.appendTo(currencyOneSelectElem)
//             optionElem.clone().appendTo(currencyTwoSelectElem)
//             console.log(currencyCode)
//         }
//         // add a select taag and class to it  
//     });
// });


$(document).ready(function () {
    $('#submitbtn').on('click' , function() { 
    //    get value of the both
        var oneValue = $(".currency-one").val();
        var twoValue = $(".currency-two").val();

        console.log(oneValue,twoValue)
        // compare if both the currency are the same
        if (oneValue === twoValue ){
            alert('please select defferent value')
        }

        // bind symbols result to the result tag

        $("#cr-one-symbol").text(oneValue);
        $("#cr-two-symbol").text(twoValue);
        
        // fetch or get the converted data from the server
        // it is in the form of base and symbols in the url
        $.get("https://api.exchangeratesapi.io/latest", {
            base: oneValue,
            symbols: twoValue
        },function (data) {
            // values are under data and find the symbol value inside the object
            // get the vlaue dynamicaly fron the rates using [] 
            // it gives the round off value we need value 2 decimal value and use toFixed(2)
            
            // var convertedValue =  Math.round(data.rates[twoValue]);  

            var convertedValue = data.rates[twoValue].toFixed(2)

            // show converted value in the result column
            $("#cr-value").text(convertedValue);

            // fade in when clicked the button

            $('.result').fadeIn(300);

            console.log(convertedValue)
            });
    });
});