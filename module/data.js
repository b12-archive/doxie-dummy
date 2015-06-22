export default (comments) => ({
  docs: comments.map((data) => ({data})),
  version: 1,
});
