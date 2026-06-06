// lib/plaid.ts

import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

console.log("PLAID ENV:", process.env.PLAID_ENV);
console.log(
  "PLAID CLIENT ID EXISTS:",
  !!process.env.PLAID_CLIENT_ID
);
console.log(
  "PLAID SECRET EXISTS:",
  !!process.env.PLAID_SECRET
);

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,

  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID!,
      "PLAID-SECRET": process.env.PLAID_SECRET!,
    },
  },
});

export const plaidClient = new PlaidApi(configuration);