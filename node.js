const fs = require('fs');

var final_json = {};
var level_array = [];
fs.readFile('./level.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    const dataArray = data.split('\n');
    for(var i = 0; i < dataArray.length; i++){
        var level_data = dataArray[i];
        const startPos = level_data.indexOf(' ');
        const secondSpacePos = level_data.indexOf(' ', startPos + 1);

        // Find the end position (index) of the carriage return character
        const endPos = level_data.indexOf('\r');
        var result = level_data.substring(secondSpacePos + 1, endPos);
        result = result.replace(/\s/g, '');
        level_array.push(result)
    }

    var final_data = [];

    for(var j = 0;j < 333; j++){
        var image_url = "";
        if(level_array[j] === "gold"){
            image_url = "https://ipfs.io/ipfs/QmSZVa6mYwKJDvcLyii5FTKoYLadZcQz38FBj4F3wkT2CU/Gold_Front.jpg";
        } else if(level_array[j] === "deluxe"){
            image_url = "https://ipfs.io/ipfs/QmSZVa6mYwKJDvcLyii5FTKoYLadZcQz38FBj4F3wkT2CU/Deluxe_front.jpg";
        } else if(level_array[j] === "diamond"){
            image_url = "https://ipfs.io/ipfs/QmSZVa6mYwKJDvcLyii5FTKoYLadZcQz38FBj4F3wkT2CU/Diamond_Front.jpg";
        }
        var temp = {
            "name": "Moon Pass - Collection " + (j + 1),
            "description": ["A different approach the pass systems currently on Cardano.", " The Moon Pass is a collection of 333 access cards which brings special benefits to its holders."," This collection offers passive rewards to holders and will play a vital role in the ecosystem."," Join the Inu's in our quest for stability as we explore the metaverse.", "The moon pass collection will feature (3) Different Rarity Tiers.", " Platinum, Gold, Deluxe] Each Tier has its own multipler for rewards on the staking platform."],
            "project":"Moon Pass - Collection",
            "image": image_url,
            "mediaType": "image/png",
            "edition": j+1,
            "pass": level_array[j],
            "files": [
            {
                "name": "mp4 file",
                "mediaType": "video/mp4",
                "src": "https://ipfs.io/ipfs/QmWYWqJac9qSVNiCmSXhwMGEgubuifyLk1iCG7Socr2dWe/" + (j+1) + ".mp4",
                "thumbnail" : image_url
            }
        ]
        }
        final_data.push(temp);
        // const jsonData = JSON.stringify(temp,null,2);

        // fs.writeFile("./metadata/" + (j+1) + ".metadata", jsonData, (err) => {
        // if (err) throw err;
        // console.log('The JSON file has been saved!');
        // });



    }
    
    const jsonData = JSON.stringify(final_data,null,2);

    fs.writeFile("./metadata/1.json", jsonData, (err) => {
    if (err) throw err;
    console.log('The JSON file has been saved!');
    });

    console.log(JSON.stringify(level_array));
  });


// const data = {
//   name: 'John Doe',
//   age: 30,
//   email: 'johndoe@example.com'
// };



// const jsonData = JSON.stringify(data);

// fs.writeFile('data.json', jsonData, (err) => {
//   if (err) throw err;
//   console.log('The JSON file has been saved!');
// });