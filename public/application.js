// console.log('-------------');

// document.querySelector('.js-button').addEventListener('click', async (event) => {
//   const { id } = event.target.dataset;
//   const { tema } = event.target.dataset;

//   console.log(id, tema);
//   if (Number(id) === 7) {
//     window.location.href = '/cards';
//   } else {
//     const res = await fetch(`/game/${tema}/${id}`);
//     const data = await res.text();
//     document.querySelector('#catalogg').innerHTML = data;
//   }
// });
const e = document.forma;
e.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { useranswer, action, method } = event.target;
  const res = await fetch(action, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ useranswer: useranswer.value }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    document.querySelector('.truee').innerHTML = 'Красавчик, ты на шаг ближе к Семье.';
  } else {
    document.querySelector('.truee').innerHTML = data.trueAnswer;
  }
});
