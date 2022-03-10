type MatchStrType = (source: string, match: string) => boolean;

const matchStr: MatchStrType = (source, match) => {
  for (let i = 0; i < source.length; i++) {
    if (source[i] === match[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

export default matchStr;
