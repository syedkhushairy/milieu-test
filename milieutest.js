// You are to create a card game for 4 players. 
// The players each draw a card from the deck each round. 
// The player who draws the highest card will win the round and score a point. 
// When there are no more cards left in the deck, the game should end with 
// a scoreboard that displays the players ranked in order of the total number of points they have scored.

const deckOfCards = [
    "D1", "D2", "D3" ,"D4",
    "D5", "D6", "D7" ,"D8",
    "D9", "D10", "D11" ,"D12","D13",
    "C1", "C2", "C3" ,"C4",
    "C5", "C6", "C7" ,"C8",
    "C9", "C10", "C11" ,"C12","C13",
    "H1", "H2", "H3" ,"H4",
    "H5", "H6", "H7" ,"h8",
    "H9", "H10", "H11" ,"H12","H13",
    "S1", "S2", "S3" ,"S4",
    "S5", "S6", "S7" ,"S8",
    "S9", "S10", "S11" ,"S12","S13",
]

//spade suit = 1
//hearts suit = 2
//club suit = 3
//diamond suit = 4

const jsonPlayers = [ {
   player: 1,
   marks: 0,
   card: 0,
   suit: '',
}, {
    player: 2,
    marks: 0,
    card: 0,
    suit: '',
},{
    player: 3,
    marks: 0,
    card: 0,
    suit: '',
},{
    player: 4,
    marks: 0,
    card: 0,
    suit: '',
}
]
let highest = {};
let highestScore

function comparesSuit(suit) {
    switch (suit) {
        case 'S': return 1;
        case 'H': return 2;
        case 'C': return 3;
        case 'D': return 4;
    }
 }

function gameStart() {
    while(deckOfCards.length !== 0) {
        for(let x = 0; x<=3; x++){
            let randomCard = Math.trunc(Math.random() * deckOfCards.length);
            jsonPlayers[x].suit = deckOfCards[randomCard].charAt(0);
            jsonPlayers[x].card = deckOfCards[randomCard].substring(1);
            deckOfCards.splice(randomCard, 1);
        }

        highest = jsonPlayers[0];
        highest.index = 0;
        for(let x=1; x<=3; x++) {
            if(highest.card < jsonPlayers[x].card) {
                highest = jsonPlayers[x];
                highest.index = x;
            } else if (highest.card == jsonPlayers[x].card) {
                if(comparesSuit(highest.suit) > comparesSuit(jsonPlayers[x].suit)) {
                    highest = jsonPlayers[x];
                    highest.index = x;
                }
            }
        }
        jsonPlayers[highest.index].marks += 1;
    }
    jsonPlayers.sort((a, b) => b.marks - a.marks)
    console.log(jsonPlayers)
}
 
gameStart()
