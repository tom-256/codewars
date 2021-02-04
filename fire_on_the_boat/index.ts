export function fireFight(s: string) {
  return s
    .split(" ")
    .map((x) => {
      return x.replace("Fire", "~~");
    })
    .join(" ");
}
