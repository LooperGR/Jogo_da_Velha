//Marcadores do jogo
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');

//Mensagens
let message = document.querySelector('#message');
let messageText = document.querySelector('#message p');

//Jogador secundário
let secondPlayer;

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//Adicionando evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    //Quando alguém clicar na caixa
    boxes[i].addEventListener('click', function() {

        let el = checkEl(player1, player2); //Elemento que será clicado
       
        // Verificar se o campo está marcado
        if(this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true); //clona o elemento selecionado
            this.appendChild(cloneEl); //Adiciona o elemento clonado na caixa
        
            //Computa a jogada
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        
        }
        
        //Verifica quem venceu
        let winner = winCondition();
        if(winner) {
            if(winner == 'x') {
                messageText.innerHTML = 'Jogador 1 venceu!';
            } else {
                messageText.innerHTML = 'Jogador 2 venceu!';
            }
            message.classList.remove('hide');
            message.classList.add('show');
        }

    });
}

//Função para definir quem é o jogador
function checkEl(player1, player2){
    if(player1 == player2) {
        el = x;
    } else {
        el = o;
    }

    return el; //Retorna o player da vez
}

//Verificar o vencedor
function winCondition(){
    let b1 = document.querySelector('#block1');
    let b2 = document.querySelector('#block2');
    let b3 = document.querySelector('#block3');
    let b4 = document.querySelector('#block4');
    let b5 = document.querySelector('#block5');
    let b6 = document.querySelector('#block6');
    let b7 = document.querySelector('#block7');
    let b8 = document.querySelector('#block8');
    let b9 = document.querySelector('#block9');

    //horizontal 
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
            let b1Child = b1.childNodes[0].className;
            let b2Child = b2.childNodes[0].className;
            let b3Child = b3.childNodes[0].className;

            if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
                //x vence
                winner('x');
            } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
                //o vence
                winner('o');
            }

        } else if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
            let b4Child = b4.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;

            if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
                //x vence
                winner('x');
            } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
                //o vence
                winner('o');
            }

        } else if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
            let b7Child = b7.childNodes[0].className;
            let b8Child = b8.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;

            if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
                //x vence
                winner('x');
            } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
                //o vence
                winner('o');
            }
        }

    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            //x vence
            winner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o vence
            winner('o');
        }

    } else if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            //x vence
            winner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o vence
            winner('o');
        }

    } else if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            //x vence
            winner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o vence
            winner('o');
        }
    }

    //diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            //x vence
            winner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o vence
            winner('o');
        }

    } else if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            //x vence
            winner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o vence
            winner('o');
        }
    }

    //Deu velha
    let counter = 0;
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++; //conta o número de jogadas (caso chegue a 9, deu velha)
        }
    }

    if(counter == 9) {
        winner('velha');
    } 
}

// Declara o vencedor
function winner(el) {
    let scoreBoardX = document.querySelector('#scoreboard-x');
    let scoreBoardO = document.querySelector('#scoreboard-o');
    let msg = '';

    if(winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1; //atualiza o placar
        msg = 'X venceu!';
    } else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1; //atualiza o placar
        msg = 'O venceu!';
    } else {
        msg = 'Deu velha!';
    }

    //Exibe a mensagem
    messageText.innerHTML = msg;
    message.classList.remove('hide');

    //Esconde a mensagem
    setTimeout(function() {
        message.classList.add('hide');
    }, 2500);

    //Zera o jogo
    player1 = 0;
    player2 = 0;

    //Remove os elementos do tabuleiro
    let remove = document.querySelectorAll('.box div');

    for(let i = 0; i < remove.length; i++) {
        remove[i].parentNode.removeChild(remove[i]);
    }
}