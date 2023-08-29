const form = document.getElementById('formulario');
const Atividades = [];
const Notas = [];
let linhas = '';
const imgAprovado = `<img src="images/aprovado.png" alt="Emoji Festejando">`;
const imgReprovado = `<img src="images/reprovado.png" alt="Emoji triste">`;
const notaMinima = parseFloat(prompt('Digite a nota minima:'));
const spanAprovado = `<span class= "resultado aprovado">Aprovado</span>`;
const spanReprovado =`<span class="resultado reprovado">Reprovado</span>`;

form.addEventListener('submit', function(e){
    e.preventDefault();

    atualizaLinha();
    AdcionaLinha();
    AtualizaMediaFinal();
})

function atualizaLinha(){
    const inputAtividade = document.getElementById('atividade');
    const inputNotas = document.getElementById('nota');


    if (Atividades.includes(inputAtividade.value)){
        alert(`A atividade ${inputAtividade.value} Já existe`);
    } else{

        Atividades.push(inputAtividade.value);
        Notas.push(parseFloat(inputNotas.value));
    
        let linha = '';
    
        linha = '<tr>';
        linha += `<td>${inputAtividade.value}</td>`;
        linha += `<td>${inputNotas.value}</td>`;
        linha += `<td>${inputNotas.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';
        linhas += linha;

    }


    inputAtividade.value = '';
    inputNotas.value = '';
}
function AdcionaLinha(){
    const Tabela = document.querySelector('tbody');
    Tabela.innerHTML = linhas;
}

function CalculaMediaFinal(){
    let SomaDasNotas = 0;

    for(let i = 0; i < Notas.length; i++){
        SomaDasNotas = Notas[i];

        return SomaDasNotas / Notas.length;
    }

}

function AtualizaMediaFinal(){
    const MediaFinal = CalculaMediaFinal();
    
    document.getElementById('valor-media').innerHTML = MediaFinal.toFixed(2);
    document.getElementById('resultado').innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado;


}