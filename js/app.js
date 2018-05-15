/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


let arrayIcons=$(".card i");
let allIcons=[];

for (let item of arrayIcons){
    allIcons.push(item.className);
}
shuffle(allIcons);
console.log(allIcons);

let i=0;
for(let item of arrayIcons){
    item.className=allIcons[i];
    i++;
}

// let iconsIndex = [...Array(16).keys()];
// console.log(shuffle(iconsIndex));

// let countOpen = 0;
let moves = Number($(".moves").text()); //count moves
console.log(moves);




$(function() {
    let countOpen = $(".card.open.show").length;
    console.log(countOpen);                         //main function 2 the same then display
    if (countOpen < 2) {
        $("li[class='card'],li[class='card open show']").on("click", function() {
            $(this).toggleClass("open show");
            moves++;
            $(".moves").text(String(moves));
            countOpen = $(".card.open.show").length;
            countOpen %= 3;
            console.log(countOpen);
            if (countOpen == 2 && ($(".card.open.show :eq(0)").attr("class") == $(".card.open.show :eq(1)").attr("class"))) {
                $(".card.open.show").attr("class", "card match");
            }
            if (countOpen == 0) {
                $(".card.open.show").attr("class", "card");
                console.log(countOpen);
                $(this).toggleClass("open show");
            }

            if (moves == 25 || moves == 40 || moves == 60) {   //count stars
                $(".fa-star:first").attr("class","fa fa-star-o");

            }



        })
    }
})




$(function() {
    $(".restart").on("click", function() { location.reload(); })
})

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */