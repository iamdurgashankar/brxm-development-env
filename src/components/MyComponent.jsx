export function MyComponent({ component, page }) {

  const { title } = component.getParameters();

  return (
    <div>
      <p>Title here below:</p>
      <h2>{title}</h2>
    </div>
  );
}