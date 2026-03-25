# Dossier Reports — Design Document

**Concept:** Extend the `/logs` page with clickable declassified dossier reports. Select log entries link to in-depth report pages at `/logs/reports/[slug]` with narrative content, Pexels evidence photos, redacted sections, and operator testimony.

**Reports:** Theia Impact, The Great Dying, Project Atlantis, The Survey Team, Wow! Signal Incident

**Aesthetic:** Declassified government dossiers — classification stamps, redacted blocks, evidence photos with figure captions, surveillance-style image filters.

**Image strategy:** Pexels API at build time, grayscale/contrast CSS filter, attribution per Pexels terms.

**Navigation:** Log entries with available reports show `[DOSSIER AVAILABLE]` tag linking to the report page.
