import React from "react";
// import {
//   SwipeableList,
//   SwipeableListItem,
// } from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

// MATERIAL UI COMPONENTS
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";

const Notification = (props) => {
  const {
    isOpened,
    message,
    delay,
    severity,
    handleNotificationClose,
    position,
  } = props;

  return (
    <IsVisible isVisible={isOpened}>
      {/*<SwipeableList>*/}
      {/*  <SwipeableListItem*/}
      {/*    swipeLeft={{*/}
      {/*      content: <div>Revealed content during swipe</div>,*/}
      {/*      action: () => handleNotificationClose(),*/}
      {/*    }}*/}
      {/*    swipeRight={{*/}
      {/*      content: <div>Revealed content during swipe</div>,*/}
      {/*      action: () => handleNotificationClose(),*/}
      {/*    }}*/}
      {/*    // onSwipeProgress={(progress) =>*/}
      {/*    //   console.info(`Swipe progress: ${progress}%`)*/}
      {/*    // }*/}
      {/*  >*/}
      <Snackbar
        className="notification"
        open={true}
        anchorOrigin={{
          vertical: position.vertical,
          horizontal: position.horizontal,
        }}
        autoHideDuration={delay}
        onClose={handleNotificationClose}>
        <Alert
          onClose={handleNotificationClose}
          severity={severity}
          className="message">
          <IsVisible
            isVisible={!Array.isArray(message) && message !== undefined}>
            {message}
          </IsVisible>
          <IsVisible
            isVisible={Array.isArray(message) && message !== undefined}>
            {message &&
              Array.from(message).map((item, idx) => (
                <div key={item.message + idx}>• {item.message}</div>
              ))}
          </IsVisible>
        </Alert>
      </Snackbar>
      {/*  </SwipeableListItem>*/}
      {/*</SwipeableList>*/}
    </IsVisible>
  );
};

export default Notification;
