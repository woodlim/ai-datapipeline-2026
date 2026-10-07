const discoveryCatalog = [
  {
    brand: "Diptyque", name: "Philosykos EDT", profile: "green",
    description: "무화과나무의 초록빛 분위기를 탐색하고 싶을 때 시향해 볼 후보예요.",
    url: "https://www.diptyqueparis.com/en_eu/p/edt-ml-51.html"
  },
  {
    brand: "Jo Malone London", name: "Wood Sage & Sea Salt Cologne", profile: "green",
    description: "우디 계열의 흙내음과 미네랄 느낌을 탐색하고 싶을 때 시향해 볼 후보예요.",
    url: "https://www.jomalone.com.hk/en-e-hk/scents/woody/wood-sage-sea-salt"
  },
  {
    brand: "Diptyque", name: "Eau Rose EDT", profile: "soft",
    description: "장미를 중심으로 한 플로럴 향을 탐색하고 싶을 때 시향해 볼 후보예요.",
    url: "https://diptyqueparis.com/en-eu/products/eau-de-toilette-eau-rose-rose100v2"
  },
  {"brand": "Heeley", "name": "Athenean", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "White Powder", "profile": "soft", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Cardinal", "profile": "warm", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Esprit du Tigre", "profile": "warm", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Hippie Rose", "profile": "soft", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Iris de Nuit", "profile": "soft", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "L’Amandière", "profile": "soft", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Menthe Fraîche", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Note de Yuzu", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Officinale", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Palm", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Pomelo Crush", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Saint Clement’s", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Sel Marin", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Verveine d’Eugène", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Vetiver Veritas", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Heeley", "name": "Ginger Zest", "profile": "green", "description": "새로운 향의 분위기를 탐색할 시향 후보예요. 구체적인 향 구성은 브랜드 공식 설명에서 확인해 보세요.", "url": "https://www.heeley.com/en/shop/category/eau-de-parfum-97"},
  {"brand": "Papillon", "name": "Spell 125", "profile": "green", "description": "소나무와 유향을 중심으로 숲과 수지 향의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Bengale Rouge", "profile": "warm", "description": "꿀과 바닐라, 장미와 샌들우드의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Hera", "profile": "soft", "description": "자스민과 오렌지 블로섬 등 꽃향의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Epona", "profile": "warm", "description": "가죽과 건초, 바이올렛의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Anubis", "profile": "warm", "description": "스웨이드와 유향, 사프란의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Dryad", "profile": "green", "description": "갈바넘과 오크모스, 베티버의 초록빛 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Salome", "profile": "warm", "description": "장미와 자스민, 머스크의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Angélique", "profile": "soft", "description": "오스만투스와 미모사, 아이리스의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Papillon", "name": "Tobacco Rose", "profile": "soft", "description": "장미와 오크모스, 밀랍의 조합을 탐색해 보세요.", "url": "https://papillonperfumery.co.uk/"},
  {"brand": "Hiram Green", "name": "Arbolé", "profile": "green", "description": "기존 보유 브랜드에서 벗어나 새로운 향을 탐색할 시향 후보예요.", "url": "https://hiramgreen.com/products/arbole"}
];

// Product listings checked on Korean official stores, 2026-10-06.
// Listing confirmation is not a live stock check.
const domesticListings = {
  "Philosykos EDT": ["https://m.shinsegaev.com/goods/initDetailGoods.siv?goods_no=2212602086", "국내 공식 수입사 · 신세계V"],
  "Eau Rose EDT": ["https://www.shinsegaev.com/goods/initDetailGoods.siv?goods_no=2301627333", "국내 공식 수입사 · 신세계V"],
  "Wood Sage & Sea Salt Cologne": ["https://www.jomalone.co.kr/wood-sage-sea-salt", "조 말론 런던 한국 공식몰"]
};
const byredoKorea = "https://www.shinsegaev.com/dispctg/initBrandGoodsCtg.siv?disp_ctg_no=2510205746&lnb_disp_ctg_no=010000003451&page_gubun=normal";
for (const [name, profile] of [["Super Cedar", "green"], ["Black Saffron", "warm"], ["Desert Dawn", "warm"], ["Young Rose", "soft"], ["Accord Oud", "warm"], ["1996 Inez & Vinoodh", "warm"], ["Pulp", "fresh"]]) {
  discoveryCatalog.push({ brand: "Byredo", name, profile,
    description: "국내 공식 판매 목록에서 확인한 시향 후보예요. 익숙한 향수에서 벗어나 새로운 제품을 탐색해 보세요." });
  domesticListings[name] = [byredoKorea, "국내 공식 수입사 · 신세계V 제품 목록"];
}
for (const perfume of discoveryCatalog) {
  const listing = domesticListings[perfume.name];
  perfume.domesticUrl = listing?.[0];
  perfume.domesticLabel = listing?.[1];
}

