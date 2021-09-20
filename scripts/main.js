function CalcMedia() {
  var nota1 = parseFloat(document.getElementById('notaUm').value)
  var nota2 = parseFloat(document.getElementById('notaDois').value)
  var nota3 = parseFloat(document.getElementById('notaTres').value)
  var nota4 = parseFloat(document.getElementById('notaQuatro').value)

  var media = (nota1 + nota2 + nota3 + nota4) / 4

  document.getElementById('resultadoMedia').value = media

  var foiAprovado =
    media >= 5
      ? alert('Parabéns, sua média foi maior que 5 e você foi aprovado(a)!')
      : alert('Infelizmente você não atingiu média 5 e foi reprovado(a).')
  console.log(foiAprovado)
}

merdia >= 5 ? alert('Você froi aprovado') : alert('Você foi reprovado')

function ResetInput() {
  ;(document.getElementById('notaUm').value = ''),
    (document.getElementById('notaDois').value = ''),
    (document.getElementById('notaTres').value = ''),
    (document.getElementById('notaQuatro').value = ''),
    (document.getElementById('resultadoMedia').value = '')
}
