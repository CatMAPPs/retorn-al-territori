Given your **scale goal (1000+ figures)**, your need for:

* structured metadata (lat/lon, birth year, aliases)
* validation accuracy (coordinates + dates must be correct for scoring)
* long-term maintainability
* geographic + category balancing

The correct choice is:

## ✅ **4. Hybrid approach**

Here’s why — strategically, not just technically.

---

# Why Hybrid Is the Right Move

## 1️⃣ Pure AI-generated (Option 1) is too risky

LLMs:

* Hallucinate coordinates
* Sometimes give wrong birth years
* Struggle with exact hometown precision (you need lat/lon accuracy for scoring)
* Will create inconsistent alias formats

For a scoring-based geography game like **HistoGuesser**, bad coordinates = broken scoring logic.

This is especially dangerous when you’re calculating Haversine distance.

---

## 2️⃣ Pure Wikipedia scraping (Option 2) isn’t enough

Wikipedia infoboxes are:

* Inconsistent across pages
* Structured differently by category
* Often missing coordinates
* Sometimes missing aliases

You’d still need cleanup logic and normalization layers.

Also:
You want **humorous descriptions**, difficulty tags, and curated balancing — scraping alone won’t give you that.

---

## 3️⃣ Manual curation (Option 3) doesn’t scale

1000 figures manually curated = brutal time sink.

You’ll bottleneck Phase 2 immediately.

---

# 🧠 Why Hybrid Is Ideal for Your Battle Plan

Hybrid fits perfectly with Phase 2 + Phase 3 architecture in your battle plan:

### Step 1 — AI generates candidates

Use LLM to:

* Propose balanced lists per category
* Suggest difficulty classification
* Generate 50–100 word engaging descriptions
* Generate alias suggestions
* Suggest likely birthplace

### Step 2 — Script validates & enriches from Wikipedia API

Your script should:

* Pull birth_year from infobox
* Pull birthplace page
* Extract coordinates from birthplace page
* Confirm canonical name
* Confirm page existence
* Verify not duplicate
* Standardize formats

### Step 3 — You review edge cases

Only review:

* Failed validations
* Missing coordinates
* Weird edge cases
* Figures with conflicting data

That reduces manual review workload to maybe 10–15%.

---

# 🔥 Architecturally This Is Powerful Because:

It gives you:

| Concern              | Solved By                          |
| -------------------- | ---------------------------------- |
| Scale to 1000+       | AI candidate generation            |
| Data accuracy        | Wikipedia validation script        |
| Scoring integrity    | Structured coordinate verification |
| Engaging blurbs      | AI generation                      |
| Alias richness       | AI + infobox extraction            |
| Category balance     | AI-driven planning                 |
| Geographic diversity | Validation script metrics          |

---

# 🛠 Recommended Implementation Flow (Concrete)

## Phase 2.1 — AI Candidate Generator

Create:

```
scripts/generate-figure-candidates.ts
```

Prompt it like:

* “Give me 100 notable scientists from Asia”
* Include birth year
* Include birthplace city
* Include 3 aliases
* Include difficulty level

Output JSON.

---

## Phase 2.2 — Wikipedia Validation Script

Create:

```
scripts/validate-figure-wikipedia.ts
```

For each figure:

1. Use Wikipedia API (NOT HTML scraping)
2. Fetch page summary
3. Fetch infobox data
4. Extract:

   * birth date
   * birth place
5. If birthplace page exists:

   * fetch coordinates
6. Normalize:

   * year → integer
   * lat/lon → float
7. If missing required data → flag

---

## Phase 2.3 — Metadata Enrichment

After validation:

* Generate humorous description via LLM
* Auto-generate tags:

  * continent
  * era bucket (ancient/medieval/modern)
  * category
* Auto-generate transliteration aliases where needed

---

# 📊 Why This Fits Your Long-Term Vision

Your PRD defines:

* 1000+ figures
* Category filtering
* Difficulty tiers
* Geographic balancing
* Automated pipelines
* Quality gates every 100 figures

Hybrid supports all of that cleanly.

Pure scraping won’t help with:

* Difficulty balancing
* Game feel
* Description tone consistency

Pure AI won’t help with:

* Scoring accuracy
* Data correctness
* Trustworthiness

---

# 🎯 My Direct Recommendation

Choose:

> **4. Hybrid approach**

And implement it as:

> AI for candidate generation + Wikipedia API validation + manual review only for failures.

This aligns perfectly with your:

* Phase 2 (Research pipeline)
* Phase 3 (Automated integration)
* Image fallback system
* Quality gate strategy

---

If you’d like, I can next:

* Design the exact validation architecture
* Or draft the `research-figures.ts` pipeline structure
* Or design a clean Wikipedia extraction strategy

This is a critical architectural decision — and hybrid gives you both scale and integrity.
