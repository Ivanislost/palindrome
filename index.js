module.exports = Phrase;

// Reverses a string.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
};

// Returns true for a palindrome, false otherwise.

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.palindrome = function palindrome() {
    if(!this.content){ return false; } else {
    return this.processedContent() === this.processedContent().reverse();}
  }

  this.processedContent = function processedContent(){
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    return Array.from(this.content).filter(n => n.match(/[^\s\W]/)).join("");
  }

  this.LOUDER = function LOUDER(){
    return content.toUpperCase();
  }
}
