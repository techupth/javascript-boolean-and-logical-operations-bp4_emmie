let isOver18 = true;
let hasCriminalBlacklist = true;

let isAllow = isOver18 || !hasCriminalBlacklist;

James = isOver18 || !hasCriminalBlacklist;

isAllow = isAllow && James;
console.log(isAllow);
