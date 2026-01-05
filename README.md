# CycloneAnalytics

CycloneAnalytics is a data-driven analytical web platform focused on understanding tropical cyclone patterns in the North Indian Ocean, with specific relevance to Sri Lanka. The project combines historical cyclone datasets with structured analysis and interactive visualizations to highlight seasonal risk patterns, storm intensity distributions, and long-term exposure trends.

This repository represents the frontend visualization layer built after conducting a detailed exploratory and statistical analysis using Jupyter notebooks.

---

## Project Overview

The goal of this project is to translate complex cyclone datasets into clear, interpretable insights that support risk awareness and preparedness planning. The platform emphasizes seasonal concentration, storm intensity behavior, and indirect risk exposure rather than real-time forecasting.

Key focus areas include:
- Long-term cyclone frequency trends
- Intensity classification and distribution
- Seasonal risk concentration
- Relative climate vulnerability indicators

---

## Data & Analysis Workflow

1. **Exploratory Analysis (Jupyter Notebook)**
   - Initial data cleaning, filtering, and validation performed in Python
   - Storm-level aggregation and intensity classification
   - Seasonal frequency analysis and index construction
   - Validation against known regional cyclone climatology

2. **Derived Metrics**
   - Cyclone counts by year and intensity class
   - Maximum sustained wind speed per storm
   - Monthly Climate Vulnerability Index (normalized scale)

3. **Web Platform**
   - Analytical outputs exported as structured data
   - Interactive visual components used to present trends and summaries
   - Dashboard-style layout focused on clarity and interpretability

---

## Data Sources

This analysis is based on historical tropical cyclone records from the International Best Track Archive for Climate Stewardship (IBTrACS), maintained by NOAA. The dataset provides standardized global cyclone track and intensity information.

For this project:
- Basin: North Indian Ocean (Arabian Sea & Bay of Bengal)
- Period: 2015–2024
- Scope: Cyclones relevant to Sri Lanka’s regional exposure


---

## Key Insights

- Cyclone activity in the North Indian Ocean is strongly seasonal, with dominant peaks during the pre-monsoon (May) and post-monsoon (October–November) periods.
- A significant proportion of recorded cyclones intensify into Severe Cyclonic Storms or higher categories, despite lower-intensity systems being more frequent overall.
- While no direct landfall events were recorded over Sri Lanka under the applied criteria, near-coastal systems continue to pose substantial indirect risks.
- The average maximum sustained wind speed across analyzed cyclones highlights persistent exposure to damaging storm conditions.

---

## Methodology Summary

- Filtered and standardized IBTrACS records using WMO wind definitions
- Aggregated storms using official identifiers to avoid duplicate counts
- Computed maximum sustained wind speed per cyclone
- Constructed a relative Climate Vulnerability Index based on monthly frequency and intensity
- Cross-validated results with established regional cyclone patterns

---

## Limitations

- Historical best-track data may contain observational uncertainty
- Economic impact metrics are modeled as relative indicators, not absolute losses
- Indirect impacts such as rainfall flooding and storm surge are not explicitly quantified
- Real-time forecasting and probabilistic prediction are out of scope

---

## Future Development

Planned extensions include:
- Integration of real-time or near-real-time data feeds
- Machine learning models for landfall probability estimation
- Sector-specific exposure layers
- Scenario-based risk simulations

---

## Status

**Research Data / Analytical Prototype**

This project is intended as an analytical and visualization prototype rather than an operational forecasting system.
