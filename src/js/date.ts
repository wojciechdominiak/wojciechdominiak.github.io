export default function date() {
    {
      const date:HTMLSpanElement  = document.getElementById("date") as HTMLSpanElement;
  
      date.innerText = new Date().getFullYear().toString();
    }
  } 
  