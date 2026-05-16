export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Match single-segment paths like /javeria (profile URLs)
    // Skip known static paths and file extensions
    const isProfilePath = /^\/[a-zA-Z0-9_-]+$/.test(path)
      && !path.startsWith('/i')
      && !path.startsWith('/api')
      && !path.startsWith('/assets');

    if (isProfilePath) {
      const username = path.slice(1); // remove leading "/"
      // Rewrite internally to /i?d=username
      const rewriteUrl = new URL(request.url);
      rewriteUrl.pathname = "/i";
      rewriteUrl.search = `d=${encodeURIComponent(username)}`;
      return env.ASSETS.fetch(new Request(rewriteUrl.toString(), request));
    }

    // For all other paths, serve assets normally
    return env.ASSETS.fetch(request);
  }
};
