let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function(){

  describe("#palindrome", function(){

    it("should return false for non palindrome", function(){
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for simple palindrome", function(){
      let simplePalindrome = new Phrase("racecar");
      assert(simplePalindrome.palindrome());
    });

    it("should return true for a mixed case palindrome", function(){
      let mixCasePalindrome = new Phrase("RaceCar");
      assert(mixCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function(){
      let puncPalindrome = new Phrase("Madam, I'm Adam");
      assert(puncPalindrome.palindrome());
    });

    it("should return false for an empty palindrome", function(){
      let emptyString = new Phrase("");
      assert(!emptyString.palindrome());
    })
  });

  describe("#letterse", function(){
    it("should return non punctuated string", function(){
      let puncString = new Phrase("Madam, I'm Adam");
      assert.strictEqual(puncString.letters(), "MadamImAdam");
    })
  });
});
