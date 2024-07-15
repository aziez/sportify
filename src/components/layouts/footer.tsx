export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 p-4 text-base-content">
      <aside>
        <p>© {new Date().getFullYear()} - Sportify</p>
      </aside>
    </footer>
  );
}
