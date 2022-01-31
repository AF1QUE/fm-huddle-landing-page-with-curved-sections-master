let statComm = setInterval(animeStat(0, "comm__counter"), 10);
let statMessage = setInterval(animeStat(0, "message__counter"), 10);

function animeStat(count, statID) {
  let counter = count;
  counter++;
  document.querySelector(`#${statID}`).innerHTML = counter;
  if (counter == 500) {
    clearInterval(animeStat);
  }
}
