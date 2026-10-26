export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Check if the requested path matches /api/get-ram
    if (url.pathname === '/api/get-ram') {
      const data = { ram_mb: 1024 };

      // Return the JSON response with the appropriate headers
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      });
    }

    // Return a 404 for any other paths
    return new Response('Not Found', { status: 404 });
  },
};
