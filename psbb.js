const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function getInput(query) {
    return new Promise((resolve) => {
      readline.question(query, (answer) => {
        resolve(answer);
      });
    });
  }
  
  async function solve() {
    const nStr = await getInput("Input the number of families: ");
    const n = parseInt(nStr);
  
    const familyMembersStr = await getInput("Input the number of members in the family (separated by space): ");
    const familyMembers = familyMembersStr ? familyMembersStr.split(" ").map(Number) : [];
  
    if (familyMembers.length !== n) {
      console.log("Input must be equal with count of family");
      readline.close();
      return;
    }
  
    let totalPassengers = familyMembers.reduce((sum, count) => sum + count, 0);
    let numBuses = Math.ceil(totalPassengers / 4);
  
    let busesNeededWithFamilyConstraint = 0;
    let familiesAssigned = 0;
  
    const sortedFamilyMembers = [...familyMembers].sort((a, b) => b - a);
  
    for (let i = 0; i < sortedFamilyMembers.length; ) {
      busesNeededWithFamilyConstraint++;
      familiesAssigned++;
      let currentBusCapacity = sortedFamilyMembers[i];
      i++;
  
      if (i < sortedFamilyMembers.length) {
        if (familiesAssigned % 2 !== 0) {
          if (currentBusCapacity + sortedFamilyMembers[i] <= 4) {
            i++;
          }
        }
      }
    }
  
    console.log("Minimum bus required : " + Math.max(numBuses, busesNeededWithFamilyConstraint));
    readline.close();
  }
  
  solve();