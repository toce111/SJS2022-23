// 1. Followers

var JohnFollowers = ["Bill", "Kate", "Jill", "Tom", "Mary", "Mark"];
var JaneFollowers = ["Will", "Kate", "Jill", "Kyle", "Toby", "Nicolle"];
var mutualFollowers = [];

for (i = 0; i < JohnFollowers.length; i++) {
    for (j = 0; j < JaneFollowers.length; j++) {
        if(JohnFollowers[i] === JaneFollowers[j])
        {
            mutualFollowers.push(JohnFollowers[i]);
        }
    }
}

console.log(mutualFollowers);

// 2. The Mario's tower

var kula = [];
var hashtag = "#";
for (i = 0; i <= 6; i++) {
    console.log(kula);
    kula+=hashtag;
}

// 3. The multiplier

for(i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i*9}`);
}