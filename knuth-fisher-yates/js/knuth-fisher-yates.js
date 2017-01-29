var first_card = []
var second_card = []
var third_card = []

var DEFAULT_PURSE = 400;

window.onload = function(){
    document.getElementById("purse").innerHTML = DEFAULT_PURSE;
}

function createCards(){
    first_card.push("king_of_hearth");
    first_card.push("king_of_clubs");
    first_card.push("king_of_spades");
    first_card.push("king_of_diamonds");
    second_card.push("queen_of_hearth");
    second_card.push("queen_of_clubs");
    second_card.push("queen_of_spades");
    second_card.push("queen_of_diamonds");
    third_card.push("jack_of_hearth");
    third_card.push("jack_of_clubs");
    third_card.push("jack_of_spades");
    third_card.push("jack_of_diamonds");
}

function game(){
    
    first_card_shuffle = shuffle(first_card);
    second_card_shuffle = shuffle(second_card);
    third_card_shuffle = shuffle(third_card);
    
    var user_bid = parseInt(document.getElementById("bid").value);
    var user_purse = parseInt(document.getElementById("purse").innerHTML);
    
    displayCards();
    
    if(user_bid <= user_purse && user_bid > 0){
        user_purse = user_purse - user_bid
        document.getElementById("purse").innerHTML = user_purse;
    }else{
        alert("Sie haben nicht genügend Geld in der Börse !")
    }
    
    var black = ["clubs", "spades"];
    var red = ["diamonds", "hearth"];
    var all = ["diamonds", "hearth", "clubs", "spades"]
    var three_same_cards = false;
    
    for(i = 0; i < all.length - 1; i++){
        if (first_card_shuffle[0].endsWith(all[i]) && second_card_shuffle[0].endsWith(all[i]) && third_card_shuffle[0].endsWith(all[i])){
            three_same_cards = true;
            document.getElementById("purse").innerHTML = user_purse + user_bid * 2
            alert("Sie haben dreimal dieselbe Farbe ! Sie bekommen : "  + user_bid * 2 + ".");
        }
    }
        
    if (three_same_cards === false){
		
        for(i = 0; i < red.length - 1; i++){
            if((first_card_shuffle[0].endsWith(red[i]) || first_card_shuffle[0].endsWith(red[i + 1])) && (second_card_shuffle[0].endsWith(red[i]) || second_card_shuffle[0].endsWith(red[i + 1])) && (third_card_shuffle[0].endsWith(red[i]) || third_card_shuffle[0].endsWith(red[i + 1]))){
                document.getElementById("purse").innerHTML = user_purse + user_bid
                alert("Sie bekommen ihren Einsatz von "  + user_bid + " zurück.");
                break;
            }
        }
    
        for(i = 0; i < black.length - 1; i++){
            if((first_card_shuffle[0].endsWith(black[i]) || first_card_shuffle[0].endsWith(black[i + 1])) && (second_card_shuffle[0].endsWith(black[i]) || second_card_shuffle[0].endsWith(black[i + 1])) && (third_card_shuffle[0].endsWith(black[i]) || third_card_shuffle[0].endsWith(black[i + 1]))){
                document.getElementById("purse").innerHTML = user_purse + user_bid
                alert("Sie bekommen ihren Einsatz von "  + user_bid + " zurück.");
                break;
            }   
        }
    }   
}

function displayCards(){

    var first_card_image = first_card_shuffle[0] + ".png";
    var second_card_image = second_card_shuffle[0] + ".png";
    var third_card_image = third_card_shuffle[0] + ".png";
    
    document.getElementById("cards").innerHTML = "";
    document.getElementById("cards").innerHTML += "<img src='pictures/cards/" + first_card_image + "' alt='Erste Karte'>";
    document.getElementById("cards").innerHTML += "<img src='pictures/cards/" + second_card_image + "' alt='Zweite Karte'>";
    document.getElementById("cards").innerHTML += "<img src='pictures/cards/" + third_card_image + "' alt='Dritte Karte'>";
    
}

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

function main() {
    createCards();
    game();
}