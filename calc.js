var numerator = document.getElementById('numField1');
var denominator = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!numerator.value || !denominator.value) {
        alert("enter values you loser");
    }
    else {    
        var percent = numerator.value / denominator.value * 100;
        resultField.innerText = percent === NaN ? 'ensure both values are numbers' : `Answer ${percent}%`;
    }
    
});

