export default async function ContactUsAction(formdata: FormData) {
  await fetch("/api/email", {
    method: "POST",
    body: JSON.stringify({
      name: formdata.get("name") as string,
      email: formdata.get("email") as string,
      subject: formdata.get("subject") as string,
      message: formdata.get("message") as string,
    }),
  });
}
