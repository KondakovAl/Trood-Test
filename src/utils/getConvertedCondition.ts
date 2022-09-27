export const getConvertedCondition = (conditions: string) => {
    const [value, date] = conditions.split(' ');
    let newValue = +value.replace(/,/g, '.').slice(1);
    if (date === 'year' || date === 'years') {
      newValue = Math.floor(newValue * 12 * 100) / 100;
    }
    return newValue;
  };