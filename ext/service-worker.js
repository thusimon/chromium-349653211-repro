const ruleIDs = [1,2,3,4,5]; // doesn't matter how many rules, only one rule still reproduces
const rules = ruleIDs.map(ruleId => ({
  id: ruleId,
  priority: 1,
  condition: {
    urlFilter: `http://localhost:${ruleId+3000}/*`,
    resourceTypes: ["main_frame"],
  },
  action: {
    type: "modifyHeaders",
    requestHeaders: [
      {
        header: "X-ext-ver",
        operation: "set",
        value: `0.0.${ruleId}`,
      },
    ],
  },
}))


chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: ruleIDs,
  addRules: rules
});

/*
// doesn't matter if we update the rules directly on service work
// or in the chrome.runtime.onInstalled.addListener
chrome.runtime.onInstalled.addListener((details) => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ruleIDs,
    addRules: rules
  });
})
*/
