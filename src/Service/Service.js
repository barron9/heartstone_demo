export default pullCardsDatafromAPI = callback => {
  fetch('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f67b08273cmsh04a4c110dcc303bp14fd12jsn58d904d1ca05',
    },
  })
    .then(response => response.json())
    .then(responseJSON => {
      console.log(responseJSON);

      callback(responseJSON);
    })
    .catch(err => {
      callback(null);
    });
};
