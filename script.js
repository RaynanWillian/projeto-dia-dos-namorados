const botao = document.getElementById("btn-carta");
const carta = document.getElementById("carta");
const contador = document.getElementById("contador-dias");
const secaoMemorias = document.getElementById("memorias");
const btnMemorias = document.getElementById("btn-memorias");
const mensagemFinal = document.getElementById("mensagem-final");

const memorias = document.querySelectorAll(".memoria");
const paragrafo = document.querySelector("#mensagem");
const fundo = document.querySelector(".coracoes-flutuando");


const dataInicio = new Date("2023-10-21");
const mensagem = `Maria Alice,
 Às vezes eu fico pensando em como tive a sorte de encontrar alguém como você.
Eu amo o seu jeito de falar pelos cotovelos, porque cada conversa sua consegue deixar qualquer momento mais leve e mais divertido.

Amo o seu sorriso, que para mim continua sendo um dos mais bonitos que já vi.

Amo sua beleza, mas principalmente a pessoa que existe por trás dela.

O que mais me encanta em você é o seu caráter, sua inteligência e a forma como você consegue iluminar o ambiente ao seu redor sem nem perceber.

Você tem um jeito especial de cuidar das pessoas e de fazer o mundo parecer um lugar melhor.

Quando olho para as nossas memórias, percebo que os momentos mais felizes da minha vida têm algo em comum: você estava neles.

Obrigado por caminhar ao meu lado, por compartilhar seus sonhos, suas risadas e até os seus dias difíceis comigo. 

E entre todas as lembranças que construímos até aqui, a melhor delas ainda é saber que teremos muitas outras pela frente.

Eu te amo. ❤️`;

function calcularDias() {
    const hoje = new Date();
    const diff = hoje - dataInicio;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function typeWriter(elemento, texto, i = 0, callback) {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        setTimeout(() => typeWriter(elemento, texto, i + 1, callback), 60);
    } else {
        if (callback) callback();
    }
}

         botao.addEventListener("click", () => {

                carta.classList.remove("escondida");

                fundo.classList.add("ativo");

                carta.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
    });


    
    botao.classList.add("sumindo");
    
        setTimeout(() => botao.style.display = "none", 300);

    const dias = calcularDias();
    const textoContador = `Estamos juntos há ${dias} dias`;

    contador.innerHTML = "";
    paragrafo.innerHTML = "";

    typeWriter(contador, textoContador, 0, () => {

        setTimeout(() => {
            typeWriter(paragrafo, mensagem, 0, () => {
                
                btnMemorias.classList.remove("escondida");

            });
        }, 400);

    });
});
   
    btnMemorias.addEventListener("click", () => {

        secaoMemorias.classList.remove("escondida");

         secaoMemorias.scrollIntoView({
             behavior: "smooth",
             block: "start"
    });
});

let atual = 0;

    memorias.forEach((foto, index) => {
        foto.addEventListener("click", () => {
            if(index === atual){

                foto.classList.add("revelada");
                atual++;
            if (atual === memorias.length) {
                setTimeout(() => {
                    mensagemFinal.classList.remove("escondida");
            
                    mensagemFinal.scrollIntoView({
                        behavior: "smooth",
                        block:"center"
                    });
                }, 800);
            }
            }
    });
});