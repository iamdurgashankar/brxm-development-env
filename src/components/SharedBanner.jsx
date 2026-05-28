import { BrManageContentButton } from "@bloomreach/react-sdk";

export function SharedBanner({ component, page, mapping, isClientComponent }) {
  const parameters = component.getParameters?.() || {};
  const properties = component.getProperties() || {};

  const resolvePath = (value) => {
    if (!value) {
      return null;
    }

    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "object") {
      return value.path || value.value || value.id || null;
    }

    return null;
  };

  const allValues = {
    ...parameters,
    ...properties,
  };

  const documentPath =
    resolvePath(allValues.document) ||
    resolvePath(allValues.bannerReference) ||
    resolvePath(allValues.bannerreference) ||
    resolvePath(allValues["banner-reference"]) ||
    resolvePath(allValues["Banner Reference"]) ||
    Object.values(allValues)
      .map((value) => resolvePath(value))
      .find((value) => typeof value === "string" && value.startsWith("/"));

  const documentContent = documentPath ? page.getContent(documentPath) : null;
  const content = documentContent?.getData();
  const isPreview = Boolean(page?.isPreview?.());
  const showManageButton = Boolean(isClientComponent && isPreview && documentContent);

  if (!documentPath) {
    return <p>No Banner reference set</p>
  }

  if (!content) {
    return <p>Banner document could not be loaded</p>
  }

  const imageUrl = content.image
    ? page.getContent(content.image)?.getOriginal()?.getUrl()
    : null;
  const ctaUrl = content.ctalink
    ? page.getContent(content.ctalink)?.getUrl()
    : null;

  return (
    <div style={{ backgroundColor: "grey", padding: '10px', position: 'relative' }}>
      {showManageButton && (
        <BrManageContentButton
          content={documentContent}
          parameter="document"
          page={page}
          mapping={mapping}
        />
      )}
      <h2>{content.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content.text?.value || "" }} />
      {imageUrl && <img src={imageUrl} alt={content.title || "Banner"} />}
      {ctaUrl && <p><a href={ctaUrl}>{content.ctalabel}</a></p>}
    </div>
  );
}