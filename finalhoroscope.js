const zodiacSigns = [
  { start: [3, 21], end: [4, 20], sign: "Aries"},
  { start: [4, 21], end: [5, 20], sign: "Taurus"},
  { start: [5, 21], end: [6, 20], sign: "Gemini"},
  { start: [6, 21], end: [7, 20], sign: "Cancer"},
  { start: [7, 21], end: [8, 20], sign: "Leo"},
  { start: [8, 21], end: [9, 20], sign: "Virgo"},
  { start: [9, 21], end: [10, 20], sign: "Libra"},
  { start: [10, 21], end: [11, 20], sign: "Scorpio"},
  { start: [11, 21], end: [12, 20], sign: "Sagittarius"},
  { start: [12, 21], end: [1, 20], sign: "Capricorn"},
  { start: [1, 21], end: [2, 20], sign: "Aquarius"},
  { start: [2, 21], end: [3, 20], sign: "Pisces"},
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getZodiacSign = (day, month) => {
  const monthIndex = monthNames.indexOf(month) + 1;
  return zodiacSigns.find(({ start, end }) =>
    (monthIndex === start[0] && day >= start[1]) ||
    (monthIndex === end[0] && day < end[1])
  )?.sign || "Invalid date";
};

const starMessages = {
  Aries: "More peace will reside in your heart!",
  Taurus: "Be ready to refresh with a new connection!",
  Gemini: "If you have been thinking of doing something different, now is the time!",
  Cancer: "No point in rushing, relax and take your time!",
  Leo: "Now is the right time to have a talk to someone close to you!",
  Virgo: "Important bonds should be your top priority!",
  Libra: "You will be granted with massive amounts of motivation!",
  Scorpio: "You can take the bull by the horns, get creative!",
  Sagittarius: "Focus on the minor details!",
  Capricorn: "Time for a spontaneous adventure!",
  Aquarius: "Do your best to become ultra-proud of yourself!",
  Pisces: "Invite your flirty self outside!",
};
const getStarMessage = (sign) => starMessages[sign] || "Unknown sign";

const moonSigns = monthNames.map((_, i) => zodiacSigns[i]?.sign);
const getMoonSign = () => moonSigns[Math.floor(Math.random() * 12)];

const moonMessages = {
  Aries: "You will find love on your next travels!",
  Taurus: "'Watch out for red flags in moments that seem off!",
  Gemini: "Doing an activity with a friend will help you relax!",
  Cancer: "You will eventually lose something close, hold tight!",
  Leo: "Stand with pride as you feel closure!",
  Virgo: "Unpleasant conversation may arise, take deep breaths!",
  Libra: "You will represent justice, make sure to do so smartly!",
  Scorpio: "You may encounter someone from your past!",
  Sagittarius: "Be ready to make an important decision!",
  Capricorn: "Your friends will see you as a constant source of positivity!",
  Aquarius: "An upcoming birthday could present you an unexpected gift!",
  Pisces: "Disappointment is inevitable, do your best!",
};

const getMoonMessage = (sign) => moonMessages[sign] || "Unknown sign";

const secretMessage = (starSign, moonSign) => console.log(starSign === moonSign
? "You will win 100 million dollars someday!!!" : "Good Luck!");

const day = 11, month = "February";
const starSign = getZodiacSign(day, month);
const moonSign = getMoonSign();

console.log(starSign);
console.log(getStarMessage(starSign))
console.log(moonSign)
console.log(getMoonMessage(moonSign))
secretMessage(starSign, moonSign);