import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Employee {
    id: ID!
    name: String!
    age: Int!
    class: String!
    subjects: [String]!
    attendance: String!
    role: String!
    email: String
  }

  type AuthPayload {
    token: String
    employee: Employee
  }

  type Query {
    employees(page: Int, limit: Int, sortBy: String): [Employee]
    employee(id: ID!): Employee
  }

  input EmployeeInput {
    name: String!
    age: Int!
    class: String!
    subjects: [String]!
    attendance: String!
    email: String
    password: String
  }

  type Mutation {
    register(input: EmployeeInput!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    addEmployee(input: EmployeeInput!): Employee
    updateEmployee(id: ID!, input: EmployeeInput!): Employee
    deleteEmployee(id: ID!): String
  }
`);
