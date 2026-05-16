export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Your existing routes
    if (url.pathname === "/") {
      return new Response("Home", { status: 200 });
    }

    // Catch-all: return 404 for any unmatched path
    return new Response(
      `<!DOCTYPE html>
<html>
<head><title>404 - Not Found</title></head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>The page <code>${url.pathname}</code> does not exist.</p>
  <a href="/">Go home</a>
</body>
</html>`,
      {
        status: 404,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  },
};

