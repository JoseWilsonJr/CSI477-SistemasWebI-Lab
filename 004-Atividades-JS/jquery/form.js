$(document).ready(function(){
	
	$("input[name='valor1']").focusout(function(){
		
		var n1 = parseInt($("input[name='valor1']").val());
		
		if (isNaN(n1)){
			$("#grupoV1").addClass("has-error");
			$("#alertaV1").slideDown();
			$("input[name='valor1']").val("");
			$("input[name='valor1']").focus();
			return;
		}
		
		$("#grupoV1").removeClass("has-error");
		$("#alertaV1").hide();	
	});
	

	$("button[name='somar']").click(function(){
		var n1 = parseInt($("input[name='valor1']").val());
		var n2 = parseInt($("input[name='valor2']").val());

		// Teste valor 1
		if (isNaN(n1)) {
			$("#grupoV1").addClass("has-error");
			$("#alertaV1").show();
			$("input[name='valor1']").val("");
			$("input[name='valor1']").focus();
			return;
		}

		$("#grupoV1").removeClass("has-error");
		$("#alertaV1").hide();

		if (isNaN(n2)) {
			$("#grupoV2").addClass("has-error");
			$("#alertaV2").show();
			$("input[name='valor2']").val("");
			$("input[name='valor2']").focus();
			return;
		}

		$("#grupoV2").removeClass("has-error");
		$("#alertaV2").hide();

		var res = n1 + n2;
		$("input[name='resultado']").val(res);
	});
});