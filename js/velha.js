window.onload = (function(){
		var jogada =0;
		var circulo = false;
		var  xis = false;
		var draw = false
		var campo = new Array();
		var win = new Array();
		var total= new Array();
		total = [0,0];
		var vitoria = [7,56,448,73,146,292,273,84];
		var valor_1;
		var valor_2;
		$( "#tabs" ).tabs();
		$( "div.square" ).html(" ");
		for(var i = 0; i<9; i++)
		{
			campo[i]= 0;
			win[i] = Math.pow(2,i);
		}
		
try{
    $("div.square").click(function (event) { 
	 	if(campo[event.currentTarget.id]==0){
		 if(jogada%2==0)
		  {
			if(jogada<10){
			  
				$(this).html("<span class='contentSquare'>O</span>");
				jogada++;
				campo[event.currentTarget.id]= 1
				valor_2 = win[event.currentTarget.id] + total[0];
				total[0] = valor_2;
				Win();
				
			}
		  }else{
			  if(jogada<10){
				  $(this).html("<span class='contentSquare'>X</span>");
				  
				  campo[event.currentTarget.id]= 2;
				  valor_1 = (win[event.currentTarget.id] + total[1]) ;
				  total[1] = valor_1;
				  jogada++;
				  Win();
			  }
		  }
		  if(circulo == true)
		  {
			  alert("Bola WIN");
		  }else if(xis == true){
		  		alert("X WIN");
		  }else if(circulo == false && xis == false && jogada==9){
			  draw = true;
			  alert("EMPATOU");
		  }
		 
			
		  
	 }
	
	
	});
    function Win()
	{
		for(var i =0; i<2;i++)
		{
			for(var j =0; j < 8 ;j++)
			{
				if((total[i] & vitoria[j])== vitoria[j])
				{
					if(total[i]%2 == 0)
					{	
						 xis = true;
						 jogada =10;
					}else{
						circulo = true;				
						 jogada =10;
						
					}
				}
			}
			
		}
	}

}catch(e){}});


/*
// Variáveis
var wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
var table;
var jogador;


// Evento de inicialização
$( document ).ready( initialize );


// função init, atribui um listener no botão start
function initialize()
{
   $( "#startbutton" ).click( startGame );
}


// iniciando o jogo
function startGame( event )
{
    table = [0,0,0,0,0,0,0,0,0];
    jogador = 1; // 1 = O & -1 = X
    
    $( "div.menu" ).hide("slow");
    $( "div.square" ).html("");
    $( "div.square" ).click( onClick );
}


// quando ocorreu uma jogada
function onClick( event )
{
    if( table[ event.currentTarget.id ] == 0 )
    {
        if( jogador == 1 )
            event.currentTarget.innerHTML = "O";
        else
            event.currentTarget.innerHTML = "X";

        table[ event.currentTarget.id ] = jogador;
        jogador = -jogador;

        var check = verifGame();
        if( check != 9 )
            gameOver( check );
    }
}


// verificação de jogada
function verifGame()
{
    for (k in wins)
    {
        var pattern = wins[k];
        var p = table[ pattern[0]] + table[pattern[1]] + table[pattern[2] ];

        if (p == -3) {
            return -3;
        } else if (p == 3) {
            return 3;
        }
    }

    var cont = 0;
    for (s in table) {
        if (table[s] != 0)
            cont += 1;
    }

    if (cont == 9) {
        return 0;  // Empate
    }

    return 9; //não vale nada
}



// Modal apresentando o vencedor
function gameOver( winner )
{
    if( winner==0 ) $('#winner').html("it´s a Draw");
    else if( winner==3 ) $('#winner').html("The Winner is O");
    else if( winner==-3 ) $('#winner').html("The Winner is X");

    //armazena a largura e a altura da tela
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    //Define largura e altura do div#mask iguais ás dimensçoes da tela
    $('div.mask').css({'width':maskWidth,'height':maskHeight});

    //efeito de transição
    $('div.mask').fadeTo("slow",0.85);

    //se o botãoo fechar for clicado
    $('#close').click(function (e) {
        e.preventDefault();
        $('div.mask, .window').hide();
        $( "div.menu" ).show("slow");
    });
}*/