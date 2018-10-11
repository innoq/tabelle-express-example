import { createElement } from "complate-stream";

export default function Tabelle({ searchSrc, rows }, ...children) {
  return <ta-belle search-src={searchSrc} change-uri>
    {children}
  </ta-belle>
}