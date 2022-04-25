export const displayCountry = (name) => {
  const region = new Intl.DisplayNames(["en"], { type: "region" });
  return name && region.of(name);
};
