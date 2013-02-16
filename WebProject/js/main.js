	function ValidateContactForm()
	{
		var name = document.ContactForm.Name;
		var email = document.ContactForm.Email;
		var comment = document.ContactForm.Comment;
		var subject = document.ContactForm.Subject;
		if (name.value == "")
		{
			window.alert("Please enter your name.");
			name.focus();
			return false;
		}
		else if(name.value != "")
		{
		document.getElementById("reN").style.backgroundImage="url('./img/tick.png')";
		}
	   
		if (email.value == "")
		{
			window.alert("Please enter a valid e-mail address.");
			email.focus();
			return false;
		}
		
		if (email.value.indexOf("@", 0) < 0 )
		{
			window.alert("Please enter a valid e-mail address.");
			email.focus();
			return false;
		}
		if (email.value.indexOf(".", 0) < 0)
		{
			window.alert("Please enter a valid e-mail address.");
			email.focus();
			return false;
		}
		else
		{
		document.getElementById("reE").style.backgroundImage="url('./img/tick.png')";
		}	
		
		if (subject.value == "select subject")
		{
			window.alert("Please select a subject.");
			comment.focus();
			return false;
		}
		else if(subject.value != "")
		{
		document.getElementById("reS").style.backgroundImage="url('./img/tick.png')";
		}
		
		if (comment.value == "")
		{
			window.alert("Please provide a detailed description or comment.");
			comment.focus();
			return false;
		}
		else if(comment.value != "")
		{
		document.getElementById("reM").style.backgroundImage="url('./img/tick.png')";
		}	
		
		return true;
		
	}