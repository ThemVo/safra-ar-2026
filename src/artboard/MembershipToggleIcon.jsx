// Shared desktop artwork for membership accordion expand/collapse controls.
export default function MembershipToggleIcon() {
  return (
    <svg
      className="mbpl"
      aria-hidden="true"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      style={{ display: "block", flex: "none" }}
    >
      <path
        d="M33.33 20H6.67"
        stroke="#AAAAAA"
        strokeWidth="3.33333"
        strokeLinecap="round"
      />
      <path
        className="mbpv"
        d="M20 33.33V6.67"
        stroke="#AAAAAA"
        strokeWidth="3.33333"
        strokeLinecap="round"
      />
    </svg>
  );
}
