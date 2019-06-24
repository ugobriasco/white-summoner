const { getStaticVatID, getStaticNationalID } = require("../get-static-data");
const { Profile } = require("./Profile");
const {
  genAnagrafica,
  genAddress,
  genCompany,
  genPhoneNumber,
  genVat,
  genNationalID,
  genItNationalID
} = require("../gen-dinamic-data");
const validateMCC = require("./mcc-validate");

// returns a country code given a variable input type
const getCountryCode = props => {
  if (typeof props == "string") {
    return props;
  } else {
    return props.countryCode ? props.countryCode : undefined;
  }
};

async function getProfile(props) {
  // Gives the option to pass props as object or as string
  const countryCode = getCountryCode(props);
  const mcc = typeof (props == "object") && props.mcc ? props.mcc : undefined;

  if (mcc && !validateMCC(mcc)) {
    return false;
  }

  try {
    let profile = new Profile(countryCode);

    // fetch localization data
    profile.setCountryCode(countryCode);

    //fetch name,surname,dob - internal gen
    profile.fetchAnagrafica(genAnagrafica(countryCode));

    //fetch mobile phone number == landline - static gen
    profile.fetchPhoneNumber(genPhoneNumber(countryCode));

    //fetch address using faker libraty (not geo-realistic in all countries);
    profile.fetchAddress(await genAddress(countryCode));

    //fetch company - generated with faker
    profile.fetchMerchantProfile(await genCompany(countryCode));

    //fetch VAT ID
    profile.fetchVat(genVat(countryCode));

    // Set national ID - based on Anagrafica
    profile.fetchNationalID(genNationalID(profile.profile));

    if (mcc) {
      profile.updateMerchantCathegoryCode(mcc);
    }

    return profile.profile;
  } catch (e) {
    console.log("getProfile throws an error", e);
    return { msg: e };
  }
}

module.exports = { getProfile };
