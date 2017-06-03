function quarters() {
    var amount = parseFloat(document.getElementById("amount").value);
    var quarter = .25;

    var change = amount / quarter;
    var total = Math.floor(change);
    console.log("value of quarter is " + quarter);
    console.log("value of amount is " + amount);
    console.log("amount is type " + typeof amount);
    document.getElementById("quarters").innerHTML = total;
}

function dimes() {
    var amount = parseFloat(document.getElementById("amount").value);
    var dime = .10;
    var nickel = .05;
    var penny = .01;
    var n = dime.toFixed(2);
    var change = amount / dime;
    var dimes = Math.floor(change);

    var nickelRemainder = change % nickel;
    var numberOfNickels = nickelRemainder.toFixed(2);

    var numberOfPennies = shortNickelRemainder / penny;
    var shortPennyRemainder = numberOfPennies.toFixed(2);

    var total = Math.floor(change);

    console.log("number of pennies is " + numberOfPennies);
    console.log("number of nickels is " + numberOfNickels);
    console.log("value of change = " + change);
    console.log("value of dime is " + n);
    console.log("value of amount is " + amount);
    console.log("amount is type " + typeof amount);
    document.getElementById("dimes").innerHTML = total;
}

function nickels() {
    var amount = parseFloat(document.getElementById("amount").value);
    var nickel = .05;
    var n = nickel.toFixed(2);
    var change = amount / nickel;
    console.log("value of nickel is " + nickel + "type of nickel is " + typeof nickel);
    console.log("value of amount is " + amount);
    console.log("amount is type " + typeof amount);
    document.getElementById("nickels").innerHTML = change;
}

function pennies() {
    var amount = parseFloat(document.getElementById("amount").value);
    var penny = .01;
    var change = amount / penny;
    console.log("value of penny is " + penny + "type of penny is " + typeof penny);
    console.log("value of amount is " + amount);
    console.log("amount is type " + typeof amount);
    document.getElementById("pennies").innerHTML = Math.round(change);
}

function allChange() {

    //x
    var amount = parseFloat(document.getElementById("amount").value);
    //y
    var quarter = .25;
    var dime = .10;
    var nickel = .05;
    var penny = .01;

    var numberofquarters = amount / quarter;
    var quarters = Math.floor(numberofquarters);

    //get remainder
    var quarterRemainder = amount % quarter;
    var shortQuarterRemainder = quarterRemainder.toFixed(2);

    var numberofdimes = shortQuarterRemainder / dime;
    var dimes = Math.floor(numberofdimes);

    //get remainder
    var dimeremainder = shortQuarterRemainder % dime;
    var shortDimeRemainder = dimeremainder.toFixed(2);

    var numberofnickels = shortDimeRemainder / nickel;
    var nickels = Math.floor(numberofnickels);

    //get remainder
    var nickelremainder = shortDimeRemainder % nickel;
    var shortNickelRemainder = nickelremainder.toFixed(2);

    var numberofpennies = shortNickelRemainder / penny;
    var pennies = Math.floor(numberofpennies);

    //get remainder
    var pennyremainder = shortNickelRemainder % penny;
    var shortPennyRemainder = pennyremainder.toFixed(2);

    var total = "Quarters = " + quarters + " Dimes = " + dimes + " Nickels = " + nickels + " Pennies = " + pennies;

    console.log("the number of pennies is " + pennies);
    console.log("the number of nickels is " + nickels);
    console.log("the number of dimes is " + dimes);
    console.log("the number of quarters is " + quarters);
    console.log("quarter remainder = " + quarterRemainder);
    console.log("short quarter remainder = " + shortQuarterRemainder);
    console.log("dime remainder = " + dimeremainder);
    console.log("short dime remainder = " + shortDimeRemainder);
    console.log("nickel remainder = " + nickelremainder);
    console.log("short nickel remainder = " + shortNickelRemainder);
    console.log("penny remainder = " + pennyremainder);
    console.log("short penny remainder = " + shortPennyRemainder);

    document.getElementById("allchange").innerHTML = total;
}