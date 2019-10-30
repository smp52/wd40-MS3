$(document).ready(function() {

  var quote = [
    "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
      
    "Like a fish, one should look for a hole in the net.",
      
    "Persevere like a bird in the wind.",
      
    "Life is like this: sometimes sun, sometimes rain.",
      
    "All knowledge is not taught in one school. ~ Hawaiian Proverb",
      
    "Wonderful people come in different shapes and sizes. Beauty is how you feel on the inside. Take care of your body. It's the only place you have to live.",
      
    "Of all things you wear, your expression is the most important. Beauty captures your attention but personality captures your heart. Ive never seen a smiling face that was not beautiful. Happiness is not a station you arrive at, but a manner of traveling.",
      
    "Life isn't about finding yourself. Life is about creating yourself.",
      
    "Failure is success if we learn from it.",
      
    "But the real secret to total gorgeousness is to believe in yourself, have self confidence, and try to be secure in your decisions and thoughts.",
      
    "Everything has beauty, but not everyone sees it.",
      
    "Its not what you look like, that makes you who you are. It's what you do, that makes you who you are.",
      
    "One can build a better world by using our talents.",
      
    "Beauty is not in the face; beauty is a light in the heart.",
      
    "That which is striking and beautiful is not always good, but that which is good is always beautiful.",
      
    "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.",
    "The best way out is always through.",
      
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
      
    "Great spirits have always encountered violent opposition from mediocre minds.",
      
    "Whether you think you can or think you can’t, you’re right.",
      
    "I know for sure that what we dwell on is who we become.",
      
    "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times, I’ve been trusted to take the game winning shot and missed.I’ ve failed over and over and over again in my life.And that is why I succeed.",
      
    "You must be the change you want to see in the world.",
      
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      
    "You can get everything in life you want if you will just help enough other people get what they want.",
      
    "Whatever you do will be insignificant, but it is very important that you do it.",
      
    "Age is an issue of mind over matter. If you dont mind, it doesnt matter.",
      
    "Whenever you find yourself on the side of the majority, its time to pause and reflect.",
      
    "Success seems to be connected with action. Successful people keep moving. They make mistakes but dont quit.",
      
    "Attitudes are contagious. Make yours worth catching.",
    "Do not let what you cannot do interfere with what you can do.",
    "There are only two rules for being successful. One, figure out exactly what you want to do, and two, do it.",
      
    "Sooner or later, those who win are those who think they can.",
    "Vision doesnt usually come as a lightening bolt. Rather it comes as a slow crystallization of life challenges that we one day recognize as a beautiful diamond with great value to ourselves and others.",
      
    "Success is a state of mind. If you want success, start thinking of yourself as a success.",
      
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      
    "Flops are a part of lifes menu and Ive never been a girl to miss out on any of the courses.",
      
    "Cause Change & Lead; Accept Change & Survive; Resist Change & Die",
      
    "Winners lose much more often than losers. So if you keep losing but youre still trying, keep it up!Youre right on track.",
      
    "An idea can turn to dust or magic, depending on the talent that rubs against it.",
    "An obstacle is often a stepping stone.",
      
    "Life is trying things to see if they work",
      
    "If you worry about yesterdays failures, then todays successes will be few.",
    "Life is 10% what happens to us and 90% how we react to it.",
      
    "We are all inventors, each sailing out on a voyage of discovery, guided each by a private chart, of which there is no duplicate.The world is all gates, all opportunities.",
      
    "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "In matters of style, swim with the current; In matters of principle, stand like a rock.",
      
    "I think and think for months and years. Ninety-nine times, the conclusion is false. The hundredth time I am right.",
      
    "Where the willingness is great, the difficulties cannot be great.",
      
    "Strength does not come from physical capacity. It comes from an indomitable will.",
      
    "You are what you think about all day long.",
      
    "What you do speaks so loudly that I cannot hear what you say",
      
    "Success is not to be measured by the position someone has reached in life, but the obstacles he has overcome while trying to succeed.",
      
    "Talent is formed in solitude, character in the bustle of the world.",
      
    "To avoid criticism do nothing, say nothing, be nothing.",
      
    "If you want to make your dreams come true, the first thing you have to do is wake up.",
      
    "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day",
      
    "I’ve learned that no matter what happens, or how bad it seems today, life does go on, and it will be better tomorrow.",
      
    "The art of being wise is the art of knowing what to overlook.",
      
    "When I hear somebody sigh, Life is hard, I am always tempted to ask, Compared to what?",
      
    "Dont let life discourage you; everyone who got where he is had to begin where he was.",
      
    "In three words I can sum up everything Ive learned about life: It goes on.",
      
    "You gain strength, courage and confidence by every experience in which you stop to look fear in the face.",
      
    "Sometimes even to live is an act of courage.",
      
    "Do first things first, and second things not at all.",
      
    "The only people who find what they are looking for in life are the fault finders.",
      
    "Defeat is not bitter unless you swallow it.",
      
    "I am an optimist. It does not seem too much use being anything else.",
      
    "Positive anything is better than negative thinking.",
      
    "People seem not to see that their opinion of the world is also a confession of character.",
      
    "Those who wish to sing, always find a song.",
      
    "If youre going through hell, keep going.",
      
    "The sun shines and warms and lights us and we have no curiosity to know why this is so; but we ask the reason of all evil, of pain, and hunger, and mosquitoes and silly people.",
      
    "Life is a shipwreck but we must not forget to sing in the lifeboats.",
      
    "Enduring habits I hate.... Yes, at the very bottom of my soul I feel grateful to all my misery and bouts of sickness and everything about me that is imperfect, because this sort of thing leaves me with a hundred backdoors through which I can escape from enduring habits.",
      
    "There is no education like adversity.",
      
    "He who has a why to live can bear almost any how.",
      
    "Adversity introduces a man to himself.",
  ];
    var quoteAuthor = [
    "Unknown",
    "Samoan Proverb",
    "Samoan Proverb",
    "Fijian Proverb",
    "Hawaiian Proverb",
    "Jim Rohn",
    "Margaret B. Runbeck",
    "George Bernard Shaw",
    "Malcolm S. Forbes",
    "Kirsten Dunst",
    "Confucius",
    "Unknown",
    "Unknown",
    "Kahlil Gibran",
    "Ninon de L Enclos",
    "Aristotle",
    "Robert Frost",
    "William B. Sprague",
    "Albert Einstein ",
    "Henry Ford",
    "Oprah Winfrey",
    "Michael Jordan",
    "Mahatma Gandhi",
    "Goethe ",
    "Zig Ziglar ",
    "Mahatma Gandhi ",
    "Mark Twain",
    "Mark Twain ",
    "Conrad Hilton ",
    "Unknown",
    "John Wooden",
    "Mario Cuomo ",
    "Richard Bach",
    "Dr.Michael Norwood ",
    "Dr. Joyce Brothers ",
    "Samuel Beckett",
    "Rosalind Russell ",
    "Ray Norda, Chairman, Novell",
    "Matthew Keith Groves",
    "Bill Bernbach",
    "Prescott",
    "Ray Bradbury",
    "Anonymous",
    "Dennis P. Kimbro",
    "Ralph Waldo Emerson ",
    "Johann Wolfgang von Goethe ",
    "Thomas Jefferson",
    "Albert Einstein",
    "Mahatma Gandhi",
    "Dr. Robert Schuller",
    "Ralph Waldo Emerson",
    "Booker T.Washington ",
    "Johann Wolfgang von Goethe ",
    "Elbert Hubbard",
    "J.M. Power ",
    "Unknown",
    "Robert Frost ",
    "Maya Angelou ",
    "William James",
    "Sydney Harris",
    "Richard L.Evans ",
    "Robert Frost",
    "Eleanor Roosevelt ",
    "Seneca",
    "Peter Drucker.",
    "Fosters Law",
    "Joe Clark",
    "Winston Churchill",
    "Elbert Hubbard",
    "Ralph Waldo Emerson ",
    "Swedish Proverb",
    "Winston Churchill",
    "Ralph Waldo Emerson ",
    "Voltaire",
    "Friedrich Nietzsche, The Gay Science, 1882",
    "Disraeli",
    "Friedrich Nietzsche",
    "Unknown",
  ];
    
  var meme = [
    '<img src="https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg">',
    '<img src="https://www.sanfranciscobaycoffee.com/wp-content/uploads/2017/03/52279468.jpg">',
    '<img src="https://www.sanfranciscobaycoffee.com/wp-content/uploads/2017/03/52279468.jpg">',
    '<img src="https://winkgo.com/wp-content/uploads/2017/09/49-Funny-School-Memes-Not-Everyone-Likes-School-04-720x720.jpg">',
    '<img "https://sayingimages.com/wp-content/uploads/You-Go-To-School-Nothing-Happens-You-Miss-One-Day.jpg">',
    '<img src="http://cdn.funnyand.com/wp-content/uploads/2014/11/How-school-is-760x500.jpg">',
    '<img src="https://cdn.ebaumsworld.com/mediaFiles/picture/2435386/85110909.jpg">',
    '<img src="https://cms.qz.com/wp-content/uploads/2018/07/meme-featured.jpg?quality=75&strip=all&w=2200&h=1156">',
    '<img src="https://www.lifewire.com/thmb/tC2SwC8VrNs6phoq5ckHevzFP9w=/395x397/filters:fill(auto,1)/meme-baby1-580700253df78cbc28b1b442.PNG">',
    '<img src="https://i.kym-cdn.com/photos/images/newsfeed/000/999/687/5e1.png">',
  ];

    
    console.log(quote.length);
    console.log(quoteAuthor.length);
    
  var rand_keys_q = Math.floor((Math.random() * quote.length));
  var rand_keys_m = Math.floor((Math.random() * meme.length));

  var rand_quote = quote[rand_keys_q];
  var rand_quoteAuthor = quoteAuthor[rand_keys_q];
  var rand_meme = meme[rand_keys_m];

  $(".qod").text(rand_quote);
  $(".qoda").text(rand_quoteAuthor);
  $("#mod").html(rand_meme);
});