// All scraped products; missing scent metadata stays explicitly unconfirmed.
for (const perfume of arokorCatalog.recommendations) {
  const existing = discoveryCatalog.find((item) =>
    item.brand === perfume.brand && item.name === perfume.name);
  if (existing) Object.assign(existing, perfume);
  else discoveryCatalog.push(perfume);
}

// Treat concentration variants as the same owned fragrance for discovery.
function fragranceKey(name) {
  return name.normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/\b(eau de parfum|eau de toilette|edp|edt|cologne)\b/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "");
}

let previousKeys = new Set();
function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function renderDiscovery() {
  const preference = document.getElementById("scentPreference").value;
  const accord = document.getElementById("accordPreference").value;
  const catalogSource = document.getElementById("catalogSource").value;
  const ownedNames = new Set(perfumes.map((perfume) => fragranceKey(perfume.name)));
  const eligible = discoveryCatalog.filter((perfume) =>
    ![perfume.name, perfume.localName, ...(perfume.variants || []).map((item) => item.name)]
      .filter(Boolean).some((name) => ownedNames.has(fragranceKey(name))) &&
    !perfume.soldOut &&
    (catalogSource === "all" || perfume.catalogSource === catalogSource) &&
    (accord === "all" || (accord === "unknown"
      ? !perfume.accords?.length : perfume.accords?.includes(accord))));
  let available = eligible.filter((perfume) => !previousKeys.has(fragranceKey(perfume.name)));
  // Small filtered catalogs cycle once all candidates have been shown.
  if (!available.length && eligible.length) {
    previousKeys = new Set();
    available = eligible;
  }
  const preferred = shuffled(available.filter((perfume) => preference === "all" || perfume.profile === preference));
  const others = shuffled(available.filter((perfume) => preference !== "all" &&
    preference !== "unknown" && perfume.profile !== "unknown" && perfume.profile !== preference));
  // Round-robin brands so one large brand catalogue does not dominate the batch.
  function varied(pool) {
    const groups = new Map();
    for (const perfume of pool) {
      if (!groups.has(perfume.brand)) groups.set(perfume.brand, []);
      groups.get(perfume.brand).push(perfume);
    }
    const output = [];
    while ([...groups.values()].some((group) => group.length)) {
      for (const group of groups.values()) if (group.length) output.push(group.shift());
    }
    return output;
  }
  // Domestic availability takes priority, then scent preference and brand variety.
  const candidates = [
    ...varied(preferred.filter((perfume) => perfume.domesticUrl)),
    ...varied(others.filter((perfume) => perfume.domesticUrl)),
    ...varied(preferred.filter((perfume) => !perfume.domesticUrl)),
    ...varied(others.filter((perfume) => !perfume.domesticUrl))
  ].slice(0, 5);
  const supplemented = preference !== "all" && candidates.some((perfume) => perfume.profile !== preference);
  previousKeys = new Set(candidates.map((perfume) => fragranceKey(perfume.name)));
  document.getElementById("discoveryCount").textContent = `보유 향수·직전 추천 제외 · 새로운 후보 ${candidates.length}개 / 전체 ${discoveryCatalog.length}개` +
    (supplemented ? " · 선택한 분위기 후보가 부족해 다른 분위기도 함께 제안해요." : "");
  const results = document.getElementById("discoveryResults");
  results.replaceChildren();
  for (const perfume of candidates) {
    const card = document.createElement("article");
    card.className = "card";
    const brand = document.createElement("p");
    brand.className = "brand";
    brand.textContent = perfume.brand;
    const name = document.createElement("h2");
    name.textContent = perfume.localName ? `${perfume.localName} · ${perfume.name}` : perfume.name;
    const reason = document.createElement("p");
    reason.className = "reason";
    reason.textContent = perfume.description;
    const link = document.createElement("a");
    link.className = "product-link";
    if (perfume.domesticUrl) link.href = perfume.domesticUrl;
    link.hidden = !perfume.domesticUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `${perfume.domesticLabel || "국내 공식 설명"} ↗`;
    const availability = document.createElement("p");
    availability.className = "status";
    availability.textContent = perfume.catalogSource === "arokor"
      ? "아로코 수집 목록 · 가격과 현재 재고는 판매처에서 확인하세요."
      : perfume.domesticUrl
      ? "국내 공식 판매 목록 확인 · 2026-10-06 · 현재 재고는 판매처에서 확인하세요."
      : "국내 판매처·공식 설명 링크 확인 전";
    const detail = perfume.catalogSource === "arokor" ? perfume : discoveryDetails[perfume.name];
    const accordText = document.createElement("p");
    accordText.className = "status";
    accordText.textContent = detail?.accords?.length
      ? `주요 어코드: ${detail.accords.join(" · ")} (${detail.accordBasis})`
      : "주요 어코드: 확인 전";
    const priceText = document.createElement("p");
    priceText.className = "status";
    priceText.hidden = !perfume.variants;
    priceText.textContent = (perfume.variants || []).map((item) => {
      const volume = item.name.match(/\d+\s*ml\b/i)?.[0] || "용량 확인 전";
      return `${volume}: ${item.price == null ? "가격 확인 전" : item.price.toLocaleString("ko-KR") + "원"}${item.sold_out ? " (수집 당시 품절)" : ""}`;
    }).join(" · ");
    const intro = document.createElement("div");
    intro.className = "fragrance-intro";
    const introTitle = document.createElement("h3");
    introTitle.textContent = "어떤 향수인가요?";
    const introText = document.createElement("p");
    introText.textContent = detail?.intro || `${perfume.brand}의 ${perfume.name}입니다. 제품의 구체적인 향 구성은 아직 확인 전이에요.`;
    intro.append(introTitle, introText);
    const notes = document.createElement("dl");
    notes.className = "note-pyramid";
    for (const [label, value] of [["탑 · 첫인상", detail?.top], ["미들 · 중심 향", detail?.middle], ["베이스 · 잔향", detail?.base]]) {
      const term = document.createElement("dt");
      term.textContent = label;
      const definition = document.createElement("dd");
      definition.textContent = value || (detail?.main ? "공식 자료에 단계 구분 없음" : "공식 단계별 노트 확인 전");
      notes.append(term, definition);
    }
    if (detail?.main) {
      const term = document.createElement("dt"); term.textContent = "공식 주요 노트";
      const definition = document.createElement("dd"); definition.textContent = detail.main;
      notes.append(term, definition);
    }
    const evaluation = document.createElement("div");
    evaluation.className = "discovery-review";
    const reviewTitle = document.createElement("h3");
    reviewTitle.textContent = "시향 포인트 · 편집 의견";
    const review = document.createElement("p");
    review.textContent = detail?.review || "아직 제품별 평가를 작성하지 않았어요. 공식 설명을 참고해 피부에서 첫 향과 잔향을 비교해 보세요.";
    const rating = document.createElement("p");
    rating.className = "status";
    rating.textContent = detail?.rating || "외부 평점·평가 수: 미연동";
    evaluation.append(reviewTitle, review, rating);
    const provenance = document.createElement("p");
    provenance.className = "status";
    provenance.textContent = perfume.catalogSource === "arokor" && !perfume.scentVerified
      ? "향 노트·어코드·정보 출처: 확인 전. 상품명과 가격은 아로코 수집 목록 기준입니다."
      : detail ? `노트: 브랜드 공식 설명 · 확인일 ${detail.checkedAt || "2026-10-06"}. 시향 포인트는 노트를 해석한 편집 의견입니다.` + (detail.noteBasis ? " " + detail.noteBasis : "") : "노트·제품별 평가 자료 확인 전";
    if (detail?.source) {
      const sourceLink = document.createElement("a");
      sourceLink.href = detail.source;
      sourceLink.target = "_blank";
      sourceLink.rel = "noopener noreferrer";
      sourceLink.textContent = " 브랜드 향 정보 출처 ↗";
      provenance.append(sourceLink);
    }
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.className = "details-toggle";
    summary.textContent = "향 노트와 시향 포인트 살펴보기";
    details.append(summary, notes, evaluation, provenance);
    card.append(brand, name, availability, accordText, priceText, reason, intro, details, link);
    results.append(card);
  }
  if (!candidates.length) results.textContent = "이 조건에 맞는 새로운 향수 후보가 없어요. 다른 분위기를 선택해 주세요.";
}

const accordSelect = document.getElementById("accordPreference");
for (const accord of [...new Set(arokorCatalog.recommendations.flatMap((item) => item.accords))].sort()) {
  const option = document.createElement("option");
  option.value = accord;
  option.textContent = accord;
  accordSelect.append(option);
}
for (const id of ["scentPreference", "accordPreference", "catalogSource"]) {
  document.getElementById(id).addEventListener("change", () => {
    previousKeys = new Set();
    renderDiscovery();
  });
}
document.getElementById("refreshDiscovery").addEventListener("click", renderDiscovery);
renderDiscovery();
