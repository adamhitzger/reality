// ./sanity/lib/fetch.ts

import type { ClientPerspective, QueryParams } from "next-sanity";
<<<<<<< HEAD
//import { draftMode } from "next/headers";
=======
import { draftMode } from "next/headers";
>>>>>>> f5c87ce01d755afdb9ddc7f797a44aa446a260e8

import { client } from "./client";
import { token } from "./token";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
<<<<<<< HEAD
  //perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  //stega = perspective === "previewDrafts" ||
    //process.env.VERCEL_ENV === "preview",
}: {
  query: string;
  params?: QueryParams;
  //perspective?: Omit<ClientPerspective, "raw">;
  //stega?: boolean;
}) {
  
  return client.fetch<QueryResponse>(query, params, {
    //stega,
=======
  perspective = draftMode().isEnabled ? "previewDrafts" : "published",
  stega = perspective === "previewDrafts" ||
    process.env.VERCEL_ENV === "preview",
}: {
  query: string;
  params?: QueryParams;
  perspective?: Omit<ClientPerspective, "raw">;
  stega?: boolean;
}) {
  if (perspective === "previewDrafts") {
    return client.fetch<QueryResponse>(query, params, {
      stega,
      perspective: "previewDrafts",
      token,
      useCdn: false,
      next: { revalidate: 0 },
    });
  }
  return client.fetch<QueryResponse>(query, params, {
    stega,
>>>>>>> f5c87ce01d755afdb9ddc7f797a44aa446a260e8
    perspective: "published",
    useCdn: true,
    next: { revalidate: 30 },
  });
}