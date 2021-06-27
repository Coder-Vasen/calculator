const input = document.querySelector('input');
const digitBtns = document.querySelectorAll('.btns')
const clr = document.querySelector('.clear')
const eql = document.querySelector('.equal')
const back = document.querySelector('.bk')
const ans = document.querySelector('span')

function calAns(){
  ans.innerText = "= "+eval(input.value)
  input.value = "";
}

input.onkeyup = e => (e.key === "Enter")? calAns():undefined


for(let digitBtn of digitBtns){
  digitBtn.onclick = () => {
    input.value += digitBtn.getAttribute('data-value');
  }
}

clr.onclick = () => {
  input.value = ""
  ans.innerText = "0"
};

eql.onclick = () => calAns()

back.onclick = () => {
  if(input.value !== "") input.value = input.value.substr(0, input.value.length - 1)
}
