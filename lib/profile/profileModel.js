const PropTypes = require('prop-types');

class ProfileModel{
  constructor(){
    this.profile = {
      personal_profile: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        mobile_phone: '',
        national_id: '',
        address: {}
      },
      merchant_profile: {
        legal_type_id: '',
        merchant_category_code: '',
        company_name: '',
        company_registration_number: '',
        vat_id: '',
        permanent_certificate_access_code: '',
        website: '',
        nature_and_purpose: '',
        mobile_phone: '',
        address: {},
        doing_business_as: '',
        business_owners: '',
        is_test_account: ''
      }
    }
  }
}

class AddressModel {
  constructor(){
    this.address_line1: '',
    this.address_line2: '',
    this.city: '',
    this.country: '',
    this.region_id: '',
    this.region_name: '',
    this.post_code: '',
    this.landline: '',
    this.first_name: '',
    this.last_name: '',
    this.company: ''
  }
}

module.exports = ProfileModel;
