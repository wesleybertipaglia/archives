const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operators')
const result = document.querySelector('#result')
const evaluation = document.querySelector('#eval')
const remove = document.querySelector('#remove')
const reset = document.querySelector('#ac')

numbers.forEach(num => {
  console.log(num.value)
});

reset.addEventListener('click', function() {
  result.value = ''
})

remove.addEventListener('click', function() {
  let removed = result.value.toString().slice(0, -1)
  removed = parseFloat(removed)
  removed = isNaN(removed) ? 0 : removed;
  return result.value = parseFloat(removed)
})

for(let i = 0; i < numbers.length; i++) {
	numbers[i].onclick = function() {
    result.value += this.attributes.value.value
  }
}

for(let i = 0; i < operators.length; i++) {
	operators[i].onclick = function() {
    result.value += this.attributes.value.value
  }
}

evaluation.addEventListener('click', function() {
  let valor = eval(result.value)
  return result.value = valor
})