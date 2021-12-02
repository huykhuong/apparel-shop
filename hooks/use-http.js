import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      status: "pending",
      data: null,
      error: null,
    };
  }
  if (action.type === "SUCCESS") {
    return {
      status: "completed",
      data: action.responseData,
      error: null,
    };
  }
  if (action.type === "ERROR") {
    return {
      status: "completed",
      data: null,
      error: action.errorMessage,
    };
  }
  return state;
};

const useHttp = (isLoading = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: isLoading ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(async (apiRoute, requestMethod) => {
    dispatch({ type: "SEND" });
    try {
      const responseData = await fetch(apiRoute, requestMethod);
      dispatch({ type: "SUCCESS", responseData: responseData });
    } catch (error) {
      dispatch({
        type: "ERROR",
        errorMessage: error.message || "Something went wrong",
      });
    }
  }, []);

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
