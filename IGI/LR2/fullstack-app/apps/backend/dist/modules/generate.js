"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _faker = require("@faker-js/faker");
const _lodash = require("lodash");
const _db = /*#__PURE__*/ _interopRequireWildcard(require("./db"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const submission = async ()=>{
    return await _db.default.submission.create({
        data: {
            id: (0, _db.genId)(),
            submittedAt: new Date(),
            data: {
                name: _faker.faker.name.findName(),
                email: _faker.faker.internet.email(),
                company: _faker.faker.company.companyName(),
                comments: _faker.faker.lorem.words((0, _lodash.random)(30, false))
            }
        }
    });
};
const ModGenerate = {
    submission
};
const _default = ModGenerate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2dlbmVyYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZha2VyIH0gZnJvbSAnQGZha2VyLWpzL2Zha2VyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGRiLCB7IGdlbklkIH0gZnJvbSAnLi9kYic7XHJcblxyXG5jb25zdCBzdWJtaXNzaW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBkYi5zdWJtaXNzaW9uLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGlkOiBnZW5JZCgpLFxyXG4gICAgICBzdWJtaXR0ZWRBdDogbmV3IERhdGUoKSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICBlbWFpbDogZmFrZXIuaW50ZXJuZXQuZW1haWwoKSxcclxuICAgICAgICBjb21wYW55OiBmYWtlci5jb21wYW55LmNvbXBhbnlOYW1lKCksXHJcbiAgICAgICAgY29tbWVudHM6IGZha2VyLmxvcmVtLndvcmRzKHJhbmRvbSgzMCwgZmFsc2UpKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBNb2RHZW5lcmF0ZSA9IHtcclxuICBzdWJtaXNzaW9uLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kR2VuZXJhdGU7XHJcbiJdLCJuYW1lcyI6WyJzdWJtaXNzaW9uIiwiZGIiLCJjcmVhdGUiLCJkYXRhIiwiaWQiLCJnZW5JZCIsInN1Ym1pdHRlZEF0IiwiRGF0ZSIsIm5hbWUiLCJmYWtlciIsImZpbmROYW1lIiwiZW1haWwiLCJpbnRlcm5ldCIsImNvbXBhbnkiLCJjb21wYW55TmFtZSIsImNvbW1lbnRzIiwibG9yZW0iLCJ3b3JkcyIsInJhbmRvbSIsIk1vZEdlbmVyYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1QkE7O2FBQUE7O3VCQXZCc0I7d0JBQ0M7MERBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsTUFBTUEsYUFBYSxVQUFZO0lBQzdCLE9BQU8sTUFBTUMsV0FBRSxDQUFDRCxVQUFVLENBQUNFLE1BQU0sQ0FBQztRQUNoQ0MsTUFBTTtZQUNKQyxJQUFJQyxJQUFBQSxTQUFLO1lBQ1RDLGFBQWEsSUFBSUM7WUFDakJKLE1BQU07Z0JBQ0pLLE1BQU1DLFlBQUssQ0FBQ0QsSUFBSSxDQUFDRSxRQUFRO2dCQUN6QkMsT0FBT0YsWUFBSyxDQUFDRyxRQUFRLENBQUNELEtBQUs7Z0JBQzNCRSxTQUFTSixZQUFLLENBQUNJLE9BQU8sQ0FBQ0MsV0FBVztnQkFDbENDLFVBQVVOLFlBQUssQ0FBQ08sS0FBSyxDQUFDQyxLQUFLLENBQUNDLElBQUFBLGNBQU0sRUFBQyxJQUFJLEtBQUs7WUFDOUM7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxjQUFjO0lBQ2xCbkI7QUFDRjtNQUVBLFdBQWVtQiJ9