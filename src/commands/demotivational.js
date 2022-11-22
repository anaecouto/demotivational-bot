function getDemotivationalSentences() {
  const demotivationalSentences = [
    "It will only go wrong if you try.",
    "Don't be sad, it will get worse.",
    "It's just a bad storm, soon it will get worse.",
    "Bad things go so worse things can come.",
    "After sacrifice comes defeat.",
    "When you start thinking about giving up, give up.",
    "Wake up, failure awaits you.",
    "Be the main character of your failure.",
    "The journey is long, but defeat is certain.",
    "Without fights there are no defeats.",
    "Every mistake starts with the decision of trying.",
    "All paths lead to defeat.",
    "Stop thinking everything will go wrong and start being sure of it.",
    "If you think you can't do it, don't even start.",
    "The defeat's merit is all yours. Be proud.",
    "Life is a failure tale.",
    "Before beginning, give up.",
    "You may not change your past, but you can ruin your future.",
    "Today's effort is tomorrow's failure.",
    "You're weaker than you think.",
    "Forget the past mistakes, plan your future mistakes.",
    "When everything seems to be going wrong, get used to it.",
    "Stop wishing and start giving up.",
  ];

  const arrayIndex = Math.floor(Math.random() * demotivationalSentences.length);

  return demotivationalSentences[arrayIndex];
}

module.exports = {
  getDemotivationalSentences,
};
