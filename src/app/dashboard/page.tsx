export default async function Dashboard() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/users`
  );

  console.log(response);

  return <div className="text-black dark:text-white">Olá amigo!</div>;
}
