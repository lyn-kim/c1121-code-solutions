function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Dan Abramov');
lawSchool('Ryan Florence');

console.log(medicalSchool('Dan Abramov'));
console.log(lawSchool('Ryan Florence'));
