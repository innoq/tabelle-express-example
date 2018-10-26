import { createElement } from "complate-stream";

export default function Tabelle({ id, searchSrc, sort }, ...children) {
  return <ta-belle id={id} search-src={searchSrc} sort={sort} change-uri>
    {children}
  </ta-belle>
}