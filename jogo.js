console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

sprites.onload = function() {
    const canvas = document.querySelector('canvas');
    const contexto = canvas.getContext('2d');

    //PLANO DE FUNDO

    const planoDeFundo = {
        spriteX: 390, 
        spriteY: 0,
        largura: 275,
        altura: 204,
        x: 0,
        y: canvas.height -204,

        desenha(){

            contexto.fillStyle = '#70c5ce';
            contexto.fillRect(0, 0, canvas.width, canvas.height)

            contexto.drawImage(
                sprites,
                planoDeFundo.spriteX, planoDeFundo.spriteY,
                planoDeFundo.largura, planoDeFundo.altura,
                planoDeFundo.x, planoDeFundo.y,
                planoDeFundo.largura, planoDeFundo.altura,
                );

                contexto.drawImage(
                    sprites,
                    planoDeFundo.spriteX, planoDeFundo.spriteY,
                    planoDeFundo.largura, planoDeFundo.altura,
                    (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
                    planoDeFundo.largura, planoDeFundo.altura,
                    );
                },
        };
         

    //CHÃO

    const chao = {
        spriteX: 0,
        spriteY: 610,
        largura: 224,
        altura: 612,
        x: 0,
        y: canvas.height -112,

        desenha(){
            contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY,
                chao.largura, chao.altura,
                chao.x, chao.y,
                chao.largura, chao.altura,
            );

            contexto.drawImage(
                sprites,
                chao.spriteX, chao.spriteY,
                chao.largura, chao.altura,
                (chao.x + chao.largura), chao.y,
                chao.largura, chao.altura,
            );
        },
    }


    const flaapBird = {

        spriteX: 0,
        spriteY: 0,
        largura: 33,
        altura: 24,
        x: 10,
        y: 50,
        gravidade: 0.25,
        velocidade: 0,

        atualiza(){
            flaapBird.velocidade = flaapBird.velocidade + flaapBird.gravidade;
            flaapBird.y = flaapBird.y + flaapBird.velocidade;
        },
        
        desenha(){
            contexto.drawImage(
                sprites,
                flaapBird.spriteX, flaapBird.spriteY, //Sprite X e Sprite Y
                flaapBird.largura, flaapBird.altura, //Tamanho do recorte na Sprite
                flaapBird.x, flaapBird.y, //Posição que queremos que a imagem apareça,P.C.
                flaapBird.largura, flaapBird.altura, //Tamanho objeto, altura e largura  
            );
        }
        
        }

    function loop() {
        flaapBird.atualiza();

        planoDeFundo.desenha();
        chao.desenha();
        flaapBird.desenha();

        requestAnimationFrame(loop);
        
    };

    loop();
};


//Criando uma função para guardar os valores de tamanho, posição no mapa, colisão e tudo mais do no Bird
// A sintaxe de "= {}" é usada para criar um objeto em JS e dentro desse objteo guardamos os valores que iremos trabalhar mais tarde 