let options = {
  root: null, // document.body
  rootMargin: "0px",
  threshold: 0,
};

export default function (entries) {
  // Check if `IntersectionObserver` is available
  if (typeof IntersectionObserver === "undefined") {
    console.warn(`IntersectionObserver is not supported in this browser`);

    return null;
  }

  return new IntersectionObserver(entries, options);
}
