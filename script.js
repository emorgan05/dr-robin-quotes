$(document).ready(function() {
  // Our set of 52 quotes
  var quoteDeck = [
    {
      id: 1,
      quote: "Don't give up just because you don't see immediate results. Know that each positive choice you make is affecting you in hidden ways -- and will add up to big change over time.",
      author: "Karen Salmansohn"
    },
    {
      id: 2,
      quote: "He Said, 'There are only two days in the year that nothing can be done. One is called yesterday, and the other is called tomorrow, so today is the right day to love, believe and mostly live.",
      author: "Dalai Lama",
    },
    {
      id: 3,
      quote: "The planet does not need more 'successful' people. But it does desperately need more peacemakers, healers, restorers, storytellers, and lovers of every kind.",
      author: "David Orr",
    },
    {
      id: 4,
      quote: "The Four Agreements: 1. Be impeccable with your word. 2. Don't take anything personally. 3. Don't make assumptions. 4. Always do your best.",
      author: "Don Miguel Ruiz",
    },
    {
      id: 5, 
      quote: "Everyone you meet is fighting a battle you know nothing about. Be kind. Always.",
      author: "Unknown",
    },
    {
      id: 6,
      quote: "I love you, not only for what you are, but for what I am, when I am with you!",
      author: "Roy Croft",
    },
    {
      id: 7,
      quote: "Tenacity, Tenderness, and Tribe! The T Factor!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 8,
      quote: "Today's Multiple Choice: Busy is a choice. Stress is a choice. Joy is a choice. Choose Well!",
      author: "Unknown",
    },
    {
      id: 9,
      quote: "Never worry about numbers. Help one person at a time and always start with the person nearest you.",
      author: "Mother Teresa",
    },
    {
      id: 10,
      quote: "You may think you're rich if you have expensive meals, a big house, and fancy jewelry, but real wealth is having love, friendship, and true peace of mind.",
      author: "Unknown",
    },
    {
      id: 11,
      quote: "Hope, Healing and Happiness all begin in the HEART! The H Factor!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 12,
      quote: "Hugging is a silent way of saying... you matter to me.",
      author: "Carol Miller",
    },
    {
      id: 13,
      quote: "Working hard for something we don't care about is called stress; working hard for something we love is called passion.",
      author: "Simon Sinek",
    },
    {
      id: 14,
      quote: "How to be Happy: Decide every morning that you are in a good mood.",
      author: "Unknown",
    },
    {
      id: 15,
      quote: "The Prayer for Protection: The light of God surrounds us; The love of God enfolds us; The power of God protects us; The presence of God watches over us; Wherever we are... God is!",
      author: "James D. Freeman",
    },
    {
      id: 16,
      quote: "The gap between where you are at and self-love is self-care.",
      author: "Dr. Michelle Robin",
    },
    {
      id: 17,
      quote: "O.I.M.F.: Odds in my favor!",
      author: "Tom Hill",
    },
    {
      id: 18,
      quote: "Be the energy you want to attract.",
      author: "Amanda Cerny",
    },
    {
      id: 19,
      quote: "Inch by inch, wellness is a cinch!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 20,
      quote: "Hugs are practically perfect. They are: low energy consumption, high energy yield, no monthly payments, non-fattening, inflation-proof, no pesticides, no preservatives, non-taxable, non-pollution, and, of course, fully returnable.",
      author: "Unknown",
    },
    {
      id: 21,
      quote: "We make a living by what we get, but we make a life by what we give.",
      author: "Winston Churchill",
    },
    {
      id: 22,
      quote: "Start where you are. Use what you have. Do what you can.",
      author: "Arthur Ashe",
    },
    {
      id: 23,
      quote: "A wise physician said, 'The best medicine for humans is love.' Someone asked, 'If it doesn't work?' He smiled and answered, 'Increase the dose.'",
      author: "Unknown",
    },
    {
      id: 24,
      quote: "You know more than you think you know. You're aware of more than you're consciously tuned in to any given moment. Quiet your ego and your deeper wisdom will surface.",
      author: "Sonia Choquette",
    },
    {
      id: 25,
      quote: "The only keeper of your happiness is you. Stop giving people the power to control your smile, your worth and your attitude.",
      author: "Mandy Hale",
    },
    {
      id: 26,
      quote: "Stop being afraid of what could go wrong, and focus on what could go right.",
      author: "Unknown",
    },
    {
      id: 27,
      quote: "Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open.",
      author: "B.K.S. Iyengar",
    },
    {
      id: 28,
      quote: "Live your life with Grace, Gratitude and God. You will be rewarded with many Gifts! The G Factor!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 29,
      quote: "Your body is your vehicle for life. As long as you are here, live in it. Love, honor, respect and cherish it, treat it well, and it will serve you in kind.",
      author: "Suzy Prudden",
    },
    {
      id: 30,
      quote: "Gratitude changes everything!",
      author: "Unknown",
    },
    {
      id: 31,
      quote: "Intend, Inspire and Ignite your life for your dreams! The I Factor!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 32,
      quote: "Grant me the strength to keep my heart open this week... To forgive and let go... To acknowledge my patterns of stress and release them... To be present, mindful and kind.",
      author: "Nick Ortner",
    },
    {
      id: 33,
      quote: "Your mind will always believe everything you tell it. Feed it faith. Feed it truth. Feed it with love.",
      author: "Unknown",
    },
    {
      id: 34,
      quote: "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
      author: "Dalai Lama",
    },
    {
      id: 35,
      quote: "Passion and Patience are required on your Path to Purpose! The P Factor!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 36,
      quote: "You will never speak to anyone more than you speak to yourself in your head. Be kind to yourself.",
      author: "Unknown",
    },
    {
      id: 37,
      quote: "Top Five Regrets of the Dying: 1. I wish I'd had the courage to live a life true to myself, not the life others expected of me. 2. I wish I hadn't worked so hard. 3. I wish I'd had the courage to express my feelings. 4. I wish I had stayed in touch with my friends. 5. I wish that I had let myself be happier.", 
      author: "The Guardian",
    },
    {
      id: 38,
      quote: "Surround yourself with people who make you hungry for life, touch your heart, and nourish your soul.",
      author: "Unknown",
    },
    {
      id: 39,
      quote: "Life is too short, hug a little longer, love a little stronger, forgive a little sooner and smile a little sweeter.",
      author: "Caroline Naoroji",
    },
    {
      id: 40,
      quote: "The most important gifts you can give are your love, time, and attention. Slow down, take time to smile & enjoy loved ones... life goes by way too fast.",
      author: "Nishan Panwar",
    },
    {
      id: 41,
      quote: "It transfers energy and gives the person hugged an emotional life. You need four hugs a day for survival, eight for maintenance, and twelve for growth. Scientists say that hugging is a form of communication because it can say things you don't have the words for. And the nicest thing about a hug is that you usually can't give one without getting one.",
      author: "Unknown",
    },
    {
      id: 42,
      quote: "When you come out of the storm, you're not going to be the same; you're going to be stronger, wiser, ready for new growth.",
      author: "Joel Osteen",
    },
    {
      id: 43,
      quote: "If you don't like where you are, move! You are not a tree.",
      author: "Jim Rohn",
    },
    {
      id: 44,
      quote: "I prayed for change, so I changed my mind. I prayed for guidance and learned to trust myself. I prayed for happiness and realized I am not my ego. I prayed for peace and learned to accept others unconditionally. I prayed for abundance and realized my doubt kept it out. I prayed for wealth and realized it is my health. I prayed for a miracle and realized I am the miracle. I prayed for a soul mate and realized I am the One. I prayed for love and realized it's always knocking, but I have to allow it in.",
      author: "Jackson Kiddard",
    },
    {
      id: 45,
      quote: "Don't let the negative few, affect the positive many.",
      author: "Dr. James Parker",
    },
    {
      id: 46, 
      quote: "7 Rules of Life: 1. Make peace with your past so it won't screw up the present. 2. What others think of you is none of your business. 3. Time heals almost everything, give it time. 4. Don't compare your life to others and don't judge them. You have no idea what their journey is all about. 5. Stop thinking too much, it's alright not to know the answers. They will come to you when you least expect it. 6. No one is in charge of your happiness, except you. 7. Smile. You don't own all the problems in the world.",
      author: "Unknown",
    },
    {
      id: 47,
      quote: "Happiness is an inside job. Don't assign anyone else that much power over your life.",
      author: "Mandy Hale",
    },
    {
      id: 48,
      quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
      author: "George Bernard Shaw",
    },
    {
      id: 49,
      quote: "Keep your thoughts positive because your thoughts become your words. Keep your words positive because your words become your behavior. Keep your behavior positive because your behavior becomes your habits. Keep your habits positive because your habits become your values. Keep your values positive because your values become your destiny.",
      author: "Mahatma Gandhi",
    },
    {
      id: 50,
      quote: "Faith, Family and Friends... The F Factor!",
      author: "Dr. Michelle Robin",
    },
    {
      id: 51,
      quote: "Keep It Simple: Missing somebody? CALL! Have a question? ASK! Want to be understood? EXPLAIN! Don't like something? CHANGE IT! Love someone? TELL THEM! Want to meet up? INVITE! Life is too short for drama.",
      author: "Unknown",
    },
    {
      id: 52,
      quote: "It takes courage to grow up and turn out to be who you really are.",
      author: "e.e. cummings",
    }
  ];
  
  // Setting up some variables
  var $quote = $("#quote");
  var $author = $("#author");
  
  // an intital function so we don't start with a blank page
  function firstQuote() {
    var num = Math.floor(Math.random() * (52 - 0 + 1)) + 0;
    $quote.append(quoteDeck[num].quote);
    $author.append(quoteDeck[num].author);
  };
  
  firstQuote();
  
  // When the New Quote button is clicked
  $('#newquote').on("click", function(){
    var num = Math.floor(Math.random() * (52 - 0 + 1)) + 0;
    $quote.html("");
    $author.html("");
    $quote.append(quoteDeck[num].quote);
    $author.append(quoteDeck[num].author);
  });
  
});