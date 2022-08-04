let um = document.querySelector(".um");
let dois = document.querySelector(".dois");
let tres = document.querySelector(".tres");
let quatro = document.querySelector(".quatro");
let cinco = document.querySelector(".cinco");
let seis = document.querySelector(".seis");
let sete = document.querySelector(".sete");
let oito = document.querySelector(".oito");
let nove = document.querySelector(".nove");
let zero = document.querySelector(".zero");
let saida = document.querySelector(".div__div");
let mais = document.querySelector(".mais")
let menos = document.querySelector(".menos")
let vezes = document.querySelector(".vezes")
let dividir = document.querySelector(".dividir")
let igual = document.querySelector(".igual")
let reset = document.querySelector(".reset");
let apagar = document.querySelector(".apagar");

let i = saida.textContent;

um.addEventListener("click", function(e){
    if(um.classList.contains("um")){
      saida.textContent = i + "1";
      i=saida.textContent;
    }
});
dois.addEventListener("click", function(e){
  if(dois.classList.contains("dois")){
    saida.textContent = i + "2";
    i = saida.textContent;
  }
});
tres.addEventListener("click", function(e){
  if(tres.classList.contains("tres")){
    saida.textContent = i + "3";
    i=saida.textContent;
  }
});
quatro.addEventListener("click", function(e){
  if(quatro.classList.contains("quatro")){
    saida.textContent = i + "4";
    i=saida.textContent;
  }
});
cinco.addEventListener("click", function(e){
  if(cinco.classList.contains("cinco")){
    saida.textContent = i + "5";
    i=saida.textContent;
  }
});
seis.addEventListener("click", function(e){
  if(seis.classList.contains("seis")){
    saida.textContent = i + "6";
    i=saida.textContent;
  }
});
sete.addEventListener("click", function(e){
  if(sete.classList.contains("sete")){
    saida.textContent = i + "7";
    i=saida.textContent;
  }
});
oito.addEventListener("click", function(e){
  if(oito.classList.contains("oito")){
    saida.textContent = i + "8";
    i=saida.textContent;
  }
});
nove.addEventListener("click", function(e){
  if(nove.classList.contains("nove")){
    saida.textContent = i + "9";
    i=saida.textContent;
  }
});
zero.addEventListener("click", function(e){
  if(zero.classList.contains("zero")){
    saida.textContent = i + "0";
    i=saida.textContent;
  }
});

mais.addEventListener('click', function(e){
  if(mais.classList.contains("mais")){
    saida.textContent = i + "+";
    i=saida.textContent;
  }
})
menos.addEventListener('click', function(e){
  if(menos.classList.contains("menos")){
    saida.textContent = i + "-";
    i=saida.textContent;
  }
})
vezes.addEventListener('click', function(e){
  if(vezes.classList.contains("vezes")){
    saida.textContent = i + "*";
    i=saida.textContent;
  }
})
dividir.addEventListener('click', function(e){
  if(dividir.classList.contains("dividir")){
    saida.textContent = i + "/";
    i=saida.textContent;
  }
})

igual.addEventListener('click', function(e){
  saida.textContent = eval(i);
  i = saida.textContent;
  memoria.textContent = `Resultado: ${i}`;
  m.textContent = memoria.val();
  document.preventDefault();
})

reset.addEventListener("click", function(e){
  saida.textContent = "";
  i = saida.textContent;
})

apagar.addEventListener("click", function(e){
  saida.textContent = i.slice(0, -1);
  i = saida.textContent;
})

