export const hasDoubleCharacters = s => {
  for (let i = 0; i <= s.length - 2; i++) {
    if (s[i] === s[i + 1]) return true;
  }
  return false;
};

export const has3xSequence = s => {
  for (let i = 0; i <= s.length - 3; i++) {
    if (s.charCodeAt(i) + 1 === s.charCodeAt(i + 1) && s.charCodeAt(i + 1) + 1 === s.charCodeAt(i + 2)) {
      return true;
    }
  }
  return false;
};

export const lcAlphaOnly = s => !!s.match(/^[a-z]+$/);

export const containsIOL = s => !!s.match(/[iOl]/g);
