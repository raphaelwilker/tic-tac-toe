// JavaScript Document
//Função do menu em abas e desabilita uma das abas
$(function() {
		$( "#tabs" ).tabs({ disabled: [1] });
	});
//Função para os botões
$(function(){
		   $('input[name="botao"]').button();
		   });
//Função de mascara
$(function(){
		   $('input[name="data"]').mask("99/99/9999");
		   $('input[name="admissao"]').mask("99/99/9999");
		   $('input[name="cep"]').mask("99999-999");
		   $('input[name="telefone"]').mask("(99)9999-9999");
		   $('input[name="cpf"]').mask("999.999.999-99");
		   });
//Função que verifica os campos
function verifica_campo(){
	
	var cont_campo_text = $("input:text").size();
	var cont_campo_radio = $("input:radio").size();
	var cont_campo_select = $("select").size();
	var cont_campo_textarea= $("textarea").size();
	var valida = false;
	var total = cont_campo_text +cont_campo_radio+cont_campo_select +cont_campo_textarea;
	for(var i = 1 ; i <=total; i++){
	if($("#campo_"+i).val()==""){
		$("#campo_"+i).css({border:"3px red solid"});
		valida = true
		}else{
			//tirar a borda
			$("#campo_"+i).css({border:" "});
			
		}
	}
	if(valida == false){
		//faz troca de aba
		for(i = 1 ; i <=total; i++){
		if($('input[name = "civil"]:checked').val() == 01)
		{$("#Texto_5").text(" Solteiro(a) ")}
		if($('input[name= "civil"]:checked').val()  == 02)
		{$("#Texto_5").text(" Casado(a) ")}
		if($('input[name= "civil"]:checked').val() == 03)
		{$("#Texto_5").text(" Viuvo(a) ")}
		$("#Texto_"+i).text(" "+$("#campo_"+i).val())
		}
		$( "#tabs" ).tabs({ disabled: [0] });
		$( "#tabs" ).tabs({ enabled: [1] });
		$( "#tabs" ).tabs({ selected: [1] });
		$( "#tabs" ).tabs({ disabled: [0] });
		}
	
	
}
//Função de enviar dados para o php
function envia_dados(){
	var teste = new Array();
	var cont_campo_text = $("input:text").size();
	var cont_campo_radio = $("input:radio").size();
	var cont_campo_select = $("select").size();
	var cont_campo_textarea= $("textarea").size();
	var total = cont_campo_text +cont_campo_radio+cont_campo_select +cont_campo_textarea;
	for(var i = 1 ; i <=total; i++){
				teste[i]= $("#campo_"+i).val();
	}

	$.post("cadastrar.php",
	{nome:teste},
	function(valor){
		//$("#campo_01").html(" "+valor);
		alert(valor);
		})
				
		
	
		
}
//FUNÇÃO QUE FAZ PESQUISA
function pesquisa(){
	var teste = new Array();
	var cont_campo_text = $("input:text").size();
	var valida = false;
	for(var i = 1 ; i <=cont_campo_text; i++){
	if($("#campo_"+i).val()==""){
		$("#campo_"+i).css({border:"3px red solid"});
		valida = true
		}else{
			//tirar a borda
			$("#campo_"+i).css({border:" "});
			for(var i = 1 ; i <=cont_campo_text; i++){
				teste[i]= $("#campo_"+i).val();
			}
				$.post("pesquisa.php",
				{a:teste},
				function(valor){
					$("#campo_01").html(" "+valor);
				})
				}
	}

}
//FUNÇÃO QUE VOLTA ABA
function voltar()
{
	$( "#tabs" ).tabs({ disabled: [1] });
	$( "#tabs" ).tabs({ enabled: [0] });
	$( "#tabs" ).tabs({ selected: [0] });
	$( "#tabs" ).tabs({ disabled: [1] });
}
//Função exibe pop_up_1
function pop_up()
{
	$("#box").dialog();
	
}