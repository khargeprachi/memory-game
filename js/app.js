/*
 * Create a list that holds all of your cards
 */

document.addEventListener('DOMContentLoaded', start);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
let sec=0,min=0,hrs=0,t;
let count=0,num=0;

function closeModal()
{  let modal = document.querySelector('.modal');
    modal.style.display = "none";
    clearInterval(t);

}
function displayCard(evt) {
  console.log(count);
  /*if(count>2)
  {
    errorCards=document.querySelectorAll('.open,.show');
    for(let j=0;j<errorCards.length;j++)
    {
    errorCards[j].classList.remove('open');
    errorCards[j].classList.remove('show');
  }
  let classes=evt.target.classList;
  let result= classes.remove('open');
   result= classes.remove('show');


  }
  */
  //else {
  if(count<2)
   {
   let classes=evt.target.classList;
    result= classes.add('show','open');
   count++;
   }
 if(count===2)
    { num++;
      document.querySelector('.moves').innerHTML=num;

    if(num==10)
    {
      let stars=document.querySelector('.score-panel .stars li');
      stars.remove();

    }
    if(num==20)
    {
      let stars=document.querySelector('.score-panel .stars li');
      stars.remove();

    }

      openedCards=document.querySelectorAll('.open');
      check(openedCards);
      if(document.querySelectorAll('.match').length==16)
      {

                let modal = document.querySelector('.modal');

                let closebtn = document.querySelector('.close');
                let timeTaken=document.querySelector('.timer').innerHTML;
                document.querySelector('.time').innerHTML=timeTaken;
                document.querySelector('.rating').innerHTML=document.querySelector('.stars').innerHTML;
                modal.style.display = "block";
                closebtn.addEventListener('click',closeModal);

      }

    }

//}
}
function move(card) {
    //var elem = document.getElementById("animate");

//let elem = card[0];

let pos = 20;
var id = setInterval(frame, 1);
function frame() {

  if (pos == -20) {//clearInterval(id);
      pos1=-20;
      var id1 = setInterval(frame1, 5);
      function frame1() {
        if(pos==0)
        {
          clearInterval(id1);
        }
        else {
          {
            pos++;
            card[0].style.position = 'relative';
            card[1].style.position = 'relative';
            card[0].style.left = pos + 'px';
            card[1].style.left = pos + 'px';
          }
        }
      }
      clearInterval(id);
  }
  else {
    pos--;
    //elem.style.top = pos + 'px';
    //console.log(pos);
  card[0].style.position = 'relative';
  card[1].style.position = 'relative';
  card[0].style.left = pos + 'px';
  card[1].style.left = pos + 'px';

  }
}

}

function matched(cards)
{
    //event.preventdefault();
  cards[0].classList.remove('open');
  cards[0].classList.add('match');
  cards[1].classList.remove('open');
  cards[1].classList.add('match');
  count=0;
}
function notmatched(cards)
{

  //event.preventDefault();
  move(cards);

//cards[0].style.animation = "move 4s 2";
//cards[1].style.animation = "move 4s 2";
  cards[0].classList.remove('open');
  cards[1].classList.remove('open');
  cards[0].classList.remove('show');
  cards[1].classList.remove('show');
  count=0;
}
function check(openedCards) {

  let classes=[];
  for(let i=0;i<openedCards.length;i++)
  {
    classes[i]=openedCards[i].querySelector('i').className;
  }

  if(classes[0]===classes[1])
  {
    matched(openedCards);

  }
  else {
    setTimeout(function() {
      notmatched(openedCards);
  }, 450);

  }
}


function increase() {
  sec++;
  if(sec>=60)
  {
    sec=0;
    min++;

  if(min>=60)
  {
    min=0;
    hrs++;
  }

}
  let stopWatch=document.querySelector('.timer');
  let string= `${hrs}:${min}:${sec}`;
  stopWatch.innerHTML=string;
  //timer();
}
function timer() {

   t=setInterval(increase,1000);
}

function start()
{
  //get all cardsc

let star=document.createElement('STAR'); let temp='';
  for(let x=0;x<3;x++){
    temp+="<li><i class='fa fa-star'></i></li>";
  }
  document.querySelector('.stars').innerHTML=temp;
  closeModal();
  clearInterval(t);
  sec=0,min=0;hrs=0,t;
  timer();
  count=0;
  num=0;
  document.querySelector('.moves').innerHTML=num;
    let cards= document.querySelectorAll('.deck .card i');
    let arr=[];
    for(let i=0;i<cards.length;i++) {
        arr[i]=cards[i].classList[1];
    }
    let shuffled=shuffle(arr);//shuffle cards
    //prepare deck
    let container=document.querySelector('.deck');
    let text='';
    for(let i=0;i<shuffled.length;i++){
        text+=`<li class='card'><i class="fa ${shuffled[i]}"></i></li>`;
    }
    container.innerHTML=text;
    cards=document.querySelectorAll('.deck .card ');
    for( i=0;i<cards.length;i++) {
            if(count<2){
        cards[i].addEventListener('click',displayCard);
    }
    }


}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
