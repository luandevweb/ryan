var data = new Date()
var dia = data.getDate()
var horas = data.getHours()

if(dia >= 16 && horas >= 10){
    window.location.href="error.html"
}