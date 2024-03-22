"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    queue: ()=>queue,
    enqueue: ()=>enqueue
});
const _bullmq = require("bullmq");
const _ioredis = /*#__PURE__*/ _interopRequireDefault(require("ioredis"));
const _generate = /*#__PURE__*/ _interopRequireDefault(require("./generate"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const QUEUE_NAME = "default";
if (!process.env.REDIS_URL) console.warn("REDIS_URL is not defined");
const connection = new _ioredis.default(process.env.REDIS_URL);
const queue = new _bullmq.Queue(QUEUE_NAME, {
    connection
});
const worker = new _bullmq.Worker(QUEUE_NAME, async (job)=>{
    if (job.name === "generateSubmissions") {
        const submission = await _generate.default.submission();
        console.log(submission);
    }
}, {
    connection
});
const enqueue = async (job, data)=>{
    await queue.add(job, data);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL3F1ZXVlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXVlLCBXb3JrZXIgfSBmcm9tICdidWxsbXEnO1xyXG5pbXBvcnQgUmVkaXMgZnJvbSAnaW9yZWRpcyc7XHJcbmltcG9ydCBNb2RHZW5lcmF0ZSBmcm9tICcuL2dlbmVyYXRlJztcclxuXHJcbmNvbnN0IFFVRVVFX05BTUUgPSAnZGVmYXVsdCc7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52LlJFRElTX1VSTCkgY29uc29sZS53YXJuKCdSRURJU19VUkwgaXMgbm90IGRlZmluZWQnKTtcclxuY29uc3QgY29ubmVjdGlvbiA9IG5ldyBSZWRpcyhwcm9jZXNzLmVudi5SRURJU19VUkwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXVlID0gbmV3IFF1ZXVlKFFVRVVFX05BTUUsIHsgY29ubmVjdGlvbiB9KTtcclxuXHJcbmNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoXHJcbiAgUVVFVUVfTkFNRSxcclxuICBhc3luYyAoam9iKSA9PiB7XHJcbiAgICBpZiAoam9iLm5hbWUgPT09ICdnZW5lcmF0ZVN1Ym1pc3Npb25zJykge1xyXG4gICAgICBjb25zdCBzdWJtaXNzaW9uID0gYXdhaXQgTW9kR2VuZXJhdGUuc3VibWlzc2lvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhzdWJtaXNzaW9uKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHsgY29ubmVjdGlvbiB9XHJcbik7XHJcblxyXG50eXBlIEpvYk5hbWUgPSAnZ2VuZXJhdGVTdWJtaXNzaW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgZW5xdWV1ZSA9IGFzeW5jIChqb2I6IEpvYk5hbWUsIGRhdGE/OiBhbnkpID0+IHtcclxuICBhd2FpdCBxdWV1ZS5hZGQoam9iLCBkYXRhKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInF1ZXVlIiwiZW5xdWV1ZSIsIlFVRVVFX05BTUUiLCJwcm9jZXNzIiwiZW52IiwiUkVESVNfVVJMIiwiY29uc29sZSIsIndhcm4iLCJjb25uZWN0aW9uIiwiUmVkaXMiLCJRdWV1ZSIsIndvcmtlciIsIldvcmtlciIsImpvYiIsIm5hbWUiLCJzdWJtaXNzaW9uIiwiTW9kR2VuZXJhdGUiLCJsb2ciLCJkYXRhIiwiYWRkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFTYUEsS0FBSyxNQUFMQTtJQWVBQyxPQUFPLE1BQVBBOzt3QkF4QmlCOzhEQUNaOytEQUNNOzs7Ozs7QUFFeEIsTUFBTUMsYUFBYTtBQUVuQixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFQyxRQUFRQyxJQUFJLENBQUM7QUFDekMsTUFBTUMsYUFBYSxJQUFJQyxnQkFBSyxDQUFDTixRQUFRQyxHQUFHLENBQUNDLFNBQVM7QUFFM0MsTUFBTUwsUUFBUSxJQUFJVSxhQUFLLENBQUNSLFlBQVk7SUFBRU07QUFBVztBQUV4RCxNQUFNRyxTQUFTLElBQUlDLGNBQU0sQ0FDdkJWLFlBQ0EsT0FBT1csTUFBUTtJQUNiLElBQUlBLElBQUlDLElBQUksS0FBSyx1QkFBdUI7UUFDdEMsTUFBTUMsYUFBYSxNQUFNQyxpQkFBVyxDQUFDRCxVQUFVO1FBQy9DVCxRQUFRVyxHQUFHLENBQUNGO0lBQ2QsQ0FBQztBQUNILEdBQ0E7SUFBRVA7QUFBVztBQUtSLE1BQU1QLFVBQVUsT0FBT1ksS0FBY0ssT0FBZTtJQUN6RCxNQUFNbEIsTUFBTW1CLEdBQUcsQ0FBQ04sS0FBS0s7QUFDdkIifQ==