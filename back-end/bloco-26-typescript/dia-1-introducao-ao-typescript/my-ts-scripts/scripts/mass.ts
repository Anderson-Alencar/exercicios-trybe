const forGram = (value: number, baseUnit: string): number => {
  switch (baseUnit) {
    case 'kg':
      return value * 1000;
    
    case 'hg':
      return value * 100;

    case 'dag':
      return value * 10;

    case 'dg':
        return value / 10;

    case 'cg':
      return value / 100;

    case 'mg':
      return value / 1000;

    default:
      return value;
  }
}

export const convert = (value: number, baseUnit: string, unitForConversion: string): number => {
  const inGrams = forGram(value, baseUnit);

  switch (unitForConversion) {
    case 'kg':
      return inGrams / 1000;
    
    case 'hg':
      return inGrams / 100;

    case 'dag':
      return inGrams / 10;

    case 'dg':
        return inGrams * 10;

    case 'cg':
      return inGrams * 100;

    case 'mg':
      return inGrams * 1000;

    default:
      return inGrams;
  }
}