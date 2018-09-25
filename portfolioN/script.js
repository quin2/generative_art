window.addEventListener("load", first);

function first() {
  var squares = document.getElementsByClassName('inside');

  console.log('hello');

  for(var i = 0; i < squares.length; i++){
    squares[i].style.left = Math.floor(Math.random() * (50)) + 'px';
    squares[i].style.top = Math.floor(Math.random() * (50)) + 'px';
    console.log(squares[i].style.top);
  }

}
