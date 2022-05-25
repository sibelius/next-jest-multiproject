import { testClient } from "../../test/testClient";
import { helloHandler } from '../pages/api/hello';
import {connectMongoose} from '../../test/connectMongoose';
import {clearDbAndRestartCounters} from '../../test/clearDbAndRestartCounters';
import {disconnectMongoose} from '../../test/disconnectMongoose';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

const request = testClient(helloHandler);

it("should redirect on get", async () => {
  const payload = {};

  const res = await request
    .post("/api/hello")
    .set({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      })
      .send(JSON.stringify(payload));

  expect(res.status).toBe(200);
  expect(res.body).toEqual({
    name: 'John Doe',
  });
});