Random Quote Generator

TODO:
[x] make repo on github
[x] create folder for project
[x] open terminal in project folder
[x] run 'git init'
[x] install node modules 'npm install .'
[x] make index.html, script.js, and style.css
[x] git remote add origin https://github.com/m3t4ldood/ACGquoteGen.git
[x] git push --set-upstream origin master
[x] git add . , git commit -m "initializing project" git push to github
[x] add starter code to html linking future js and css files 
[] add starter code to scripts.js
[] add starter code to style.css
[] get api for random quotes 
<!-- “Quotes are strings.”
Quotes are multiple strings that need to be stored in an array.
Every time the button gets pressed, a random whole number needs to be generated.
The number will be used as a representation of the array index number for the quote array.
Once we retrieve the randomly picked quote from the array using our randomly generated whole number, we will place it to the HTML document.  -->

- in script.js -
[] create 
var quotes = [

1. "Never speak badly of anyone /" get others to do so for you.",
2. "Guard your reputation with your life.",
3. "Do not directly ask for the help of others /" appeal to their self-interests.",
4. "Accept gifts but refuse charity.",
5. "Know that good enough is not good enough.",
6. "Avoid the affairs of others.",
7. "Know when you have been beaten.",
8. "Take advantage of every situation.",
9. "Increase your worth through absence.",
10. "Understand the thin line between confidence and cocky.",
11. "Avoid assuming responsibility.",
12. "Do everything with confidence, and others will follow you.",
13. "Know that praise in moderation earns favor.",
14. "Do not forget that all actions have consequences.",
15. "Never make decisions with a clouded mind.",
16. "Learn to recognise the difference between good intentions and good actions.",
17. "Do not fear the person with everything but rather the person with nothing.",
18. "Your past can and will be held against you /" show your capacity for change.",
19. "Measure success by the difference between what you had and what you have.",
20. "Never curse in the presence of women or children.",
21. "Know that nothing in life is deserved /" everything is earned.",
22. "Do not make empty promises.",
23. "Know when to be persistent and when to stop.",
24. "Greet with a clear voice and a firm handshake.",
25. "Give to the deserving not to the needy.",
26. "If you dont have what you want /" work harder."
27. "Defeat enemies completely and entirely.",
28. "Surround yourself with like minded people.",
29. "Respect and understand different cultures and traditions.",
30. "Use your emotions to push you forward not hold you back.",
31. "Say please and thankyou regardless of your status.",
32. "Know that pain must be felt in order to grow.",
33. "Avoid conflict but never run away from it.",
34. "Be wary of compliments and aware of the intentions behind them.",
35. "Acknowledge your flaws before they can be used against you.",
36. "If you show weakness you must also show perseverance.",
37. "Never settle for less than what you want.",
38. "Always be punctual /" expect the same from others.",
39. "Do not boast of your accomplishments.",
40. "Respect few and trust even fewer.",
41. "Never borrow money nor lend it.",
42. "It is ok to let others go first.",
43. "Distance yourself from the unhappy and the unlucky.",
44. "Seek maximum reward for minimum action.",
45. "Time your actions and speech carefully.",
46. "Know that an addiction is weakness whilst a passion is strength.",
47. "Realise that time spent complaining is time wasted.",
48. "Many people will have many opinions /" know that few of them will matter.",
49. "Never exaggerate /" the only thing it inflates is disbelief.",
50. "Strive to learn something new every day.",
51. "Adapt speech and behaviour to that of your company.",
52. "Always have a backup plan.",
53. "Keep and value those who are loyal.",
54. "Never doubt the abilities of others.",
55. "Do not let your emotions control you.",
56. "Know your worth.",
57. "Keep your composure at all times.",
58. "Let go of anger.",
59. "Know that a dream without action will stay a dream.",
60. "Question everything.",
61. "Welcome criticism and discussion.",
62. "Know that it is your pains and sufferings that give your life value.",
63. "Reflect on the difference between your thoughts and actions daily.",
64. "Do not mistake beauty for virtue.",
65. "Bring out the best in those around you.",
66. "Know that not all battles need to be fought to be won.",
67. "Remember that a problem only exists if it is acknowledged.",
68. "If you receive you should most definitely give back.",
69. "Know that knowledge is useless if it is not applied.",
70. "Make time to spend with your family.",
71. "Know that that you are responsible for your own happiness and suffering.",
72. "Live a life worthy of remembrance.",
73. "Love what you do.",
74. "Trust your gut feeling.",
75. "Appreciate the ability to read and write.",
76. "If you're not going to give something your best effort, do not give it any at all.",
77. "Be a man before even trying to be anything else.",
78. "Know that people are sadder than they appear to be.",
79. "Learn the law and exploit it for your own benefit.",
80. "Demand perfection from yourself and others.",
81. "Study words /" the ability to communicate should not be overlooked.",
82. "Speak of what you have done /" not of what you wish to do.",
83. "Be jealous but never show it.",
84. "Keep your personal life and business separate.",
85. "Take every reasonable opportunity.",
86. "Know that the sooner things are started, the sooner they are finished.",
87. "Be willing to pay for quality.",
88. "Know that pain, no matter how severe, is temporary.",
89. "Differentiate between what you want and need.",
90. "Do not force your opinions onto others /" it shouldn't be necessary.",
91. "Master the basics.",
92. "Know that any relationship will require effort on your behalf.",
93. "Avoid an idle mind and body.",
94. "Restrain bad thoughts before they become bad actions.",
95. "Learn to smile without reason.",
96. "Always speak the truth but limit how much of it is spoken.",
97. "Do not appear to be hardworking /" make everything seem effortless.",
98. "Never exaggerate /" the only thing it inflates is disbelief.",
99. "Be kind to everyone (initially).",
100. "Know that life will go on without you."
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.legnth));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
[] add list of quotes
[]
[] create react app 'npx create-???
[] create CRUD functionality
[]
[]

