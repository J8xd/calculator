const one=document.getElementById('one')
const two=document.getElementById('two')
const three=document.getElementById('three')
const four=document.getElementById('four')
const five=document.getElementById('five')
const six=document.getElementById('six')
const seven=document.getElementById('seven')
const eight=document.getElementById('eight')
const nine=document.getElementById('nine')
const zero=document.getElementById('zero')
const dot=document.getElementById('dot')
const plusmin=document.getElementById('minus')
const plus=document.getElementById('plus')
const minus=document.getElementById('minus')
const multi=document.getElementById('multi')
const split=document.getElementById('split')
const delall=document.getElementById('delall')
const delel=document.getElementById('delel')
const anws=document.getElementById('anws')
const res2=document.getElementById('res2')
const perc=document.getElementById('perc')
const revsymb=document.getElementById('revsymb')
let condition = false
function input (num) {
    if (res.value=="0" && num=="0"){
        res.value=res.value
    }
    else if (res.value=="0" && num!="0" ) {
        res.value=num

    }
    else{
        res.value+=num
    } 
} 
const numbers=[zero, one, two, three, four, five, six, seven, eight, nine]
for (let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){input(i)})
}
function delet (drop){
    switch (drop) {
        case 1: 
            res.value="0"
            res2.innerHTML="" 
            break
        case 2:
            res.value=res.value.slice(0,-1)
            break
        case 3:
            res.value=""
            break
            
    }
}
delel.addEventListener('click', function(){delet(3)})
delall.addEventListener('click', function(){delet(1)})
perc.addEventListener('click', function(){delet(2)})

function expres (expect){
    const znak=expect.innerHTML
    const chisl=res.value
    res2.innerHTML+=(res.value +=  `${znak}`)
    res.value=chisl
    res.value=""
}
const oper=[plus,minus,multi,split]
for (let i=0; i<oper.length; i++){
    oper[i].addEventListener('click', function(){expres(oper[i])}) 
    
} 
function point (){
    if (res.value.indexOf('.')==-1 && res.value!=""){
    res.value = res.value + "."
    }
    else{
        res.value = res.value
    }
}
dot.addEventListener('click', function(){point()})
const calc = () => {
    condition = true
    const value = res2.innerHTML + res.value
    if (res.value =="result is undefined"){
        res.value ="0"
    }
    else if (res.value==""){
        res.value="0"
    }
    else if (eval(value)==Infinity){
        res.value = "cannot be divided"
    }
    else if (isNaN(eval(value))){
        res.value = "result is undefined"
    }
    else if (eval(value)==undefined){
        res.value = "0"
    }
    else{
        res.value = (Math.round(eval(value)*10000000)/10000000)
    }
    res2.innerHTML = ""
}
anws.addEventListener('click', function(){calc()})

document.addEventListener('keydown', function(event) {
    if((event.key >= 0) && (event.key <= 9)){
        input(event.key)
        }
      else if (event.key == "+"){
          expres(oper[0])
        } 
      else if(event.key == "-"){
          expres(oper[1])
        }
      else if(event.key == "*"){
          expres(oper[2])
        }
      else if(event.key == "/"){
          expres(oper[3])
        }
      else if (event.key == "Backspace"){
          delet(2)
        } 
      else if (event.key == "Delete"){
          delet(1)
        }
      else if (event.key == "Enter"){
          calc()
          event.preventDefault()
        }
      else if (event.key == "." ){
          point()
        }
})
function plmi (){
    if(res.value>0){
        res.value = res.value*-1
    }
    else if (res.value<0){
        res.value = Math.abs(res.value)
    }
}
revsymb.addEventListener('click', function(){plmi()})