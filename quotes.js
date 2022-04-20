let quotes = {
  // Teamwork quotes to inspire collaboration
  1: "“If everyone is moving forward together, then success takes care of itself.” — Henry Ford, American industrialist and founder of the Ford Motor Company.",
  2: "“Let us all be the leaders we wish we had.” — Simon Sinek, Author and inspirational speaker.",
  3: "“Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.” — Margaret Mead, American cultural anthropologist.",
  4: "“Individually, we are one drop. Together, we are an ocean.” — Ryunosuke Satoro, Japanese author.",
  5: "“The nice thing about teamwork is that you always have others on your side.” — Margaret Carty, American author and executive director of MLA.",
  6: "“Great teams do not hold back with one another. They are unafraid to air their dirty laundry. They admit their mistakes, their weaknesses, and their concerns without fear of reprisal.” — Patrick Lencioni, American author.",
  7: "“One man can be a crucial ingredient on a team, but one man cannot make a team.” — Kareem Abdul-Jabbar, American former professional basketball player.",
  8: "“Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilization work.” — Vince Lombardi, American football coach and executive in the National Football League.",
  9: "“Our love is so big. It has room for everybody.” — Cari Tuna, President of the Open Philanthropy Project and Good Ventures.",
  10: "“Good teams incorporate teamwork into their culture, creating the building blocks for success.” — Ted Sundquist, American football player. ",

  // quotes to inspire hard work
  11: "“What people have the capacity to choose, they have the ability to change.” — Madeleine Albright, American politician.",
  12: "“Some people want it to happen, some wish it would happen, others make it happen.” — Michael Jordan, American businessman and former professional basketball player.",
  13: "“True heroes are made of hard work and integrity.” — Hope Solo, American former soccer goalkeeper.",
  14: "“It's hard work that makes things happen. It's hard work that creates change.” — Shonda Rhimes, American television producer. ",
  15: "“Brands must empower their community to be change agents in their own right.” — Simon Mainwaring, Global keynote speaker, CEO of We First, and best-selling author.",
  16: "“I am not bound to win, but I am bound to be true. I am not bound to succeed, but I am bound to live up to what light I have.” — Abraham Lincoln, American politician and 16th president of the United States.",
  17: "“No one can make you feel inferior without your consent.” — Eleanor Roosevelt, American political figure and former First Lady.",
  18: "“Elevate true productivity over the appearance of hard work.” — Scott Belsky, American entrepreneur and author. ",
  19: "“Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.” — Steve Jobs, American business magnate.",
  20: "“The key to successful leadership today is influence, not authority.” — Ken Blanchard, American author and motivational speaker.",
  21: "“The only limit to our realization of tomorrow will be our doubts of today.” — Franklin D. Roosevelt, American politician and 32nd president of the United States.",
  22: "“When something is important enough, you do it even if the odds are not in your favor.” — Elon Musk, Founder and CEO of SpaceX and CEO of Tesla, Inc.",
  23: "“Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.” — Sir Isaac Newton, English mathematician.",
  24: "“People doing good work feel good and people doing exceptional work feel exceptional. Accomplishments contribute greatly to satisfaction.” — Mark Sanborn, Author and professional speaker.",
  25: "“Success is very much the intersection of luck and hard work.” — Dustin Moskovitz, Co-founder and CEO of Asana.",
  26: "“Always keep an open mind and a compassionate heart.” — Phil Jackson, American former professional basketball player and coach.",
  27: "“The biggest risk is not taking any risk… In a world that changes really quickly, the only strategy that is guaranteed to fail is not taking risks.” — Mark Zuckerberg, Internet entrepreneur and co-founder of Facebook.",
  28: "“An entrepreneur is someone who will jump off a cliff and assemble an airplane on the way down.” — Reid Hoffman, American Internet entrepreneur.",
  29: "“Kind words can be short and easy to speak, but their echoes are truly endless.” — Mother Teresa, Albanian-Indian Roman Catholic nun and missionary.",
  30: "“Be brutally honest about the short term and optimistic and confident about the long term.”— Reed Hastings, American businessman and co-chief executive officer of Netflix. ",
  31: "“Being successful is a choice and, therefore, being defeated is a decision.” — Jim Stovall, American writer.",
  32: "“It doesn't matter where you are coming from. All that matters is where you are going.” — Brian Tracy, Canadian-American motivational speaker and self-development author.",
  33: "“Fearlessness is like a muscle. I know from my own life that the more I exercise it the more natural it becomes to not let my fears run me.” — Arianna Huffington, Greek-American author and businesswoman.",
  34: "“The only way round is through.” — Robert Frost, American poet. ",
  35: "“Don't be intimidated by what you don't know. That can be your greatest strength and ensure that you do things differently from everyone else.” — Sara Blakely, American businesswoman and entrepreneur.",
  36: "“You have no choices about how you lose, but you do have a choice about how you come back and prepare to win again.” — Pat Riley, American professional basketball executive.",
  37: "“When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.” — Audre Lorde, American writer and feminist.",
  38: "“I want little girls to grow up knowing they can do anything, even play football.” — Jen Welter, American football coach. ",
  39: "“No matter how many goals you have achieved, you must set your sights on a higher one.” — Jessica Savitch, American television news presenter.",
  40: "“Positive thinking is a valuable tool that can help you overcome obstacles, deal with pain, and reach new goals.” — Amy Morin, Psychotherapist and mental strength trainer.",
  41: "“The last 10% it takes to launch something takes as much energy as the first 90%.” — Rob Kalin, American entrepreneur. ",

  // inspirational team building quotes
  42: "“Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.” — Mattie Stepanek, American poet.",
  43: "“Motivation comes from working on things we care about. It also comes from working with people we care about.” —Sheryl Sandberg, American business executive. ",
  44: "“It all starts with a great idea and teamwork.” — Garrett Camp, Canadian entrepreneur.",
  45: "“A company is only as good as the people it keeps.” — Mary Kay Ash, American businesswoman and founder of Mary Kay Cosmetics. ",
  46: "“Teamwork is the ability to work together toward a common vision. It is the fuel that allows common people to attain uncommon results.” — Andrew Carnegie, Scottish-American industrialist and philanthropist.",
  47: "“The art of effective listening is essential to clear communication, and clear communication is necessary to management success.” — James Cash Penney, American businessman and entrepreneur.",
  48: "“We cannot win in team situations or in relationships by ourselves.” — Terry Orlick, Canadian professor.",
  49: "“Teamwork is the secret that makes common people achieve uncommon results.” — Ifeanyi Enoch Onuoha, Educator and bestselling author. ",
  50: "“With an enthusiastic team, you can achieve almost anything.” — Tahir Shah, British author, journalist, and documentary maker. ",

  //Quotes about teamwork and success
  51: "“Be passionate and move forward with gusto every single hour of every single day until you reach your goal.” — Ava DuVernay, American filmmaker.",
  52: "“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” — Thomas Edison, American inventor and businessman.",
  53: "“High achievement always takes place in the framework of high expectation.” — Charles F. Kettering, American inventor and engineer.",
  54: "“Success can cause people to unlearn the habits that made them successful in the first place.” — Satya Nadella, Indian-American business executive.",
  55: "“You never lose a dream. It just incubates as a hobby.”— Larry Page, American computer scientist.",
  56: "“You don't achieve success, you attract success.” — Farshad Asl, Entrepreneur.",
  57: "“Management is efficiency in climbing the ladder of success; leadership determines whether the ladder is leaning against the right wall.” — Stephen Covey, American educator and author. ",
  58: "“Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.” — Booker T. Washington, American educator and author.",
  59: "“Great leaders don't succeed because they are great. They succeed because they bring out the greatness in others.” — Jon Gordon, American author and speaker.",
  60: "“It's the building of things that makes you happy. You have to enjoy the process whether you succeed or fail.” — Caterina Fake, American entrepreneur and businesswoman.",
  61: "“There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.” — Ray Goforth, American mensa. ",
  62: "“You're either remarkable or invisible. Make a choice.” — Seth Godin, American author and business executive.",
  63: "“Imagination is more important than knowledge.” — Albert Einstein, German-born theoretical physicist. ",
  64: "“Imperfections are not inadequacies; they are reminders that we're all in this together.” — Brené Brown, American researcher and storyteller. ",
  65: "“Some people see innovation as change, but we have never really seen it like that. It's making things better.”— Tim Cook, American business executive and CEO of Apple Inc.",
  66: '"Be clear. Be authentic. Have boundaries. Check your vision. Do what matters to you. And know what you value.” — Iyanla Vanzant, American inspirational speaker and lawyer.',
  67: "“There's always an opportunity to make a difference.” — Michael Dell, American businessman and philanthropist.",
  68: "“It will never be done. It's a continuous exercise.”— Dara Khosrowshahi, Iranian-American businessman and CEO of Uber. ",
  69: "“Women speaking up for themselves and for those around them is the strongest force we have to change the world.” — Melinda Gates, American philanthropist and former general manager at Microsoft.",
  70: "“Ask your colleagues for help—early and often.”— Jill Konrath, Sales strategist and speaker.",
  71: "“People with goals succeed because they know where they're going.” — Earl Nightingale, American radio speaker and author.",

  //Motivational quotes about failure
  72: "“If you don't try at anything, you can't fail… it takes backbone to lead the life you want.” — Richard Yates, American fiction writer. ",
  73: "“Don't worry about failures, worry about the chances you miss when you don't even try.” — Jack Canfield, American author and motivational speaker.",
  74: "“Failure is a feeling long before it becomes an actual result. It's vulnerability that breeds with self-doubt and then is escalated, often deliberately, by fear.” — Michelle Obama, American attorney, author, and former First Lady of the United States.",
  75: "“All failure is failure to adapt, all success is successful adaptation.” — Max McKeown, American author.",
  76: "“You've got to let go of who you were, to become who you will be.” — Janet Fitch, Author of the Oprah's Book Club novel White Oleander.",
  77: "“Giving up is the only sure way to fail.” — Gena Showalter, American author. ",
  78: "“Never let the fear of striking out get in your way.” — Babe Ruth, American professional baseball player.",
  79: "“Every single failure has an equally great upside if you are willing to stay in the game.” — Barbara Corcoran, American businesswoman. ",
  80: "“Change the changeable, accept the unchangeable, and remove yourself from the unacceptable.” — Denis Waitley, American motivational speaker.",
  81: "“Do not let what you cannot do interfere with what you can do.” — John Wooden, American basketball player and coach.",
  82: "“I'm not afraid of storms, for I'm learning how to sail my ship.” — Louisa May Alcott, American novelist.",
  83: "“Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire.” — Oprah Winfrey, American talk show host. ",
  84: "“Anyone can give up; it is the easiest thing in the world to do. But to hold it together when everyone would expect you to fall apart, now that is true strength.” — Chris Bradford, English author. ",
  85: "“Anything is possible if you wish hard enough.” — J.M. Barrie, Scottish novelist, playwright, and creator of Peter Pan. ",
  86: "“Be brave. Take risks. Nothing can substitute experience.” — Paulo Coelho, Brazilian author and novelist.",
  87: "“Expect the unexpected. And whenever possible, be the unexpected.” — Lynda Barry, American cartoonist, author, and teacher.",
  88: "“It doesn't matter how many times you have failed. You only have to be right once.” — Mark Cuban, American entrepreneur and television personality. ",
  89: "“Between being able to and actually doing something lies an ocean, and on its bottom rests all too often the wreck of willpower.” — Marie von Ebner-Eschenbach, Austrian writer.",
  90: "“The most effective way to do it, is to do it.” — Amelia Earhart, American aviation pioneer and author.",

  //Funny team motivational quotes
  91: "“If you can dance and be free and not embarrassed you can rule the world.” — Amy Poehler, American actress and comedian.",
  92: "“You don't have to be great at something to start, but you have to start to be great at something.” — Zig Ziglar, American author and motivational speaker. ",
  93: "“Normal is nothing more than a cycle on a washing machine.”— Whoopi Goldberg, American actress and comedian. ",
  94: "“Doing nothing is very hard to do... you never know when you're finished.” — Leslie Nielsen, Canadian-American actor and comedian. ",
  95: "“Be like a postage stamp. Stick to one thing until you get there.” — Josh Billings, 19th-century American comedian. ",
  95: "“Change is not a four letter word… but often your reaction to it is!” — Jeffrey Gitomer, American author, professional speaker, and business trainer. ",
  96: "“The road to success is always under construction.” — Lily Tomlin, American actress and comedian. ",
  97: "“The elevator to success is out of order. You'll have to use the stairs... one step at a time.” — Joe Girard, American salesman and motivational speaker. ",
  98: "“To err is human—and to blame it on a computer is even more so.” — Robert Orben, American professional comedy writer.",

  //developer quotes
  /*
1.  Dont't worry if it doesn't work right.If everything did, you'd be out of a job.
        
        
        

2.  Don't comment bad code - rewrite it. - Brian Kernighan

3.  A programming language is for thinking about programs, not for expressing programs you've already thought of. It should be a pencil, not a pen. - Paul Graham

4.  Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday's code. - Dan Salomon

5.  It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive. - Steve McConnell

6.  One of my most productive days was throwing away 1000 lines of code. Ken Thompson

7.  Without requirements or design, programming is the art of adding bugs to an empty text file.

8.  One main'scrappy software is another man's full time job.

9.  Walking on water and developing software from a specification are easy if both are frozen.

10.  Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Rajanand

11.  System programmers are the high priests of a low cult. - Robert S. Barton

12.  I don't care if it works on your machine! We are not shipping your machine!" - Vidiu Platon

13.  Software undergoes beta testing shortly before iy' released.Beta is latin for "still doesn't work"

14.  Measuring programming progree by lines of code is like measuring aircraft building progree by weight. - Bill Gates

15.  If debudding is the process of removing software bugs, then programming must be the process of putting them in. - Edsger W. Dijkstra

16.  The computer was born to solve problems that did not exist before. - Bill Gates

17.  Real programmers don't comment their code. If it was hard to write, it should be hard to understand.

18.  Always code as if the guy who ends up maintaning your code will be a violent psychopath who knows where you live. - Rick Osborne

19.  People don't care about what you say, they care about what you build. - Mark Zuckerberg

20.  We have to stop optimizing for programmers and start optimizing for users. — Jeff Atwood

21.  If the code and the comments do not match, possibly both are incorrect. — Norm Schryer

22.  Bad programmers worry about the code. Good programmers worry about data structures and their relationships. - Linus Torvalds





23.  If you optimize everything, you will always be unhappy. - Donald Knuth

24.  Your mind is programmable - if you're not programming your mind, else will program it for you. - Jeremy Hammond

25.  The trouble with programmers is that you can never tell what a programmer is doing until it's too late. - 	Seymour Cray

26.  Debugging becomes significantly easier if you first admit that you are the problem. - William Laeder

27.  Talk is cheap.Show me the code. - Linus Torvalds

28.  Everybody in this country should learn to program a computer because it teaches you how to think. - Steve Jobs

29.  Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Rajanand

30.  Any fool can write code that a computer can understand.Good programmers write code that humans can understand.

31.  First, solve the problem.Then write the code. - John Johnson

32.  The function of a good software is to make the complex appear to be simple. - Grady Booch

33.  Your most unhappy customers are your greatest source of learning. — Bill Gates

34.  Small minds are concerned with the extraordinary, great minds with the ordinary. - Blaise Pascal

35.  Everyday life is like programming, I guess.If you love something you can put beauty on it. - Donald Knuth

36.  You are not responsible for the programming you picked up in childhood.However, as an adult, you are the one hundred percent responsible for fixing it.

37.  Developer is an organism that turns coffee into code.

38.  The purpose of software engineering is to control complexity, not to create it.

39.  As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow. - Doug McIlroy

40.  A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder

41.  Testing can only prove the presence of bugs, not their absence. – Edsger W. Dijkstra











//Inspireing motivational quotes about success

s.

    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." James Cameron
    "Success usually comes to those who are too busy to be looking for it." Henry David Thoreau
    "Things work out best for those who make the best of how things work out." John Wooden
    "Entrepreneurs average 3.8 failures before final success. What sets the successful ones apart is their amazing persistence." Lisa M. Amos
    "If you are not willing to risk the usual, you will have to settle for the ordinary." Jim Rohn
    "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success." Swami Vivekananda
    "Stop chasing the money and start chasing the passion." Tony Hsieh
    "All our dreams can come true if we have the courage to pursue them." Walt Disney
    "If you are willing to do more than you are paid to do, eventually you will be paid to do more than you do." Anonymous
    "Success is walking from failure to failure with no loss of enthusiasm." Winston Churchill
    "Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them." Vaibhav Shah
    "Success? I don't know what that word means. I'm happy. But success, that goes back to what in somebody's eyes success means. For me, success is inner peace. That's a good day for me." Denzel Washington
    "Opportunities don't happen. You create them." Chris Grosser
    "Try not to become a person of success, but rather try to become a person of value." Albert Einstein
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change." Charles Darwin
    "Great minds discuss ideas; average minds discuss events; small minds discuss people." Eleanor Roosevelt
    "The best revenge is massive success." Frank Sinatra
    "I have not failed. I've just found 10,000 ways that won't work." Thomas Edison
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him." David Brinkley
    "No one can make you feel inferior without your consent." Eleanor Roosevelt
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it." Henry Ford
    "If you're going through hell, keep going." Winston Churchill
    "What seems to us as bitter trials are often blessings in disguise." Oscar Wilde
    "The distance between insanity and genius is measured only by success." Bruce Feirstein
    "Don't be afraid to give up the good to go for the great." John D. Rockefeller
    "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you." Nathaniel Hawthorne
    "If you can't explain it simply, you don't understand it well enough." Albert Einstein
    "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed." Ray Goforth
    "Start where you are. Use what you have. Do what you can." Arthur Ashe
    "People ask, 'What's the best role you've ever played?' The next one." Kevin Kline
    "I find that the harder I work, the more luck I seem to have." Thomas Jefferson
    "The starting point of all achievement is desire." Napoleon Hill
    "Success is the sum of small efforts, repeated day-in and day-out." Robert Collier
    "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work." Thomas J. Watson
    "All progress takes place outside the comfort zone." Michael John Bobak
    "You may only succeed if you desire succeeding; you may only fail if you do not mind failing." Philippos
    "Courage is resistance to fear, mastery of fear--not absence of fear." Mark Twain
    "Only put off until tomorrow what you are willing to die having left undone." Pablo Picasso
    "We become what we think about most of the time, and that's the strangest secret." Earl Nightingale
    "The only place where success comes before work is in the dictionary." Vidal Sassoon
    "I don't know the key to success, but the key to failure is trying to please everyone." Bill Cosby
    "Though no one can go back and make a brand-new start, anyone can start from now and make a brand-new ending." Carl Bard
    "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing." Martha Stewart
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover." Mark Twain
    "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself." Mark Caine
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect." Mark Twain
    "The successful warrior is the average man, with laser-like focus." Bruce Lee
    "Rarely have I seen a situation where doing less than the other guy is a good strategy." Jimmy Spithill
    "Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I never heard of anyone ever stumbling on something sitting down." Charles F. Kettering
    "If you genuinely want something, don't wait for it--teach yourself to be impatient." Gurbaksh Chahal
    "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something--your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life." Steve Jobs
    "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!" T. Harv Eker
    "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better." Jim Rohn
    "The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors." Napoleon Hill
    "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it." Jane Smiley
    "Success does not consist in never making mistakes but in never making the same one a second time." George Bernard Shaw
    "I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well." Diane Ackerman
    "Motivation is what gets you started. Habit is what keeps you going." Jim Ryun
    "Our greatest fear should not be of failure ... but of succeeding at things in life that don't really matter." Francis Chan
    "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much." Jim Rohn
    "Nobody ever wrote down a plan to be broke, fat, lazy, or stupid. Those things are what happen when you don't have a plan." Larry Winget
    "To be successful you must accept all challenges that come your way. You can't just accept the ones you like." Mike Gafka
    "Be content to act, and leave the talking to others." Baltasar
    "You may have to fight a battle more than once to win it." Margaret Thatcher
    "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment." Stephen Covey
    "I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite." G. K. Chesterton
    "Many of life's failures are people who did not realize how close they were to success when they gave up." Thomas A. Edison
    "The greater the artist, the greater the doubt. Perfect confidence is granted to the less talented as a consolation prize." Robert Hughes
    "What would you attempt to do if you knew you would not fail?" Robert Schuller
    "Always bear in mind that your own resolution to success is more important than any other one thing." Abraham Lincoln
    "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential." John Maxwell
    "Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success." Thomas J. Watson
    "Logic will get you from A to B. Imagination will take you everywhere." Albert Einstein
    "Success is just a war of attrition. Sure, there's an element of talent you should probably possess. But if you just stick around long enough, eventually something is going to happen." Dax Shepard
    "My tombstone? I'm thinking something along the lines of, 'Geez, he was just here a minute ago.'" George Carlin
*/
};

module.exports = quotes
