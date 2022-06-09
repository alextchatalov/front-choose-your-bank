import axios from 'axios'

const url = 'http://localhost:8081/graphql'

export async function getAccounts(typeAccount: string, accountModel: string, ) {

  console.log(accountModel)

  return await axios.post(url, {
    query: `
    query {
      getBestTopFiveBundleFromAccount(type: `+ typeAccount +`, accountModel: `+ accountModel +`) {
        bank,
        bundleName,
        customerFriendlyLogoUri,
        minimum,
        maximum
      }
    }
  `
  }).then((response) => {
    console.log(response.data);
    return response.data.data.getBestTopFiveBundleFromAccount
  })
  .catch((error) => {
    console.log(error)
  })
}