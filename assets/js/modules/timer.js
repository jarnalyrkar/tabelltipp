import Sortable from 'sortablejs';


const futureDateText = document.querySelector('#futureDate').innerHTML;
let futureDate = new Date(futureDateText); // subtract 5 minutes

let el = document.getElementById('teams');
let sortable = Sortable.create(el);
let state = sortable.option("disabled");


const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = futureDate.getTime(),
  x = setInterval(function () {

    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      if (distance < 0) {
      // Skru av mulighet til å redigere yttligere
      document.querySelector('.teamContainer').style.color = "#aaa";
      sortable.option("disabled", !state);
      clearInterval(x);
    }

  }, second)