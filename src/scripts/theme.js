function whiteTheme() {
  const buttonBackground = document.getElementById('header__button-white-theme')
  
  const image = document.getElementById('header__button-image-white-theme'); 
    
    image.src = './images/moon.svg'; 
    
    buttonBackground.style.backgroundColor = '';
    
    document.getElementById('header').style.backgroundColor = 'antiquewhite';
    
    document.getElementById('header__name-link').style.color = 'black';

    const headerList = document.getElementsByClassName("header__links-li");
    for (let i = 0; i < headerList.length; i++) {
      headerList[i].style.color = 'black';
    };

    const blockBackground = document.getElementById('description__title');
    blockBackground.style.backgroundImage = "url('./images/logo-white.jpg')";

    const body = document.getElementById('start');
    body.style.backgroundColor = 'antiquewhite';
    body.style.color = 'black';

    const footerColor = document.getElementById('footer');
    footer.style.backgroundColor = 'antiquewhite';

    const footerLine = document.getElementsByClassName("hr");
    footerLine[0].style.backgroundColor = 'black';

    const aboutMeImage = document.getElementById('about-trainer__image');
    aboutMeImage.src = "./images/about-me-white.jpg";

}

function blackTheme() {
  const buttonBackground = document.getElementById('header__button-white-theme')
  
  const image = document.getElementById('header__button-image-white-theme'); 
    
    image.src = './images/sun.svg'; 
    
    buttonBackground.style.backgroundColor = 'black';
    
    document.getElementById('header').style.backgroundColor = 'black';
    
    document.getElementById('header__name-link').style.color = 'antiquewhite';

    const headerList = document.getElementsByClassName("header__links-li");
    for (let i = 0; i < headerList.length; i++) {
      headerList[i].style.color = 'antiquewhite';

      const blockBackground = document.getElementById('description__title');
      blockBackground.style.backgroundImage = "url('./images/logo.jpg')";

      const body = document.getElementById('start');
    body.style.backgroundColor = 'black';
    body.style.color = 'antiquewhite';
    }

    const footerColor = document.getElementById('footer');
    footer.style.backgroundColor = 'black';

    const footerLine = document.getElementsByClassName("hr");
    footerLine[0].style.backgroundColor = 'antiquewhite';

    const aboutMeImage = document.getElementById('about-trainer__image');
    aboutMeImage.src = "./images/about-me-black.jpg";
}