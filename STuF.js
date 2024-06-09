// This project uses STuF v1.0
// to encode and decode links.
// 
// Info and lisences:
// github.com/stuffyerface/STuF

function stufDecode(encoded) {
  if (!encoded.startsWith('l$')) {
    throw new Error('Invalid encoded string');
  }
  let prefix = encoded[2];
  let suffix = encoded[3];
  let dotIndices = encoded.slice(4, encoded.indexOf('|')).split('').map(Number);
  let urlBody = encoded.slice(encoded.indexOf('|') + 1);

  let first9 = urlBody.slice(0, 9 - dotIndices.length);
  let then = urlBody.slice(9 - dotIndices.length).replace(/\^/g, '.');

  let url = first9 + then;
  url = charInc(url,-1)

  dotIndices.forEach((index) => {
    url = url.slice(0, index) + '.' + url.slice(index);
  });

  if (prefix === 'h') {
    url = 'http://' + url;
  } else if (prefix === 'H') {
    url = 'https://' + url;
  }

  if (suffix === '1') {
    url += '.png';
  } else if (suffix === '2') {
    url += '.jpg';
  } else if (suffix === '3') {
    url += '.jpeg';
  } else if (suffix === '4') {
    url += '.gif';
  }

  return url;
}

function stufEncode(url) {
  let encoded = "l$"
  if (url.startsWith('http://')) {
    encoded += 'h';
    url = url.slice(7);
  } else if (url.startsWith('https://')) {
    encoded += 'H';
    url = url.slice(8);
  }

  if (url.endsWith('.png')) {
    encoded += '1';
    url = url.slice(0, -4);
  } else if (url.endsWith('.jpg')) {
    encoded += '2';
    url = url.slice(0, -4);
  } else if (url.endsWith('.jpeg')) {
    encoded += '3';
    url = url.slice(0, -5);
  } else if (url.endsWith('.gif')) {
    encoded += '4';
    url = url.slice(0, -4);
  } else {
    encoded += '0';
  }

  let dotIndices = [];
  for (let i = 0; (i < url.length) && (i <= 9); i++) {
    if (url[i] === '.') {
      dotIndices.push(i);
      if (dotIndices.length === 9) break;
    }
  }

  let first9 = url.substring(0, 9)
  let then = url.substring(9).replace(/\./g, '^');
  first9 = first9.replace(/\./g, '');
  let shifted = charInc(first9+then,1)

  encoded += dotIndices.map(index => index.toString()).join('') + '|';
  encoded += shifted


  return encoded;
}

function charInc(str, int) {
  const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let incrementedStr = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = charSet.indexOf(char);

    if (index !== -1) {
      let nextChar = charSet[(index + int) % charSet.length];
      incrementedStr += nextChar;
    } else {
      incrementedStr += char;
    }
  }
  return incrementedStr;
}
