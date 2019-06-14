function getStaticVatID(countryCode) {
  const ids = {
    at: "ATU99999999",
    be: "BE0999999999",
    br: "123.456.789-00",
    bg: "BG999999999",
    ca: "123456789RT0001",
    cl: "12345678A",
    cy: "CY99999999L",
    cz: "CZ00000000",
    de: "DE999999999",
    dk: "DK99999999",
    ee: "123456789",
    fi: "FI99999999",
    fr: "FRXX999999999",
    gr: "000000000",
    hu: "HU12345678",
    ie: "IE1234567T",
    it: "XHJGDS87H20Z100A",
    lt: "123456789",
    lv: "12345678901",
    lu: "12345678",
    mt: "12345678",
    no: "12345678UMVA",
    nl: "NL999999999B99",
    pl: "xxx-xxx-xx-xx",
    pt: "123456789",
    sk: "SK1234567890",
    si: "SI99999999",
    es: "ES99999999R",
    se: "SE999999999901",
    ch: "CHE-123.456.788 TVA",
    gb: "GB999999973",
    us: ""
  };

  return ids[countryCode];
}

module.exports = { getStaticVatID };
