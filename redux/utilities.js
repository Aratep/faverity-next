import { setGlobalMessage } from "./common/common.slice";

export const catchGlobalMessages = (
  response,
  dispatch,
  success,
  error,
  successMessage
) => {
  let status = "";
  // check calls for success/failures
  if ("success" in response) {
    if (response.success === false) {
      dispatch(error);

      status = "error";
    } else {
      dispatch(success);
      status = "OK";

      if (successMessage) {
        dispatch(
          setGlobalMessage({
            severity: "success",
            text: successMessage,
          })
        );
        status = "OK";
      }
    }
  } else {
    dispatch(success);

    status = "OK";
    // catch success message
    if (successMessage) {
      dispatch(
        setGlobalMessage({
          severity: "success",
          text: successMessage,
        })
      );

      status = "OK";
    }
  }

  // catch errors
  if ("errors" in response) {
    dispatch(error);
    dispatch(
      setGlobalMessage({
        severity: "error",
        text: response.errors,
      })
    );

    status = "error";
  }
  return status;
};
