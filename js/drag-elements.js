var dragCards = (function() {
  var cardContainer = document.querySelectorAll('.column__card-container');
  var listContainer = document.querySelector('.list-container');

  dragula([listContainer], {
    moves: function(el, container, handle) {
        return !(handle.classList.contains('card') ||
                 handle.classList.contains('card__content') ||
                 handle.classList.contains('card__text'));
      },
    direction: 'horizontal'
  });

  dragula([].slice.apply(cardContainer));

})();

