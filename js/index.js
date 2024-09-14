const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  document.querySelectorAll('.animatable').forEach((element) => {
    observer.observe(element);
  });
  
  function setupCardToggle(buttonId, cardClass, contentClass, iconId, textClass) {
      const button = document.getElementById(buttonId);
      const card = document.querySelector(`.${cardClass}`);
      const content = document.querySelector(`.${contentClass}`);
      const icon = document.getElementById(iconId);
      const cardText = document.querySelector(`.${textClass}`);
  
      button.addEventListener('click', () => {
          card.classList.toggle('selected');
  
          if (content.style.display === 'none' || !content.style.display) {
              content.style.display = 'block';
              icon.classList.replace('bi-plus', 'bi-dash');
              cardText.classList.add('acomodarTextoProceso');
              content.classList.add('expand');
          } else {
              content.classList.remove('expand');
              content.style.display = 'none';
              icon.classList.replace('bi-dash', 'bi-plus');
              cardText.classList.remove('acomodarTextoProceso');
          }
      });
  }
  
  setupCardToggle('botonPlus01', 'card1p', 'card1pa', 'card1icon', 'card1t');
  setupCardToggle('botonPlus02', 'card2p', 'card2pa', 'card2icon', 'card2t');
  setupCardToggle('botonPlus03', 'card3p', 'card3pa', 'card3icon', 'card3t');
  setupCardToggle('botonPlus04', 'card4p', 'card4pa', 'card4icon', 'card4t');
  setupCardToggle('botonPlus05', 'card5p', 'card5pa', 'card5icon', 'card5t');
  setupCardToggle('botonPlus06', 'card6p', 'card6pa', 'card6icon', 'card6t');
  