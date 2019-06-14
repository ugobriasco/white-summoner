function getStaticNationalID(countryCode) {
  const key = countryCode.toLowerCase();
  const ids = {
    at: "",
    be: "",
    br: "0000000001-9",
    bl: "",
    cl: "",
    cy: "",
    cz: "",
    dk: "",
    et: "",
    fi: "",
    fr: "",
    de: "T220001293",
    gr: "",
    hu: "",
    ie: "",
    it: "",
    lt: "",
    li: "",
    lu: "",
    mt: "",
    no: "",
    pl: "",
    pt: "",
    sk: "",
    sl: "",
    es: "",
    se: "",
    ch: "",
    nl: "",
    gb: "",
    us: "",
    ca: ""
  };


  if (!ids[countryCode]) return "";


  return ids[countryCode];
}

module.exports = { getStaticNationalID };
