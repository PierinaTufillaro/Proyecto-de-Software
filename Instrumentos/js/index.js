function validar() {
	const table = document.getElementById('table') 
	const id = document.getElementById('id').value
	const type = document.getElementById('type').value
  	const observations = document.getElementById('observations').value

	if(!id){
		return alert('El ID es un campo obligatorio.')
  	}

  	if(observations.length > 2){
		return alert('La observacion no debe tener mas de 255 caracteres')
  	}

  	var fila="<tr><td>"+id+"</td><td>"+type+"</td><td>"+observations+"</td></tr>";

    var btn = document.createElement("tr");
   	btn.innerHTML=fila;
    document.getElementById("table").appendChild(btn);
}

function reset(){
  	document.getElementById('id').value = ''
  	document.getElementById('type').value = ''
  	document.getElementById('observations').value = ''
}

function init(){
}
