export const formatZipCode = (country: string) => {
    switch (country) {
      case 'Brasil':
        return formatCEP;
  
      default:
        return (value: string) => value;
    }
  };
  
  export const patternZipCode = (country: string) => {
    switch (country) {
      case 'Brasil':
        return /(\d\d?.\d\d\d)-?\d{3}/;
  
      default:
        return undefined;
    }
  };
  
  const formatCEP = (value: string, prevString: string) => {
    if (value.length >= 6 && !value.includes('-')) {
      return `${value.substr(0, 5)}-${value.substr(5)}`;
    }
  
    const cleanString = value.replace(/\D/g, '');
  
    if (cleanString.length >= 9) {
      return prevString;
    }
    return value;
  };
  