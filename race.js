let bull = [
  ["a1", "a2", "a3", "a4", "a5"],
  ["b1", "b2", "b3", "b4", "b5"],
  ["c1", "c2", "c3", "c4", "c5"],
  ["d1", "d2", "d3", "d4", "d5"],
  ["e1", "e2", "e3", "e4", "e5"],
];
let bull_fast = [];
let bull_fast_index = [];
let top_three = [];
console.log("Starting bull lots are", bull);
// 5 races are being conducted
for (let i = 0; i < bull.length; i++) {
  bull[i].sort(() => Math.random() - 0.5);
  bull_fast[i] = bull[i][0];
  bull_fast_index[i] = i;
}
console.log("After 5 races", bull);
console.log("Top 5 in there respective lots", bull_fast);
// 6th race
let random = Math.random();
bull_fast.sort(() => random - 0.5);
bull_fast_index.sort(() => random - 0.5);
top_three.push(bull_fast[0]);
console.log(`After 6th race top bull is '${bull_fast[0]}'`);
console.log("After 6th race", bull_fast);

// 7th race
bull = [
  bull[bull_fast_index[0]][1],
  bull[bull_fast_index[0]][2],
  bull[bull_fast_index[1]][0],
  bull[bull_fast_index[1]][1],
  bull[bull_fast_index[2]][0],
];
console.log("Remaining bulls are  ", bull);

bull.sort(() => Math.random() - 0.5);
top_three.push(bull[0]);
top_three.push(bull[1]);

console.log("Top 3 bulls are not in order", top_three);
