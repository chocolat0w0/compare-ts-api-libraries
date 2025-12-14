# DefaultApi

All URIs are relative to *https://api.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**mushroomsGet**](DefaultApi.md#mushroomsget) | **GET** /mushrooms/ | きのこ情報の一覧を取得する。 |
| [**mushroomsMushroomIdGet**](DefaultApi.md#mushroomsmushroomidget) | **GET** /mushrooms/{mushroom_id}/ | きのこの情報を取得する。 |
| [**mushroomsPost**](DefaultApi.md#mushroomspost) | **POST** /mushrooms/ | きのこを登録する。 |
| [**recipesGet**](DefaultApi.md#recipesget) | **GET** /recipes/ | 料理レシピの一覧を取得する。 |
| [**recipesPost**](DefaultApi.md#recipespost) | **POST** /recipes/ | 料理レシピを登録する。 |



## mushroomsGet

> MushroomsGet200Response mushroomsGet(limit, offset)

きのこ情報の一覧を取得する。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { MushroomsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies MushroomsGetRequest;

  try {
    const data = await api.mushroomsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**MushroomsGet200Response**](MushroomsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 正常終了 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mushroomsMushroomIdGet

> MushroomsMushroomIdGet200Response mushroomsMushroomIdGet(mushroomId)

きのこの情報を取得する。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { MushroomsMushroomIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string | きのこID
    mushroomId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies MushroomsMushroomIdGetRequest;

  try {
    const data = await api.mushroomsMushroomIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mushroomId** | `string` | きのこID | [Defaults to `undefined`] |

### Return type

[**MushroomsMushroomIdGet200Response**](MushroomsMushroomIdGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 正常に取得 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## mushroomsPost

> Mushroom mushroomsPost(mushroom)

きのこを登録する。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { MushroomsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // Mushroom
    mushroom: ...,
  } satisfies MushroomsPostRequest;

  try {
    const data = await api.mushroomsPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **mushroom** | [Mushroom](Mushroom.md) |  | |

### Return type

[**Mushroom**](Mushroom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 正常に作成 |  -  |
| **422** | 登録できない |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recipesGet

> RecipesGet200Response recipesGet(limit, offset)

料理レシピの一覧を取得する。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RecipesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // number (optional)
    limit: 56,
    // number (optional)
    offset: 56,
  } satisfies RecipesGetRequest;

  try {
    const data = await api.recipesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |
| **offset** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**RecipesGet200Response**](RecipesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 正常終了 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## recipesPost

> Recipe recipesPost(recipe)

料理レシピを登録する。

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { RecipesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // Recipe
    recipe: ...,
  } satisfies RecipesPostRequest;

  try {
    const data = await api.recipesPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **recipe** | [Recipe](Recipe.md) |  | |

### Return type

[**Recipe**](Recipe.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 正常に作成 |  -  |
| **422** | 登録できない |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

