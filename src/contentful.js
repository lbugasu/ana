const client = require("contentful").createClient({
    space: "rnmht6wsj5nl",
    accessToken: "pqCregxsHVKuXzBRzEaFdpmTmu2667sUBpeo4UaGi3I",
  });
  
  const getBlogPosts = () =>
    client
      .getEntries({ content_type: "post" })
      .then((response) => response.items);

  const getProjects = () =>
    client
      .getEntries({ content_type: "project" })
      .then((response) => response.items);
  
  const getSinglePost = (slug) =>
    client
      .getEntries({
        "fields.slug": slug,
        content_type: "post",
      })
      .then((response) => response.items);
  
  const getSingleExperiment = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "project",
    })
    .then((response) => response.items);
  
  const getTaggedPost = (tag) =>
    client
      .getEntries({
        "fields.tags": tag,
        content_type: "post",
      })
      .then((response) => response.items);
  
  const getTaggedPosts = (tag) =>
    client
      .getEntries({
        "fields.tags": tag,
        content_type: "post",
      })
      .then((response) => response.items);
  const getSectionedPosts = (section) =>
    client
      .getEntries({
        "fields.section": section,
        content_type: "post",
      })
      .then((response) => response.items);
  
  export {
    getTaggedPost,
    getBlogPosts,
    getSinglePost,
    getTaggedPosts,
    getSectionedPosts,
    getProjects,
    getSingleExperiment,
  };
  