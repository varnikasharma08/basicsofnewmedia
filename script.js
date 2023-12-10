function validateForm() {
   var name = document.getElementById('fname').value;
   var email = document.getElementById('femail').value;
   var address = document.getElementById('faddress').value;
   var people = document.getElementById('people').value;
   var phno=document.getElementById('phno').value;

  var namecheck=/^[A-Za-z]{3,30}$/;
  var peoplecheck=/[0-9]$/;
  var emailcheck=/^[A-Za-z_]{3.}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  var phnocheck=/^[789]{1}[0-9]{9}$/;

  if (name == "") {
     document.getElementById('nameErr').innerHTML = "Please enter the value";
  }
  if (people == "") {
     document.getElementById('peopleErr').innerHTML = "Please enter the value";
  }
  if (email== "") {
     document.getElementById('emailErr').innerHTML = "Please enter the value";
  }
  if (phno == "") {
     document.getElementById('phnoErr').innerHTML = "Please enter the value";
  }


  if(namecheck.test(name)){
     document.getElementById('nameErr').innerHTML=" ";
  }else{
     document.getElementById('nameErr').innerHTML="enter valid name";
  }

  if(peoplecheck.test(people)){
     document.getElementById('peopleErr').innerHTML=" ";
  }else{
     document.getElementById('peopleErr').innerHTML="enter valid number of people";
  }

  if(emailcheck.test(email)){
     document.getElementById('emailErr').innerHTML=" ";
  }else{
     document.getElementById('emailErr').innerHTML="enter valid email";
  }

  if(phnocheck.test(phno)){
     document.getElementById('phnoErr').innerHTML=" ";
  }else{
     document.getElementById('phnoErr').innerHTML="enter valid phone number";
  }

 }
       function openMenu(evt, menuName) {
   var i, x, tablinks;
   x = document.getElementsByClassName("menu");
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablink");
   for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
   }
   document.getElementById(menuName).style.display = "block";
   evt.currentTarget.firstElementChild.className += " w3-red";
 }
 document.getElementById("myLink").click();