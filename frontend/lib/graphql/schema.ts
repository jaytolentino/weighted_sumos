/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ConfirmEmail
// ====================================================

export interface ConfirmEmail_confirmEmail_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface ConfirmEmail_confirmEmail {
  __typename: "ConfirmEmailPayload";
  success: boolean | null;
  errors: ConfirmEmail_confirmEmail_errors[] | null;
}

export interface ConfirmEmail {
  confirmEmail: ConfirmEmail_confirmEmail | null;
}

export interface ConfirmEmailVariables {
  token: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_user {
  __typename: "User";
  id: string;
  email: string;
  isAdmin: boolean;
  firstName: string | null;
  middleNames: string | null;
  lastName: string | null;
  needsConfirmation: boolean;
  inviteCode: string;
  userCountFromInvites: number;
  membershipType: MembershipTypeEnum;
  isMembershipValid: boolean;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

export interface LoginUser_loginUser_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface LoginUser_loginUser {
  __typename: "LoginUserPayload";
  user: LoginUser_loginUser_user | null;
  success: boolean | null;
  errors: LoginUser_loginUser_errors[] | null;
}

export interface LoginUser {
  loginUser: LoginUser_loginUser | null;
}

export interface LoginUserVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogoutUser
// ====================================================

export interface LogoutUser_logoutUser {
  __typename: "LogoutUserPayload";
  success: boolean | null;
}

export interface LogoutUser {
  logoutUser: LogoutUser_logoutUser | null;
}

export interface LogoutUserVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ReadNotification
// ====================================================

export interface ReadNotification_readNotification_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface ReadNotification_readNotification {
  __typename: "ReadNotificationPayload";
  success: boolean | null;
  errors: ReadNotification_readNotification_errors[] | null;
}

export interface ReadNotification {
  readNotification: ReadNotification_readNotification | null;
}

export interface ReadNotificationVariables {
  userNotificationId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser_user {
  __typename: "User";
  id: string;
  email: string;
  isAdmin: boolean;
  firstName: string | null;
  middleNames: string | null;
  lastName: string | null;
  needsConfirmation: boolean;
  inviteCode: string;
  userCountFromInvites: number;
  membershipType: MembershipTypeEnum;
  isMembershipValid: boolean;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

export interface RegisterUser_registerUser_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface RegisterUser_registerUser {
  __typename: "RegisterUserPayload";
  user: RegisterUser_registerUser_user | null;
  success: boolean | null;
  errors: RegisterUser_registerUser_errors[] | null;
}

export interface RegisterUser {
  registerUser: RegisterUser_registerUser | null;
}

export interface RegisterUserVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveDocument
// ====================================================

export interface RemoveDocument_removeDocument_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface RemoveDocument_removeDocument {
  __typename: "RemoveDocumentPayload";
  success: boolean | null;
  errors: RemoveDocument_removeDocument_errors[] | null;
}

export interface RemoveDocument {
  removeDocument: RemoveDocument_removeDocument | null;
}

export interface RemoveDocumentVariables {
  userDocumentId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddImmigrationDetails
// ====================================================

export interface AddImmigrationDetails_addImmigrationDetails_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface AddImmigrationDetails_addImmigrationDetails {
  __typename: "AddImmigrationDetailsPayload";
  success: boolean | null;
  errors: AddImmigrationDetails_addImmigrationDetails_errors[] | null;
}

export interface AddImmigrationDetails {
  addImmigrationDetails: AddImmigrationDetails_addImmigrationDetails | null;
}

export interface AddImmigrationDetailsVariables {
  citizenshipCountryCode: string;
  arrivalYear: number;
  goalStatusId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddOnboardingDetails
// ====================================================

export interface AddOnboardingDetails_addOnboardingDetails_user {
  __typename: "User";
  id: string;
  email: string;
  isAdmin: boolean;
  firstName: string | null;
  middleNames: string | null;
  lastName: string | null;
  needsConfirmation: boolean;
  inviteCode: string;
  userCountFromInvites: number;
  membershipType: MembershipTypeEnum;
  isMembershipValid: boolean;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

export interface AddOnboardingDetails_addOnboardingDetails_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface AddOnboardingDetails_addOnboardingDetails {
  __typename: "AddOnboardingDetailsPayload";
  success: boolean | null;
  user: AddOnboardingDetails_addOnboardingDetails_user | null;
  errors: AddOnboardingDetails_addOnboardingDetails_errors[] | null;
}

export interface AddOnboardingDetails {
  addOnboardingDetails: AddOnboardingDetails_addOnboardingDetails | null;
}

export interface AddOnboardingDetailsVariables {
  firstName: string;
  middleNames?: string | null;
  lastName: string;
  citizenshipCountryCode: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddStatuses
// ====================================================

export interface AddStatuses_addStatuses_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface AddStatuses_addStatuses {
  __typename: "AddStatusesPayload";
  success: boolean | null;
  errors: AddStatuses_addStatuses_errors[] | null;
}

export interface AddStatuses {
  addStatuses: AddStatuses_addStatuses | null;
}

export interface AddStatusesVariables {
  statuses: RoadmapStatusInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CompleteChecklist
// ====================================================

export interface CompleteChecklist_completeChecklist_checklist {
  __typename: "RoadmapChecklist";
  id: string;
  completedAt: any | null;
}

export interface CompleteChecklist_completeChecklist {
  __typename: "CompleteChecklistPayload";
  success: boolean | null;
  checklist: CompleteChecklist_completeChecklist_checklist | null;
}

export interface CompleteChecklist {
  completeChecklist: CompleteChecklist_completeChecklist | null;
}

export interface CompleteChecklistVariables {
  checklistId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateChecklist
// ====================================================

export interface CreateChecklist_createChecklist_checklist {
  __typename: "RoadmapChecklist";
  id: string;
  slug: string;
}

export interface CreateChecklist_createChecklist_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface CreateChecklist_createChecklist {
  __typename: "CreateChecklistPayload";
  success: boolean | null;
  checklist: CreateChecklist_createChecklist_checklist | null;
  errors: CreateChecklist_createChecklist_errors[] | null;
}

export interface CreateChecklist {
  createChecklist: CreateChecklist_createChecklist | null;
}

export interface CreateChecklistVariables {
  blueprintChecklistId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveChecklist
// ====================================================

export interface RemoveChecklist_removeChecklist {
  __typename: "RemoveChecklistPayload";
  success: boolean | null;
}

export interface RemoveChecklist {
  removeChecklist: RemoveChecklist_removeChecklist | null;
}

export interface RemoveChecklistVariables {
  checklistId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ToggleChecklistItem
// ====================================================

export interface ToggleChecklistItem_toggleChecklistItem_checklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  completedAt: any | null;
}

export interface ToggleChecklistItem_toggleChecklistItem {
  __typename: "ToggleChecklistItemPayload";
  success: boolean | null;
  checklistItem: ToggleChecklistItem_toggleChecklistItem_checklistItem | null;
}

export interface ToggleChecklistItem {
  toggleChecklistItem: ToggleChecklistItem_toggleChecklistItem | null;
}

export interface ToggleChecklistItemVariables {
  checklistItemId: string;
  isComplete: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateChecklistItem
// ====================================================

export interface UpdateChecklistItem_updateChecklistItem_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface UpdateChecklistItem_updateChecklistItem_checklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  order: number;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentName: string | null;
  documentId: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface UpdateChecklistItem_updateChecklistItem {
  __typename: "UpdateChecklistItemPayload";
  success: boolean | null;
  errors: UpdateChecklistItem_updateChecklistItem_errors[] | null;
  checklistItem: UpdateChecklistItem_updateChecklistItem_checklistItem | null;
}

export interface UpdateChecklistItem {
  updateChecklistItem: UpdateChecklistItem_updateChecklistItem | null;
}

export interface UpdateChecklistItemVariables {
  checklistItemId: string;
  document?: any | null;
  date?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetNotificationSettings
// ====================================================

export interface SetNotificationSettings_setNotificationSettings_user {
  __typename: "User";
  id: string;
  email: string;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

export interface SetNotificationSettings_setNotificationSettings_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface SetNotificationSettings_setNotificationSettings {
  __typename: "SetNotificationSettingsPayload";
  user: SetNotificationSettings_setNotificationSettings_user;
  success: boolean | null;
  errors: SetNotificationSettings_setNotificationSettings_errors[] | null;
}

export interface SetNotificationSettings {
  setNotificationSettings: SetNotificationSettings_setNotificationSettings | null;
}

export interface SetNotificationSettingsVariables {
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupForBeta
// ====================================================

export interface SignupForBeta_signupForBeta_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface SignupForBeta_signupForBeta {
  __typename: "SignupForBetaPayload";
  success: boolean | null;
  errors: SignupForBeta_signupForBeta_errors[] | null;
}

export interface SignupForBeta {
  signupForBeta: SignupForBeta_signupForBeta | null;
}

export interface SignupForBetaVariables {
  email: string;
  firstName: string;
  lastName: string;
  destinationCountryCode?: string | null;
  originCountryCode?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserProfile
// ====================================================

export interface UpdateUserProfile_updateUserProfile_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface UpdateUserProfile_updateUserProfile {
  __typename: "UpdateUserProfilePayload";
  success: boolean | null;
  errors: UpdateUserProfile_updateUserProfile_errors[] | null;
}

export interface UpdateUserProfile {
  updateUserProfile: UpdateUserProfile_updateUserProfile | null;
}

export interface UpdateUserProfileVariables {
  firstName: string;
  middleNames?: string | null;
  lastName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadUsDolData
// ====================================================

export interface UploadUsDolData_uploadUsDolData_errors {
  __typename: "UserError";
  /**
   * A description of the error
   */
  message: string;
}

export interface UploadUsDolData_uploadUsDolData {
  __typename: "UploadUsDolDataPayload";
  success: boolean | null;
  errors: UploadUsDolData_uploadUsDolData_errors[] | null;
}

export interface UploadUsDolData {
  uploadUsDolData: UploadUsDolData_uploadUsDolData | null;
}

export interface UploadUsDolDataVariables {
  file: any;
  fiscalYear: number;
  dataType: DataTypeEnum;
  quarter?: QuarterEnum | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PossibleChecklists
// ====================================================

export interface PossibleChecklists_possibleChecklists_goalStatus {
  __typename: "BlueprintStatus";
  id: string;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
  name: string | null;
  description: string | null;
}

export interface PossibleChecklists_possibleChecklists {
  __typename: "BlueprintChecklist";
  id: string;
  name: string;
  goalStatus: PossibleChecklists_possibleChecklists_goalStatus | null;
}

export interface PossibleChecklists {
  possibleChecklists: PossibleChecklists_possibleChecklists[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PossibleStatuses
// ====================================================

export interface PossibleStatuses_possibleStatuses {
  __typename: "BlueprintStatus";
  id: string;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
  name: string | null;
  description: string | null;
}

export interface PossibleStatuses {
  possibleStatuses: PossibleStatuses_possibleStatuses[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Dashboard
// ====================================================

export interface Dashboard_dashboard_timeline_statuses {
  __typename: "RoadmapStatus";
  id: string;
  name: string;
  startsAt: any | null;
  endsAt: any | null;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
}

export interface Dashboard_dashboard_timeline_goalStatus {
  __typename: "BlueprintStatus";
  id: string;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
  name: string | null;
  description: string | null;
}

export interface Dashboard_dashboard_timeline_checklistOverviews_nextItems {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  order: number;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentName: string | null;
  documentId: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface Dashboard_dashboard_timeline_checklistOverviews {
  __typename: "RoadmapChecklistOverview";
  id: string;
  name: string;
  premiumOnly: boolean;
  completedAt: any | null;
  percentComplete: number;
  itemCompletedCount: number;
  itemTotalCount: number;
  documentCount: number;
  nextItems: Dashboard_dashboard_timeline_checklistOverviews_nextItems[];
  slug: string;
}

export interface Dashboard_dashboard_timeline_timelineDates {
  __typename: "RoadmapTimelineDate";
  date: any;
  name: string;
}

export interface Dashboard_dashboard_timeline {
  __typename: "Timeline";
  id: string;
  statuses: Dashboard_dashboard_timeline_statuses[];
  goalStatus: Dashboard_dashboard_timeline_goalStatus | null;
  checklistOverviews: Dashboard_dashboard_timeline_checklistOverviews[];
  timelineDates: Dashboard_dashboard_timeline_timelineDates[];
}

export interface Dashboard_dashboard {
  __typename: "Dashboard";
  timeline: Dashboard_dashboard_timeline;
  missingName: boolean;
  missingTimelineDetails: boolean;
  missingVisaHistory: boolean;
}

export interface Dashboard {
  dashboard: Dashboard_dashboard;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RoadmapChecklist
// ====================================================

export interface RoadmapChecklist_roadmapChecklist_goalStatus {
  __typename: "BlueprintStatus";
  id: string;
  statusType: StatusTypeEnum;
  name: string | null;
  description: string | null;
  evidenceType: EvidenceTypeEnum;
}

export interface RoadmapChecklist_roadmapChecklist_orderedItems_RoadmapChecklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  order: number;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentId: string | null;
  documentName: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface RoadmapChecklist_roadmapChecklist_orderedItems_RoadmapItemGroup {
  __typename: "RoadmapItemGroup";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  order: number;
}

export type RoadmapChecklist_roadmapChecklist_orderedItems = RoadmapChecklist_roadmapChecklist_orderedItems_RoadmapChecklistItem | RoadmapChecklist_roadmapChecklist_orderedItems_RoadmapItemGroup;

export interface RoadmapChecklist_roadmapChecklist_timelineDates {
  __typename: "RoadmapTimelineDate";
  date: any;
  name: string;
}

export interface RoadmapChecklist_roadmapChecklist {
  __typename: "RoadmapChecklist";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  goalStatus: RoadmapChecklist_roadmapChecklist_goalStatus | null;
  completedAt: any | null;
  isStatusRenewal: boolean;
  orderedItems: RoadmapChecklist_roadmapChecklist_orderedItems[];
  canBeCompleted: boolean;
  isHidden: boolean;
  percentComplete: number;
  premiumOnly: boolean;
  itemCompletedCount: number;
  itemTotalCount: number;
  documentCount: number;
  timelineDates: RoadmapChecklist_roadmapChecklist_timelineDates[];
  slug: string;
}

export interface RoadmapChecklist {
  roadmapChecklist: RoadmapChecklist_roadmapChecklist | null;
}

export interface RoadmapChecklistVariables {
  checklistId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RoadmapChecklistItem
// ====================================================

export interface RoadmapChecklistItem_roadmapChecklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  order: number;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentName: string | null;
  documentId: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface RoadmapChecklistItem {
  roadmapChecklistItem: RoadmapChecklistItem_roadmapChecklistItem | null;
}

export interface RoadmapChecklistItemVariables {
  checklistItemId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RoadmapChecklistViaSlug
// ====================================================

export interface RoadmapChecklistViaSlug_roadmapChecklistViaSlug_goalStatus {
  __typename: "BlueprintStatus";
  id: string;
  statusType: StatusTypeEnum;
  name: string | null;
  description: string | null;
  evidenceType: EvidenceTypeEnum;
}

export interface RoadmapChecklistViaSlug_roadmapChecklistViaSlug_orderedItems_RoadmapChecklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  order: number;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentId: string | null;
  documentName: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface RoadmapChecklistViaSlug_roadmapChecklistViaSlug_orderedItems_RoadmapItemGroup {
  __typename: "RoadmapItemGroup";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  order: number;
}

export type RoadmapChecklistViaSlug_roadmapChecklistViaSlug_orderedItems = RoadmapChecklistViaSlug_roadmapChecklistViaSlug_orderedItems_RoadmapChecklistItem | RoadmapChecklistViaSlug_roadmapChecklistViaSlug_orderedItems_RoadmapItemGroup;

export interface RoadmapChecklistViaSlug_roadmapChecklistViaSlug_timelineDates {
  __typename: "RoadmapTimelineDate";
  date: any;
  name: string;
}

export interface RoadmapChecklistViaSlug_roadmapChecklistViaSlug {
  __typename: "RoadmapChecklist";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  goalStatus: RoadmapChecklistViaSlug_roadmapChecklistViaSlug_goalStatus | null;
  completedAt: any | null;
  isStatusRenewal: boolean;
  orderedItems: RoadmapChecklistViaSlug_roadmapChecklistViaSlug_orderedItems[];
  canBeCompleted: boolean;
  isHidden: boolean;
  percentComplete: number;
  premiumOnly: boolean;
  itemCompletedCount: number;
  itemTotalCount: number;
  documentCount: number;
  timelineDates: RoadmapChecklistViaSlug_roadmapChecklistViaSlug_timelineDates[];
}

export interface RoadmapChecklistViaSlug {
  roadmapChecklistViaSlug: RoadmapChecklistViaSlug_roadmapChecklistViaSlug | null;
}

export interface RoadmapChecklistViaSlugVariables {
  slug: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UnreadNotificationCount
// ====================================================

export interface UnreadNotificationCount {
  unreadNotificationCount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserContext
// ====================================================

export interface UserContext_userContext_currentUser {
  __typename: "User";
  id: string;
  email: string;
  isAdmin: boolean;
  firstName: string | null;
  middleNames: string | null;
  lastName: string | null;
  needsConfirmation: boolean;
  inviteCode: string;
  userCountFromInvites: number;
  membershipType: MembershipTypeEnum;
  isMembershipValid: boolean;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

export interface UserContext_userContext_viewedUser {
  __typename: "User";
  id: string;
  email: string;
  isAdmin: boolean;
  firstName: string | null;
  middleNames: string | null;
  lastName: string | null;
  needsConfirmation: boolean;
  inviteCode: string;
  userCountFromInvites: number;
  membershipType: MembershipTypeEnum;
  isMembershipValid: boolean;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

export interface UserContext_userContext {
  __typename: "UserContext";
  currentUser: UserContext_userContext_currentUser | null;
  viewedUser: UserContext_userContext_viewedUser | null;
}

export interface UserContext {
  userContext: UserContext_userContext | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserDocuments
// ====================================================

export interface UserDocuments_userDocuments_checklistItems {
  __typename: "RoadmapChecklistItem";
  id: string;
  checklistName: string;
  documentDetailName: string | null;
}

export interface UserDocuments_userDocuments {
  __typename: "UserDocument";
  id: string;
  filename: string;
  fileUrl: string;
  createdAt: any;
  checklistItems: UserDocuments_userDocuments_checklistItems[];
}

export interface UserDocuments {
  userDocuments: UserDocuments_userDocuments[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserNotifications
// ====================================================

export interface UserNotifications_userNotifications {
  __typename: "UserNotification";
  id: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: any;
  url: string | null;
  action: UserNotificationActionEnum;
}

export interface UserNotifications {
  userNotifications: UserNotifications_userNotifications[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BlueprintStatus
// ====================================================

export interface BlueprintStatus {
  __typename: "BlueprintStatus";
  id: string;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
  name: string | null;
  description: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RoadmapChecklist
// ====================================================

export interface RoadmapChecklist_goalStatus {
  __typename: "BlueprintStatus";
  id: string;
  statusType: StatusTypeEnum;
  name: string | null;
  description: string | null;
  evidenceType: EvidenceTypeEnum;
}

export interface RoadmapChecklist_orderedItems_RoadmapChecklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  order: number;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentName: string | null;
  documentId: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface RoadmapChecklist_orderedItems_RoadmapItemGroup {
  __typename: "RoadmapItemGroup";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  order: number;
}

export type RoadmapChecklist_orderedItems = RoadmapChecklist_orderedItems_RoadmapChecklistItem | RoadmapChecklist_orderedItems_RoadmapItemGroup;

export interface RoadmapChecklist_timelineDates {
  __typename: "RoadmapTimelineDate";
  date: any;
  name: string;
}

export interface RoadmapChecklist {
  __typename: "RoadmapChecklist";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  goalStatus: RoadmapChecklist_goalStatus | null;
  completedAt: any | null;
  isStatusRenewal: boolean;
  orderedItems: RoadmapChecklist_orderedItems[];
  canBeCompleted: boolean;
  isHidden: boolean;
  percentComplete: number;
  premiumOnly: boolean;
  itemCompletedCount: number;
  itemTotalCount: number;
  documentCount: number;
  timelineDates: RoadmapChecklist_timelineDates[];
  slug: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RoadmapChecklistItem
// ====================================================

export interface RoadmapChecklistItem {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  order: number;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentName: string | null;
  documentId: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RoadmapItemGroup
// ====================================================

export interface RoadmapItemGroup {
  __typename: "RoadmapItemGroup";
  id: string;
  name: string;
  description: string | null;
  uscisUrl: string | null;
  order: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Timeline
// ====================================================

export interface Timeline_statuses {
  __typename: "RoadmapStatus";
  id: string;
  name: string;
  startsAt: any | null;
  endsAt: any | null;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
}

export interface Timeline_goalStatus {
  __typename: "BlueprintStatus";
  id: string;
  countryCode: string;
  statusType: StatusTypeEnum;
  evidenceType: EvidenceTypeEnum;
  name: string | null;
  description: string | null;
}

export interface Timeline_checklistOverviews_nextItems {
  __typename: "RoadmapChecklistItem";
  id: string;
  name: string;
  description: string | null;
  assignee: AssigneeEnum | null;
  completedAt: any | null;
  uscisUrl: string | null;
  order: number;
  canHaveDate: boolean | null;
  canHaveDocument: boolean | null;
  date: any | null;
  dateDetailName: string | null;
  documentDetailName: string | null;
  documentUrl: string | null;
  documentName: string | null;
  documentId: string | null;
  needsDetail: boolean | null;
  checklistName: string;
  checklistSlug: string;
  suggestedDeadline: any | null;
  isDeadlineSoon: boolean;
  hasDeadlinePassed: boolean;
}

export interface Timeline_checklistOverviews {
  __typename: "RoadmapChecklistOverview";
  id: string;
  name: string;
  premiumOnly: boolean;
  completedAt: any | null;
  percentComplete: number;
  itemCompletedCount: number;
  itemTotalCount: number;
  documentCount: number;
  nextItems: Timeline_checklistOverviews_nextItems[];
  slug: string;
}

export interface Timeline_timelineDates {
  __typename: "RoadmapTimelineDate";
  date: any;
  name: string;
}

export interface Timeline {
  __typename: "Timeline";
  id: string;
  statuses: Timeline_statuses[];
  goalStatus: Timeline_goalStatus | null;
  checklistOverviews: Timeline_checklistOverviews[];
  timelineDates: Timeline_timelineDates[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserDetails
// ====================================================

export interface UserDetails {
  __typename: "User";
  id: string;
  email: string;
  isAdmin: boolean;
  firstName: string | null;
  middleNames: string | null;
  lastName: string | null;
  needsConfirmation: boolean;
  inviteCode: string;
  userCountFromInvites: number;
  membershipType: MembershipTypeEnum;
  isMembershipValid: boolean;
  emailSubscribed: boolean;
  pushSubscribed: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AssigneeEnum {
  dso = "dso",
  employer = "employer",
  gov = "gov",
  immigrant = "immigrant",
}

export enum DataTypeEnum {
  h1b = "h1b",
  lca = "lca",
  other = "other",
  perm = "perm",
}

export enum EvidenceTypeEnum {
  birth_cert = "birth_cert",
  other = "other",
  passport = "passport",
  unknown = "unknown",
  visa = "visa",
}

export enum MembershipTypeEnum {
  premium_monthly = "premium_monthly",
  premium_yearly = "premium_yearly",
  standard = "standard",
}

export enum QuarterEnum {
  q1 = "q1",
  q2 = "q2",
  q3 = "q3",
  q4 = "q4",
}

export enum StatusTypeEnum {
  citizen = "citizen",
  none = "none",
  perm_res = "perm_res",
  student = "student",
  temp_visitor = "temp_visitor",
  temp_worker = "temp_worker",
}

export enum UserNotificationActionEnum {
  dashboard = "dashboard",
  no_action = "no_action",
}

export interface RoadmapStatusInput {
  blueprintStatusId: string;
  endsAt?: any | null;
  startsAt?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
