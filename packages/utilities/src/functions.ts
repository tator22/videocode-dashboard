import { CURRENT_DOMAIN, MEDIA_BASE_URL } from "./apiEndpoints";
import { CONSTANTS } from "./constants";

export function getInitials(name: string) {
  if (!name) return "";

  const nameArray = name.trim().split(" ");
  const initials = nameArray[0][0].toUpperCase();

  // if (nameArray.length > 1) {
  //   initials += nameArray[nameArray.length - 1][0].toUpperCase();
  // }

  return initials;
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case CONSTANTS.ROLE.EDITOR:
      return "--black";
    case CONSTANTS.ROLE.ADMIN:
      return "--information";
    case CONSTANTS.STATUS.ACTIVE:
      return "--active";
    case CONSTANTS.STATUS.INACTIVE:
      return "--inactive";
    case CONSTANTS.STATUS.SUSPENDED:
      return "--error";
    case CONSTANTS.STATUS.ARCHIVED:
      return "--archived";
    case CONSTANTS.STATUS.DISABLED:
    case CONSTANTS.STATUS.CLOSED:
    case CONSTANTS.STATUS.CANCELED:
      return "--error";
    case CONSTANTS.STATUS.UNDER_REVIEW:
      return "--under-review";
    case CONSTANTS.STATUS.OPEN:
      return "--open";
    case CONSTANTS.STATUS.RESOLVED:
      return "--resolved";
    case CONSTANTS.STATUS.IN_PROGRESS:
      return "--warning";

    default:
      return "--black";
  }
};

export const generateAltTextFromImageSource = (src?: string): string => {
  if (!src) return "image";
  const parts = src.split("/").pop()?.split(".")[0] || "image";
  return parts.replace(/[-_]/g, " ");
};

export const getImageUrl = (url: string = ""): string => {
  let path = "";
  if (url) {
    const n = url.includes("http");
    const isMedia = url.includes("media");

    if (n) {
      path = url;
    } else if (isMedia) {
      path = CURRENT_DOMAIN + url;
    } else {
      path = MEDIA_BASE_URL + url;
    }
  }

  return path;
};

/**
 * Fills dynamic route placeholders like ':userId' with actual values from params.
 * Example: generateRoutePath({ url: '/users/:userId', params: { userId: '42' } }) => '/users/42'
 */
export function generateRoutePath({
  url,
  params,
}: {
  url: string;
  params: Record<string, string>;
}): string {
  return url.replace(/:([\w]+)/g, (_, key) => params[key] || `:${key}`);
}

export const getUsageState = (
  used: number,
  limit: number
): {
  percentage: number;
  status: "unlimited" | "neutral" | "warning" | "critical";
  backgroundColor?: string;
  color?: string;
} => {
  // Unlimited case
  if (!limit || limit === Infinity) {
    return {
      percentage: 0,
      status: "unlimited",
      color: "rgb(var(--text-secondary))",
    };
  }

  const percentage = Math.round((used / limit) * 100);

  if (percentage >= 90) {
    return {
      percentage,
      status: "critical",
      backgroundColor: "rgb(var(--error), 0.05)",
      color: "rgb(var(--error))",
    };
  }

  if (percentage >= 70) {
    return {
      percentage,
      status: "warning",
      backgroundColor: "rgb(var(--warning), 0.05)",
      color: "rgb(var(--warning))",
    };
  }

  return {
    percentage,
    status: "neutral",
    backgroundColor: "rgb(var(--success), 0.05)",
    color: "rgb(var(--success))",
  };
};

export const formatKB = (kb: number): string => {
  if (!kb || kb <= 0) return "0 KB";

  const format = (value: number, unit: string) =>
    `${value.toFixed(1).replace(/\.0$/, "")} ${unit}`;

  if (kb >= 1024 * 1024) {
    return format(kb / (1024 * 1024), "GB");
  }

  if (kb >= 1024) {
    return format(kb / 1024, "MB");
  }

  return `${kb} KB`;
};

// /**
//  * Main function: Convert hex → CSS filter
//  */
// export function hexToCssFilter(hex: string): string {
//   // Functions

//   type RGB = { r: number; g: number; b: number };

//   /**
//    * Convert HEX color to RGB.
//    * Throws error if hex is not valid.
//    */
//   function hexToRgb(hex: string): RGB {
//     if (typeof hex !== "string") {
//       throw new TypeError("Color must be a string.");
//     }

//     // Normalize
//     hex = hex.trim().toLowerCase();

