const input = [
    "Selfie Stick,98,29",
    "iPhone Case,90,15",
    "Fire TV Stick,48,49",
    "Wyze Cam,48,25",
    "Water Filter,56,49",
    "Blue Light Blocking Glasses,90,16",
    "Ice Maker,47,119",
    "Video Doorbell,47,199",
    "AA Batteries,64,12",
    "Disinfecting Wipes,37,12",
    "Baseball Cards,73,16",
    "Winter Gloves,32,112",
    "Microphone,44,22",
    "Pet Kennel,5,24",
    "Jenga Classic Game,100,7",
    "Ink Cartridges,88,45",
    "Instant Pot,98,59",
    "Hoze Nozzle,74,26",
    "Gift Card,45,25",
    "Keyboard,82,19"
]

let arr = [1, 2, 3, 4, 5, 6, 7];


function popularity(input) {
    // let popularity = {};
    // for (let item of input) {
    //     let i = item.split(',')[1];
    //     popularity[i] = item;

    // }

    // let res = {}
    // let k = Object.value(popularity).sort((a, b) => {
    //     return b - a;
    // }).forEach((key) => {
    //     res[key] = popularity[key]
    // });
    // console.log(res);
    // let result = Object.values(popularity)
    // console.log(result)

    let result = input.sort((a, b) => {
        return (b.split(',')[1] + b.split(',')[2]) - (a.split(',')[1] + b.split(',')[2])
    })

    console.log(result);
}



console.log(popularity(input));