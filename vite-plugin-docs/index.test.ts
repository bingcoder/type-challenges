//@ts-ignore
function getCharList(s: string) {
  const list: string[] = [];
  let lastNumber: boolean = false;
  for (let index = 0; index < s.length; index++) {
    const current = s[index];
    if (/\d/.test(current)) {
      if (lastNumber) {
        const lastIndex = list.length - 1;
        list[lastIndex] = list[lastIndex] + current;
      } else {
        lastNumber = true;
        list.push(current);
      }
    } else {
      lastNumber = false;
      list.push(current);
    }
  }
  return list;
}

// console.log(getCharList('123sss'));
// console.log(getCharList('s1ss'));
// console.log(getCharList('s1s2s'));
// console.log(getCharList('sss33'));
// console.log(getCharList('s1234ss33'));
// console.log(getCharList('s56s789s33'));
// console.log(getCharList('.sss33'));

const sort = (a: string, b: string) => {
  const la = getCharList(a);
  const lb = getCharList(b);

  for (let index = 0; index < 100; index++) {
    const ia = la[index];
    const ib = lb[index];
    if (!ia) return -1;
    if (!ib) return 1;
    if (ia === ib) continue;
    if (/\d/.test(ia) && /\d/.test(ib)) {
      return +ia - +ib;
    } else if (/\d/.test(ia)) {
      return -1;
    } else if (/\d/.test(ib)) {
      return 1;
    } else {
      return ia.charCodeAt(0) - ib.charCodeAt(0);
    }
  }
  return -1;
};

const test = [
  [
    'abc.ts',
    'abc.tsx',
    '.abc.ts',
    '12bc.js',
    '.b.ts',
    '1ab.js',
    'a1a.js',
    'a12a.js',
    'a2a.js',
    'acc.js',
  ],
];

test.forEach((i) => {
  console.log(i.sort(sort));
});
