$(function() {
	var user=sessionStorage.getItem("user");
	var pass=sessionStorage.getItem("pass");
	var str="";
	console.log(user+" "+pass);
	var hd;
	//console.log(checkdata(user));
	
	var data=checkdata(user);
	
});
var data2;
function call(data)
{
	console.log(data);
	console.log(typeof data)
	//var dataa=JSON.parse(data);
	data2=data;
	console.log("Hi guys"+data2);
	var str="";
	console.log(data.length);
	if(data.length>0){
		
		var obj={};
		var tag=[];
		
		
		
		
		
		var strbutton="";
		for( var i=0;i<(data).length;i++)
		{
			
			obj[data[i].topics]=[];
			obj[data[i].topics].push(data[i].bodys);
			//str=str+'<div class="cards" id='+i+'>'+data[i].topics+'</div><div class="cards" id='+i+'>'+data[i].bodys+'</div>';
			console.log(data[i].topics);
			tag.push(data[i].topics);
			
			
			str=str+'<div class="card text-white bg-primary mb-3 col-md-6" style="max-width: 30rem;"> <div class="card-header">'+data[i].topics+'</div> <div class="card-body"> <h4 class="card-title">'+data[i].titles+'</h4> <p class="card-text">'+data[i].bodys+'</p> </div></div>';
			
			
			//console.log(i);
		}
		//console.log(tag);
		var unique = tag.filter(function(elem, index, self) {
			return index === self.indexOf(elem);
		})
		
		
		for(var i=0;i<unique.length;i++)
		{
				strbutton=strbutton+'<button type="button" class="btn btn-outline-primary" id='+unique[i]+' onclick="render('+String(unique[i])+')">'+unique[i]+'</button>'
		}
		console.log(str);
		document.getElementById("cd").innerHTML=strbutton;
		document.getElementById("cx").innerHTML=str;
	}
	
		console.log("FDFDFD");
		//add(user);
	
	

}
function render(id)
{
	
	var topic= id;
	console.log(topic.id);
	console.log("hi i am here");
	var str="";
	for(var i=0;i<data2.length;i++)
		if(data2[i].topics==topic.id)
		{
			console.log(topic.id);
			str=str+'<div class="card text-white bg-primary mb-3 col-md-6" style="max-width: 30rem;"> <div class="card-header">'+data2[i].topics+'</div> <div class="card-body"> <h4 class="card-title">'+data2[i].titles+'</h4> <p class="card-text">'+data2[i].bodys+'</p> </div></div>';
		}
	document.getElementById("cx").innerHTML=str;
}
function add()
{
	var user=sessionStorage.getItem("user");
	var pass=sessionStorage.getItem("pass");
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
				
				//splitEmail
						type: 'POST',
						async: false,
						url: 'http://restful-api-.herokuapp.com/api/'+user+"/notes",
						data: {topics: topic, titles: title, bodys: body},
						success: function(data) {
								console.log("Superman added!", data);
								
								}
				});
		
	
	//console.log(data);
}
function checkdata(email)
{		
	
	var data;
	$.ajax({
		type: 'GET',
		async: false,
		url: 'http://restful-api-.herokuapp.com/api/'+email+'/notes',
		success: function(data) {
			//hd(data);
			//console.log("the data in hd" ,hd);
			//confirm("are you sure");
			console.log("The data:", data);
			call(data);
			return(data);
		}
	});
	//console.log(data);
	//return data;
	
}

function delet(){
	var x=document.getElementById('del').value;
		var user=sessionStorage.getItem("user");

	var id;
	for(var i=0;i<data2.length;i++)
		if(x==data2[i].titles)
		{id=data2[i]._id; console.log(id);break;}
	$.ajax({
	type: 'DELETE',
	url: 'http://restful-api-.herokuapp.com/api/'+user+'/notes/'+id,
	success: function() {
		//no data...just a success (200) status code
		console.log('Deleted Successfully!');
	}
});
}