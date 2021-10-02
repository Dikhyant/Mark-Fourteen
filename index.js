const initialStockPricePanel = document.querySelector("#initial-stock-amount");
const stockQuantityPanel = document.querySelector("#stock-quantity");
const currentStockPricePanel = document.querySelector("#current-stock-amount");

//const initialStockPriceBtn = document.querySelector("#btn-initial-stock-price");
//const stockQuantityBtn = document.querySelector("#btn-stock-quantity");
const currentStockPriceBtn = document.querySelector("#btn-current-stock-amount");

const messageForUser = document.querySelector("#message-for-user span");
messageForUser.style.visibility = "hidden"

var initialStockPrice=0 ; 
var stockQuantity = 0; 
var currentStockPrice = 0;
var profitOrLoss = 0;

//adding event listener to panels
initialStockPricePanel.addEventListener( "input" , (event)=>{
    //console.log(event.target.value)
    initialStockPrice = parseFloat(event.target.value) ;
})

stockQuantityPanel.addEventListener( "input" , (event)=>{
    //console.log(event.target.value)
    stockQuantity = parseFloat(event.target.value);
})

currentStockPricePanel.addEventListener( "input" , (event)=>{
    currentStockPrice = parseFloat( event.target.value );
} )



//adding event listener to buttons

/*
initialStockPriceBtn.addEventListener( "click" , (event)=>{
    console.log(initialStockPrice);
} );


stockQuantityBtn.addEventListener( "click" , (event)=>{
    console.log(stockQuantity);

} );
*/

currentStockPriceBtn.addEventListener( "click" , (event)=>{
    profitOrLoss = (currentStockPrice - initialStockPrice) * stockQuantity;
    var profitOrLossPercentage = profitOrLoss / (initialStockPrice * stockQuantity) * 100;
    console.log("profit or loss % = " + profitOrLossPercentage);

    if(profitOrLoss > 0) {
        messageForUser.innerHTML = "Congratulations 🎉😎. You've made a profit of " + profitOrLoss + " i.e, " + profitOrLossPercentage + "%";
        messageForUser.style.backgroundColor = "#6ECB63";
    } else if(profitOrLoss < 0) {
        messageForUser.innerHTML = "Sorry to inform you 😔😞. You've suffered a loss of " + profitOrLoss + " , " + profitOrLossPercentage + "%";
        messageForUser.style.backgroundColor = "rgb(204, 0, 0)";
    } else {
        messageForUser.innerHTML = "No profits were generated 😐 . Well atleast you didn't suffer any losses 😌" ;
        messageForUser.style.backgroundColor = "rgb(200, 200, 0)";
    }

    messageForUser.style.visibility = "visible";
} )