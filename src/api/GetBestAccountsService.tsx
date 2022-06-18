import axios from 'axios'

const url = 'http://localhost:8081/graphql'

export async function getAccounts(typeAccount: string, accountModel: string) {

  return await axios.post(url, {
    query: `
    query {
      getBestTopFiveBundleFromAccount(type: `+ typeAccount +`, accountModel: `+ accountModel +`) {
        bank,
        bundleName,
        customerFriendlyLogoUri,
        minimum,
        maximum,
        id
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

export async function getDetailBundle(id: string) {

  return await axios.post(url, {
    query: `
    query {
      getDetailBundle(bundleId: ` + id + `) {
        bundle,
        code,
        info,
        eventLimit,
        freeLimit,
        minimum,
        maximum
        
       }
    }
  `
  }).then((response) => {
    console.log(response.data);
    return response.data.data.getDetailBundle
  })
  .catch((error) => {
    console.log(error)
  })
}