let botao = document.querySelector(".botao");
let btn = document.querySelectorAll("span"); 
let value = document.getElementById ("value");

for (let i= 0; i<btn.length;i++){
    btn[i].addEventListener("click" , function(){
        if(this.innerHTML=="="){
            value.innerHTML= eval(value.innerHTML);
        }
            else {
                if (this.innerHTML=="clear"){
                    value.innerHTML = "";
                }
                else{
                    value.innerHTML+= this.innerHTML;
                }
            }
        
    })
}