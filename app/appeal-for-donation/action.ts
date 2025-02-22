export default async function ContactUsAction(formdata: FormData) {
  await fetch("/api/apply", {
    method: "POST",
    body: JSON.stringify({
      name: formdata.get("name") as string,
      email: formdata.get("email") as string,
      cause: formdata.get("cause") as string,
      amount: formdata.get("amount") as string,
      message: formdata.get("message") as string,
    }),
  });
}
