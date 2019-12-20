const button = document.querySelector('#save');

button.addEventListener('click', (ev) => {
  ev.preventDefault();
  const teams = document.querySelector('#teams');
  let teamsArr = Array.from(teams.childNodes);
  let cleanArr = [];
  teamsArr.forEach(team => {
    if (!team.textContent.includes("\n")) {
      cleanArr.push(team.textContent)
    }
  });

  let formData = new FormData();
  formData.append('tabell', cleanArr);

  const options = {
    method: 'POST',
    body: formData,
  };

  const message = document.querySelector('#message');

  fetch('.', options)
    .then(res => res.json())
    .then(res => {
      message.innerHTML = "Din kupong har blitt lagret";
      message.style.opacity = 1;
      setTimeout(() => {
        message.style.opacity = 0;
      }, 4000)
  });

});
