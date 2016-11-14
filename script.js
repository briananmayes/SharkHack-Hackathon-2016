function openBudget(budg, allowance) {
	var i, tabcontent, tablinks;

tabcontent = document.getElementsByClassName("tabcontent");
for(int i =0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementByClassName("tablinks");
	for(int i=0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace("active", "");

	}

	document.getElementByID(allowance).style.display ="block";
	budg.currentTarget.className += "active"
	}