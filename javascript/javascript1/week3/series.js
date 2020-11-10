const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 11,
      minutes: 0,
    },
    {
      title: "Sacred games",
      days: 4,
      hours: 0,
      minutes: 20,
    },
    {
      title: "Cursed",
      days: 4,
      hours: 10,
      minutes: 20,
    },
  ];

  const myLifeSpan = 80; //in years
  
  function calculateSpentTime(days, hours, minutes) {
    let myLifeInMinutes = 80 * 365 * 24 * 60;
    let seriesTimeInMinutes = (days * 24 + hours) * 60 + minutes;
    let spentTimeInPercentage = (seriesTimeInMinutes * 100 / myLifeInMinutes).toFixed(3);
    return spentTimeInPercentage;
  }
  let totalPercentage = 0;

  for(let i = 0; i < seriesDurations.length; i++) {
    let seriesTitle;
    let spentDays;
    let spentHours;
    let spentMinutes;
    let percentageOfLife;
    for(const [key, value] of Object.entries(seriesDurations[i])) {
        if(key === 'title') {
            seriesTitle = value;
        } else if(key === 'days') {
            spentDays = value;
        } else if(key === 'hours') {
            spentHours = value;
        } else if(key === 'minutes') {
            spentMinutes = value;
        }
        if((seriesTitle !== undefined) && (spentDays !== undefined) && (spentHours !== undefined) && (spentMinutes !== undefined)) {
            percentageOfLife = calculateSpentTime(spentDays, spentHours, spentMinutes);
            console.log(`${seriesTitle} took ${percentageOfLife}% of my life`);
            totalPercentage += parseFloat(percentageOfLife);
        }  
    }
  }
  console.log(`In total that is ${totalPercentage}% of my life.`);