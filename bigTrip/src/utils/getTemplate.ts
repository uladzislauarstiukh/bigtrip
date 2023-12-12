import { OfferItem, PictureItem, SortType } from "mock/types";

export type GetTemplateParams = string | OfferItem | PictureItem | SortType;

export type GetMarkupCallBack = (options: GetTemplateParams, idx?: number) => string;

type GetTemplate = (data: GetTemplateParams[], fn: GetMarkupCallBack) => string;

export const getTemplate: GetTemplate = (data, fn) => {
  return data.map(fn).join('\n');
};

