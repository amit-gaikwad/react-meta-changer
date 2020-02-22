import React, { useEffect } from "react";

export const MetaChanger = props => {
  if (props.title) {
    document.title = props.title;
  }
  return <span></span>;
};
