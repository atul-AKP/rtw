// Sample data for the Retirement Withdrawal Form
export const formData = {
  personalInfo: {
    fullName: "JANE DOE",
    ssn: "1234567",
    telNo: "9876543210",
    state: "MD",
    citizenship: "USA"
  },
  planInfo: {
    planName: "ACME CORP 401(k) PLAN",
    planNumber: "12345",
    contractNumber: "98765432"
  },
  planRules: {
    postTerminationEligibility: {
      smallSumDistribution: "Yes",
      lumpSumDistribution: "Yes",
      systematicCashWithdrawals: "Yes"
    },
    spousalWaiver: {
      required: "Yes",
      exceptionsApplicable: "Yes"
    },
    qdproEligibility: {
      alternatePayeeDistribution: "Yes",
      alternatePayeeInServiceWithdrawal: "Yes"
    }
  }
};

export const timelineEvents = [
  {
    id: 1,
    agentType: "Request Processor Agent",
    agentInitials: "RQ",
    color: "#42a5f5", // primary.light
    message: "Scan Request Started: Ticketing tool and downloaded the document."
  },
  {
    id: 2,
    agentType: "Document Analysis Agent",
    agentInitials: "DA",
    color: "#81c784", // success.light
    message: "Uploaded documents, contains only Cash Withdrawal Form. Extracted fields from Cash Withdrawal Form."
  },
  {
    id: 3,
    agentType: "Document Analysis Agent",
    agentInitials: "DA",
    color: "#81c784", // success.light
    message: "All mandatory fields are available in the form. No related requests available."
  },
  {
    id: 4,
    agentType: "Request Completion Agent",
    agentInitials: "RC",
    color: "#ffb74d", // warning.light
    message: "Request is submitted and cash is being now processed."
  },
  {
    id: 5,
    agentType: "Withdrawal Analysis Agent",
    agentInitials: "WA",
    color: "#e57373", // error.light
    message: "Request is available to process."
  }
];

export const requestDetails = {
  requestId: "RQ-20250422-7845",
  planName: "SecureFuture 401(k)",
  agingDays: 4
};
