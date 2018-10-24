import { createElement } from "complate-stream";

export default function Tabelle({ id, searchSrc }, ...children) {
  return <ta-belle id={id} search-src={searchSrc} change-uri>
    {children}
  </ta-belle>
}