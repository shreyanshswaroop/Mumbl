const backendBaseUrl =
  process.env.FLOWVOICE_API_URL ??
  process.env.NEXT_PUBLIC_FLOWVOICE_API_URL ??
  "https://flowvoice-backend-1086205439072.asia-south1.run.app";

export async function proxyAuthRequest(
  endpoint: "/auth/login" | "/auth/signup",
  request: Request
) {
  try {
    const response = await fetch(
      `${backendBaseUrl.replace(/\/$/, "")}${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: await request.text(),
        cache: "no-store",
      }
    );

    const text = await response.text();

    try {
      return Response.json(JSON.parse(text), {
        status: response.status,
      });
    } catch {
      return Response.json(
        {
          detail:
            text ||
            `Auth server returned ${response.status} ${response.statusText}.`,
        },
        {
          status: response.status,
        }
      );
    }
  } catch {
    return Response.json(
      {
        detail: "Could not reach the auth server.",
      },
      {
        status: 502,
      }
    );
  }
}
