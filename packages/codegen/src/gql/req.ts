import { GraphQLClient, RequestOptions } from 'graphql-request';
import { GraphQLError, print } from 'graphql'
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Actor = {
  __typename?: 'Actor';
  movies: Array<Movie>;
  moviesAggregate?: Maybe<ActorMovieMoviesAggregationSelection>;
  moviesConnection: ActorMoviesConnection;
  name?: Maybe<Scalars['String']['output']>;
};


export type ActorMoviesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<MovieOptions>;
  where?: InputMaybe<MovieWhere>;
};


export type ActorMoviesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MovieWhere>;
};


export type ActorMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ActorMoviesConnectionSort>>;
  where?: InputMaybe<ActorMoviesConnectionWhere>;
};

export type ActorAggregateSelection = {
  __typename?: 'ActorAggregateSelection';
  count: Scalars['Int']['output'];
  name: StringAggregateSelection;
};

export type ActorConnectInput = {
  movies?: InputMaybe<Array<ActorMoviesConnectFieldInput>>;
};

export type ActorConnectWhere = {
  node: ActorWhere;
};

export type ActorCreateInput = {
  movies?: InputMaybe<ActorMoviesFieldInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ActorDeleteInput = {
  movies?: InputMaybe<Array<ActorMoviesDeleteFieldInput>>;
};

export type ActorDisconnectInput = {
  movies?: InputMaybe<Array<ActorMoviesDisconnectFieldInput>>;
};

export type ActorEdge = {
  __typename?: 'ActorEdge';
  cursor: Scalars['String']['output'];
  node: Actor;
};

export type ActorMovieMoviesAggregationSelection = {
  __typename?: 'ActorMovieMoviesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ActorMovieMoviesNodeAggregateSelection>;
};

export type ActorMovieMoviesNodeAggregateSelection = {
  __typename?: 'ActorMovieMoviesNodeAggregateSelection';
  title: StringAggregateSelection;
};

export type ActorMoviesAggregateInput = {
  AND?: InputMaybe<Array<ActorMoviesAggregateInput>>;
  NOT?: InputMaybe<ActorMoviesAggregateInput>;
  OR?: InputMaybe<Array<ActorMoviesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ActorMoviesNodeAggregationWhereInput>;
};

export type ActorMoviesConnectFieldInput = {
  connect?: InputMaybe<Array<MovieConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<MovieConnectWhere>;
};

export type ActorMoviesConnection = {
  __typename?: 'ActorMoviesConnection';
  edges: Array<ActorMoviesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ActorMoviesConnectionSort = {
  node?: InputMaybe<MovieSort>;
};

export type ActorMoviesConnectionWhere = {
  AND?: InputMaybe<Array<ActorMoviesConnectionWhere>>;
  NOT?: InputMaybe<ActorMoviesConnectionWhere>;
  OR?: InputMaybe<Array<ActorMoviesConnectionWhere>>;
  node?: InputMaybe<MovieWhere>;
};

export type ActorMoviesCreateFieldInput = {
  node: MovieCreateInput;
};

export type ActorMoviesDeleteFieldInput = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<ActorMoviesConnectionWhere>;
};

export type ActorMoviesDisconnectFieldInput = {
  disconnect?: InputMaybe<MovieDisconnectInput>;
  where?: InputMaybe<ActorMoviesConnectionWhere>;
};

export type ActorMoviesFieldInput = {
  connect?: InputMaybe<Array<ActorMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<ActorMoviesCreateFieldInput>>;
};

export type ActorMoviesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ActorMoviesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ActorMoviesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ActorMoviesNodeAggregationWhereInput>>;
  title_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  title_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  title_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  title_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ActorMoviesRelationship = {
  __typename?: 'ActorMoviesRelationship';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type ActorMoviesUpdateConnectionInput = {
  node?: InputMaybe<MovieUpdateInput>;
};

export type ActorMoviesUpdateFieldInput = {
  connect?: InputMaybe<Array<ActorMoviesConnectFieldInput>>;
  create?: InputMaybe<Array<ActorMoviesCreateFieldInput>>;
  delete?: InputMaybe<Array<ActorMoviesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ActorMoviesDisconnectFieldInput>>;
  update?: InputMaybe<ActorMoviesUpdateConnectionInput>;
  where?: InputMaybe<ActorMoviesConnectionWhere>;
};

export type ActorOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ActorSort objects to sort Actors by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ActorSort>>;
};

export type ActorRelationInput = {
  movies?: InputMaybe<Array<ActorMoviesCreateFieldInput>>;
};

/** Fields to sort Actors by. The order in which sorts are applied is not guaranteed when specifying many fields in one ActorSort object. */
export type ActorSort = {
  name?: InputMaybe<SortDirection>;
};

export type ActorUpdateInput = {
  movies?: InputMaybe<Array<ActorMoviesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ActorWhere = {
  AND?: InputMaybe<Array<ActorWhere>>;
  NOT?: InputMaybe<ActorWhere>;
  OR?: InputMaybe<Array<ActorWhere>>;
  moviesAggregate?: InputMaybe<ActorMoviesAggregateInput>;
  /** Return Actors where all of the related ActorMoviesConnections match this filter */
  moviesConnection_ALL?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where none of the related ActorMoviesConnections match this filter */
  moviesConnection_NONE?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where one of the related ActorMoviesConnections match this filter */
  moviesConnection_SINGLE?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where some of the related ActorMoviesConnections match this filter */
  moviesConnection_SOME?: InputMaybe<ActorMoviesConnectionWhere>;
  /** Return Actors where all of the related Movies match this filter */
  movies_ALL?: InputMaybe<MovieWhere>;
  /** Return Actors where none of the related Movies match this filter */
  movies_NONE?: InputMaybe<MovieWhere>;
  /** Return Actors where one of the related Movies match this filter */
  movies_SINGLE?: InputMaybe<MovieWhere>;
  /** Return Actors where some of the related Movies match this filter */
  movies_SOME?: InputMaybe<MovieWhere>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ActorsConnection = {
  __typename?: 'ActorsConnection';
  edges: Array<ActorEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateActorsMutationResponse = {
  __typename?: 'CreateActorsMutationResponse';
  actors: Array<Actor>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateMoviesMutationResponse = {
  __typename?: 'CreateMoviesMutationResponse';
  info: CreateInfo;
  movies: Array<Movie>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

export type Movie = {
  __typename?: 'Movie';
  actors: Array<Actor>;
  actorsAggregate?: Maybe<MovieActorActorsAggregationSelection>;
  actorsConnection: MovieActorsConnection;
  title?: Maybe<Scalars['String']['output']>;
};


export type MovieActorsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ActorOptions>;
  where?: InputMaybe<ActorWhere>;
};


export type MovieActorsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ActorWhere>;
};


export type MovieActorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<MovieActorsConnectionSort>>;
  where?: InputMaybe<MovieActorsConnectionWhere>;
};

export type MovieActorActorsAggregationSelection = {
  __typename?: 'MovieActorActorsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MovieActorActorsNodeAggregateSelection>;
};

export type MovieActorActorsNodeAggregateSelection = {
  __typename?: 'MovieActorActorsNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type MovieActorsAggregateInput = {
  AND?: InputMaybe<Array<MovieActorsAggregateInput>>;
  NOT?: InputMaybe<MovieActorsAggregateInput>;
  OR?: InputMaybe<Array<MovieActorsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
};

export type MovieActorsConnectFieldInput = {
  connect?: InputMaybe<Array<ActorConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ActorConnectWhere>;
};

export type MovieActorsConnection = {
  __typename?: 'MovieActorsConnection';
  edges: Array<MovieActorsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieActorsConnectionSort = {
  node?: InputMaybe<ActorSort>;
};

export type MovieActorsConnectionWhere = {
  AND?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  NOT?: InputMaybe<MovieActorsConnectionWhere>;
  OR?: InputMaybe<Array<MovieActorsConnectionWhere>>;
  node?: InputMaybe<ActorWhere>;
};

export type MovieActorsCreateFieldInput = {
  node: ActorCreateInput;
};

export type MovieActorsDeleteFieldInput = {
  delete?: InputMaybe<ActorDeleteInput>;
  where?: InputMaybe<MovieActorsConnectionWhere>;
};

export type MovieActorsDisconnectFieldInput = {
  disconnect?: InputMaybe<ActorDisconnectInput>;
  where?: InputMaybe<MovieActorsConnectionWhere>;
};

export type MovieActorsFieldInput = {
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
};

export type MovieActorsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MovieActorsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MovieActorsNodeAggregationWhereInput>>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MovieActorsRelationship = {
  __typename?: 'MovieActorsRelationship';
  cursor: Scalars['String']['output'];
  node: Actor;
};

export type MovieActorsUpdateConnectionInput = {
  node?: InputMaybe<ActorUpdateInput>;
};

export type MovieActorsUpdateFieldInput = {
  connect?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
  create?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
  delete?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
  update?: InputMaybe<MovieActorsUpdateConnectionInput>;
  where?: InputMaybe<MovieActorsConnectionWhere>;
};

export type MovieAggregateSelection = {
  __typename?: 'MovieAggregateSelection';
  count: Scalars['Int']['output'];
  title: StringAggregateSelection;
};

export type MovieConnectInput = {
  actors?: InputMaybe<Array<MovieActorsConnectFieldInput>>;
};

export type MovieConnectWhere = {
  node: MovieWhere;
};

export type MovieCreateInput = {
  actors?: InputMaybe<MovieActorsFieldInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MovieDeleteInput = {
  actors?: InputMaybe<Array<MovieActorsDeleteFieldInput>>;
};

export type MovieDisconnectInput = {
  actors?: InputMaybe<Array<MovieActorsDisconnectFieldInput>>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String']['output'];
  node: Movie;
};

export type MovieOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MovieSort objects to sort Movies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MovieSort>>;
};

export type MovieRelationInput = {
  actors?: InputMaybe<Array<MovieActorsCreateFieldInput>>;
};

/** Fields to sort Movies by. The order in which sorts are applied is not guaranteed when specifying many fields in one MovieSort object. */
export type MovieSort = {
  title?: InputMaybe<SortDirection>;
};

export type MovieUpdateInput = {
  actors?: InputMaybe<Array<MovieActorsUpdateFieldInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MovieWhere = {
  AND?: InputMaybe<Array<MovieWhere>>;
  NOT?: InputMaybe<MovieWhere>;
  OR?: InputMaybe<Array<MovieWhere>>;
  actorsAggregate?: InputMaybe<MovieActorsAggregateInput>;
  /** Return Movies where all of the related MovieActorsConnections match this filter */
  actorsConnection_ALL?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where none of the related MovieActorsConnections match this filter */
  actorsConnection_NONE?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where one of the related MovieActorsConnections match this filter */
  actorsConnection_SINGLE?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where some of the related MovieActorsConnections match this filter */
  actorsConnection_SOME?: InputMaybe<MovieActorsConnectionWhere>;
  /** Return Movies where all of the related Actors match this filter */
  actors_ALL?: InputMaybe<ActorWhere>;
  /** Return Movies where none of the related Actors match this filter */
  actors_NONE?: InputMaybe<ActorWhere>;
  /** Return Movies where one of the related Actors match this filter */
  actors_SINGLE?: InputMaybe<ActorWhere>;
  /** Return Movies where some of the related Actors match this filter */
  actors_SOME?: InputMaybe<ActorWhere>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  title_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  title_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type MoviesConnection = {
  __typename?: 'MoviesConnection';
  edges: Array<MovieEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActors: CreateActorsMutationResponse;
  createMovies: CreateMoviesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteActors: DeleteInfo;
  deleteMovies: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateActors: UpdateActorsMutationResponse;
  updateMovies: UpdateMoviesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateActorsArgs = {
  input: Array<ActorCreateInput>;
};


export type MutationCreateMoviesArgs = {
  input: Array<MovieCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteActorsArgs = {
  delete?: InputMaybe<ActorDeleteInput>;
  where?: InputMaybe<ActorWhere>;
};


export type MutationDeleteMoviesArgs = {
  delete?: InputMaybe<MovieDeleteInput>;
  where?: InputMaybe<MovieWhere>;
};


export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateActorsArgs = {
  connect?: InputMaybe<ActorConnectInput>;
  create?: InputMaybe<ActorRelationInput>;
  delete?: InputMaybe<ActorDeleteInput>;
  disconnect?: InputMaybe<ActorDisconnectInput>;
  update?: InputMaybe<ActorUpdateInput>;
  where?: InputMaybe<ActorWhere>;
};


export type MutationUpdateMoviesArgs = {
  connect?: InputMaybe<MovieConnectInput>;
  create?: InputMaybe<MovieRelationInput>;
  delete?: InputMaybe<MovieDeleteInput>;
  disconnect?: InputMaybe<MovieDisconnectInput>;
  update?: InputMaybe<MovieUpdateInput>;
  where?: InputMaybe<MovieWhere>;
};


export type MutationUpdateUsersArgs = {
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  actors: Array<Actor>;
  actorsAggregate: ActorAggregateSelection;
  actorsConnection: ActorsConnection;
  movies: Array<Movie>;
  moviesAggregate: MovieAggregateSelection;
  moviesConnection: MoviesConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};


export type QueryActorsArgs = {
  options?: InputMaybe<ActorOptions>;
  where?: InputMaybe<ActorWhere>;
};


export type QueryActorsAggregateArgs = {
  where?: InputMaybe<ActorWhere>;
};


export type QueryActorsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ActorSort>>>;
  where?: InputMaybe<ActorWhere>;
};


export type QueryMoviesArgs = {
  options?: InputMaybe<MovieOptions>;
  where?: InputMaybe<MovieWhere>;
};


export type QueryMoviesAggregateArgs = {
  where?: InputMaybe<MovieWhere>;
};


export type QueryMoviesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MovieSort>>>;
  where?: InputMaybe<MovieWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateActorsMutationResponse = {
  __typename?: 'UpdateActorsMutationResponse';
  actors: Array<Actor>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateMoviesMutationResponse = {
  __typename?: 'UpdateMoviesMutationResponse';
  info: UpdateInfo;
  movies: Array<Movie>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int']['output'];
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  password: StringAggregateSelection;
};

export type UserCreateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  password?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  OR?: InputMaybe<Array<UserWhere>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  id_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  password_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  password_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  password_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateMoviesMutationVariables = Exact<{
  input: Array<MovieCreateInput> | MovieCreateInput;
}>;


export type CreateMoviesMutation = { __typename?: 'Mutation', createMovies: { __typename?: 'CreateMoviesMutationResponse', info: { __typename?: 'CreateInfo', nodesCreated: number, relationshipsCreated: number } } };

export type DeleteMoviesMutationVariables = Exact<{
  where?: InputMaybe<MovieWhere>;
}>;


export type DeleteMoviesMutation = { __typename?: 'Mutation', deleteMovies: { __typename?: 'DeleteInfo', nodesDeleted: number } };

export type MoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', title?: string | null, actors: Array<{ __typename?: 'Actor', name?: string | null }> }> };


export const CreateMoviesDocument = gql`
    mutation CreateMovies($input: [MovieCreateInput!]!) {
  createMovies(input: $input) {
    info {
      nodesCreated
      relationshipsCreated
    }
  }
}
    `;
export const DeleteMoviesDocument = gql`
    mutation DeleteMovies($where: MovieWhere) {
  deleteMovies(where: $where) {
    nodesDeleted
  }
}
    `;
export const MoviesDocument = gql`
    query Movies {
  movies {
    title
    actors {
      name
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();
const CreateMoviesDocumentString = print(CreateMoviesDocument);
const DeleteMoviesDocumentString = print(DeleteMoviesDocument);
const MoviesDocumentString = print(MoviesDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateMovies(variables: CreateMoviesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: CreateMoviesMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<CreateMoviesMutation>(CreateMoviesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateMovies', 'mutation', variables);
    },
    DeleteMovies(variables?: DeleteMoviesMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: DeleteMoviesMutation; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<DeleteMoviesMutation>(DeleteMoviesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteMovies', 'mutation', variables);
    },
    Movies(variables?: MoviesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<{ data: MoviesQuery; errors?: GraphQLError[]; extensions?: any; headers: Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<MoviesQuery>(MoviesDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Movies', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;