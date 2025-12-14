import { useCallback, useEffect, type FC } from "react";
import {
  getMushrooms,
  getMushroomsByMushroomId,
  postMushrooms,
} from "./hey-api-openapi-ts-gen/api-3_0";
import { client } from "./hey-api-openapi-ts-gen/api-3_0/client.gen";

client.setConfig({
  baseUrl: "https://api.example.com",
  headers: {
    "X-CSRFToken": "{{My Token}}",
  },
});

export const HeyApiOpenapiTsComponent: FC = () => {
  useEffect(() => {
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

  const handleClickPost = useCallback(async () => {
    await postMushrooms({
      body: {
        name: "しめじ",
        description: "一般的な食用きのこ",
        orderable: true,
        size: "medium",
        duplicate_check: true,
      },
    });
  }, []);

  return <button onClick={handleClickPost}>POST</button>;
};
