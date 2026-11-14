# PROJECT GHOST
**Galactic History of Our Silent Travelers** — an interactive 3D archive concept for NASA Space Apps Challenge 2026.

## What is included
- Interactive Three.js solar-system schematic (explicitly not to scale).
- Destination index and artifact catalogue.
- Filters for destination and mission status.
- Mission detail records with source links and precision notes.
- A local, curated Archive Guide (not a generative AI service).
- Responsive layout.

## Run locally
Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```
Open the local URL printed by Vite. To create a production build:

```bash
npm run build
npm run preview
```

## Important data and science notes
- This is a hackathon prototype and a starter collection, not a complete inventory.
- The solar-system scene is a navigation illustration, **not to scale**. Planet positions, sizes and orbital spacing are illustrative.
- Location statements are regional descriptions, not live coordinates.
- "Inactive", "active", and "destroyed" are distinct states. Voyager 1 and Voyager 2 are included as active/communicating examples, not as abandoned machines. Verify their current status before final presentation.
- Cassini was a NASA-led partnership mission with ESA and ASI; its planned atmospheric disposal is not a surface abandonment.
- Galileo's atmospheric probe entered Jupiter's atmosphere; it was not a lander.
- Some records link to NASA mission pages and the NASA NSSDCA Master Catalog. **Before submission, compare the challenge's official Resources tab and integrate at least one NASA data source listed there. Merely citing a general NASA page may not meet the challenge's Global Award data requirement.**
- Check every fact, date, status, location, and credit against the primary source before submission. Replace or remove any record that cannot be verified.

## Suggested next engineering steps
1. Add a genuine NASA dataset from the challenge Resources tab, with a visible in-app "Data used" panel and reproducible import script.
2. Replace schematic celestial bodies with licensed NASA imagery / data-derived textures, with exact asset credits.
3. Add 3D artifact models only where a trustworthy model and usage terms are available.
4. Add a grounded LLM assistant only if the team can provide retrieval citations and a clear fallback when sources are missing.
5. Add tests for status labels, source links, and record completeness.

## AI disclosure (edit to match what the team actually used)
"AI assistance was used to help draft code, structure the interface, and prepare initial explanatory text. The team reviewed, tested, and edited the implementation and must independently verify all scientific statements. Any AI-generated images or video used in the final project must carry a visible AI-generated watermark. No AI-generated NASA logos, flags, or mission identifiers are used."

## Credits
- NASA mission pages linked in each artifact record.
- NASA National Space Science Data Center (NSSDCA) Master Catalog: https://nssdc.gsfc.nasa.gov/nmc/
- Three.js: https://threejs.org/
- Vite: https://vite.dev/

This is an independent student project and is not affiliated with or endorsed by NASA.
