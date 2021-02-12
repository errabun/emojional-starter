var phrases = {
  happy: ["You go!", "Your smile just cheered me up!", "YAY!"],
  silly: ["Interesting response", "Sounds ... good?", "Me too."],
  sad: ["Do you want to talk?", "Keep your head up", "We can cry together!", "What can I do?"]
}
var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');
var replyMessage = document.querySelector('.message');

happyButton.addEventListener('click', function() {
  return replyMessage.innerText = phrases.happy[getRandomIndex(phrases.happy)];
});

sillyButton.addEventListener('click', function() {
  return replyMessage.innerText = phrases.silly[getRandomIndex(phrases.silly)];
});

cryingButton.addEventListener('click', function() {
  return replyMessage.innerText = phrases.sad[getRandomIndex(phrases.sad)];
});

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
