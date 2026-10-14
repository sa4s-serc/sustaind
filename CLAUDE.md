# SustAInd website

Next.js static export for the SustAInd project, served by GitHub Pages from `docs/`. See `ARCHITECTURE.md` for the original design brief.

## Build and deploy

- `npm run dev` for local work, `npm run build` to export into `docs/`. The built `docs/` folder is committed alongside source changes.
- Because `distDir` is `docs`, `next dev` writes its cache to `docs/dev/`. It is gitignored. Never stage it, and stop the dev server before committing.
- `public/.nojekyll` must stay so the export keeps `docs/.nojekyll`.
- Page data lives in `public/data/*.json` and is fetched at runtime with relative paths (`./data/...`).

## Adding a publication

1. Add an entry to `public/data/publications.json` with `id` (`<shortname>-<year>`), `shortTitle`, `title`, `authors`, `abstract` (labelled parts separated by `\n\n`), `venue` as stated by the paper, `year`, `doi`, `url`, `coverImage` and `keywords`.
2. Render the first page of the PDF as the cover. Keep the PDF in its own scratch directory, outside the repo.
   `pdftoppm -f 1 -l 1 -r 150 -jpeg -jpegopt quality=85 -singlefile paper.pdf public/data/images/publications/<id>`
3. Look at the rendered image before committing it.

## Extracting best practices from a paper

The `/practices` page (`public/data/practices.json`, rendered by `src/app/practices/page.tsx`) holds short advice drawn only from the group's own papers. Each item links back to its paper on `/publications#<id>`.

### Read the whole paper

Read the full text from arXiv HTML or the PDF, not the abstract. Results, threats to validity and future-work sections are where most usable advice sits. Note the section and the exact numbers behind every candidate.

### Pick the audience

- **Practitioners** (categories `measurement`, `code`, `agents`, `models`, `inference`, `mlops`, `adaptation`) are developers acting on conclusions. They work on shared machines and cloud VMs, so advice must be something they can do there. Lab-bench procedures such as disabling Turbo Boost or adding cooldown periods do not belong here.
- **Researchers** (categories `study-design`, `research-measurement`, `reporting`, `open-problems`) design studies. Study methods and the open problems a paper names go here.

A paper can feed both lists. Add a new category to the `categories` array in `page.tsx` only when an item clearly fits none of the existing ones.

### Keep only strong items

Quality over quantity. Aim for roughly 2 to 6 items per paper per audience. Drop an item if it

- rests on motivation, a hypothesis or other groups' prior work rather than this paper's own results or method,
- repeats something already on the page (merge it into the stronger item instead),
- is too generic to change what anyone does, or
- depends on a weak or caveated result. For example, correlations below about 0.3 are signals to check, not causes.

### Label each item honestly

`basis` is one of

- `measured` when the paper's own experiment backs it,
- `design` when it is a method choice, protocol or recommendation, and
- `open` when the paper names it as an open problem or future work.

A registered report or proposal has no results, so its items are `design` or `open` and must never be phrased as findings. If the paper's text and its tables disagree, use the table value or leave the claim out.

### Write the item

Each entry has `id`, `category`, `advice`, `detail`, `paper` (the publication id) and `basis`.

- `advice` is one imperative sentence under about 20 words.
- `detail` is one or two sentences giving the evidence with concrete numbers.
- No colons or semicolons joining clauses, and no em dashes.
- No lists of exactly three items. Use two or four, or split the sentence.
- Avoid the patterns in Wikipedia's "Signs of AI writing", such as puffery and "not just X but Y" phrasing.

Items are numbered by their order within each audience in `practices.json`, so place new entries next to related ones.

### Check before committing

Run `npx tsc --noEmit`, `npx eslint src/app/practices` and `npm run build`, then view `/practices` with each audience selected.
