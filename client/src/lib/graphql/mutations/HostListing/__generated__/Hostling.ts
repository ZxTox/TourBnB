/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HostListingInput } from "./../../../globalTypes";

// ====================================================
// GraphQL mutation operation: Hostling
// ====================================================

export interface Hostling_hostListing {
  __typename: "Listing";
  id: string;
}

export interface Hostling {
  hostListing: Hostling_hostListing;
}

export interface HostlingVariables {
  input: HostListingInput;
}
