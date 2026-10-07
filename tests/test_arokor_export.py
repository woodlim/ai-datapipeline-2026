import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("export_arokor", ROOT / "chapt999/export_arokor.py")
exporter = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(exporter)


class CatalogTests(unittest.TestCase):
    def test_volume_grouping_keeps_sets_and_concentrations_distinct(self):
        identity = exporter.product_identity
        self.assertEqual(identity("SOSPIRO 바쏘 100ml"), identity("SOSPIRO 바쏘 15ml"))
        self.assertNotEqual(identity("GOLDFIELD & BANKS 실키 우드 100ml"),
                            identity("GOLDFIELD & BANKS 실키 우드 엘릭서 100ml"))
        self.assertTrue(identity("GOLDFIELD & BANKS 컬렉션 3x10ml")[1].endswith("3x10ml"))
        self.assertNotEqual(identity("SOSPIRO 바쏘 EDP 100ml"), identity("SOSPIRO 바쏘 EDT 100ml"))

    def test_new_volume_joins_existing_unconfirmed_group(self):
        products = [{"product_id": 1, "name": "GOLDFIELD & BANKS 새로운 향 100ml"},
                    {"product_id": 2, "name": "GOLDFIELD & BANKS 새로운 향 10ml"}]
        metadata = [{"brand": "Goldfield & Banks", "name": "새로운 향",
                     "profile": "unknown", "product_ids": [1]}]
        result = exporter.complete_enrichment(products, metadata)
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]["product_ids"], [1, 2])

    def test_real_catalog_contains_every_product_once(self):
        catalog = exporter.build_catalog(ROOT / "data/arokor_products.csv", ROOT / "data/arokor_enrichment.json")
        original = {item["product_id"] for item in catalog["products"]}
        mapped = [item["product_id"] for group in catalog["recommendations"] for item in group["variants"]]
        self.assertEqual(set(mapped), original)
        self.assertEqual(len(mapped), len(original))
        self.assertEqual(catalog["verifiedCount"], 4)
        for item in catalog["recommendations"]:
            if not item["scentVerified"]:
                self.assertEqual(item["profile"], "unknown")
                self.assertEqual(item["accords"], [])
                self.assertIsNone(item["source"])
                self.assertIsNone(item["top"])


if __name__ == "__main__":
    unittest.main()
