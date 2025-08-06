const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

export async function fetchHeaderFooter() {
  const query = `
    query GlobalLayout {
      headerAndFooterCollection(limit: 1) {
        items {
          headerMenu1
          headerMenu2
          headerMenu3
          headerMenu4
          headerMenu5
          headerCtaButtonCollection {
            items {
              primaryCtaLabel
              primaryCtaUrl
            }
          }
          footerMenu1
          footerSubMenu1A
          footerSubMenu1B
          footerSubMenu1C
          footerSubMenu1D
          footerMenu2
          footerSubMenu2A
          footerSubMenu2B
          footerSubMenu2C
          footerSubMenu2D
        }
      }
    }
  `;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const { data } = await response.json();
  const items = data?.headerAndFooterCollection?.items?.[0] || {};
  return {
    headerData: {
      menu: [
        items.headerMenu1,
        items.headerMenu2,
        items.headerMenu3,
        items.headerMenu4,
        items.headerMenu5,
      ].map(item => item ?? null),
      ctaButtons: items.headerCtaButtonCollection?.items || [],
    },
    footerData: {
      menu1: items.footerMenu1 ?? null,
      subMenu1: [
        items.footerSubMenu1A,
        items.footerSubMenu1B,
        items.footerSubMenu1C,
        items.footerSubMenu1D,
      ].map(item => item ?? null),
      menu2: items.footerMenu2 ?? null,
      subMenu2: [
        items.footerSubMenu2A,
        items.footerSubMenu2B,
        items.footerSubMenu2C,
        items.footerSubMenu2D,
      ].map(item => item ?? null),
    },
  };
}