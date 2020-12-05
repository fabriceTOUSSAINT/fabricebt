import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export interface FileInfoInput {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsMe {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
}

export interface UsersPermissionsMeRole {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsRegisterInput {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}

export interface UsersPermissionsLoginInput {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
}

export interface UsersPermissionsLoginPayload {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
}

export interface UserPermissionsPasswordPayload {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
}

export interface Article {
  __typename?: 'Article';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  body: Scalars['String'];
  published?: Maybe<Scalars['DateTime']>;
  hero?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  assets?: Maybe<Array<Maybe<UploadFile>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
}


export type ArticleassetsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type ArticlecategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export interface ArticleConnection {
  __typename?: 'ArticleConnection';
  values?: Maybe<Array<Maybe<Article>>>;
  groupBy?: Maybe<ArticleGroupBy>;
  aggregate?: Maybe<ArticleAggregator>;
}

export interface ArticleAggregator {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface ArticleGroupBy {
  __typename?: 'ArticleGroupBy';
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_at>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_at>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  body?: Maybe<Array<Maybe<ArticleConnectionBody>>>;
  published?: Maybe<Array<Maybe<ArticleConnectionPublished>>>;
  hero?: Maybe<Array<Maybe<ArticleConnectionHero>>>;
  published_at?: Maybe<Array<Maybe<ArticleConnectionPublished_at>>>;
}

export interface ArticleConnectionId {
  __typename?: 'ArticleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionCreated_at {
  __typename?: 'ArticleConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionUpdated_at {
  __typename?: 'ArticleConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionTitle {
  __typename?: 'ArticleConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionBody {
  __typename?: 'ArticleConnectionBody';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionPublished {
  __typename?: 'ArticleConnectionPublished';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionHero {
  __typename?: 'ArticleConnectionHero';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleConnectionPublished_at {
  __typename?: 'ArticleConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
}

export interface ArticleInput {
  title: Scalars['String'];
  body: Scalars['String'];
  assets?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published?: Maybe<Scalars['DateTime']>;
  hero?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface editArticleInput {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published?: Maybe<Scalars['DateTime']>;
  hero?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface createArticleInput {
  data?: Maybe<ArticleInput>;
}

export interface createArticlePayload {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
}

export interface updateArticleInput {
  where?: Maybe<InputID>;
  data?: Maybe<editArticleInput>;
}

export interface updateArticlePayload {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
}

export interface deleteArticleInput {
  where?: Maybe<InputID>;
}

export interface deleteArticlePayload {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
}

export interface Category {
  __typename?: 'Category';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  published_at?: Maybe<Scalars['DateTime']>;
  articles?: Maybe<Array<Maybe<Article>>>;
}


export type CategoryarticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export interface CategoryConnection {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
}

export interface CategoryAggregator {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface CategoryGroupBy {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_at>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_at>>>;
  published_at?: Maybe<Array<Maybe<CategoryConnectionPublished_at>>>;
}

export interface CategoryConnectionId {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
}

export interface CategoryConnectionCreated_at {
  __typename?: 'CategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
}

export interface CategoryConnectionUpdated_at {
  __typename?: 'CategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
}

export interface CategoryConnectionPublished_at {
  __typename?: 'CategoryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
}

export interface CategoryInput {
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface editCategoryInput {
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface createCategoryInput {
  data?: Maybe<CategoryInput>;
}

export interface createCategoryPayload {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
}

export interface updateCategoryInput {
  where?: Maybe<InputID>;
  data?: Maybe<editCategoryInput>;
}

export interface updateCategoryPayload {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
}

export interface deleteCategoryInput {
  where?: Maybe<InputID>;
}

export interface deleteCategoryPayload {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
}

export interface UploadFile {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
}


export type UploadFilerelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export interface UploadFileConnection {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
}

export interface UploadFileAggregator {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
}

export interface UploadFileAggregatorSum {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileAggregatorAvg {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileAggregatorMin {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileAggregatorMax {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
}

export interface UploadFileGroupBy {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_at>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_at>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_metadata>>>;
}

export interface UploadFileConnectionId {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionCreated_at {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionUpdated_at {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionName {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionAlternativeText {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionCaption {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionWidth {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionHeight {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionFormats {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionHash {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionExt {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionMime {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionSize {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionUrl {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionPreviewUrl {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionProvider {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface UploadFileConnectionProvider_metadata {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
}

export interface FileInput {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface editFileInput {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface deleteFileInput {
  where?: Maybe<InputID>;
}

export interface deleteFilePayload {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
}

export interface UsersPermissionsPermission {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
}

export interface UsersPermissionsRole {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
}


export type UsersPermissionsRolepermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleusersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export interface UsersPermissionsRoleConnection {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
}

export interface UsersPermissionsRoleAggregator {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface UsersPermissionsRoleGroupBy {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
}

export interface UsersPermissionsRoleConnectionId {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionName {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionDescription {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface UsersPermissionsRoleConnectionType {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
}

export interface RoleInput {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface editRoleInput {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface createRoleInput {
  data?: Maybe<RoleInput>;
}

export interface createRolePayload {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
}

export interface updateRoleInput {
  where?: Maybe<InputID>;
  data?: Maybe<editRoleInput>;
}

export interface updateRolePayload {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
}

export interface deleteRoleInput {
  where?: Maybe<InputID>;
}

export interface deleteRolePayload {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
}

export interface UsersPermissionsUser {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
}

export interface UsersPermissionsUserConnection {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
}

export interface UsersPermissionsUserAggregator {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
}

export interface UsersPermissionsUserGroupBy {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_at>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_at>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
}

export interface UsersPermissionsUserConnectionId {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionCreated_at {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionUpdated_at {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionUsername {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionEmail {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionProvider {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionConfirmed {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionBlocked {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UsersPermissionsUserConnectionRole {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
}

export interface UserInput {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface editUserInput {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
}

export interface createUserInput {
  data?: Maybe<UserInput>;
}

export interface createUserPayload {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
}

export interface updateUserInput {
  where?: Maybe<InputID>;
  data?: Maybe<editUserInput>;
}

export interface updateUserPayload {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
}

export interface deleteUserInput {
  where?: Maybe<InputID>;
}

export interface deleteUserPayload {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
}

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Article | ArticleConnection | ArticleAggregator | ArticleGroupBy | ArticleConnectionId | ArticleConnectionCreated_at | ArticleConnectionUpdated_at | ArticleConnectionTitle | ArticleConnectionBody | ArticleConnectionPublished | ArticleConnectionHero | ArticleConnectionPublished_at | createArticlePayload | updateArticlePayload | deleteArticlePayload | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_at | CategoryConnectionUpdated_at | CategoryConnectionPublished_at | createCategoryPayload | updateCategoryPayload | deleteCategoryPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_at | UploadFileConnectionUpdated_at | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_metadata | deleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | createRolePayload | updateRolePayload | deleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_at | UsersPermissionsUserConnectionUpdated_at | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | createUserPayload | updateUserPayload | deleteUserPayload;

export interface InputID {
  id: Scalars['ID'];
}

export enum PublicationState {
  LIVE = 'LIVE',
  PREVIEW = 'PREVIEW'
}

export interface AdminUser {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
}


export type QueryarticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryarticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryarticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerycategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerycategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerycategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryfilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryfilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryroleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryrolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryrolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryusersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryusersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export interface Mutation {
  __typename?: 'Mutation';
  createArticle?: Maybe<createArticlePayload>;
  updateArticle?: Maybe<updateArticlePayload>;
  deleteArticle?: Maybe<deleteArticlePayload>;
  createCategory?: Maybe<createCategoryPayload>;
  updateCategory?: Maybe<updateCategoryPayload>;
  deleteCategory?: Maybe<deleteCategoryPayload>;
  /** Delete one file */
  deleteFile?: Maybe<deleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<createRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<updateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<deleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<createUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<updateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<deleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
}


export type MutationcreateArticleArgs = {
  input?: Maybe<createArticleInput>;
};


export type MutationupdateArticleArgs = {
  input?: Maybe<updateArticleInput>;
};


export type MutationdeleteArticleArgs = {
  input?: Maybe<deleteArticleInput>;
};


export type MutationcreateCategoryArgs = {
  input?: Maybe<createCategoryInput>;
};


export type MutationupdateCategoryArgs = {
  input?: Maybe<updateCategoryInput>;
};


export type MutationdeleteCategoryArgs = {
  input?: Maybe<deleteCategoryInput>;
};


export type MutationdeleteFileArgs = {
  input?: Maybe<deleteFileInput>;
};


export type MutationcreateRoleArgs = {
  input?: Maybe<createRoleInput>;
};


export type MutationupdateRoleArgs = {
  input?: Maybe<updateRoleInput>;
};


export type MutationdeleteRoleArgs = {
  input?: Maybe<deleteRoleInput>;
};


export type MutationcreateUserArgs = {
  input?: Maybe<createUserInput>;
};


export type MutationupdateUserArgs = {
  input?: Maybe<updateUserInput>;
};


export type MutationdeleteUserArgs = {
  input?: Maybe<deleteUserInput>;
};


export type MutationuploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationmultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationupdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationloginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationregisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationforgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationresetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationemailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<UsersPermissionsLoginPayload, 'jwt'>
  ) }
);

export type GetArticleQueryVariables = Exact<{
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
}>;


export type GetArticleQuery = (
  { __typename?: 'Query' }
  & { article?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'created_at' | 'title' | 'body' | 'published'>
    & { hero?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'ext' | 'url'>
    )>, assets?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'ext' | 'url'>
    )>>> }
  )> }
);

export type GetArticleListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticleListQuery = (
  { __typename?: 'Query' }
  & { articleList?: Maybe<Array<Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'created_at' | 'title' | 'body' | 'published'>
    & { hero?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'ext' | 'url'>
    )> }
  )>>> }
);


export const LoginDocument = gql`
    mutation Login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const GetArticleDocument = gql`
    query GetArticle($id: ID!, $publicationState: PublicationState) {
  article(id: $id, publicationState: $publicationState) {
    id
    created_at
    title
    body
    published
    hero {
      id
      ext
      url
    }
    assets {
      id
      ext
      url
    }
  }
}
    `;

/**
 * __useGetArticleQuery__
 *
 * To run a query within a React component, call `useGetArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useGetArticleQuery(baseOptions: Apollo.QueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
        return Apollo.useQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, baseOptions);
      }
export function useGetArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleQuery, GetArticleQueryVariables>) {
          return Apollo.useLazyQuery<GetArticleQuery, GetArticleQueryVariables>(GetArticleDocument, baseOptions);
        }
export type GetArticleQueryHookResult = ReturnType<typeof useGetArticleQuery>;
export type GetArticleLazyQueryHookResult = ReturnType<typeof useGetArticleLazyQuery>;
export type GetArticleQueryResult = Apollo.QueryResult<GetArticleQuery, GetArticleQueryVariables>;
export const GetArticleListDocument = gql`
    query GetArticleList {
  articleList: articles {
    id
    created_at
    title
    body
    published
    hero {
      id
      ext
      url
    }
  }
}
    `;

/**
 * __useGetArticleListQuery__
 *
 * To run a query within a React component, call `useGetArticleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticleListQuery(baseOptions?: Apollo.QueryHookOptions<GetArticleListQuery, GetArticleListQueryVariables>) {
        return Apollo.useQuery<GetArticleListQuery, GetArticleListQueryVariables>(GetArticleListDocument, baseOptions);
      }
export function useGetArticleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticleListQuery, GetArticleListQueryVariables>) {
          return Apollo.useLazyQuery<GetArticleListQuery, GetArticleListQueryVariables>(GetArticleListDocument, baseOptions);
        }
export type GetArticleListQueryHookResult = ReturnType<typeof useGetArticleListQuery>;
export type GetArticleListLazyQueryHookResult = ReturnType<typeof useGetArticleListLazyQuery>;
export type GetArticleListQueryResult = Apollo.QueryResult<GetArticleListQuery, GetArticleListQueryVariables>;
export const namedOperations = {
  Query: {
    GetArticle: 'GetArticle',
    GetArticleList: 'GetArticleList'
  },
  Mutation: {
    Login: 'Login'
  }
}