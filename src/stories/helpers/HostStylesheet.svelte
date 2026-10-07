<script>
// Adds a stylesheet to the document for as long as the story is shown, the
// way a host app's own stylesheet themes the components.
let { css } = $props();

$effect(() => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);
  return () => style.remove();
});
</script>
