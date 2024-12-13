import createClient from "openapi-fetch";
import React from "react";
import { components, paths } from "./openapi-typescript-client/schema";

const client = createClient<paths>({
  baseUrl: "https://api.example.com",
  headers: {
    "X-CSRFToken": "{{My Token}}",
  },
});
export const OpenapiTypescriptComponent: React.FC = () => {
  React.useEffect(() => {
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

  const handleClickPost = React.useCallback(async () => {
    await client.POST("/mushrooms/", {
      body: {
        name: "しめじ",
        description: "一般的な食用きのこ",
        orderable: true,
        size: "medium",
      } as components["schemas"]["Mushroom"],
    });
  }, []);

  return <button onClick={handleClickPost}>POST</button>;
};
