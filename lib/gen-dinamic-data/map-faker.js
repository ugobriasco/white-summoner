function mapFaker(nat) {
  const ccMap = {
    AZ: "az",
    CZ: "cz",
    DE: "de",
    AT: "de_AT",
    CH: "de_CH",
    GB: "en_GB",
    AU: "en_AU",
    CA: "en_CA",
    IE: "en_IE",
    IN: "en_IND",
    US: "en_US",
    ES: "es",
    MX: "es_MX",
    FA: "fa",
    FR: "fr",
    GE: "ge",
    ID: "id_ID",
    IT: "it",
    JP: "ja",
    KO: "ko",
    NO: "nb_NO",
    NP: "nep",
    NL: "nl",
    PL: "pl",
    BR: "pt_BR",
    RU: "ru",
    SK: "sk",
    SV: "sv",
    TR: "tr",
    UK: "uk",
    VI: "vi",
    CN: "zh_CN",
    TW: "zh_TW"
  };
  if (!ccMap[nat.toUpperCase()]) return;
  return ccMap[nat.toUpperCase()];
}

module.exports = { mapFaker };
