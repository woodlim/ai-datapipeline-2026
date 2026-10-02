# Repository Guidelines

## Project Structure & Module Organization
This repository contains Korean-language, notebook-based data pipeline lessons rather than a packaged application.
- `chapt01/`: NumPy and introductory pandas notebooks.
- `chapt02/`: pandas data cleaning, processing, and aggregation lessons.
- `chapt03/`: visualization with Matplotlib and Seaborn.
- `chapt04/`: HTML examples and Selenium scraping notebooks; local fixtures include `products.html` and `dynamic_products.html`.
- `data/`: shared CSV, Excel, and text datasets, including scraping outputs.
- `requirements.txt`: pinned Python dependencies; `README.md`: course overview and lesson links.

## Build, Test, and Development Commands
Run these commands from the repository root:
- `python -m venv .venv`: create an isolated Python environment.
- `.\.venv\Scripts\Activate.ps1`: activate it in Windows PowerShell.
- `python -m pip install -r requirements.txt`: install the pinned dependencies.
- `python -m jupyterlab`: open the notebooks for development.
- `python -m http.server 8000 --directory chapt04`: serve the HTML scraping fixtures at `http://localhost:8000`.

There is no dedicated build command. Selenium examples require Chrome and may require network access for browser driver setup or external sites.

## Coding Style & Naming Conventions
Use four-space indentation in Python cells and `snake_case` for variables and functions. Keep cells focused on one instructional step, with Markdown explaining inputs and results. Preserve descriptive Korean notebook names and the existing `chaptNN/` organization. Use relative dataset paths appropriate to the notebook's working directory; avoid machine-specific absolute paths. Save text as UTF-8. No formatter or linter is currently configured.

## Testing Guidelines
No automated test suite or coverage threshold is defined, although pytest is included in the dependencies. Validate changed notebooks by restarting the kernel and running all cells in order. Check data shapes, missing values, aggregations, and rendered charts. For scraping changes, exercise the local HTML fixtures and close browser sessions with `driver.quit()`. If reusable Python modules are introduced, add tests under `tests/test_*.py` and run `python -m pytest`.

## Commit & Pull Request Guidelines
Existing commits use short date-based or Korean lesson-progress descriptions; no formal commit convention is established. Write concise messages identifying the chapter and change. Keep pull requests focused, describe affected notebooks or datasets, and record validation steps and external prerequisites. Link relevant issues when available and include screenshots for chart or HTML changes. Review notebook diffs for unrelated execution output, and exclude credentials, private data, and local environment files.
