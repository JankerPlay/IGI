"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _apolloServerCore = require("apollo-server-core");
const _apolloServerExpress = require("apollo-server-express");
const _cors = /*#__PURE__*/ _interopRequireDefault(require("cors"));
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _http = /*#__PURE__*/ _interopRequireDefault(require("http"));
const _morgan = /*#__PURE__*/ _interopRequireDefault(require("morgan"));
const _resolvers = /*#__PURE__*/ _interopRequireDefault(require("./graphql/resolvers"));
const _schema = /*#__PURE__*/ _interopRequireDefault(require("./graphql/schema"));
const _db = /*#__PURE__*/ _interopRequireDefault(require("./modules/db"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.use((0, _cors.default)());
app.get("/", async (req, res)=>{
    const submissions = await _db.default.submission.findMany();
    res.json(submissions);
});
const startServer = async ()=>{
    const httpServer = _http.default.createServer(app);
    const server = new _apolloServerExpress.ApolloServer({
        typeDefs: _schema.default,
        resolvers: _resolvers.default,
        csrfPrevention: true,
        cache: "bounded",
        plugins: [
            (0, _apolloServerCore.ApolloServerPluginDrainHttpServer)({
                httpServer
            }),
            (0, _apolloServerCore.ApolloServerPluginLandingPageLocalDefault)({
                embed: true
            })
        ]
    });
    await server.start();
    server.applyMiddleware({
        app
    });
    const port = Number(process.env.PORT ?? 8080);
    await new Promise((resolve)=>httpServer.listen({
            host: "0.0.0.0",
            port
        }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
};
startServer();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwb2xsb1NlcnZlclBsdWdpbkRyYWluSHR0cFNlcnZlcixcclxuICBBcG9sbG9TZXJ2ZXJQbHVnaW5MYW5kaW5nUGFnZUxvY2FsRGVmYXVsdCxcclxufSBmcm9tICdhcG9sbG8tc2VydmVyLWNvcmUnO1xyXG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCByZXNvbHZlcnMgZnJvbSAnLi9ncmFwaHFsL3Jlc29sdmVycyc7XHJcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9ncmFwaHFsL3NjaGVtYSc7XHJcbmltcG9ydCBkYiBmcm9tICcuL21vZHVsZXMvZGInO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG5hcHAuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3Qgc3VibWlzc2lvbnMgPSBhd2FpdCBkYi5zdWJtaXNzaW9uLmZpbmRNYW55KCk7XHJcbiAgcmVzLmpzb24oc3VibWlzc2lvbnMpO1xyXG59KTtcclxuXHJcbmNvbnN0IHN0YXJ0U2VydmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xyXG4gIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xyXG4gICAgdHlwZURlZnM6IHNjaGVtYSxcclxuICAgIHJlc29sdmVycyxcclxuICAgIGNzcmZQcmV2ZW50aW9uOiB0cnVlLFxyXG4gICAgY2FjaGU6ICdib3VuZGVkJyxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgQXBvbGxvU2VydmVyUGx1Z2luRHJhaW5IdHRwU2VydmVyKHsgaHR0cFNlcnZlciB9KSxcclxuICAgICAgQXBvbGxvU2VydmVyUGx1Z2luTGFuZGluZ1BhZ2VMb2NhbERlZmF1bHQoeyBlbWJlZDogdHJ1ZSB9KSxcclxuICAgIF0sXHJcbiAgfSk7XHJcbiAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XHJcbiAgc2VydmVyLmFwcGx5TWlkZGxld2FyZSh7IGFwcCB9KTtcclxuICBjb25zdCBwb3J0ID0gTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQgPz8gODA4MCk7XHJcbiAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+XHJcbiAgICBodHRwU2VydmVyLmxpc3Rlbih7IGhvc3Q6ICcwLjAuMC4wJywgcG9ydCB9LCByZXNvbHZlKVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBg8J+agCBTZXJ2ZXIgcmVhZHkgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9JHtzZXJ2ZXIuZ3JhcGhxbFBhdGh9YFxyXG4gICk7XHJcbn07XHJcbnN0YXJ0U2VydmVyKCk7XHJcbiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwidXNlIiwibW9yZ2FuIiwiY29ycyIsImdldCIsInJlcSIsInJlcyIsInN1Ym1pc3Npb25zIiwiZGIiLCJzdWJtaXNzaW9uIiwiZmluZE1hbnkiLCJqc29uIiwic3RhcnRTZXJ2ZXIiLCJodHRwU2VydmVyIiwiaHR0cCIsImNyZWF0ZVNlcnZlciIsInNlcnZlciIsIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwic2NoZW1hIiwicmVzb2x2ZXJzIiwiY3NyZlByZXZlbnRpb24iLCJjYWNoZSIsInBsdWdpbnMiLCJBcG9sbG9TZXJ2ZXJQbHVnaW5EcmFpbkh0dHBTZXJ2ZXIiLCJBcG9sbG9TZXJ2ZXJQbHVnaW5MYW5kaW5nUGFnZUxvY2FsRGVmYXVsdCIsImVtYmVkIiwic3RhcnQiLCJhcHBseU1pZGRsZXdhcmUiLCJwb3J0IiwiTnVtYmVyIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxpc3RlbiIsImhvc3QiLCJjb25zb2xlIiwibG9nIiwiZ3JhcGhxbFBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7O2tDQUdPO3FDQUNzQjsyREFDWjs4REFDRzsyREFDSDs2REFDRTtnRUFDRzs2REFDSDt5REFDSjs7Ozs7O0FBRWYsTUFBTUEsTUFBTUMsSUFBQUEsZ0JBQU87QUFDbkJELElBQUlFLEdBQUcsQ0FBQ0MsSUFBQUEsZUFBTSxFQUFDO0FBQ2ZILElBQUlFLEdBQUcsQ0FBQ0UsSUFBQUEsYUFBSTtBQUVaSixJQUFJSyxHQUFHLENBQUMsS0FBSyxPQUFPQyxLQUFLQyxNQUFRO0lBQy9CLE1BQU1DLGNBQWMsTUFBTUMsV0FBRSxDQUFDQyxVQUFVLENBQUNDLFFBQVE7SUFDaERKLElBQUlLLElBQUksQ0FBQ0o7QUFDWDtBQUVBLE1BQU1LLGNBQWMsVUFBWTtJQUM5QixNQUFNQyxhQUFhQyxhQUFJLENBQUNDLFlBQVksQ0FBQ2hCO0lBQ3JDLE1BQU1pQixTQUFTLElBQUlDLGlDQUFZLENBQUM7UUFDOUJDLFVBQVVDLGVBQU07UUFDaEJDLFdBQUFBLGtCQUFTO1FBQ1RDLGdCQUFnQixJQUFJO1FBQ3BCQyxPQUFPO1FBQ1BDLFNBQVM7WUFDUEMsSUFBQUEsbURBQWlDLEVBQUM7Z0JBQUVYO1lBQVc7WUFDL0NZLElBQUFBLDJEQUF5QyxFQUFDO2dCQUFFQyxPQUFPLElBQUk7WUFBQztTQUN6RDtJQUNIO0lBQ0EsTUFBTVYsT0FBT1csS0FBSztJQUNsQlgsT0FBT1ksZUFBZSxDQUFDO1FBQUU3QjtJQUFJO0lBQzdCLE1BQU04QixPQUFPQyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLElBQUksSUFBSTtJQUN4QyxNQUFNLElBQUlDLFFBQWMsQ0FBQ0MsVUFDdkJ0QixXQUFXdUIsTUFBTSxDQUFDO1lBQUVDLE1BQU07WUFBV1I7UUFBSyxHQUFHTTtJQUUvQ0csUUFBUUMsR0FBRyxDQUNULENBQUMsbUNBQW1DLEVBQUVWLEtBQUssRUFBRWIsT0FBT3dCLFdBQVcsQ0FBQyxDQUFDO0FBRXJFO0FBQ0E1QiJ9