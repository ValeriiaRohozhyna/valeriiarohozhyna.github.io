//https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=20200403&json

btnSubmit.addEventListener("click", getCurrencyData, false);

function getCurrencyData(e){
    e.preventDefault();

    var XHR = new XMLHttpRequest();
    var BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";
    startDate = dateStart.value.split("-").join("");
    var URI = `${BASE_URL}${currency.value}&date=${startDate}&json`;
    XHR.open("GET", URI);
    XHR.send();

    XHR.addEventListener("readystatechange", getRate, false);
    function getRate(e){
        if(XHR.readyState === 4 && XHR.status === 200){
            console.log(XHR.responseText);
            var data = JSON.parse(XHR.responseText);   
            myChart.innerText = `For ${data[0].exchangedate} the ${data[0].cc} is ${data[0].rate}`;
        }
    };
};

