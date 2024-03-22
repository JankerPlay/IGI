"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _graphqlIsoDate = require("graphql-iso-date");
const _graphqlTypeJson = /*#__PURE__*/ _interopRequireDefault(require("graphql-type-json"));
const _lodash = require("lodash");
const _db = /*#__PURE__*/ _interopRequireDefault(require("../modules/db"));
const _queue = require("../modules/queue");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const resolvers = {
    DateTime: _graphqlIsoDate.GraphQLDateTime,
    JSON: _graphqlTypeJson.default,
    Query: {
        submissions: ()=>{
            return _db.default.submission.findMany({
                orderBy: {
                    submittedAt: "desc"
                }
            });
        }
    },
    Mutation: {
        queueSubmissionGeneration: async (_, { count  })=>{
            await Promise.all((0, _lodash.times)(count ?? 1).map(async ()=>{
                await (0, _queue.enqueue)("generateSubmissions");
            }));
            return true;
        }
    }
};
const _default = resolvers;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaHFsL3Jlc29sdmVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMRGF0ZVRpbWUgfSBmcm9tICdncmFwaHFsLWlzby1kYXRlJztcclxuaW1wb3J0IEdyYXBoUUxKU09OIGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcclxuaW1wb3J0IHsgdGltZXMgfSBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgZGIgZnJvbSAnLi4vbW9kdWxlcy9kYic7XHJcbmltcG9ydCB7IGVucXVldWUgfSBmcm9tICcuLi9tb2R1bGVzL3F1ZXVlJztcclxuXHJcbmNvbnN0IHJlc29sdmVycyA9IHtcclxuICBEYXRlVGltZTogR3JhcGhRTERhdGVUaW1lLFxyXG4gIEpTT046IEdyYXBoUUxKU09OLFxyXG5cclxuICBRdWVyeToge1xyXG4gICAgc3VibWlzc2lvbnM6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGRiLnN1Ym1pc3Npb24uZmluZE1hbnkoeyBvcmRlckJ5OiB7IHN1Ym1pdHRlZEF0OiAnZGVzYycgfSB9KTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgTXV0YXRpb246IHtcclxuICAgIHF1ZXVlU3VibWlzc2lvbkdlbmVyYXRpb246IGFzeW5jIChfLCB7IGNvdW50IH06IHsgY291bnQ6IG51bWJlciB9KSA9PiB7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHRpbWVzKGNvdW50ID8/IDEpLm1hcChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBhd2FpdCBlbnF1ZXVlKCdnZW5lcmF0ZVN1Ym1pc3Npb25zJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcnM7XHJcbiJdLCJuYW1lcyI6WyJyZXNvbHZlcnMiLCJEYXRlVGltZSIsIkdyYXBoUUxEYXRlVGltZSIsIkpTT04iLCJHcmFwaFFMSlNPTiIsIlF1ZXJ5Iiwic3VibWlzc2lvbnMiLCJkYiIsInN1Ym1pc3Npb24iLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJzdWJtaXR0ZWRBdCIsIk11dGF0aW9uIiwicXVldWVTdWJtaXNzaW9uR2VuZXJhdGlvbiIsIl8iLCJjb3VudCIsIlByb21pc2UiLCJhbGwiLCJ0aW1lcyIsIm1hcCIsImVucXVldWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7YUFBQTs7Z0NBNUJnQztzRUFDUjt3QkFDRjt5REFDUDt1QkFDUzs7Ozs7O0FBRXhCLE1BQU1BLFlBQVk7SUFDaEJDLFVBQVVDLCtCQUFlO0lBQ3pCQyxNQUFNQyx3QkFBVztJQUVqQkMsT0FBTztRQUNMQyxhQUFhLElBQU07WUFDakIsT0FBT0MsV0FBRSxDQUFDQyxVQUFVLENBQUNDLFFBQVEsQ0FBQztnQkFBRUMsU0FBUztvQkFBRUMsYUFBYTtnQkFBTztZQUFFO1FBQ25FO0lBQ0Y7SUFFQUMsVUFBVTtRQUNSQywyQkFBMkIsT0FBT0MsR0FBRyxFQUFFQyxNQUFLLEVBQXFCLEdBQUs7WUFDcEUsTUFBTUMsUUFBUUMsR0FBRyxDQUNmQyxJQUFBQSxhQUFLLEVBQUNILFNBQVMsR0FBR0ksR0FBRyxDQUFDLFVBQVk7Z0JBQ2hDLE1BQU1DLElBQUFBLGNBQU8sRUFBQztZQUNoQjtZQUVGLE9BQU8sSUFBSTtRQUNiO0lBQ0Y7QUFDRjtNQUVBLFdBQWVwQiJ9