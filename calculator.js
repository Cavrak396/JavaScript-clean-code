
function inflationCalculator(){
    let inflationRate = document.querySelector("#inflationRate");
    let money = document.querySelector("#money");

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    
    let years = document.querySelector("#years").value;
    years = parseFloat(years);

    let worth = money + (money * (inflationRate / 100));

    console.log(worth)
} 