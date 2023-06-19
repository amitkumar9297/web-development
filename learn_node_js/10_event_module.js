// event module 
// nodejs has is built-in module
// where you can create , fire, and listen for your own events


const EventEmitter =require('events');
const event =new EventEmitter();


event.on('sayhello',()=>{
    console.log("hello guys!");
});

event.on('sayhello',()=>{
    console.log("aur bahi! aa gaya sawad");
});

event.on("sayhello",()=>{
    console.log("bahiyon aur behnoo! jaisa ki aap jante hai ki hamare desh ki gdp mein 50 % contribution IT sector ki hai, toh aap sabhi se nivedan hai ki aap apne bachho coding jalul jalul sikhayein . dhanyawad");
});

// firstly we define event then we fire the event 

// we call multiple function through a event with event module

event.emit("sayhello");

//  thw concept is quite simple =====>>>>>
// emitter object emit named events that cause previously register listeners to be called. 
// so, an emitter object has basically two main feature
// 1=> emitting name event
// 2=> registering and unregistering listener function


event.on("sum",(a,b)=>{
    console.log(a+b);
})

event.emit("sum",85,5);

// we pass arguments also