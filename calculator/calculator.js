$(document).ready(function () {
  $('#add').click(function (e) {
    e.preventDefault()
    var sum1 = parseInt($('#num1').val()) + parseInt($('#num2').val())
    $('#output').val(sum1)
  })
  $('#sub').click(function (e) {
    e.preventDefault()
    var sum2 = parseInt($('#num1').val()) - parseInt($('#num2').val())
    $('#output').val(sum2)
  })
  $('#mul').click(function (e) {
    e.preventDefault()
    var sum3 = parseInt($('#num1').val()) * parseInt($('#num2').val())
    $('#output').val(sum3)
  })
  $('#divi').click(function (e) {
    e.preventDefault()
    var sum4 = parseInt($('#num1').val()) / parseInt($('#num2').val())
    $('#output').val(sum4)
  })
})