//     // Check format #RGB or #RRGGBB
//     const validHex = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
//     if (!validHex.test(hex)) {
//       throw new Error(
//         `Invalid hex color format: "${hex}". Expected "#RGB" or "#RRGGBB".`
//       );
//     }

//     hex = hex.replace(/^#/, "");
//     if (hex.length === 3) {
//       hex = hex
//         .split("")
//         .map((x) => x + x)
//         .join("");
//     }

//     const num = parseInt(hex, 16);
//     return {
//       r: (num >> 16) & 255,
//       g: (num >> 8) & 255,
//       b: num & 255,
//     };
//   }

//   const clamp = (v: number) => Math.max(0, Math.min(255, v));

//   /**
//    * Simulate CSS filters on white (255, 255, 255)
//    */
//   function applyFilters(
//     color: RGB,
//     invert: number,
//     sepia: number,
//     saturate: number,
//     hue: number
//   ): RGB {
//     let { r, g, b } = color;

//     r = (1 - invert / 100) * r + (invert / 100) * (255 - r);
//     g = (1 - invert / 100) * g + (invert / 100) * (255 - g);
//     b = (1 - invert / 100) * b + (invert / 100) * (255 - b);

//     if (sepia > 0) {
//       const tr = 0.393 * r + 0.769 * g + 0.189 * b;
//       const tg = 0.349 * r + 0.686 * g + 0.168 * b;
//       const tb = 0.272 * r + 0.534 * g + 0.131 * b;
//       r = (1 - sepia / 100) * r + (sepia / 100) * tr;
//       g = (1 - sepia / 100) * g + (sepia / 100) * tg;
//       b = (1 - sepia / 100) * b + (sepia / 100) * tb;
//     }

//     const avg = (r + g + b) / 3;
//     r = clamp(avg + (r - avg) * (saturate / 100 + 1));
//     g = clamp(avg + (g - avg) * (saturate / 100 + 1));
//     b = clamp(avg + (b - avg) * (saturate / 100 + 1));

//     const angle = (hue / 180) * Math.PI;
//     const cosA = Math.cos(angle);
//     const sinA = Math.sin(angle);

//     const nr =
//       (0.213 + cosA * 0.787 - sinA * 0.213) * r +
//       (0.715 - cosA * 0.715 - sinA * 0.715) * g +
//       (0.072 - cosA * 0.072 + sinA * 0.928) * b;
//     const ng =
//       (0.213 - cosA * 0.213 + sinA * 0.143) * r +
//       (0.715 + cosA * 0.285 + sinA * 0.14) * g +
//       (0.072 - cosA * 0.072 - sinA * 0.283) * b;
//     const nb =
//       (0.213 - cosA * 0.213 - sinA * 0.787) * r +
//       (0.715 - cosA * 0.715 + sinA * 0.715) * g +
//       (0.072 + cosA * 0.928 + sinA * 0.072) * b;

//     return { r: clamp(nr), g: clamp(ng), b: clamp(nb) };
//   }

//   function colorDiff(c1: RGB, c2: RGB): number {
//     return Math.sqrt(
//       (c1.r - c2.r) ** 2 + (c1.g - c2.g) ** 2 + (c1.b - c2.b) ** 2
//     );
//   }

//   // Main Functions
//   try {
//     const target = hexToRgb(hex);

//     let best = {
//       diff: Infinity,
//       invert: 0,
//       sepia: 0,
//       saturate: 100,
//       hue: 0,
//     };

//     // Brute-force search
//     for (let invert = 0; invert <= 100; invert += 10) {
//       for (let sepia = 0; sepia <= 100; sepia += 10) {
//         for (let saturate = 0; saturate <= 300; saturate += 50) {
//           for (let hue = 0; hue <= 360; hue += 30) {
//             const result = applyFilters(
//               { r: 255, g: 255, b: 255 },
//               invert,
//               sepia,
//               saturate,
//               hue
//             );
//             const diff = colorDiff(result, target);
//             if (diff < best.diff) {
//               best = { diff, invert, sepia, saturate, hue };
//             }
//           }
//         }
//       }
//     }

//     return `invert(${best.invert}%) sepia(${best.sepia}%) saturate(${best.saturate}%) hue-rotate(${best.hue}deg)`;
//   } catch (err) {
//     if (err instanceof Error) {
//       throw new Error("Failed to generate CSS filter: " + err.message);
//     } else {
//       throw new Error("Unknown error occurred while generating CSS filter.");
//     }
//   }
// }
