const WICRegexes = [ 
  '^http[s]?://localhost(:3000)?(/app/UserHome|/app/Home|/enduser)',
  '^http[s]?://localhost(:3001)?(/app/UserHome|/app/Home|/enduser)',
  '^http[s]?://localhost(:3002)?(/app/UserHome|/app/Home|/enduser)',
  '^http[s]?://localhost(:3003)?(/app/UserHome|/app/Home|/enduser)'
];

const WICRule = WICRegexes.map((regex, idx) => {
  return {
    action: {
      requestHeaders:[
        {
          header: "X-ext-ver",
          operation: "set",
          value: "ext/7.7.7"
        }
      ],
      type: "modifyHeaders",

    },
    condition: {
      regexFilter: regex,
      resourceTypes: ['main_frame']
    },
    id: idx+2
  }
})

const POktaRule = {
  action: {
    redirect: {extensionPath: '/SigningIn.html'},
    type: 'redirect'
  },
  condition: {
    resourceTypes: ['main_frame'],
    urlFilter: "okta-personal-app/*/launch"
  },
  id: 1,
  priority: 1
}
// chrome.declarativeNetRequest.updateDynamicRules({
//   removeRuleIds: ruleIDs,
//   addRules: rules
// });


// doesn't matter if we update the rules directly on service work
// or in the chrome.runtime.onInstalled.addListener
chrome.runtime.onInstalled.addListener((details) => {
  console.log('onInstalled');
  console.log(JSON.stringify(details));
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1,2,3,4,5],
    addRules: [
      ...WICRule,
      POktaRule
    ]
  });
})

chrome.runtime.onStartup.addListener(() => {
  console.log('profile onStartup')
})
