$("#as").click(function(e){
				e.preventDefault();
				console.log("entered");
				$.email=$("#email").val();
				$.emailarr=($.email).split('@');
				$.pass=$("#pass").val();
				$.flag1=0; $.flag2=0;
				for(var i=0;i<($.email).length;i++)
				{
						if($.email[i]=='@')
							$.flag1=1;
						if($.email[i]=='.')
							$.flag2=1;
						
				}
				if($.flag1==0|| $.flag2==0)
				{
						$.str='<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Oh snap!</strong> <a href="#" class="alert-link">Invalid Email, Please check</a> and try submitting again.</div>'
						document.getElementById("cc").innerHTML=$.str;
				}
				
				if(($.pass).length<4 ||$.flag3==0)
				{
						$.str='<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Oh snap!</strong> <a href="#" class="alert-link">Invalid Password, Please check</a> and try submitting again.</div>'
						document.getElementById("cx").innerHTML=$.str;
				}
				
				console.log($.emailarr);
				console.log($.pass);
				if(signin($.email, $.emailarr, $.pass)){
					sessionStorage.setItem("user", $.emailarr[0]);
					sessionStorage.setItem("pass", $.pass);
					window.location.replace("./notes.html");

				}
				else{
					console.log("Error// do red boxing once the error occurs ");
				}
	
});

function signin(email, splitEmail, pass){
	var toReturn;
		$.ajax({
				type: 'GET',
				url: 'http://restful-api-.herokuapp.com/api/'+splitEmail[0]+'/users',
				async: false,
				success: function(data) {
									console.log("Here's the item!", data);
									toReturn = data;
									
				}
				
			});
return toReturn.length;	
}