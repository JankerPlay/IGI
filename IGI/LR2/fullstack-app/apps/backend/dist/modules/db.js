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
    default: ()=>_default,
    genId: ()=>genId
});
const _client = require("@prisma/client");
const _nanoid = require("nanoid");
const db = new _client.PrismaClient({
    log: [
        "error",
        "info",
        "query",
        "warn"
    ]
});
const _default = db;
const genId = ()=>(0, _nanoid.nanoid)(16);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2RiLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcclxuXHJcbmNvbnN0IGRiID0gbmV3IFByaXNtYUNsaWVudCh7IGxvZzogWydlcnJvcicsICdpbmZvJywgJ3F1ZXJ5JywgJ3dhcm4nXSB9KTtcclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuSWQgPSAoKSA9PiBuYW5vaWQoMTYpO1xyXG4iXSwibmFtZXMiOlsiZ2VuSWQiLCJkYiIsIlByaXNtYUNsaWVudCIsImxvZyIsIm5hbm9pZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBSUEsT0FBa0IsTUFBbEI7SUFFYUEsS0FBSyxNQUFMQTs7d0JBTmdCO3dCQUNOO0FBRXZCLE1BQU1DLEtBQUssSUFBSUMsb0JBQVksQ0FBQztJQUFFQyxLQUFLO1FBQUM7UUFBUztRQUFRO1FBQVM7S0FBTztBQUFDO01BQ3RFLFdBQWVGO0FBRVIsTUFBTUQsUUFBUSxJQUFNSSxJQUFBQSxjQUFNLEVBQUMifQ==