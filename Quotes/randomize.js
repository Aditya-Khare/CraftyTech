var data={ "notes": [
  
  {
    "title": "Technology",
    "author": "Elbert Hubbard",
    "quote": "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man."
  },
  {
    "title": "Dream",
    "author": "Anatole France",
    "quote": "To accomplish great things, we must not only act, but also dream; not only plan, but also believe."
  }, 
  {
    "title": "Experience",
    "author": "Albert Einstein",
    "quote": "The only source of knowledge is experience."
  },
  {
    "title": "Health",
    "author": "Joyce Meyer",
    "quote": "I believe that the greatest gift you can give your family and the world is a healthy you."
  },
  {
    "title": "Shadow and Bone",
    "author": "Leigh Bardugo",
    "quote": "The moment our lips met, I knew with pure and piercing certainty that I would have waited for him forever."
  },
  {
    "title": "Siege and Storm",
    "author": "Leigh Bardugo",
    "quote": "The less you say, the more weight your words will carry."
  },
  {
    "title": "Ruin and Rising",
    "author": "Leigh Bardugo",
    "quote": "Maybe love was superstition, a prayer we said to keep the truth of loneliness at bay."
  },
  {
    "title": "Forgiveness",
    "author": "Alan Paton",
    "quote": "When a deep injury is done us, we never recover until we forgive."
  },
  {
    "title": "Friendship",
    "author": "John Leonard",
    "quote": "It takes a long time to grow an old friend."
  },
  {
    "title": "Life",
    "author": "Sai Baba",
    "quote": "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it."
  },
  {
    "title": "Attitude",
    "author": "John Cale",
    "quote": "Time plays a role in almost every decision. And some decisions define your attitude about time."
  },
  {
    "title": "Motivation",
    "author": "Walt Disney",
    "quote": "The Best Way To Get Started Is To Quit Talking And Begin Doing."
  }
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
