const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

class Element {
  constructor() { this.children = []; this.value = "all"; this.textContent = ""; this.events = {}; }
  append(...items) { this.children.push(...items); }
  replaceChildren(...items) { this.children = items; }
  addEventListener(event, handler) { this.events[event] = handler; }
}
const elements = new Map();
const document = {
  getElementById(id) {
    if (!elements.has(id)) elements.set(id, new Element());
    return elements.get(id);
  },
  createElement() { return new Element(); }
};
const context = vm.createContext({ document, localStorage: { getItem: () => null }, console });
const appPath = process.argv[2];
for (const file of ["collection.js", "discovery-details.js"])
  vm.runInContext(fs.readFileSync(path.join(appPath, file), "utf8"), context);
for (const file of ["arokor-catalog.js", "discover.js"])
  vm.runInContext(fs.readFileSync(path.join(process.argv[3] || appPath, file), "utf8"), context);
function choose(id, value) {
  const element = document.getElementById(id);
  element.value = value;
  element.events.change();
}
function titles() { return document.getElementById("discoveryResults").children.map((card) => card.children[1].textContent); }
choose("catalogSource", "arokor");
assert.equal(titles().length, 5);
assert.equal(new Set(titles()).size, 5);
assert.equal(vm.runInContext("arokorCatalog.products.length", context), 369);
assert.equal(vm.runInContext("new Set(arokorCatalog.recommendations.flatMap(item => item.variants.map(v => v.product_id))).size", context), 369);
assert.equal(vm.runInContext("arokorCatalog.recommendations.flatMap(item => item.variants).length", context), 369);
assert(vm.runInContext("arokorCatalog.recommendations.length > 4", context));
choose("accordPreference", "unknown");
const cards = document.getElementById("discoveryResults").children;
assert(cards.every((card) => card.children[3].textContent.includes("확인 전")));
assert(cards.every((card) => card.children[4].textContent.includes("원")));
assert(cards.every((card) => card.children[7].children[3].textContent.includes("정보 출처: 확인 전")));
assert(cards.every((card) => !card.children[7].children[3].textContent.includes("브랜드 공식 설명")));
choose("scentPreference", "fresh");
assert.equal(titles().length, 0); // unknown scents cannot masquerade as fresh
choose("scentPreference", "all");
choose("accordPreference", "시트러스");
assert.equal(titles().length, 1);
assert(titles()[0].includes("보헤미안 라임"));
document.getElementById("refreshDiscovery").events.click();
assert.equal(titles().length, 1); // a small pool can be refreshed
vm.runInContext("perfumes.push({ brand: 'Goldfield & Banks', name: 'Bohemian Lime', profile: 'fresh' })", context);
choose("accordPreference", "시트러스");
assert.equal(titles().length, 0); // owned fragrance is excluded
choose("accordPreference", "구르망");
assert.equal(titles().length, 1);
assert(titles()[0].includes("실키 우드"));
vm.runInContext("discoveryCatalog.find(item => item.name === 'Silky Woods').soldOut = true", context);
choose("accordPreference", "구르망");
assert.equal(titles().length, 0); // entirely sold-out scents are excluded
assert.notEqual(vm.runInContext("fragranceKey('보헤미안 라임')", context), "");
console.log("PASS: all 369 products covered once, unconfirmed labels and provenance, accord filters, refresh, ownership, and stock");
