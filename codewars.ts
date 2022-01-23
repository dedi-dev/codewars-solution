// FIND ODD

const findOdd1 = (xs: number[]): number => {
    interface LooseObject {
      [key: string]: number
    }
    var mapOfValue: LooseObject = {}
  
    xs.forEach((e) => {
      if (e in mapOfValue) {
          mapOfValue[e] += 1
      } else {
        mapOfValue[e] = 1
      }
    })
  
    console.log(mapOfValue);
  
    for (let i in mapOfValue) {
      let val = mapOfValue[i]
      if (val % 2 != 0) {
        console.log(i);
        return parseInt(i);
      }
    }
    return 0;
  };

  const findOdd2 = (xs: number[]): number => {
    // happy coding!
    return xs.reduce( (a,b)=> a^b);
  };

  const findOdd3 = (xs: number[]): number => {
    // happy coding!
    return xs.find(a => xs.filter(b => b === a).length % 2 === 1) || 0;
  };
  
  findOdd1([1,1,1,1,1,1,10,1,1,1,1])