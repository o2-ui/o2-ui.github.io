const semanticVersionRegex = /^\d+\.\d+\.\d+$/;

const checkIsSameVersion = (compare: string, standard: string) => {
  if (!semanticVersionRegex.test(compare) || !semanticVersionRegex.test(standard)) {
    throw new Error(`[ERROR]: Invalid version format. (compare: ${compare}, standard: ${standard})`);
  }
  return compare === standard;
};

/**
 * @description standard version 보다 compare version 이 작다면 true.
 */
const checkIsPreviousVersion = (compare: string, standard: string) => {
  if (!semanticVersionRegex.test(compare) || !semanticVersionRegex.test(standard)) {
    throw new Error(`[ERROR]: Invalid version format. (compare: ${compare}, standard: ${standard})`);
  }

  const [cMajor, cMinor, cPatch] = compare.split('.').map(Number);
  const [sMajor, sMinor, sPatch] = standard.split('.').map(Number);

  if (sMajor !== cMajor) return sMajor > cMajor;
  if (sMinor !== cMinor) return sMinor > cMinor;
  if (sPatch !== cPatch) return sPatch > cPatch;
  return false;
};

/**
 * @description standard version 보다 compare version 이 크다면 true.
 */
const checkIsNextVersion = (compare: string, standard: string) => {
  if (!semanticVersionRegex.test(compare) || !semanticVersionRegex.test(standard)) {
    throw new Error(`[ERROR]: Invalid version format. (compare: ${compare}, standard: ${standard})`);
  }

  const [cMajor, cMinor, cPatch] = compare.split('.').map(Number);
  const [sMajor, sMinor, sPatch] = standard.split('.').map(Number);

  if (sMajor !== cMajor) return sMajor < cMajor;
  if (sMinor !== cMinor) return sMinor < cMinor;
  if (sPatch !== cPatch) return sPatch < cPatch;
  return false;
};

export { checkIsSameVersion, checkIsPreviousVersion, checkIsNextVersion };
