// Reverses a string.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
};

String.prototype.blank = function(){
  return !!this.match(/^\s*$/);
}

Array.prototype.last = function(){
  return this.slice(-1);
}
// Returns true for a palindrome, false otherwise.

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  this.processedContent = function processedContent(){
    return this.content.toLowerCase();
  }
  this.LOUDER = function LOUDER(){
    return content.toUpperCase();
  }
}
