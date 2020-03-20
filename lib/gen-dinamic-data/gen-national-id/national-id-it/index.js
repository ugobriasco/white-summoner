const CodiceFiscale = require('./CodiceFiscale');

const genItNationalID = props => {
  const name = props && props.name ? props.name : 'Enzo';
  const surname = props && props.surname ? props.surname : 'Righi';
  const gender = props && props.gender ? props.gender : 'M';
  const dob = props && props.dob ? new Date(props.dob) : new Date('06-10-1957');
  const birthplace = props && props.birthplace ? props.birthplace : 'Napoli';
  const birthplaceProvincia =
    props && props.birthplaceProvincia ? props.birthplaceProvincia : 'NA';

  const day = dob.getDay();
  const month = dob.getMonth() + 1;
  const year = dob.getFullYear();

  return CodiceFiscale.compute({
    name,
    surname,
    gender,
    day,
    month,
    year,
    birthplace,
    birthplaceProvincia
  });
};

module.exports = { genItNationalID, CodiceFiscale };
