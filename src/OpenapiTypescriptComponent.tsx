import createClient from "openapi-fetch";
import { useCallback, useEffect, type FC } from "react";
import type { components, paths } from "./openapi-typescript-gen/schema-3_0";

const client = createClient<paths>({
  baseUrl: "https://api.example.com",
  headers: {
    "X-CSRFToken": "{{My Token}}",
  },
});
export const OpenapiTypescriptComponent: FC = () => {
  useEffect(() => {
    void (async () => {
      const { data, error } = await client.GET("/mushrooms/", {
        params: {
          query: {
            limit: 10,
            offset: 5,
          },
        },
      });
      if (error) {
        console.log(error);
      }
      console.log(data?.results[0].id);

      await client.GET("/mushrooms/{mushroom_id}/", {
        params: {
          path: {
            mushroom_id: "52596577-f76f-4777-a569-32b24631a8e8",
          },
        },
      });
    })();
  }, []);

  const handleClickPost = useCallback(async () => {
    await client.POST("/mushrooms/", {
      body: {
        name: "しめじ",
        description: "一般的な食用きのこ",
        orderable: true,
        size: "medium",
        duplicate_check: true,
      } as components["schemas"]["Mushroom"],
    });
  }, []);

  return <button onClick={handleClickPost}>POST</button>;
};
