import { BackButtonSVG } from "@/components/icons";
import { ApiResponse } from "@/lib/types";

import formatDate from "@/utils/formattedDatetime";
import request, { gql } from "graphql-request";
import Link from "next/link";
import React from "react";

export const revalidate = 300; // revalidate at most every five minutes

async function getBlogs(query: string, variables = {}) {
  const res = await request<ApiResponse>(
    "https://gql.hashnode.com",
    query,
    variables
  );

  return {
    length: res.publication.posts.edges.length,
    blogs: res.publication.posts.edges.map((edge: any) => edge.node),
  };
}

const page = async () => {
  const query = gql`
    query Publication {
      publication(host: "sujeetgund.hashnode.dev") {
        isTeam
        title
        posts(first: 10) {
          edges {
            node {
              title
              publishedAt
              brief
              url
            }
          }
        }
      }
    }
  `;
  const data = await getBlogs(query);
  return (
    <div className="max-w-2xl mx-auto min-h-screen">
      <div className="contents grow">
        <section className="is-full max-is-prose grow self-center p-4">
          <section className="flex flex-col">
            <nav>
              <Link
                className="inline-flex items-center gap-2 hover:underline"
                href="/"
              >
                <BackButtonSVG />
                <span>Blog</span>
              </Link>
            </nav>
            {data.length > 0 && data.blogs.length > 0
              ? data.blogs.map((blog) => (
                  <a
                    key={blog.url}
                    target="_blank"
                    rel="noopener noreferrer external"
                    className="plb-2.5 pli-4 flex gap-2.5 rounded-md active:bg-gray-200"
                    href={blog.url}
                    title={blog.title}
                  >
                    <div className="flex flex-col gap-1">
                      <time
                        className="text-sm font-medium tabular-nums leading-none text-gray-700"
                        dateTime={blog.publishedAt}
                      >
                        {formatDate(blog.publishedAt)}
                      </time>
                      <h2 className="font-medium leading-snug">{blog.title}</h2>
                      <h3 className="text-sm">{blog.brief}</h3>
                    </div>
                    <div className="grow"></div>
                  </a>
                ))
              : "No blogs found"}

            {/* <a
              className="plb-2.5 pli-4 flex gap-2.5 rounded-md active:bg-gray-200"
              href="/blog/twitter-snooze"
            >
              <div className="flex flex-col gap-1">
                <time
                  className="text-sm font-medium tabular-nums leading-none text-gray-700"
                  dateTime="2019-08-06T21:46:55.553Z"
                >
                  August 6, 2019
                </time>
                <h2 className="font-medium leading-snug">
                  Twitter ‘Snooze’ button lets you pause push notifications for
                  a time
                </h2>
              </div>
              <div className="grow"></div>
            </a> */}
          </section>
        </section>
      </div>
    </div>
  );
};

export default page;
