function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
      
      names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      
    }
    return(names); 
  }
  
function countDown(number) {
    while (number >= 0) {
    console.log(number);
    number--; 
    }
  // return(number); 
}
  

// const names = [];
// const event = ""; 

// function writeCards(names, event) {
//   for (let i = 0; i < names.length; i++) {
    
//     names[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
//     // console.log(`Wrapped ${names[i]} and added a ${event}`);
//   }  
  
  
//   for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//      }
  
  //placeholder = `${firstName} ${clanName} ${commonName}`;
  
  //return = placeholder;
// }

//writeCards(["German", "Santos"], "birthday");



// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


// const names = [];

// function writeCards(names, "event") {

// }




// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     // debugger;
//   }