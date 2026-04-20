const textarea=document.getElementById("text");
const counter=document.getElementById("counter")
const btn=document.getElementById("btn")
const maxlength=280
textarea.addEventListener( "input", () =>
{
    
    if ( textarea.value.length > maxlength )
    {
        textarea.value = textarea.value.slice( 0, maxlength )
    }
  
    let remaining = maxlength - textarea.value.length;
    counter.textContent = remaining + " characters remaining";

    btn.disabled = textarea.value.length === 0;
    if ( remaining === 10 )
    {

        alert( "write just 10 caracters..." )
    }

    counter.textContent = textarea.value.length + "/" + maxlength;
}

);
