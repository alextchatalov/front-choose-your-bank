import axios from 'axios'

const personalAccountUrl = 'http://localhost:8081/api/v1/personal-accounts/best/service-bundle'
const businessAccountUrl = 'http://localhost:8081/api/v1/business-accounts/best/service-bundle'

export async function getAccounts(isPersonalAccount: boolean, typeAccount: string) {

  var url = businessAccountUrl

  if(isPersonalAccount) {
    url = personalAccountUrl
  }
    return await axios.get(url, {params: {'typeAccount': typeAccount}})
    .then((response) => {
      console.log(response.data);
      return response.data
    })
    .catch((error) => {
      console.log(error)
    })
}