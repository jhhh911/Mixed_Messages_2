let day = 1
let month = 'February'
let star = (day, month) => {
  if (day >= 21 && month === 'March' || day < 21 && month === 'April') {
    return 'Aries';
  } else if (day >= 21 && month === 'April' || day < 21 && month === 'May') {
    return 'Taurus';
  } else if (day >= 21 && month === 'May' || day < 21 && month === 'June') {
    return 'Gemini';
  } else if (day >= 21 && month === 'June' || day < 21 && month === 'July') {
    return 'Cancer';
  } else if (day >= 21 && month === 'July' || day < 21 && month === 'August') {
    return 'Leo';
  } else if (day >= 21 && month === 'August' || day < 21 && month === 'September') {
    return 'Virgo';
  } else if (day >= 21 && month === 'September' || day < 21 && month === 'October') {
    return 'Libra';
  } else if (day >= 21 && month === 'October' || day < 21 && month === 'November') {
    return 'Scorpio';
  } else if (day >= 21 && month === 'November' || day < 21 && month === 'December') {
    return 'Sagittarius';
  } else if (day >= 21 && month === 'December' || day < 21 && month === 'January') {
    return 'Capricorn';
  } else if (day >= 21 && month === 'January' || day < 21 && month === 'February') {
    return 'Aquarius';
  } else if (day >= 21 && month === 'February' || day < 21 && month === 'March') {
    return 'Pisces';
  } else {
    return 'Please enter birth day and birth month';
  }
}
starSign = star(day, month)

starMessage = (star) => {
  if (star === 'Aries') {
    return 'More peace will reside in your heart!';
  } else if (star === 'Taurus') {
    return 'Be ready to refresh with a new connection!'
  } else if (star === 'Gemini') {
    return 'If you have been thinking of doing something different, now is the time!'
  } else if (star === 'Cancer') {
    return 'No point in rushing, relax and take your time!'
  } else if (star === 'Leo') {
    return 'Now is the right time to have a talk to someone close to you!'
  } else if (star === 'Virgo') {
    return 'Important bonds should be your top priority!'
  } else if (star === 'Libra') {
    return 'You will be granted with massive amounts of motivation!'
  } else if (star === 'Scorpio') {
    return 'You can take the bull by the horns, get creative!'
  } else if (star === 'Sagittarius') {
    return 'Focus on the minor details!'
  } else if (star === 'Capricorn') {
    return 'Time for a spontaneous adventure!'
  } else if (star === 'Aquarius') {
    return 'Do your best to become ultra-proud of yourself!'
  } else if (star === 'Pisces') {
    return 'Invite your flirty self outside!'
  }
}

let moonRandom = Math.floor(Math.random() * 12)

let moon = (moonRandom) => {
switch (moonRandom) {
  case 1:
    return 'Aries';
    case 2:
    return 'Taurus';
    case 3:
    return 'Gemini';
    case 4:
    return 'Cancer';
    case 5:
    return 'Leo';
    case 6:
    return 'Virgo';
    case 7:
    return 'Libra';
    case 8:
    return 'Scorpio';
    case 9:
    return 'Sagittarius';
    case 10:
    return 'Capricorn';
    case 11:
    return 'Aquarius';
    case 12:
    return 'Pisces';
    default:
    return 'Please enter a number between 1 - 12'
}
}
moonSign = moon(moonRandom)

moonMessage = (moonSign) => {
switch (moonSign) {
  case 'Aries':
    return 'You will find love on your next travels!';
    case 'Taurus':
    return 'Watch out for red flags in moments that seem off!';
    case 'Gemini':
    return 'Doing an activity with a friend will help you relax!';
    case 'Cancer':
    return 'You will eventually lose something close, hold tight!';
    case 'Leo':
    return 'Stand with pride as you feel closure!';
    case 'Virgo':
    return 'Unpleasant conversation may arise, take deep breaths! ';
    case 'Libra':
    return 'You will represent justice, make sure to do so smartly!';
    case 'Scorpio':
    return 'You may encounter someone from your past!';
    case 'Sagittarius':
    return 'Be ready to make an important decision!';
    case 'Capricorn':
    return 'Your friends will see you as a constant source of positivity!';
    case 'Aquarius':
    return 'An upcoming birthday could present you an unexpected gift!';
    case 'Pisces':
    return 'Disappointment is inevitable, do your best! ';
}
  }

  secretMessage = () => {
  if (starSign === moonSign) {
    console.log('You will win 100 million dollars someday!!!')
  } else {
    console.log('Good Luck!')
  }
}
console.log(starSign)
console.log(starMessage(starSign))
console.log(moonSign)
console.log(moonMessage(moonSign))
secretMessage()