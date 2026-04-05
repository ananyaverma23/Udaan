const MOBILE_DEVICE_PATTERN =
  /Android|iPhone|iPad|iPod|IEMobile|Opera Mini|Windows Phone/i;

const isMobileDevice = () => {
  if (typeof navigator === "undefined") return false;

  return (
    MOBILE_DEVICE_PATTERN.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
};

export const openWhatsAppChat = ({ phone, text }) => {
  if (typeof window === "undefined") return;

  const encodedText = encodeURIComponent(text);
  const appUrl = `whatsapp://send?phone=${phone}&text=${encodedText}`;
  const webUrl = `https://wa.me/${phone}?text=${encodedText}`;

  if (!isMobileDevice()) {
    window.open(webUrl, "_blank", "noopener,noreferrer");
    return;
  }

  let appOpened = false;

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      appOpened = true;
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange, {
    once: true,
  });

  window.location.href = appUrl;

  window.setTimeout(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);

    if (!appOpened && document.visibilityState === "visible") {
      window.location.href = webUrl;
    }
  }, 1200);
};
