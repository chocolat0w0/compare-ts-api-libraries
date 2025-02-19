/* tslint:disable */
/* eslint-disable */
/**
 * 検証用 API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MushroomConditionsValue } from './MushroomConditionsValue';
import {
    MushroomConditionsValueFromJSON,
    MushroomConditionsValueFromJSONTyped,
    MushroomConditionsValueToJSON,
    MushroomConditionsValueToJSONTyped,
} from './MushroomConditionsValue';

/**
 * 
 * @export
 * @interface Mushroom
 */
export interface Mushroom {
    /**
     * きのこID
     * @type {string}
     * @memberof Mushroom
     */
    readonly id: string;
    /**
     * きのこ名
     * @type {string}
     * @memberof Mushroom
     */
    name: string;
    /**
     * きのこの概要
     * @type {string}
     * @memberof Mushroom
     */
    description: string;
    /**
     * 購入可能か
     * @type {boolean}
     * @memberof Mushroom
     */
    orderable: boolean;
    /**
     * 大きさの種類
     * @type {string}
     * @memberof Mushroom
     */
    size: MushroomSizeEnum;
    /**
     * おいしさスコア
     * @type {number}
     * @memberof Mushroom
     */
    tastiness?: number | null;
    /**
     * 状態
     * @type {{ [key: string]: MushroomConditionsValue; }}
     * @memberof Mushroom
     */
    conditions?: { [key: string]: MushroomConditionsValue; };
}


/**
 * @export
 */
export const MushroomSizeEnum = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large'
} as const;
export type MushroomSizeEnum = typeof MushroomSizeEnum[keyof typeof MushroomSizeEnum];


/**
 * Check if a given object implements the Mushroom interface.
 */
export function instanceOfMushroom(value: object): value is Mushroom {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('orderable' in value) || value['orderable'] === undefined) return false;
    if (!('size' in value) || value['size'] === undefined) return false;
    return true;
}

export function MushroomFromJSON(json: any): Mushroom {
    return MushroomFromJSONTyped(json, false);
}

export function MushroomFromJSONTyped(json: any, ignoreDiscriminator: boolean): Mushroom {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'orderable': json['orderable'],
        'size': json['size'],
        'tastiness': json['tastiness'] == null ? undefined : json['tastiness'],
        'conditions': json['conditions'] == null ? undefined : (mapValues(json['conditions'], MushroomConditionsValueFromJSON)),
    };
}

export function MushroomToJSON(json: any): Mushroom {
    return MushroomToJSONTyped(json, false);
}

export function MushroomToJSONTyped(value?: Omit<Mushroom, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'orderable': value['orderable'],
        'size': value['size'],
        'tastiness': value['tastiness'],
        'conditions': value['conditions'] == null ? undefined : (mapValues(value['conditions'], MushroomConditionsValueToJSON)),
    };
}

