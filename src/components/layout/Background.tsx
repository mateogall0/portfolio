export default function Background() {
  return (
    <div className="animated-bg fixed inset-0 -z-10 pointer-events-none">

      {/* Always visible */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Only visible on medium screens and above */}
      <div className="blob blob-3 hidden md:block "></div>
      <div className="blob blob-4 hidden md:block"></div>
      <div className="blob blob-5 hidden md:block"></div>

    </div>
  );
}
