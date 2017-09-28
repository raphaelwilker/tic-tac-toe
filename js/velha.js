window.onload = (function(){
		var jogada =0;
		var circulo = false;
		var  xis = false;
		var draw = false
		var campo = new Array();
		var win = new Array();
		var total= new Array();
		total = [0,0];
		var vitoria = [7,56,448,73,146,292,273,84,201,294,89,75,308,420,147,275,401,464,450,58,184,456,480,481,340,337,277,57,305,118,93,117,85,211,210,213];
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
			turn(event.currentTarget.id); 
		}

	});

    function Win()
	{
		for(var i =0; i<2;i++)
		{
			for(var j in vitoria)
			{
				if(total[i] == vitoria[j])
				{
					if(i%2==1)
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
		if(jogada%2==1){
			ai();
		}

		if(circulo == true)
		{
			alert("Bola WIN");
		}else if(xis == true){
		  	alert("X WIN");
		}else if(circulo == false && xis == false && jogada==10){
			draw = true;
			alert("EMPATOU");
		}
	}

	function ai()
	{
		var rand = Math.floor((Math.random() * 9) + 1)-1;
		
		if($('#'+rand+' .contentSquare').html() !== "O" && $('#'+rand+' .contentSquare').html() !== "X" ){
			turn(rand);
		}else{
			ai();
		}
	}

	function turn(id)
	{
		if(jogada%2==0)
		{
			if(jogada<10){
			  
				$('#'+id).html("<span class='contentSquare'>O</span>");
				jogada++;
				campo[id]= 1
				valor_2 = win[id] + total[0];
				total[0] = valor_2;
				Win();
			}

		}else{
			
			if(jogada<10)
			{
				  $('#'+id).html("<span class='contentSquare'>X</span>");
				  
				  campo[id]= 2;
				  valor_1 = (win[id] + total[1]) ;
				  total[1] = valor_1;
				  jogada++;
				  Win();
			}
		}

		
		
	}

}catch(e){}});