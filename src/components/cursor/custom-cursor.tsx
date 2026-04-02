import { CustomCursorRoot } from "./custom-cursor.styles";
import { useCustomCursor } from "./use-custom-cursor";

export function CustomCursor() {
  const { isActive, isEnabled, isVisible, x, y } = useCustomCursor();

  if (!isEnabled) {
    return null;
  }

  return (
    <CustomCursorRoot
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isActive ? 0.82 : 1,
        x: x - 17,
        y: y - 17
      }}
      aria-hidden="true"
      initial={false}
      transition={{
        opacity: { duration: 0.16, ease: "linear" },
        scale: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
        x: { damping: 30, stiffness: 420, type: "spring" },
        y: { damping: 30, stiffness: 420, type: "spring" }
      }}
    />
  );
}
