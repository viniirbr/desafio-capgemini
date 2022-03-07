<p align='center'>
<img src='https://user-images.githubusercontent.com/35473934/156929448-7c963a0e-a209-4bd1-b7c8-3308daf92ef7.png' width='300px'>
 </p>

# Desafio da Academia Capgemini 

<p>Esse repositório contém as soluções dos seguintes desafios propostos no processo seletivo da <b>Academia Capgemini<b>.</p> 
  
1. A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.
2. Dado um vetor de inteiros n e um inteiro qualquer x. Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.
3. Um texto precisa ser encriptado usando o seguinte esquema. Primeiro, os espaços são removidos do texto. Então, os caracteres são escritos em um grid, no qual as linhas e colunas tem as seguintes regras:
  
<p align='center'>
  <img src="https://render.githubusercontent.com/render/math?math=sqrt(T) <= linha <= coluna <= sqrt(T)" align='center'>
</p>
  
    - Considere T, como o tamanho do texto;
    - Se certifique de que linhas x colunas <= T;
    - Se múltiplos grids satisfazem as condições, escolha aquele com a menor área.

## 🔨Tecnologias utilizadas
- JavaScript <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width='30px'>
- Node.js <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width='50px'/>
- HTML5 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width='50px'/>
- CSS3 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width='50px'/>
                                              
## ⚙️Como rodar o programa
 #### Há basicamente duas maneiras de rodar os códigos que solucionam o desafio: a primeira é uma página em HTML (ainda sem estilização) e a segunda é através do terminal, utilizando o Node.js. Vamos ver como utilizar cada uma.
 
 ### Página
- Acesse a página [aqui](https://viniirbr.github.io/desafio-capgemini/).
 Nela você poderá definir o array preenchendo os campos de <i>input</i> e acrescentando os dígitos através do botão de '+'. A função será executada quando o botão de 'confirmar' for clicado. A saída poderá ser visualizada numa área parecida visualmente com o terminal.
<p align='center'><img src='https://user-images.githubusercontent.com/35473934/156954624-bcb04c6c-015e-4512-b3c1-682f6068a326.png' width='700px'></p>
 
 ### Terminal
  1. Certifique-se de ter instalado no seu computador o [Node.js](https://nodejs.dev/) para rodar o arquivo JavaScript diretamente do terminal;
  2. Instale o módulo _prompt-sync_ com o comando `npm install prompt-sync`
  3. A partir do diretório <i>desafio-capgemini</i>, navegue no seu terminal para a pasta <i>codigoDasQuestoes</i>
  <p align='center'><img src='https://user-images.githubusercontent.com/35473934/156940107-285f6c03-75ca-4a19-b7c2-015a286319c7.png' width='600px'></p>
  4. Execute o programa com o comando 
  
  `node questao<numero da questao>`
  
  <b>Exemplo:</b> <img src='https://user-images.githubusercontent.com/35473934/156940420-e8ea60d2-f62a-4c1f-86d9-f2988f579bb6.png' width='600px'>
