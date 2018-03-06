$(function(){
	$.user=sessionStorage.getItem("user");
	$.pass=sessionStorage.getitem("pass");
	$.str="";
	if($.data=checkdata($.user)){
		for( $.i=0;$.i<($.data).length;i++)
		{
			str=str+'<div class='+i+'>'+$.data[0].title+'</div><div class='+i'>'+$.data[0].notes+'</div>';
			
		}
		
		document.getElementById("cc").innerHTML=str;
	}
	

});
function add()
{
	var topic;
	var title;
	var body;
	$.topic=document.getElementById('mtopic');
	$.title=document.getElementById('mtitle');
	$.body=document.getElementById('mbody');
	var data;
	var data1;
	$.ajax({
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/'+email+'/users/notes/'+mtopic,
		success: function(data) {
		console.log("The data:", data);
		}
	});
	
	if(data)
	{
		$.ajax({
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/'+email+'/users/notes/'+mtopic+'/'+mtitle,
		success: function(data1) {
		console.log("The data:", data1);
		}
		});
		
		if(data1)
			alert("You must either update the existing records or try creating a different note");
		else{
			$.ajax({
				//splitEmail
						type: 'POST',
						url: 'http://restful-api-.herokuapp.com/api/'+splitEmail[0]+"/users/notes"+mtopic+'/'+mtitle,
						data: {topic: $.topic, title: $.title, body: $.body},
						success: function(data) {
								console.log("Superman added!", data);
								
								}
				});
		}
		
	}
	else
	{
		$.ajax({
				//splitEmail
						type: 'POST',
						url: 'http://restful-api-.herokuapp.com/api/'+splitEmail[0]+"/users/notes"+mtopic+'/'+mtitle,
						data: {topic: $.topic, title: $.title, body: $.body},
						success: function(data) {
								console.log("Superman added!", data);
								
								}
				});
			
	}
	
	
}
function checkdata(email)
{		
	
	var data;
	$.ajax({
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/'+email+'/notes',
		success: function(data) {
		console.log("The data:", data);
		}
	});
	
	return data;
	
}