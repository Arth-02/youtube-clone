export function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
  const button = event.currentTarget;

  let ripple: HTMLSpanElement = document.createElement("span");

  // Add ripple class to span
  ripple.classList.add(
    "ripple",
    "bg-hoveractive",
    "absolute",
    "rounded-full",
    "w-[100px]",
    "h-[100px]",
    "-mt-[50px]",
    "-ml-[50px]",
    "opacity-0",
    "animate-ripple"
  );

  // Add span to the button
  button.appendChild(ripple);

  // Get the size of the button
  const rect: DOMRect = button.getBoundingClientRect();

  // Get the mouse cursor position
  let x: number = event.clientX - rect.left;
  let y: number = event.clientY - rect.top;

  // Position the span element
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Remove span after 0.3s
  setTimeout(() => {
    ripple.remove();
  }, 300);
}
