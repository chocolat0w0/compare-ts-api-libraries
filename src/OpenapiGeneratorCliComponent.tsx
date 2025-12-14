import { useCallback, useEffect, type FC } from "react";
import { Configuration, DefaultApi } from "./openapi-generator-cli-gen/api-3_0";

const configuration = new Configuration({
  basePath: "https://api.example.com",
  headers: {
    "X-CSRFToken": "{{My Token}}",
  },
});

const defaultApi = new DefaultApi(configuration);

export const OpenapiGeneratorCliComponent: FC = () => {
  useEffect(() => {
    void (async () => {
      try {
        const mushrooms = await defaultApi.mushroomsGet({
          limit: 10,
          offset: 5,
        });
        console.log(mushrooms.results[0]?.id);

        await defaultApi.mushroomsMushroomIdGet({
          mushroomId: "52596577-f76f-4777-a569-32b24631a8e8",
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleClickPost = useCallback(async () => {
    try {
      await defaultApi.mushroomsPost({
        mushroom: {
          name: "しめじ",
          description: "一般的な食用きのこ",
          orderable: true,
          size: "medium",
          duplicateCheck: true,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return <button onClick={handleClickPost}>POST</button>;
};
