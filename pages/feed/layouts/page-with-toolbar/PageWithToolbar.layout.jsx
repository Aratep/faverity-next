import React from "react";

// LAYOUTS
import NavToolbar from "../nav-toolbar/NavToolbar.layout";

export function withToolbar(WrappedComponent) {
  return class how extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
          <NavToolbar />
        </>
      );
    }
  };
}
