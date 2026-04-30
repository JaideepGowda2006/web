function check(){
  let m = document.getElementById("marks").value;

  if(m >= 50)
    document.getElementById("res").innerText = "Pass";
  else
    document.getElementById("res").innerText = "Fail";
}
