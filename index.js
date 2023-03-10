//describe('sayHiToHeadphonedRoommate(string)', before(function(done){
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
        expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
      })
const expect = require("expect/lib")
beforeAll
describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
        expect(shout("hello")).toEqual("HELLO");
    })
})
function shout(string) {
    return string.toUpperCase();



}function whisper(string) {
    return string.toLowerCase()
}
function logShout (aWord) {
    console.log(aWord.toUpperCase( ))
}
function logWhisper (aWord) {
    console.log(aWord.toLowerCase( ))
}
// describe('saysayHiToHeadphonedRoommate(string)', function() {
//   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//     expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!")
//   })

//   it('returns "YES INDEED!" if `string` is uppercase', function() {
//     expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!")
//   })

//   it('returns "I would love to!" if `string` is "Let's have dinner together!"`', function() {
//     expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual("I would love to!")
//   })
// })
function sayHiToHeadphonedRoommate (aWord) {
    let cantUnswer = "I can't hear you!";
    let yesUnswer = "YES INDEED!";
    let lovUnswer = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
      return cantUnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
      return lovUnswer
    }
  }