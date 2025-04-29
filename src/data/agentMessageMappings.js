/**
 * This file defines the mapping between agent messages and their corresponding
 * document sections/fields to highlight when clicked.
 */

export const agentMessageMappings = [
  {
    message: "Participant Contract allows lumpsum distribution",
    tabIndex: 1, // Supporting Documents tab
    sectionId: "postTermination", // Accordion section to expand
    fieldId: "lumpsum", // Field identifier to highlight
    description: "Does the plan allow Lumpsum Distribution? Yes"
  },
  {
    message: "Waiver received in Document with PH sign for unmarried or Spousal sign date with valid notary details",
    tabIndex: 1,
    sectionId: "planRules",
    fieldId: "spousalWaiver",
    description: "Does the plan require spousal waiver for applicable transaction types? Yes"
  },
  {
    message: "Spousal waiver is missing and above exception is not met check if request is Bene contract.",
    tabIndex: 1,
    sectionId: "planRules",
    fieldId: "spousalWaiverException",
    description: "Does the plan allow a spousal waiver exception for employee plan accumulations under $5000 or for accumulations with the last contribution date prior to August 24th 1984? Yes"
  },
  {
    message: "Not a Bene contract check if contract is issued through QDRO",
    tabIndex: 1,
    sectionId: "qdproEligibility",
    fieldId: "qdroDistribution",
    description: "Can the alternate payee take a distribution at any time (status is \"terminated\" on our system)? Yes"
  },
  {
    message: "Termination date is available and is already passed",
    tabIndex: 0, // Input Form tab
    sectionId: "employmentDetails",
    fieldId: "terminationDate",
    description: "Termination Date"
  },
  {
    message: "Employment status updated",
    tabIndex: 0,
    sectionId: "employmentDetails",
    fieldId: "employmentStatus",
    description: "Employment Status"
  },
  {
    message: "Plan entry and Termination date are in sequence",
    tabIndex: 0,
    sectionId: "employmentDetails",
    fieldId: "planEntryDate",
    description: "Plan Entry Date"
  },
  {
    message: "Participant vesting fund is 100%",
    tabIndex: 0,
    sectionId: "fundDetails",
    fieldId: "vestingPercentage",
    description: "Vesting Percentage"
  },
  {
    message: "Funds requested for withdrawal",
    tabIndex: 0,
    sectionId: "withdrawalDetails",
    fieldId: "withdrawalAmount",
    description: "Withdrawal Amount"
  },
  {
    message: "Verify address and date when address was updated",
    tabIndex: 0,
    sectionId: "personalDetails",
    fieldId: "addressUpdateDate",
    description: "Address Last Updated"
  }
];

export default agentMessageMappings;