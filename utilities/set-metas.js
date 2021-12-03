export function setMetas(metaName, value) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("property") === metaName) {
      metas[i].content = value;
    }
  }
}
