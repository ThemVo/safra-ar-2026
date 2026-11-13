export default function AnnualReportDownload() {
  return (
    <div className="annual-report-actions">
      <a
        className="enk annual-report-download"
        href={import.meta.env.URL_PDF}
        onClick={(event) => event.stopPropagation()}
        aria-label="Download the full 2025/26 annual report"
      >
        <span className="annual-report-download-icon" aria-hidden="true">
          <img src="./assets/annual-report-download.svg" alt="" />
        </span>
        <span className="annual-report-download-label">Download annual report</span>
      </a>
    </div>
  );
}
