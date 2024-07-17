const buildConfig = () => {
  const appId = process.env.NEXT_PUBLIC_APP_ID;
  if (!appId) throw new Error("NEXT_PUBLIC_APP_ID is missing");
  const name = process.env.NEXT_PUBLIC_APP_DISPLAY_NAME || "Travel.";
  const copyright = process.env.NEXT_PUBLIC_APP_COPYRIGHT || "Samantha";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "Travel with Samantha";
  const defaultDescription = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Blog about travel and lifestyle.";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    app: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      appId,
    },
  };
};

export const config = buildConfig();
