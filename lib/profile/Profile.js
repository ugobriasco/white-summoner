const { countries } = require('../data');

class Profile {
  constructor(nat) {
    this.address = {
      country: '',
      address_line1: '',
      address_line2: '',
      city: '',
      post_code: '',
      region_name: '',
      landline: '',
      first_name: '',
      last_name: '',
      company: ''
    };
    this.profile = {
      country: '',
      personal_profile: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        mobile_phone: '',
        national_id: ''
      },
      business_profile: {
        merchant_category_code: '',
        nature_and_purpose: '',
        company_name: '',
        vat_id: '',
        company_registration_number: '',
        website: '',
        mobile_phone: ''
      },
      address: this.address
    };
  }

  //get profile
  getProfile() {
    return this.profile;
  }

  //set countryCodes
  setCountryCode(nat) {
    const refCountry = countries.filter(
      country => country.country_code === nat.toUpperCase()
    );
    const selectedCountry = refCountry[0].country_code;
    this.address.country = selectedCountry;
    this.profile.country = selectedCountry;
  }

  //
  fetchAddress({
    address_line1 = '',
    address_line2 = '',
    city = '',
    post_code = '',
    region_name = ''
  }) {
    const a = this.address;
    if (!a.address_line1) this.address.address_line1 = address_line1;
    if (!a.address_line2) this.address.address_line2 = address_line2;
    if (!a.city) this.address.city = city;
    if (!a.post_code) this.address.post_code = post_code;
    if (!a.region_name) this.address.region_name = region_name;
    return;
  }

  fetchAnagrafica({ first_name = '', last_name = '', date_of_birth = '' }) {
    const p = this.profile.personal_profile;
    if (!p.first_name) {
      this.profile.personal_profile.first_name = first_name;
      this.address.first_name = first_name;
    }
    if (!p.last_name) {
      this.profile.personal_profile.last_name = last_name;
      this.address.last_name = last_name;
    }
    if (!p.date_of_birth)
      this.profile.personal_profile.date_of_birth = date_of_birth;
    return;
  }

  fetchPhoneNumber(phoneNumber = '') {
    const p = this.profile.personal_profile;
    if (!p.mobile_phone) {
      this.profile.personal_profile.mobile_phone = phoneNumber;
      this.profile.business_profile.mobile_phone = phoneNumber;
      this.address.landline = phoneNumber;
    }
    return;
  }
  //set national_id

  fetchNationalID(national_id = '') {
    const p = this.profile.personal_profile;
    if (!p.national_id) {
      this.profile.personal_profile.national_id = national_id;
    }
    return;
  }

  //set vat_id
  fetchVat(vat_id = '') {
    const p = this.profile.business_profile;
    if (!p.vat_id) {
      this.profile.business_profile.vat_id = vat_id;
    }
    return;
  }
  //set business_profile
  //get profile

  fetchMerchantProfile({
    merchant_category_code = '7392',
    company_name = '',
    vat_id = '',
    company_registration_number = '',
    website = '',
    nature_and_purpose = '',
    mobile_phone = ''
  }) {
    const m = this.profile.business_profile;
    const p = this.profile.personal_profile;

    if (!m.merchant_category_code)
      this.profile.business_profile.merchant_category_code = merchant_category_code;
    if (!m.company_name)
      this.profile.business_profile.company_name = company_name;
    if (!m.vat_id) this.profile.business_profile.vat_id = vat_id;
    if (!m.company_registration_number)
      this.profile.business_profile.company_registration_number = company_registration_number;
    if (!m.website) this.profile.business_profile.website = website;
    if (!m.nature_and_purpose)
      this.profile.business_profile.nature_and_purpose = nature_and_purpose;
    if (!m.mobile_phone)
      this.profile.business_profile.mobile_phone = mobile_phone;
    if (!p.mobile_phone) {
      this.profile.personal_profile.mobile_phone = mobile_phone;
    }
    if (!this.address.company) this.address.company = company_name;
    return;
  }

  updateMerchantCathegoryCode(newMCC) {
    if (!newMCC) return;
    this.profile.business_profile.merchant_category_code = newMCC;
    console.log(this.profile.business_profile);
    return;
  }
}

module.exports = { Profile };
