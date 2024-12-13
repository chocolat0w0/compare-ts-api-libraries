import React from "react";
import {
  client,
  getMushrooms,
  getMushroomsByMushroomId,
  postMushrooms,
} from "./hey-api-openapi-ts-client/sdk.gen";
import { Mushroom } from "./hey-api-openapi-ts-client";

client.setConfig({
  baseUrl: "https://api.example.com",
  headers: {
    "X-CSRFToken": "{{My Token}}",
  },
});

export const HeyApiOpenapiTsComponent: React.FC = () => {
  React.useEffect(() => {
    void (async () => {
      const { data, error } = await getMushrooms({
        query: {
          limit: 10,
          offset: 5,
        },
      });
      if (error) {
        console.log(error);
      }
      console.log(data?.results[0].id);

      await getMushroomsByMushroomId({
        path: {
          mushroom_id: "52596577-f76f-4777-a569-32b24631a8e8",
        },
      });
    })();
  }, []);

  const handleClickPost = React.useCallback(async () => {
    await postMushrooms({
      body: {
        name: "しめじ",
        description: "一般的な食用きのこ",
        orderable: true,
        size: "medium",
      } as Mushroom,
    });
  }, []);

  return <button onClick={handleClickPost}>POST</button>;
};
