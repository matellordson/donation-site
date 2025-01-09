export default function ViewDonation({ params }: { params: { slug: string } }) {
  return <p>{params.slug}</p>;
}
