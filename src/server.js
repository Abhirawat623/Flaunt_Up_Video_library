  // Runs on the start of the server
  seeds(server) {
    server.logging = false;
    videos.forEach((item) => {
      server.create("video", { ...item });
    });
  
    users.forEach((item) =>
      server.create("user", {
        ...item,
        likes: [],
        watchlater: [],
        history: [],
        playlists: [],
      })
    );
  },