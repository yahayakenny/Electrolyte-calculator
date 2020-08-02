const expected = document.getElementById('expected');
const observed = document.getElementById('observed');
const bodyWeight = document.getElementById('weight');
const submit = document.getElementById('submit');
const maintenance = document.getElementById('maintenance');
const deficit = document.getElementById('deficit');
const total = document.getElementById('total');
deficit.value = (expected.value - observed.value) * 0.6 * bodyWeight.value;

function calcMaintenance() {
  if (expected.value === '') {
    alert('Please enter an expected value');
  } else {
    return (maintenance.value = 2 * bodyWeight.value);
  }
}

function calcDeficit() {
  if (observed.value === '') {
    alert('Please enter an observed value');
  }

  deficit.value = ((expected.value - observed.value) * 0.6 * bodyWeight.value).toFixed(2);

  if (deficit.value < 0) {
    alert(
      'Please Check your input values properly, You have filled in incorrect parameters'
    );
  } else {
    return deficit.value
  }
}

function calcTotal() {
  if (bodyWeight.value === '') {
    alert("Please fill in the child's body weight");
  }

  var totalValue =
    (expected.value - observed.value) * 0.6 * bodyWeight.value +
    2 * bodyWeight.value;

  var output =
    'You should give the child ' +
    ' a total of ' +
    totalValue.toFixed(2) +
    'mmols';

  if (deficit.value < 0 || observed.value === '' || deficit.value === '') {
    return (total.value = 'Incorrect input parameters entered, please check again');
  } else {
    return (total.value = output);
  }
}

submit.addEventListener('click', calcMaintenance);
submit.addEventListener('click', calcDeficit);
submit.addEventListener('click', calcTotal);
