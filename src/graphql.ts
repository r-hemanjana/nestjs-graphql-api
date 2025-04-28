
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface UserInput {
    name: string;
    email: string;
    password: string;
    phone?: Nullable<string>;
    address?: Nullable<string>;
}

export interface User {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    password: string;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface IQuery {
    __typename?: 'IQuery';
    getUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    getUsers(): User[] | Promise<User[]>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createUser(input?: Nullable<UserInput>): User | Promise<User>;
    updateUser(id?: Nullable<string>, input?: Nullable<UserInput>): User | Promise<User>;
    deleteUser(id: string): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
