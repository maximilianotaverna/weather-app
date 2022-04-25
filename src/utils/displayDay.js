export const displayDay = (name) => {
  let day =
    name &&
    new Intl.DateTimeFormat("en-Us", { weekday: "long" }).format(
      new Date(name)
    );
  return day;
};
