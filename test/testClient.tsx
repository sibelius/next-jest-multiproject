import { createServer, RequestListener } from "http";
import { NextApiHandler } from "next";
import { apiResolver } from "next/dist/server/api-utils/node";
import request from "supertest";

export const testClient = (handler: NextApiHandler, query?: any) => {
  const listener: RequestListener = (req, res) => {
    return apiResolver(
      req,
      res,
      query,
      handler,
      {
        previewModeEncryptionKey: "",
        previewModeId: "",
        previewModeSigningKey: "",
      },
      false
    );
  };

  return request(createServer(listener));
};