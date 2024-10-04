function parseBetMessage(message) {
    if (message.length !== 21) {
      throw new Error('The array must have exactly 21 values.');
    }
  
    const [
      betCreated, sportsbook, betID, sport, eventName, eventDate, marketName, betName, position, odds,
      suggestedBetToWin, suggestedBetSize, stake, potentialPayout, 
      projectedWinPercentage, projectedEVPercentage, tag1, helperColumn, result, 
      controlledStake, controlledPayout
    ] = message;
  
    const telegramMessage = `
<b>📅 Bet Created</b>: ${betCreated}
<b>🏦 Sportbook</b>: ${sportsbook}
<b>🔢 Bet ID</b>: ${betID}
<b>🏅 Sport</b>: ${sport}
<b>🎯 Event Name</b>: ${eventName}
<b>📅 Event Date</b>: ${eventDate}
<b>🛒 Market Name</b>: ${marketName}
<b>🎲 Bet Name</b>: ${betName}
<b>📍 Position</b>: ${position}
<b>🎯 Odds</b>: ${odds}

<b>💵 Suggested Bet to Win</b>: ${suggestedBetToWin}
<b>📊 Suggested Bet Size</b>: ${suggestedBetSize}
<b>💰 Stake</b>: ${stake}
<b>🏆 Potential Payout</b>: ${potentialPayout}

<b>📈 Projected Win Percentage</b>: ${projectedWinPercentage}%
<b>📊 Projected EV% Tag</b>: ${projectedEVPercentage}%
<b>🏷️ Tag 1</b>: ${tag1}
<b>🔎 Helper Column</b>: ${helperColumn}
<b>🟢 Result</b>: ${result}

<b>⚖️ Controlled Stake</b>: ${controlledStake}
<b>💵 Controlled Payout</b>: ${controlledPayout}
  `;
  
    return telegramMessage.trim();
  }

  
  module.exports = { parseBetMessage };
