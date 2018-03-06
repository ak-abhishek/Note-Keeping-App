$(function(){
	console.log('main.js');
	function checkUser(email) {
		$.toReturn;
		$.ajax({
				type: 'GET',
				url: 'http://restful-api-.herokuapp.com/api/'+email[0]+'/users',
				async: false,
				success: function(data) {
									console.log("Here's the item!", data);
									$.toReturn = data;
									
				}
				
			});
return ($.toReturn).length;			
	}
	function signupFunction(splitEmail, email, pass) {
		if(!checkUser(splitEmail))  {
			console.log('first user');
			$.ajax({
				//splitEmail
															type: 'POST',
															url: 'http://restful-api-.herokuapp.com/api/'+splitEmail[0]+"/users",
															data: {name: $.emailarr, pass: $.pass},
															success: function(data) {
																console.log("Superman added!", data);
																window.location.replace("./loginpage.html");
																}
														});
		} else {
			console.log('user already present');
		}
		
	}
	$('#as').click(function(e){
				e.preventDefault();
				console.log("entered");
					$.email=$("#email").val();
					$.emailarr= ($.email).split("@");
					$.pass= $("#pass").val();
					
					$.flag1=0; $.flag2=0; $.flag3=0;
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
						document.getElementById("cc").innerHTML=($.str);
				}
				else{
					for(var i=0;i<($.pass).length;i++)
					{
						if($.pass[i]=='@'||$.pass[i]=='_'||$.pass[i]=='-'||$.pass[i]=='#')
							$.flag3=1;
						
						if($.pass==$.cpass)
							$.flag3=1;
						
					}
					if(($.pass).length<4 ||$.flag3==0)
					{
						$.str='<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>Oh snap!</strong> <a href="#" class="alert-link">Invalid Password, Please check</a> and try submitting again.</div>'
						document.getElementById("cx").innerHTML=($.str);
					}
					
					else{
						signupFunction($.emailarr, $.email,$.pass);
					}
				}
					
				});
				
});