const expected = document.getElementById("expected");
const observed = document.getElementById("observed");
const bodyWeight = document.getElementById("weight");
const submit = document.getElementById("submit");
const maintenance = document.getElementById("maintenance");
const deficit = document.getElementById("deficit");
const total = document.getElementById("total");


function calcMaintenance(){
    return maintenance.value = 2 * bodyWeight.value;
}

function calcDeficit() {
    return deficit.value = (expected.value - observed.value) * 0.6 * bodyWeight.value 

}

function calcTotal () {
     var totalValue =((expected.value - observed.value) * 0.6 * bodyWeight.value ) + (2 * bodyWeight.value)

     var output =  "You should give the child " + " a total of " + totalValue.toFixed(2) + "mmols"

     return total.value = output;
}


submit.addEventListener('click', calcMaintenance);
submit.addEventListener('click', calcDeficit);
submit.addEventListener('click', calcTotal);
