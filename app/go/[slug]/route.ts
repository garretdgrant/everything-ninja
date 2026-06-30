const affiliateLinks = {
  "ninja-creami": "https://amzn.to/4eDI4YB",
  "ninja-indoor-grill": "https://amzn.to/4eLGpiw",
} as const;

type AffiliateSlug = keyof typeof affiliateLinks;

function getAffiliateUrl(slug: string) {
  return affiliateLinks[slug as AffiliateSlug];
}

function redirectToAffiliate(slug: string) {
  const affiliateUrl = getAffiliateUrl(slug);

  if (!affiliateUrl) {
    return new Response("Affiliate link not found.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return Response.redirect(affiliateUrl, 302);
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  return redirectToAffiliate(slug);
}

export async function HEAD(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  return redirectToAffiliate(slug);
}
