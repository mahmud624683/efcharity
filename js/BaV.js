
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
		}
		else if (institution==="teacher") {
			document.getElementById("student1").style.display = "block";
			document.getElementById("student2").style.display = "none";
			document.getElementById("other").style.display = "none";
		}
		else if (institution==="Other") {
			document.getElementById("student1").style.display = "none";
			document.getElementById("student2").style.display = "none";
			document.getElementById("other").style.display = "block";
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
		 modal.style.display = "block";
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
