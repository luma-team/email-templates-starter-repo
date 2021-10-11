import axios from "axios";
import { Field, Form } from "formik";
import { Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { EmailPreview } from "../components/PreviewEmail";
import { SimpleEmail } from "../components/SimpleEmail";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Email Templates — Starter Repo</title>
        <meta
          name="description"
          content="Create beautiful email templates with React and MJML."
        />
      </Head>

      <main
        className="container px-5 pt-4 pb-16 mx-auto "
        style={{ maxWidth: 600 }}
      >
        <div>
          <h1 className="text-2xl font-bold mb-4 mt-0">
            Write Beautiful Email Templates in React
          </h1>

          <div>
            <a href="https://blog_link.com">Blog Post</a> &middot;{" "}
            <a href="github_link">GitHub Repo</a>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-4 mt-8">Example Email</h3>
        <div
          style={{ marginLeft: -16, marginRight: -16 }}
          className={"bg-white rounded-lg email-container"}
        >
          <EmailPreview emailComponent={<SimpleEmail />} />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Example Code</h3>
          It was incredibly simple to create that email. You can{" "}
          <a href="">find the code here</a> but since it's so short, I'll just
          include it here:
          <pre>TODO: insert the code here</pre>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Test It Out</h3>

          <SendEmailForm />
        </div>
      </main>

      <style jsx>{`
        .main {
          --shadow: 0 1.6px 2.7px rgba(0, 0, 0, 0.02),
            0 4.2px 6.9px rgba(0, 0, 0, 0.03),
            0 8.5px 14.2px rgba(0, 0, 0, 0.04),
            0 17.5px 29.2px rgba(0, 0, 0, 0.05), 0 48px 80px rgba(0, 0, 0, 0.06);
        }

        .email-container {
          box-shadow: var(--shadow);
        }
      `}</style>
    </div>
  );
};

const SendEmailForm = () => {
  return (
    <Formik
      initialValues={{ email: "", postmarkApiKey: "" }}
      onSubmit={async ({ email, postmarkApiKey }) => {
        await axios.post("/api/send-email", {
          email,
          postmarkApiKey,
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <p>
            You can test this out by creating a{" "}
            <a
              href="https://postmarkapp.com/"
              target={"_blank"}
              className={"text-red-500 hover:text-red-600"}
            >
              Postmark account
            </a>{" "}
            and pasting your server's API Key below.
          </p>

          <div className="mb-4">
            <div className={"font-medium mb-1"}>Your Postmark API Token</div>
            <Field
              name={"postmarkApiKey"}
              type={"text"}
              className={"rounded-lg p-2 w-60 font-mono"}
              placeholder={"e1fe3827-·····"}
            />
          </div>

          <div className={"mb-4"}>
            <div className={"font-medium mb-1"}>Send Preview To</div>
            <Field
              name={"email"}
              type={"email"}
              placeholder={"my@email.com"}
              className={"rounded-lg p-2 w-60"}
            />
          </div>

          <button
            type={"submit"}
            className={"btn-solid"}
            disabled={isSubmitting}
          >
            Send an Email
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Home;
