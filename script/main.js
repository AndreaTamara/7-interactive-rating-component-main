let rating = null;

function updateRating(r){
    let listItem = null;
    if (rating && rating !== r){
        listItem = document.getElementById(rating);
        listItem.classList.remove("active_rating");
    }
    rating = r;
    console.log(rating);
    listItem = document.getElementById(rating);
    // console.log(listItem);
    listItem.classList.add("active_rating");

}

let ratingCard =null;
let thanksCard = null;
let span1 = null;

function sendSubmit(){
    if (rating){
    ratingCard = document.getElementById("rating_card");
    thanksCard =  document.getElementById("thanks_card");
    // console.log(thanksCard);
    // console.log(ratingCard);
    span1 = document.getElementsByTagName("span")[0];
    span1.textContent = rating;
    // console.log(span1);
    thanksCard.classList.remove("hidden");
    ratingCard.classList.add("hidden");
}
}