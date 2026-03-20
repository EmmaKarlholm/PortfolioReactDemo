import { useEffect } from "react";

export default function TitleBar({ websiteName, subpageTitle }) {
  const titleBarName = `${websiteName} - ${subpageTitle}`
  useEffect(() => {
    document.title = titleBarName;
  }, [titleBarName]);

  return null;
}