import { Button, Html, Text } from "@react-email/components";
import Head from "next/head";
import * as React from "react";
import { Heading } from "@react-email/components";

interface types {
  name: string;
  email: string;
  message: string;
  cause: string;
  amount: string;
}

export default function Apply({ name, email, cause, message, amount }: types) {
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
        <b>Cause:</b> <br />
        {cause}
      </Text>
      <Text>
        <b>Amount:</b> <br />${amount}
      </Text>
      <Text>
        <b>Message:</b> <br />
        {message}
      </Text>
    </Html>
  );
}
