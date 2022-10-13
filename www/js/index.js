var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/page2/',
        url: 'pages/page2.html',
      },
      {
        path: '/page3/',
        url: 'pages/page3.html',
      },
    ],
    
    
  });
var mainView = app.views.create('.view-main')

var swiper = app.swiper.get('.swiper');

swiper.slideNext();

var photos = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
];

//If we need to use caption for some of photos then each photo should be presented as object:
var photos = [
  {
      url: '/img/gilmore1.jpg',
  },
  {
      url: 'image2.jpg',
  },
  {
      url: 'image3.jpg',
  },
  // This one will be also without caption
  'image4.jpg'
];