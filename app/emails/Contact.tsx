import { Button, Html, Text } from "@react-email/components";
import Head from "next/head";
import * as React from "react";
import { Heading } from "@react-email/components";

interface types {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact({ name, email, subject, message }: types) {
  return (
    <Html>
      <Head>
        <title>You have been contacted</title>
      </Head>
      <Text>
        <b>Name:</b> <br /> {name}
      </Text>
      <Text>
        <b>Email:</b> <br />
        {email}
      </Text>
      <Text>
        <b>Subject:</b> <br />
        {subject}
      </Text>
      <Text>
        <b>Message:</b> <br />
        {message}
      </Text>
    </Html>
  );
}
