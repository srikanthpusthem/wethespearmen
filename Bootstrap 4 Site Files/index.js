const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('teampics').scrollLeft += 300;
    };
    buttonLeft.onclick = function () {
      document.getElementById('teampics').scrollLeft -= 300;
    };