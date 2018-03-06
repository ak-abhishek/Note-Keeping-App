function test(){
	$.user=sessionStorage.getItem("user");
	$.pass=sessionStorage.getItem("pass");
	$.str="";
	if($.data=checkdata($.user)){
		for( $.i=0;$.i<($.data).length;i++)
		{
			str=str+'<div class='+i+'>'+$.data[$.i].title+'</div><div class='+i+'>'+$.data[$.i].notes+'</div>';
			
		}
		console.log(str);
		document.getElementById("cc").innerHTML=str;
	}
	else
	{
		console.log("FDFDFD");
		add($.user);
	}
	

}
function add(name)
{
	var topic;
	var title;
	var body;
	topic=document.getElementById('mtopic').value;
	title=document.getElementById('mtitle').value;
	body=document.getElementById('mbody').value;
	console.log("FD",topic);
	console.log(title);
	console.log(body);
	var data;
	var data1;
	$.ajax({
		
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/'+name+'/users/notes/'+topic,
		success: function(data) {
		console.log("The data:", data);
		}
	});
	console.log("sent ajax request "+data);
	if(data==undefined)
	{
		console.log("x");
		$.ajax({
			
		type: 'GET',
		url: 'http://restful-api-.herokuapp.com/api/'+email+'/users/notes/'+topic+'/'+title,
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
						url: 'http://restful-api-.herokuapp.com/api/'+splitEmail[0]+"/users/notes"+topic+'/'+title,
						data: {topic: topic, title: title, body: body},
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
						url: 'http://restful-api-.herokuapp.com/api/'+splitEmail[0]+"/users/notes"+topic+'/'+title,
						data: {topic: topic, title: title, body: body},
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
		url: 'http://restful-api-.herokuapp.com/api/'+email+'/users/notes',
		success: function(data) {
		console.log("The data:", data);
		}
	});
	
	return data;
	
}