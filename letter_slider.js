$(document).ready(function(){
	
	"use strict";
	$("a:nth-child(1)").css("background-color","#fff");
	$("#circle1").click(function(){
		$("#letterslider").animate({'left':'5%'},500);
		$("#data").fadeIn(700);
		$("#data2,#data3,#data4").fadeOut(500);
		$(".letterline").animate({'left':'60%'});
		$("a:nth-child(1)").css("background-color","white");
		$("a:nth-child(2),a:nth-child(3),a:nth-child(4)").css("background-color","black");
	});
	$("#circle2").click(function(){
		$("#letterslider").animate({'left':'-30%'},500);
		$("#data2").fadeIn(700);
		$("#data,#data3,#data4").fadeOut(500);
		$(".letterline").animate({'left':'25%'});
		$("a:nth-child(2)").css("background-color","white");
		$("a:nth-child(1),a:nth-child(3),a:nth-child(4)").css("background-color","black");
	});
	
	$("#circle3").click(function(){
		$("#letterslider").animate({'left':'-190%'},500);
		$("#data3").fadeIn(700);
		$("#data,#data2,#data4").fadeOut(500);
		$(".letterline").animate({'left':'55%'});
		$("a:nth-child(3)").css("background-color","white");
		$("a:nth-child(1),a:nth-child(2),a:nth-child(4)").css("background-color","black");
	});
	
	$("#circle4").click(function(){
		$("#letterslider").animate({'left':'-240%'},500);
		$("#data4").fadeIn(700);
		$("#data,#data2,#data3").fadeOut(500);
		$(".letterline").animate({'left':'25%'});
		$("a:nth-child(4)").css("background-color","white");
		$("a:nth-child(1),a:nth-child(2),a:nth-child(3)").css("background-color","black");
	});
	
});