import ky from "ky";

export const client = ky.extend({
  prefixUrl: "http://api.uphellas.gr",
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      async (request) => {
      const session = window.sessionStorage.getItem("oidc.user:https://go.uphellas.gr/auth/realms/pheme/.well-known/openid-configuration:next-client");
      const json = JSON.parse(session as string);
          request.headers.set(
            "Authorization",
            `Bearer ${json.access_token}`
          );
        }
    ],
  },
});
