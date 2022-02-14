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

  //PRINT ERROR

  function printerError (s: string): string {
    // your code
    const length: number = s.length;
    const textToArray: string[] = s.split("");
    let numOfError: number = 0;
    textToArray.forEach((e) => {
      if (e.match(/[n-zN-Z]+/g)) {
        numOfError += 1;
      }
    });
    console.log(`${numOfError}/${length}`);
    return `${numOfError}/${length}`;
  }

  function printerError1(s: string): string {
    return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
  }

  printerError("aaaxbbbbyyhwawiwjjjwwm");

  //TWO OLDEST AGES

  function twoOldestAges2(ages: number[]): number[] {
    return ages.sort((a, b) => a - b).slice(ages.length - 2);
  }

  function twoOldestAges(ages: number[]): number[] {
    ages.sort(function(a: number, b: number): number {
      return a - b;
    })
  
    console.log([ages[ages.length-2], ages[ages.length-1]])
    return [ages[ages.length-2], ages[ages.length-1]];
  }
  
  twoOldestAges([5,3,7,1,3,2,8])

  // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  export function narcissistic(value: number): any {
    const separatedNums: number[] = Array.from(value.toString(), Number);
    const multiplicator = separatedNums.length;
    const processedNum = separatedNums.reduce((acc, curr) => acc += curr ** multiplicator, 0)
    return processedNum === value; 
  }