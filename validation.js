$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
                grade:{
                min: 5,
                    max:8,
                    digits: true
                }



        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Oh no"
                },
            grade:{
                min: "too small",
                max:"yoo big",
                digits: "whole numbers"  }



        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.
        var name = $("#firstName").val();
        var grade = parseInt($("#grade").val());
        $("p").text(`${name} at grade ${grade}`);


    }



});