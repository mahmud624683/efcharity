
var previous="";
function myFunction() {
  var institution=document.getElementById('professionSelect').value;
	
	if (!(institution==="") && !(previous===institution)) 
	{
		console.log(institution);
		if (institution==="student") {
			document.getElementById("student1").style.display = "block";
			document.getElementById("student2").style.display = "block";
			document.getElementById("other").style.display = "none";
			document.getElementById("student1").setAttribute("required", "required");
			document.getElementById("student2").setAttribute("required", "required");
			document.getElementById("other").removeAttribute("required");
			document.getElementById("Profession").value = "student";
		}
		else if (institution==="teacher") {
			document.getElementById("student1").style.display = "block";
			document.getElementById("student2").style.display = "none";
			document.getElementById("other").style.display = "none";
			document.getElementById("student1").setAttribute("required", "required");
			document.getElementById("student2").removeAttribute("required");
			document.getElementById("other").removeAttribute("required");
			document.getElementById("Profession").value = "teacher";
		}
		else if (institution==="Other") {
			document.getElementById("student1").style.display = "none";
			document.getElementById("student2").style.display = "none";
			document.getElementById("other").style.display = "block";
			document.getElementById("student1").removeAttribute("required");
			document.getElementById("student2").removeAttribute("required");
			document.getElementById("other").removeAttribute("required", "required");
			document.getElementById("Profession").value = "other";
		}
		else{
			document.getElementById("student1").style.display = "none";
			document.getElementById("student2").style.display = "none";
			document.getElementById("other").style.display = "none";
		}
	}
	else if(institution===""){
			document.getElementById("student1").style.display = "none";
			document.getElementById("student2").style.display = "none";
			document.getElementById("other").style.display = "none";
		}
	previous=institution;
}



var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function checkAddress()
{	var status=document.getElementById("checkbox").checked;
	if (status) {
		 //modal.style.display = "block";
		var phn=document.getElementById("phnNo").value;
		document.getElementById("phnNo").value="'"+phn;
		 
	}
	console.log(status);
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//Captcha
function Captcha(){
     var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	 	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
 	    	'0','1','2','3','4','5','6','7','8','9');
     var i;
     for (i=0;i<6;i++){
         var a = alpha[Math.floor(Math.random() * alpha.length)];
         var b = alpha[Math.floor(Math.random() * alpha.length)];
         var c = alpha[Math.floor(Math.random() * alpha.length)];
         var d = alpha[Math.floor(Math.random() * alpha.length)];
         var e = alpha[Math.floor(Math.random() * alpha.length)];
         var f = alpha[Math.floor(Math.random() * alpha.length)];
         var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
         var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
         document.getElementById("mainCaptcha").innerHTML = code
		 document.getElementById("mainCaptcha").value = code
       }
function ValidCaptcha(){
     var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
     var string2 = removeSpaces(document.getElementById('txtInput').value);
     if (string1 === string2){
            return true;
     }else{        
          return false;
          }
}
function removeSpaces(string){
     return string.split(' ').join('');
}