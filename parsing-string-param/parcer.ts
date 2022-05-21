// height: 100%; top: auto; bottom: 0px; width: 0%;

const getValue = (style: string): number =>  {
  let obj = {};
  style.replace(/(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g, (match, key, val) => obj[key] = val);
  console.log(obj);
  return 666;
}

const string = 'height: 100%; top: auto; bottom: 0px; width: 0%;';
console.log(getValue(string));