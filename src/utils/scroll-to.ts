export const scrollToY = (yPosition: number = 0) => {
  scroll({ top: yPosition, behavior: "smooth" });
}
