const request = require("supertest");
const app = require("../app");
const { UrunlerRoutes } = require("../a-routes");
const { closeConnection } = require("../load/DataBase");
const config = require("../config");
const load = require("../load");

describe("Uygulama Testi", () => {
  beforeAll(() => {
    config();
    load();
  });

  afterAll(() => {
    closeConnection();
  });

  app.use(UrunlerRoutes);

  test("/api/testUrunler GET test", async () => {
    const response = await request(app).get("/api/testUrunler");
    expect(response.statusCode).toBe(200);
  });
});
