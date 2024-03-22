"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _apolloServerCore = require("apollo-server-core");
const schema = (0, _apolloServerCore.gql)`
  scalar DateTime
  scalar JSON

  type Query {
    submissions: [Submission!]!
  }

  type Mutation {
    queueSubmissionGeneration(count: Int): Boolean!
  }

  type Submission {
    id: ID!
    submittedAt: DateTime!
    data: JSON!
  }
`;
const _default = schema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwgfSBmcm9tICdhcG9sbG8tc2VydmVyLWNvcmUnO1xyXG5cclxuY29uc3Qgc2NoZW1hID0gZ3FsYFxyXG4gIHNjYWxhciBEYXRlVGltZVxyXG4gIHNjYWxhciBKU09OXHJcblxyXG4gIHR5cGUgUXVlcnkge1xyXG4gICAgc3VibWlzc2lvbnM6IFtTdWJtaXNzaW9uIV0hXHJcbiAgfVxyXG5cclxuICB0eXBlIE11dGF0aW9uIHtcclxuICAgIHF1ZXVlU3VibWlzc2lvbkdlbmVyYXRpb24oY291bnQ6IEludCk6IEJvb2xlYW4hXHJcbiAgfVxyXG5cclxuICB0eXBlIFN1Ym1pc3Npb24ge1xyXG4gICAgaWQ6IElEIVxyXG4gICAgc3VibWl0dGVkQXQ6IERhdGVUaW1lIVxyXG4gICAgZGF0YTogSlNPTiFcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzY2hlbWE7XHJcbiJdLCJuYW1lcyI6WyJzY2hlbWEiLCJncWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7YUFBQTs7a0NBckJvQjtBQUVwQixNQUFNQSxTQUFTQyxJQUFBQSxxQkFBRyxDQUFBLENBQUMsaVFBaUJuQixDQUFDO01BRUQsV0FBZUQifQ==