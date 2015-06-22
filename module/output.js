export default (comments) => ({
  docs: comments.map((output) => ({output})),
  version: 1,
});
