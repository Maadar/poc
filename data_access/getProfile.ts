import { client } from "./client";

export async function getProfile() {
  return await client.get("profile");
}
