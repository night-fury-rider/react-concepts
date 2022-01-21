const useThrottling = (callback, limit) => {
  let isEnabled = true;

  return function () {
    let context = this;
    let arg = arguments;

    if (isEnabled) {
      callback.apply(context, arg);
      isEnabled = false;

      setTimeout(() => {
        isEnabled = true;
      }, limit);
    }
  };
};

export default useThrottling;
