

let ages = [30,26,27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john,mary,joe] = ages
console.log(joe,mary,joe);

let jobs = {
    mike: "designer",
    jill: "developer",
    alica: "accountant"
};

let {mike,jill,alica} = jobs;
console.log(mike,jill,alica);

let languages = ["english", "french","spanish","german","japanese"];
let [JohnNative,JohnSecondary] = languages;
console.log(JohnNative,JohnSecondary);

let [,, MaryNative,MarySecondary] = languages;
console.log(MaryNative,MarySecondary);