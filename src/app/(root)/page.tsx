import { redirect } from "next/navigation";

// Keep the query string (utm_source, utm_medium, fbclid, gclid, ...) when sending
// visitors from "/" to "/ar", so Google Analytics can still see where they came from.
export default async function RootPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(await searchParams)) {
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item !== undefined) query.append(key, item);
    }
  }

  const search = query.toString();
  redirect(search ? `/ar?${search}` : "/ar");
}
